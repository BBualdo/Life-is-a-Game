using System.Net;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;

namespace DockerManager;

public record ContainerInfo(string Id, string Name, string Image, string State, string Status, string? Service, bool IsReplica);

public partial class ManagerService(DockerApi api)
{
    private const string ManagedLabel = "liag.managed";
    private const string ReplicaOfLabel = "liag.replica-of";
    private const string ComposeServiceLabel = "com.docker.compose.service";

    private static readonly string ManagedFilter = Uri.EscapeDataString("{\"label\":[\"liag.managed=true\"]}");

    public async Task<object> InfoAsync()
    {
        var v = await api.GetJsonAsync("/version");
        return new
        {
            version = Str(v?["Version"]),
            apiVersion = Str(v?["ApiVersion"]),
            minApiVersion = Str(v?["MinAPIVersion"]),
            os = Str(v?["Os"]),
            arch = Str(v?["Arch"])
        };
    }

    public async Task<List<ContainerInfo>> ListAsync()
    {
        var array = (await api.GetJsonAsync($"/containers/json?all=true&filters={ManagedFilter}"))?.AsArray()
                    ?? new JsonArray();

        return array.Select(c =>
            {
                var labels = c!["Labels"] as JsonObject;
                var service = Str(labels?[ComposeServiceLabel]);
                if (service.Length == 0) service = Str(labels?[ReplicaOfLabel]);

                return new ContainerInfo(
                    Id: Str(c["Id"])[..12],
                    Name: Str(c["Names"]?[0]).TrimStart('/'),
                    Image: Str(c["Image"]),
                    State: Str(c["State"]),
                    Status: Str(c["Status"]),
                    Service: service.Length > 0 ? service : null,
                    IsReplica: labels?[ReplicaOfLabel] is not null);
            })
            .OrderBy(c => c.Service)
            .ThenBy(c => c.Name)
            .ToList();
    }

    public async Task<JsonNode> InspectAsync(string id) => await GetManagedAsync(id);

    public async Task<string> LogsAsync(string id, int tail)
    {
        id = ValidName(id);
        await GetManagedAsync(id);
        tail = Math.Clamp(tail, 1, 1000);

        var bytes = await api.GetBytesAsync($"/containers/{id}/logs?stdout=1&stderr=1&tail={tail}&timestamps=1");
        return DecodeLogs(bytes);
    }

    public async Task<object> StatsAsync(string id)
    {
        id = ValidName(id);
        await GetManagedAsync(id);

        var s = await api.GetJsonAsync($"/containers/{id}/stats?stream=false")
                ?? throw new DockerApiException(HttpStatusCode.NotFound, "Brak statystyk");

        double cpuDelta = Num(s["cpu_stats"]?["cpu_usage"]?["total_usage"]) - Num(s["precpu_stats"]?["cpu_usage"]?["total_usage"]);
        double sysDelta = Num(s["cpu_stats"]?["system_cpu_usage"]) - Num(s["precpu_stats"]?["system_cpu_usage"]);
        double cpus = Num(s["cpu_stats"]?["online_cpus"]);
        if (cpus <= 0) cpus = 1;
        double cpuPercent = sysDelta > 0 && cpuDelta > 0 ? cpuDelta / sysDelta * cpus * 100.0 : 0;

        double usage = Num(s["memory_stats"]?["usage"]);
        double cache = Num(s["memory_stats"]?["stats"]?["inactive_file"]);
        if (cache == 0) cache = Num(s["memory_stats"]?["stats"]?["cache"]);
        double limit = Num(s["memory_stats"]?["limit"]);

        return new
        {
            cpuPercent = Math.Round(cpuPercent, 2),
            memoryUsedMb = Math.Round(Math.Max(usage - cache, 0) / 1024.0 / 1024.0, 1),
            memoryLimitMb = Math.Round(limit / 1024.0 / 1024.0, 1)
        };
    }

    public async Task StartAsync(string id)
    {
        id = ValidName(id);
        await GetManagedAsync(id);
        await api.SendAsync(HttpMethod.Post, $"/containers/{id}/start");
    }

    public async Task StopAsync(string id)
    {
        id = ValidName(id);
        await GetManagedAsync(id);
        await api.SendAsync(HttpMethod.Post, $"/containers/{id}/stop?t=10");
    }

    public async Task RestartAsync(string id)
    {
        id = ValidName(id);
        await GetManagedAsync(id);
        await api.SendAsync(HttpMethod.Post, $"/containers/{id}/restart?t=10");
    }

    public async Task SetMemoryLimitAsync(string id, int memoryMb)
    {
        id = ValidName(id);
        await GetManagedAsync(id);
        if (memoryMb < 16 || memoryMb > 4096) throw new ArgumentException("memoryMb musi być w zakresie 16..4096");

        long bytes = memoryMb * 1024L * 1024L;
        await api.SendAsync(HttpMethod.Post, $"/containers/{id}/update", new JsonObject
        {
            ["Memory"] = bytes,
            ["MemorySwap"] = bytes 
        });
    }

    public async Task<object> ScaleAsync(string service, int replicas)
    {
        service = ValidName(service);
        if (replicas < 1 || replicas > 10) throw new ArgumentException("replicas musi być w zakresie 1..10");

        var all = await ListAsync();
        var baseContainer = all.FirstOrDefault(c => c.Service == service && !c.IsReplica)
                            ?? throw new NotManagedException($"Usługa '{service}' nie istnieje lub nie jest zarządzana.");
        var existingReplicas = all.Where(c => c.IsReplica && c.Service == service).ToList();

        int current = 1 + existingReplicas.Count;

        if (replicas > current)
        {
            var inspect = await GetManagedAsync(baseContainer.Id);
            for (int i = current; i < replicas; i++)
                await CreateReplicaAsync(service, inspect);
        }
        else if (replicas < current)
        {
            foreach (var replica in existingReplicas.Take(current - replicas))
            {
                await api.SendAsync(HttpMethod.Post, $"/containers/{replica.Id}/stop?t=5");
                await api.SendAsync(HttpMethod.Delete, $"/containers/{replica.Id}?force=true");
            }
        }

        return new { service, previous = current, requested = replicas };
    }

    private async Task CreateReplicaAsync(string service, JsonNode inspect)
    {
        var config = inspect["Config"]!;
        var hostConfig = inspect["HostConfig"];

        var network = (inspect["NetworkSettings"]?["Networks"] as JsonObject)?.Select(kv => kv.Key).FirstOrDefault()
                      ?? throw new InvalidOperationException("Kontener bazowy nie jest podłączony do żadnej sieci");

        var labels = new JsonObject();
        if (config["Labels"] is JsonObject baseLabels)
            foreach (var kv in baseLabels)
                if (!kv.Key.StartsWith("com.docker.compose.")) labels[kv.Key] = Str(kv.Value);
        labels[ReplicaOfLabel] = service;

        var body = new JsonObject
        {
            ["Image"] = Str(config["Image"]),
            ["Labels"] = labels,
            ["NetworkingConfig"] = new JsonObject
            {
                ["EndpointsConfig"] = new JsonObject
                {
                    [network] = new JsonObject { ["Aliases"] = new JsonArray(service) }
                }
            }
        };
        Copy(config["Env"], body, "Env");
        Copy(config["Entrypoint"], body, "Entrypoint");
        Copy(config["Cmd"], body, "Cmd");
        Copy(config["Healthcheck"], body, "Healthcheck");

        var newHost = new JsonObject { ["NetworkMode"] = network };
        Copy(hostConfig?["Mounts"], newHost, "Mounts");
        Copy(hostConfig?["Binds"], newHost, "Binds");
        Copy(hostConfig?["RestartPolicy"], newHost, "RestartPolicy");
        body["HostConfig"] = newHost;

        var name = $"{service}-replica-{Guid.NewGuid().ToString("N")[..6]}";

        var created = await api.SendAsync(HttpMethod.Post, $"/containers/create?name={name}", body);
        var id = Str(created?["Id"]);
        await api.SendAsync(HttpMethod.Post, $"/containers/{id}/start");
    }
    
    public async Task StreamEventsAsync(Func<string, Task> write, CancellationToken ct)
    {
        var filter = Uri.EscapeDataString("{\"type\":[\"container\"],\"label\":[\"liag.managed=true\"]}");
        await api.StreamLinesAsync($"/events?filters={filter}", async line =>
        {
            var e = JsonNode.Parse(line);
            var summary = new
            {
                action = Str(e?["Action"]),
                name = Str(e?["Actor"]?["Attributes"]?["name"]),
                time = e?["time"]?.GetValue<long>() ?? 0
            };
            await write(JsonSerializer.Serialize(summary));
        }, ct);
    }

    private async Task<JsonNode> GetManagedAsync(string id)
    {
        id = ValidName(id);
        var inspect = await api.GetJsonAsync($"/containers/{id}/json")
                      ?? throw new DockerApiException(HttpStatusCode.NotFound, "Nie znaleziono kontenera");

        if (Str(inspect["Config"]?["Labels"]?[ManagedLabel]) != "true")
            throw new NotManagedException(
                $"Kontener '{Str(inspect["Name"]).TrimStart('/')}' nie ma etykiety {ManagedLabel}=true – operacja zabroniona.");
        return inspect;
    }

    private static string ValidName(string value) =>
        SafeName().IsMatch(value) ? value : throw new ArgumentException("Niedozwolona nazwa/id kontenera");

    [GeneratedRegex("^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,127}$")]
    private static partial Regex SafeName();

    private static string Str(JsonNode? node) => node?.GetValue<string>() ?? "";
    private static double Num(JsonNode? node) => node?.GetValue<double>() ?? 0;

    private static void Copy(JsonNode? source, JsonObject target, string key)
    {
        if (source is not null) target[key] = source.DeepClone();
    }

    private static string DecodeLogs(byte[] data)
    {
        if (data.Length == 0) return "";
        if (data[0] > 2) return Encoding.UTF8.GetString(data);

        var sb = new StringBuilder();
        int i = 0;
        while (i + 8 <= data.Length)
        {
            int size = (data[i + 4] << 24) | (data[i + 5] << 16) | (data[i + 6] << 8) | data[i + 7];
            i += 8;
            int take = Math.Min(size, data.Length - i);
            sb.Append(Encoding.UTF8.GetString(data, i, take));
            i += take;
        }
        return sb.ToString();
    }
}

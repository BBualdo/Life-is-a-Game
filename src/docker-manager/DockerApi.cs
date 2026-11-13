using System.Net;
using System.Net.Sockets;
using System.Text.Json.Nodes;

namespace DockerManager;

public class DockerApi
{
    private readonly HttpClient _http;

    public DockerApi(IConfiguration config)
    {
        var socketPath = config["Docker:SocketPath"] ?? "/var/run/docker.sock";

        var handler = new SocketsHttpHandler
        {
            ConnectCallback = async (_, cancellationToken) =>
            {
                var socket = new Socket(AddressFamily.Unix, SocketType.Stream, ProtocolType.Unspecified);
                try
                {
                    await socket.ConnectAsync(new UnixDomainSocketEndPoint(socketPath), cancellationToken);
                    return new NetworkStream(socket, ownsSocket: true);
                }
                catch
                {
                    socket.Dispose();
                    throw;
                }
            }
        };

        _http = new HttpClient(handler)
        {
            BaseAddress = new Uri("http://localhost"),
            Timeout = Timeout.InfiniteTimeSpan
        };
    }

    public async Task<JsonNode?> GetJsonAsync(string path, CancellationToken ct = default)
    {
        using var response = await _http.GetAsync(path, ct);
        return await ReadJsonAsync(response, ct);
    }

    public async Task<byte[]> GetBytesAsync(string path, CancellationToken ct = default)
    {
        using var response = await _http.GetAsync(path, ct);
        await EnsureSuccessAsync(response, ct);
        return await response.Content.ReadAsByteArrayAsync(ct);
    }

    public async Task<JsonNode?> SendAsync(HttpMethod method, string path, JsonNode? body = null, CancellationToken ct = default)
    {
        using var request = new HttpRequestMessage(method, path);
        if (body is not null)
            request.Content = new StringContent(body.ToJsonString(), System.Text.Encoding.UTF8, "application/json");

        using var response = await _http.SendAsync(request, ct);
        return await ReadJsonAsync(response, ct);
    }

    public async Task StreamLinesAsync(string path, Func<string, Task> onLine, CancellationToken ct)
    {
        using var response = await _http.GetAsync(path, HttpCompletionOption.ResponseHeadersRead, ct);
        await EnsureSuccessAsync(response, ct);
        await using var stream = await response.Content.ReadAsStreamAsync(ct);
        using var reader = new StreamReader(stream);
        while (!ct.IsCancellationRequested)
        {
            var line = await reader.ReadLineAsync(ct);
            if (line is null) break;
            if (line.Length > 0) await onLine(line);
        }
    }

    private static async Task<JsonNode?> ReadJsonAsync(HttpResponseMessage response, CancellationToken ct)
    {
        await EnsureSuccessAsync(response, ct);
        var text = await response.Content.ReadAsStringAsync(ct);
        return string.IsNullOrWhiteSpace(text) ? null : JsonNode.Parse(text);
    }

    private static async Task EnsureSuccessAsync(HttpResponseMessage response, CancellationToken ct)
    {
        if (response.IsSuccessStatusCode || response.StatusCode == HttpStatusCode.NotModified) return;

        var text = await response.Content.ReadAsStringAsync(ct);
        string? message = null;
        try { message = JsonNode.Parse(text)?["message"]?.GetValue<string>(); } catch { /* nie-JSON */ }
        throw new DockerApiException(response.StatusCode, message ?? $"Docker API zwróciło {(int)response.StatusCode}");
    }
}

public class DockerApiException(HttpStatusCode status, string message) : Exception(message)
{
    public HttpStatusCode Status { get; } = status;
}

public class NotManagedException(string message) : Exception(message);

namespace MissionsApi;

public interface ICoreClient
{
    Task<bool> MissionAddedAsync(string userId);
    Task<bool> MissionCompletedAsync(string userId);
}

public class CoreClient(HttpClient http) : ICoreClient
{
    public async Task<bool> MissionAddedAsync(string userId)
    {
        using var response = await http.PostAsync($"internal/users/{Uri.EscapeDataString(userId)}/mission-added", null);
        return response.IsSuccessStatusCode;
    }

    public async Task<bool> MissionCompletedAsync(string userId)
    {
        using var response = await http.PostAsync($"internal/users/{Uri.EscapeDataString(userId)}/mission-completed", null);
        return response.IsSuccessStatusCode;
    }
}

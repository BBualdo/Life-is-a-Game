using System.Net.Http.Json;

namespace AchievementsApi;

public interface ICoreClient
{
    Task<UserXpResponseDto?> AddXpAsync(string userId, int xpAmount);
}

public class CoreClient(HttpClient http) : ICoreClient
{
    public async Task<UserXpResponseDto?> AddXpAsync(string userId, int xpAmount)
    {
        using var response = await http.PostAsJsonAsync(
            $"internal/users/{Uri.EscapeDataString(userId)}/add-xp",
            new { xpAmount });

        if (!response.IsSuccessStatusCode) return null;
        return await response.Content.ReadFromJsonAsync<UserXpResponseDto>();
    }
}

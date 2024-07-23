using Data.Models;

namespace Contracts;

public interface IAchievementsRepository
{
    Task<IEnumerable<Achievement>> GetAchievementsAsync();
    Task<IEnumerable<UserAchievement>> GetUserAchievementsAsync(string userId);
    Task<Achievement?> UnlockAchievementAsync(string userId, Guid achievementId);
}
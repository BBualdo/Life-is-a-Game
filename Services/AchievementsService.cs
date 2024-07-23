using Contracts;
using Data.Models;

namespace Services;

public class AchievementsService(IAchievementsRepository repository) : IAchievementsService
{
    private readonly IAchievementsRepository _repository = repository;
    
    public async Task<IEnumerable<Achievement>> GetAchievementsAsync()
    {
        return await _repository.GetAchievementsAsync();
    }

    public async Task<IEnumerable<UserAchievement>> GetUserAchievementsAsync(string userId)
    {
        return await _repository.GetUserAchievementsAsync(userId);
    }

    public async Task<Achievement?> UnlockAchievementAsync(string userId, Guid achievementId)
    {
        var achievement = await _repository.UnlockAchievementAsync(userId, achievementId);
        return achievement;
    }
}
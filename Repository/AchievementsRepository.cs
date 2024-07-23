using Contracts;
using Data;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Repository;

public class AchievementsRepository(LiagDbContext dbContext) : IAchievementsRepository
{
    private readonly LiagDbContext _dbContext = dbContext;

    public async Task<IEnumerable<Achievement>> GetAchievementsAsync()
    {
        return await _dbContext.Achievements.ToListAsync();
    }

    public async Task<IEnumerable<UserAchievement>> GetUserAchievementsAsync(string userId)
    {
        return await _dbContext.UserAchievements.Where(ach => ach.UserId == userId).ToListAsync();
    }

    public async Task<Achievement?> UnlockAchievementAsync(string userId, Guid achievementId)
    {
        var achievement = await FindAchievement(achievementId);
        
        if (achievement is null) return null;
        
        var userAchievement = new UserAchievement
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            AchievementId = achievement.Id,
            UnlockedAt = DateTime.UtcNow
        };

        await _dbContext.UserAchievements.AddAsync(userAchievement);
        await _dbContext.SaveChangesAsync();
        
        return achievement;
    }

    private async Task<Achievement?> FindAchievement(Guid achievementId)
    {
        var achievement = await _dbContext.Achievements.FindAsync(achievementId);
        return achievement;
    }
}
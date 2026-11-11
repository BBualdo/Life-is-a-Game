using Microsoft.EntityFrameworkCore;

namespace AchievementsApi;

public class AchievementsService(AchievementsDbContext db, ICoreClient core)
{
    public async Task<List<Achievement>> GetAchievementsAsync() =>
        await db.Achievements.OrderBy(a => a.XpReward).ToListAsync();

    public async Task<List<UserAchievement>> GetUserAchievementsAsync(string userId) =>
        await db.UserAchievements.Where(ua => ua.UserId == userId).ToListAsync();

    public async Task<AchievementUnlockDto?> UnlockAchievementAsync(string userId, Guid achievementId)
    {
        var achievement = await db.Achievements.FindAsync(achievementId);
        if (achievement is null) return null;

        var userAchievement = new UserAchievement
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            AchievementId = achievement.Id,
            UnlockedAt = DateTime.UtcNow
        };
        db.UserAchievements.Add(userAchievement);
        await db.SaveChangesAsync();

        var updatedXp = await core.AddXpAsync(userId, achievement.XpReward);
        if (updatedXp is null) return null;

        return new AchievementUnlockDto
        {
            UserAchievementId = userAchievement.Id,
            Achievement = achievement,
            UpdatedXp = updatedXp
        };
    }
}

namespace AchievementsApi;

public class UserXpResponseDto
{
    public int Level { get; set; }
    public int Xp { get; set; }
    public int TotalXpGained { get; set; }
}

public class AchievementUnlockDto
{
    public Guid UserAchievementId { get; set; }
    public Achievement? Achievement { get; set; }
    public required UserXpResponseDto UpdatedXp { get; set; }
}

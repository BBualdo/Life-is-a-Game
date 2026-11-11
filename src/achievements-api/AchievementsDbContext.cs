using Microsoft.EntityFrameworkCore;

namespace AchievementsApi;

public class AchievementsDbContext(DbContextOptions<AchievementsDbContext> options) : DbContext(options)
{
    public DbSet<Achievement> Achievements => Set<Achievement>();
    public DbSet<UserAchievement> UserAchievements => Set<UserAchievement>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Achievement>().HasData(AchievementSeeder.GetAchievements());
    }
}

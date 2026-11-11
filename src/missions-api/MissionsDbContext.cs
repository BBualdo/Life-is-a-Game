using Microsoft.EntityFrameworkCore;

namespace MissionsApi;

public class MissionsDbContext(DbContextOptions<MissionsDbContext> options) : DbContext(options)
{
    public DbSet<Mission> Missions => Set<Mission>();
    public DbSet<Subtask> Subtasks => Set<Subtask>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Subtask>()
            .HasOne(st => st.Mission)
            .WithMany(m => m.Subtasks)
            .HasForeignKey(st => st.MissionId);
    }
}

using Microsoft.EntityFrameworkCore;

namespace MissionsApi;

public class MissionsService(MissionsDbContext db, ICoreClient core, ILogger<MissionsService> logger)
{
    public Task<List<Mission>> GetMissionsAsync(string userId) =>
        db.Missions
            .Where(m => m.UserId == userId)
            .Include(m => m.Subtasks)
            .OrderByDescending(m => m.CreatedAt)
            .ToListAsync();

    public Task<Mission?> GetMissionAsync(Guid missionId, string userId) =>
        db.Missions
            .Include(m => m.Subtasks)
            .FirstOrDefaultAsync(m => m.Id == missionId && m.UserId == userId);

    public async Task<Mission> AddMissionAsync(string userId, AddMissionDto dto)
    {
        var mission = dto.ToMission(userId);
        db.Missions.Add(mission);
        await db.SaveChangesAsync();
        
        await TryNotifyAsync(() => core.MissionAddedAsync(userId), "mission-added", userId);
        return mission;
    }

    public async Task<bool> UpdateMissionAsync(string userId, UpdateMissionDto dto)
    {
        var mission = await GetMissionAsync(dto.Id, userId);
        if (mission is null) return false;

        mission.Title = dto.Title;
        mission.Description = dto.Description;

        var toRemove = mission.Subtasks.Where(st => dto.Subtasks.All(s => s.Id != st.Id)).ToList();

        foreach (var subtaskDto in dto.Subtasks)
        {
            var existing = mission.Subtasks.FirstOrDefault(st => st.Id == subtaskDto.Id);
            if (existing is not null)
            {
                existing.Title = subtaskDto.Title;
                existing.IsCompleted = subtaskDto.IsCompleted;
            }
            else
            {
                db.Subtasks.Add(subtaskDto.ToSubtask(mission.Id));
            }
        }

        db.Subtasks.RemoveRange(toRemove);
        await db.SaveChangesAsync();
        return true;
    }

    public async Task<bool> CompleteMissionAsync(string userId, Guid missionId)
    {
        var mission = await db.Missions.FirstOrDefaultAsync(m => m.Id == missionId && m.UserId == userId);
        if (mission is null) return false;

        mission.IsCompleted = true;
        mission.CompletedAt = DateTime.UtcNow;
        await db.SaveChangesAsync();

        await TryNotifyAsync(() => core.MissionCompletedAsync(userId), "mission-completed", userId);
        return true;
    }

    public async Task<bool> DeleteMissionAsync(string userId, Guid missionId)
    {
        var mission = await db.Missions.FirstOrDefaultAsync(m => m.Id == missionId && m.UserId == userId);
        if (mission is null) return false;

        db.Missions.Remove(mission);
        await db.SaveChangesAsync();
        return true;
    }

    public async Task<bool> ToggleSubtaskAsync(string userId, Guid subtaskId)
    {
        var subtask = await db.Subtasks
            .Include(s => s.Mission)
            .FirstOrDefaultAsync(s => s.Id == subtaskId && s.Mission!.UserId == userId);
        if (subtask is null) return false;

        subtask.IsCompleted = !subtask.IsCompleted;
        await db.SaveChangesAsync();
        return true;
    }

    private async Task TryNotifyAsync(Func<Task<bool>> call, string what, string userId)
    {
        try
        {
            if (!await call()) logger.LogWarning("core-api odrzuciło wywołanie {What} dla użytkownika {UserId}", what, userId);
        }
        catch (Exception ex)
        {
            logger.LogWarning(ex, "core-api niedostępne podczas {What} dla użytkownika {UserId}", what, userId);
        }
    }
}

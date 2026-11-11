namespace MissionsApi;

// Skopiowane z Contracts/DTO/{Missions,Subtasks}. Zamiast wspólnej biblioteki Contracts każda usługa ma
// własne, małe kopie DTO (wspólna biblioteka między usługami sprzęgałaby je ze sobą).

public class SubtaskDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public bool IsCompleted { get; set; }

    public Subtask ToSubtask(Guid missionId) => new()
    {
        Id = Id,
        Title = Title,
        IsCompleted = IsCompleted,
        MissionId = missionId
    };
}

public class AddMissionDto
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DifficultyLevel Difficulty { get; set; }
    public int XpReward { get; set; }
    public List<SubtaskDto> Subtasks { get; set; } = [];
    public string? UserId { get; set; }   // frontend nadal go wysyła, ale IGNORUJEMY – bierzemy id z ciasteczka

    public Mission ToMission(string userId)
    {
        var missionId = Guid.NewGuid();
        return new Mission
        {
            Id = missionId,
            Title = Title,
            Description = Description,
            Difficulty = Difficulty,
            XpReward = XpReward,
            CreatedAt = DateTime.UtcNow,
            Subtasks = Subtasks.Select(s => s.ToSubtask(missionId)).ToList(),
            UserId = userId,
            IsCompleted = false
        };
    }
}

public class UpdateMissionDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public List<SubtaskDto> Subtasks { get; set; } = [];
}

using Data.Models;

namespace Contracts.DTO.Subtasks;

public class SubtaskDto
{
    public string? Title { get; set; }
    public bool IsCompleted { get; set; }

    public Subtask ToSubtask(Guid missionId)
    {
        return new Subtask
        {
            Id = Guid.NewGuid(),
            Title = Title,
            IsCompleted = IsCompleted,
            MissionId = missionId
        };
    }
}
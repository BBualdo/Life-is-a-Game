using Data.Enums;
using Data.Models;

namespace Contracts.DTO.Missions;

public class AddMissionDto
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DifficultyLevel Difficulty { get; set; }
    public int XpReward { get; set; }
    public List<Subtask>? Subtasks { get; set; }
    public string? UserId { get; set; }

    public Mission ToMission()
    {
        return new Mission
        {
            Id = Guid.NewGuid(),
            Title = Title,
            Description = Description,
            Difficulty = Difficulty,
            XpReward = XpReward,
            CreatedAt = DateTime.UtcNow,
            Subtasks = Subtasks,
            UserId = UserId,
            IsCompleted = false,
        };
    }
}
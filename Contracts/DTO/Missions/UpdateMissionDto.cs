using Data.Models;

namespace Contracts.DTO.Missions;

public class UpdateMissionDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public List<Subtask>? Subtasks { get; set; }

    public Mission ToMission()
    {
        return new Mission
        {
            Id = Id,
            Title = Title,
            Description = Description,
            Subtasks = Subtasks,
        };
    }
}
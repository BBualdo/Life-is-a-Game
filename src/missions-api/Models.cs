using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MissionsApi;

public enum DifficultyLevel
{
    Daily, DropOfSweat, Challenging, LifeHacker, AntiProcrastinator
}

public class Mission
{
    [Required] [Key] public Guid Id { get; set; }
    [Required] [StringLength(50)] public string? Title { get; set; }
    [StringLength(2000)] public string? Description { get; set; }
    [Required] public DifficultyLevel Difficulty { get; set; }
    [Required] public int XpReward { get; set; }
    [Required] public DateTime? CreatedAt { get; set; }
    [Required] public bool IsCompleted { get; set; }
    public DateTime? CompletedAt { get; set; }
    public List<Subtask> Subtasks { get; set; } = [];
    [Required] public string? UserId { get; set; }
}

public class Subtask
{
    [Required] [Key] public Guid Id { get; set; }
    [Required] [StringLength(50)] public string? Title { get; set; }
    [Required] public bool IsCompleted { get; set; }
    [Required] public Guid MissionId { get; set; }
    [JsonIgnore] public Mission? Mission { get; set; }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Models;

public class Subtask
{
  [Required] [Key] public Guid Id { get; set; }
  [Required] [StringLength(50)] public string? Title { get; set; }
  [Required] public bool IsCompleted { get; set; }
  [Required] [ForeignKey(nameof(Mission))] public Guid MissionId { get; set; }
}
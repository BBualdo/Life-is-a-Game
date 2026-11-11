using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MissionsApi;

[Route("api/missions")]
[ApiController]
[Authorize]
public class MissionsController(MissionsService service) : ControllerBase
{
    private string UserId => User.FindFirstValue(ClaimTypes.NameIdentifier)!;

    [HttpGet("get-missions")]
    public async Task<ActionResult<IEnumerable<Mission>>> GetMissions() =>
        Ok(await service.GetMissionsAsync(UserId));

    [HttpGet("get-mission")]
    public async Task<ActionResult<Mission>> GetMission(Guid missionId)
    {
        var mission = await service.GetMissionAsync(missionId, UserId);
        return mission is null ? NotFound() : Ok(mission);
    }

    [HttpPost("add-mission")]
    public async Task<ActionResult> AddMission(AddMissionDto missionDto)
    {
        var mission = await service.AddMissionAsync(UserId, missionDto);
        return CreatedAtAction(nameof(AddMission), mission);
    }

    [HttpPut("update-mission/{missionId:guid}")]
    public async Task<ActionResult> UpdateMission(Guid missionId, UpdateMissionDto missionDto)
    {
        if (missionId != missionDto.Id) return BadRequest();
        return await service.UpdateMissionAsync(UserId, missionDto) ? NoContent() : NotFound();
    }

    [HttpPut("{missionId:guid}/complete")]
    public async Task<ActionResult> CompleteMission(Guid missionId) =>
        await service.CompleteMissionAsync(UserId, missionId)
            ? Ok(new { message = "Mission Complete." })
            : NotFound();

    [HttpDelete("{missionId:guid}")]
    public async Task<ActionResult> DeleteMission(Guid missionId) =>
        await service.DeleteMissionAsync(UserId, missionId)
            ? Ok(new { message = "Mission Deleted." })
            : NotFound();

    [HttpPut("{subtaskId:guid}/toggle")]
    public async Task<ActionResult> ToggleSubtask(Guid subtaskId) =>
        await service.ToggleSubtaskAsync(UserId, subtaskId) ? NoContent() : NotFound();
}

using Contracts;
using Contracts.DTO.Missions;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/missions")]
    [ApiController]
    [Authorize]
    public class MissionsController(IMissionsService missionsService) : ControllerBase
    {
        private readonly IMissionsService _missionsService = missionsService;

        [HttpGet("getMissions")]
        public async Task<ActionResult<IEnumerable<Mission>>> GetMissions(string userId)
        {
            var missions = await _missionsService.GetMissionsAsync(userId);
            return Ok(missions);
        }

        [HttpGet("getMissionById")]
        public async Task<ActionResult<Mission>> GetMissionById(Guid missionId)
        {
            var mission = await _missionsService.GetMissionByIdAsync(missionId);
            return Ok(mission);
        }

        [HttpPost("createMission")]
        public async Task<ActionResult> AddMission(AddMissionDto missionDto)
        {
            var mission = await _missionsService.AddMissionAsync(missionDto);
            return CreatedAtAction(nameof(AddMission), mission);
        }

        [HttpPut("updateMission/{missionId:guid}")]
        public async Task<ActionResult> UpdateMission(Guid missionId, UpdateMissionDto missionDto)
        {
            if (missionId != missionDto.Id) return BadRequest();
            await _missionsService.UpdateMissionAsync(missionDto);
            return NoContent();
        }

        [HttpPut("{missionId:guid}/complete")]
        public async Task<ActionResult> CompleteMission(Guid missionId)
        {
            await _missionsService.CompleteMissionAsync(missionId);
            return Ok(new {message = "Mission Complete."});
        }

        [HttpDelete("{missionId:guid}")]
        public async Task<ActionResult> DeleteMission(Guid missionId)
        {
            await _missionsService.DeleteMissionAsync(missionId);
            return Ok(new { message = "Mission Deleted." });
        }
    }
}

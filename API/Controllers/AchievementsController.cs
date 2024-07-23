using Contracts;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/achievements")]
    [ApiController]
    public class AchievementsController(IAchievementsService achievementsService) : ControllerBase
    {
        private readonly IAchievementsService _achievementsService = achievementsService;

        [HttpGet("getAchievements")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Achievement>>> GetAchievements()
        {
            var achievements = await _achievementsService.GetAchievementsAsync();
            return Ok(achievements);
        }

        [HttpGet("getUserAchievements")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<UserAchievement>>> GetUserAchievements(string userId)
        {
            var userAchievements = await _achievementsService.GetUserAchievementsAsync(userId);
            return Ok(userAchievements);
        }

        [HttpPost("unlock/{achievementId:guid}")]
        [Authorize]
        public async Task<ActionResult> UnlockAchievement(string userId, Guid achievementId)
        {
            var achievement = await _achievementsService.UnlockAchievementAsync(userId, achievementId);
            if (achievement is null) return NotFound(new { message = "Achievement not found." });
            return Ok(new {message = "Achievement Unlocked!", description = $"{achievement.Title}"});
        }
    }
}

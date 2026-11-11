using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AchievementsApi;

[Route("api/achievements")]
[ApiController]
[Authorize]
public class AchievementsController(AchievementsService service) : ControllerBase
{
    private string UserId => User.FindFirstValue(ClaimTypes.NameIdentifier)!;

    [HttpGet("get-achievements")]
    public async Task<ActionResult<IEnumerable<Achievement>>> GetAchievements() =>
        Ok(await service.GetAchievementsAsync());

    [HttpGet("get-user-achievements")]
    public async Task<ActionResult<IEnumerable<UserAchievement>>> GetUserAchievements() =>
        Ok(await service.GetUserAchievementsAsync(UserId));

    [HttpPut("{achievementId:guid}/unlock")]
    public async Task<ActionResult> UnlockAchievement(Guid achievementId)
    {
        var dto = await service.UnlockAchievementAsync(UserId, achievementId);
        if (dto is null) return NotFound(new { message = "Achievement not found." });

        return Ok(new
        {
            userAchievementId = dto.UserAchievementId,
            message = dto.Achievement?.Title,
            description = dto.Achievement?.Requirements,
            updatedXp = dto.UpdatedXp
        });
    }
}

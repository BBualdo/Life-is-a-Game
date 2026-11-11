using Contracts;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("internal/users")]
public class InternalController(UserManager<User> userManager, ILevelsService levelsService, IConfiguration config) : ControllerBase
{
    private bool KeyIsValid()
    {
        var expected = config["Internal:Key"];
        return !string.IsNullOrEmpty(expected)
               && Request.Headers.TryGetValue("X-Internal-Key", out var provided)
               && string.Equals(provided.ToString(), expected, StringComparison.Ordinal);
    }

    [HttpPost("{userId}/mission-added")]
    public async Task<IActionResult> MissionAdded(string userId)
    {
        if (!KeyIsValid()) return Unauthorized();
        var user = await userManager.FindByIdAsync(userId);
        if (user is null) return NotFound();

        user.TotalMissionsAdded++;
        await userManager.UpdateAsync(user);
        return NoContent();
    }

    [HttpPost("{userId}/mission-completed")]
    public async Task<IActionResult> MissionCompleted(string userId)
    {
        if (!KeyIsValid()) return Unauthorized();
        var user = await userManager.FindByIdAsync(userId);
        if (user is null) return NotFound();

        user.TotalMissionsCompleted++;
        await userManager.UpdateAsync(user);
        return NoContent();
    }

    [HttpPost("{userId}/add-xp")]
    public async Task<ActionResult<UserXpResponseDto>> AddXp(string userId, [FromBody] InternalAddXpDto dto)
    {
        if (!KeyIsValid()) return Unauthorized();
        var response = await levelsService.AddXpAsync(userId, dto.XpAmount);
        if (response is null) return NotFound();
        return Ok(response);
    }
}

public record InternalAddXpDto(int XpAmount);

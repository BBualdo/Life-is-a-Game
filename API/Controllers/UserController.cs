using Contracts;
using Contracts.DTO.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/user")]
    [ApiController]
    [Authorize]
    public class UserController(ILevelsService levelsService) : ControllerBase
    {
        private readonly ILevelsService _levelsService = levelsService;

        [HttpPost("add-xp")]
        public async Task<ActionResult<UserXpResponseDto>> AddXp(AddXpDto addXpDto)
        {
           var response = await _levelsService.AddXpAsync(addXpDto.UserId, addXpDto.XpAmount);
           if (response is null) return NotFound(new { message = "User not found!" });

           return Ok(response);
        }
    }
}

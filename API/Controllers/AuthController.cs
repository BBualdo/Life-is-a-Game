using System.Security.Claims;
using Contracts;
using Contracts.DTO.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController(IAuthService authService) : ControllerBase
    {
        private readonly IAuthService _authService = authService;

        [HttpGet("currentUser")]
        [Authorize]
        public async Task<ActionResult> GetUser()
        {
            var user = await _authService.GetCurrentUser(User);
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto loginDto)
        {
            var result = await _authService.Login(loginDto);
            if (result.Success)
                return Ok(result.Message);

            return BadRequest(new { message = result.Message, errors = result.Errors });
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            var result = await _authService.Register(registerDto);
            if (result.Success)
                return Ok(result.Message);

            return BadRequest(new { message = result.Message, errros = result.Errors });
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await _authService.Logout();
            return Ok(new { message = "Logout successful." });
        }
    }
}

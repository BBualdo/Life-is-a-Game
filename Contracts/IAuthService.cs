using System.Security.Claims;
using Contracts.DTO.Auth;

namespace Contracts;

public interface IAuthService
{
  Task<UserDto?> GetCurrentUser(ClaimsPrincipal claims);
  Task<AuthOperationResult> Login(LoginDto loginDto);
  Task<AuthOperationResult> Register(RegisterDto registerDto);
  Task Logout();
  Task ForgotPassword();
  Task ResetPassword();
  Task LoginWithGithub();
  Task LoginWithGoogle();
  Task LoginWithFacebook();
}
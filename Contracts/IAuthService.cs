using System.Security.Claims;
using Contracts.DTO.Auth;

namespace Contracts;

public interface IAuthService
{
  Task<UserDto?> GetCurrentUserAsync(ClaimsPrincipal claims);
  Task<AuthOperationResult> LoginAsync(LoginDto loginDto);
  Task<AuthOperationResult> RegisterAsync(RegisterDto registerDto);
  Task LogoutAsync();
  Task ForgotPasswordAsync();
  Task ResetPasswordAsync();
  Task LoginWithGithubAsync();
  Task LoginWithGoogleAsync();
  Task LoginWithFacebookAsync();
}
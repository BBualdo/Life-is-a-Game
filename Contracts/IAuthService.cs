using System.Security.Claims;
using Contracts.DTO.Auth;
using Contracts.DTO.User;

namespace Contracts;

public interface IAuthService
{
  Task<UserDto?> GetCurrentUserAsync(ClaimsPrincipal claims);
  Task<AuthOperationResult> LoginAsync(LoginDto loginDto);
  Task<AuthOperationResult> RegisterAsync(RegisterDto registerDto);
  Task LogoutAsync();
  Task ForgotPasswordAsync();
  Task ResetPasswordAsync();
  Task<OperationResult> LoginWithGithubAsync(string code);
  Task<OperationResult> LoginWithGoogleAsync(string code);
  Task<OperationResult> LoginWithFacebookAsync(string code);
}
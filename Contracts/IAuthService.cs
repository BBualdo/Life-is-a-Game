using Contracts.DTO.Auth;
using Microsoft.AspNetCore.Identity;

namespace Contracts;

public interface IAuthService
{
  Task<AuthOperationResult> Login(LoginDto loginDto, bool isPersistent);
  Task<AuthOperationResult> Register(RegisterDto registerDto);
  Task Logout();
  Task ForgotPassword();
  Task ResetPassword();
  Task LoginWithGithub();
  Task LoginWithGoogle();
  Task LoginWithFacebook();
}
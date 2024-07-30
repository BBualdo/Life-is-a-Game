using System.Security.Claims;
using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.User;
using Data.Helpers;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Services;

public class AuthService(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration) : IAuthService
{
  private readonly UserManager<User> _userManager = userManager;
  private readonly SignInManager<User> _signInManager = signInManager;
  private readonly IConfiguration _configuration = configuration;

  public async Task<UserDto?> GetCurrentUserAsync(ClaimsPrincipal claims)
  {
    var user = await _userManager.GetUserAsync(claims);

    if (user is null) return null;
    
    var userDto = new UserDto
    {
      Id = user.Id,
      Username = user.UserName,
      Email = user.Email,
      Level = user.Level,
      Xp = user.Xp,
      FirstName = user.FirstName,
      LastName = user.LastName,
      CurrentGoal = user.CurrentGoal,
      Bio = user.Bio,
      AvatarUrl = user.AvatarUrl,
      TotalMissionsAdded = user.TotalMissionsAdded,
      TotalMissionsCompleted = user.TotalMissionsCompleted,
      TotalXpGained = user.TotalXpGained,
      FacebookId = user.FacebookId,
      GithubId = user.GithubId,
      GoogleId = user.GoogleId
    };
    
    return userDto;
  }

  public async Task<AuthOperationResult> LoginAsync(LoginDto loginDto)
  {
    var user = await _userManager.FindByEmailAsync(loginDto.Email!);

    if (user is null)
      return new AuthOperationResult
      {
        Success = false,
        Message = "Login attempt failed.",
        Errors = ["User doesn't exist."]
      };
    
    var result =
      await _signInManager.PasswordSignInAsync(user, loginDto.Password!, loginDto.RememberMe, lockoutOnFailure: false);

    if (result.Succeeded)
      return new AuthOperationResult
      {
        Success = true,
        Message = "Login Successful."
      };

    return new AuthOperationResult
    {
      Success = false,
      Message = "Login attempt failed.",
      Errors = ["Invalid email or password."]
    };

  }

  public async Task<AuthOperationResult> RegisterAsync(RegisterDto registerDto)
  {
    var user = new User
    {
      Email = registerDto.Email,
      UserName = registerDto.Username,
      Level = 1,
      Xp = 0,
      TotalMissionsAdded = 0,
      TotalMissionsCompleted = 0,
      TotalXpGained = 0,
    };

    var result = await _userManager.CreateAsync(user, registerDto.Password!);

    if (result.Succeeded)
      return new AuthOperationResult
      {
        Success = result.Succeeded,
        Message = "Register successful."
      };

    return new AuthOperationResult
    {
      Success = false,
      Message = "Register attempt failed.",
      Errors = result.Errors.Select(e => e.Description)
    };
  }

  public async Task LogoutAsync()
  {
    await _signInManager.SignOutAsync();
  }

  public Task ForgotPasswordAsync()
  {
    throw new NotImplementedException();
  }

  public Task ResetPasswordAsync()
  {
    throw new NotImplementedException();
  }

  public async Task<OperationResult> LoginWithGithubAsync(string code, HttpClient client)
  {
    var exchangeParams = new ExchangeCodeParams
    {
      Code = code,
      ClientId = _configuration["ExternalAuth:Github:ClientId"]!,
      ClientSecret = _configuration["ExternalAuth:Github:ClientSecret"]!,
      RequestUri = "https://github.com/login/oauth/access_token",
      RedirectUri = "http://localhost:3000/github-callback"
    };
            
    var token = await ExternalAuthHelpers.ExchangeCodeForTokenAsync(exchangeParams, client);
    if (token is null)
      return new OperationResult
      {
        Success = false,
        Message = "Something went wrong when retrieving access token."
      };

    return new OperationResult();
  }

  public Task<OperationResult> LoginWithGoogleAsync(string code, HttpClient client)
  {
    throw new NotImplementedException();
  }

  public Task<OperationResult> LoginWithFacebookAsync(string code, HttpClient client)
  {
    throw new NotImplementedException();
  }
}
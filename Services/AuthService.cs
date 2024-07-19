﻿using Contracts;
using Contracts.DTO.Auth;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Services;

public class AuthService(UserManager<User> userManager, SignInManager<User> signInManager) : IAuthService
{
  private readonly UserManager<User> _userManager = userManager;
  private readonly SignInManager<User> _signInManager = signInManager;

  public async Task<AuthOperationResult> Login(LoginDto loginDto, bool isPersistent)
  {
    var user = await _userManager.FindByEmailAsync(loginDto.Email!);

    if (user is null)
      return new AuthOperationResult
      {
        Success = false,
        Message = "Login attempt failed.",
        Errors = new List<string> { "User doesn't exist." }
      };
    
    var result =
      await _signInManager.PasswordSignInAsync(user, loginDto.Password!, isPersistent, lockoutOnFailure: false);

    if (result.Succeeded)
      return new AuthOperationResult
      {
        Success = true,
        Message = "Login Successful."
      };

    return new AuthOperationResult
    {
      Success = false,
      Message = "Login attempt failed."
    };

  }

  public async Task<AuthOperationResult> Register(RegisterDto registerDto)
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

  public async Task Logout()
  {
    await _signInManager.SignOutAsync();
  }

  public Task ForgotPassword()
  {
    throw new NotImplementedException();
  }

  public Task ResetPassword()
  {
    throw new NotImplementedException();
  }

  public Task LoginWithGithub()
  {
    throw new NotImplementedException();
  }

  public Task LoginWithGoogle()
  {
    throw new NotImplementedException();
  }

  public Task LoginWithFacebook()
  {
    throw new NotImplementedException();
  }
}
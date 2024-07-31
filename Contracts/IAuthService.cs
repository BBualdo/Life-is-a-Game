﻿using System.Security.Claims;
using Contracts.DTO.Auth;
using Contracts.DTO.User;
using Data.Models;

namespace Contracts;

public interface IAuthService
{
  Task<UserDto?> GetCurrentUserAsync(ClaimsPrincipal claims);
  Task<OperationResult> LoginAsync(LoginDto loginDto);
  Task<OperationResult> RegisterAsync(RegisterDto registerDto);
  Task LogoutAsync();
  Task ForgotPasswordAsync();
  Task ResetPasswordAsync();
  Task<OperationResult> LoginWithGithubAsync(string code, HttpClient client);
  Task<OperationResult> LinkGithubAccountAsync(User user, string githubId);
  Task<OperationResult> UnlinkAccountAsync(string providerName, string userId);
  Task<OperationResult> LoginWithGoogleAsync(string code, HttpClient client);
  Task<OperationResult> LoginWithFacebookAsync(string code, HttpClient client);
}
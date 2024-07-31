using System.Net.Http.Headers;
using System.Security.Claims;
using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Services;

public class AuthService(
    UserManager<User> userManager,
    SignInManager<User> signInManager,
    IConfiguration configuration,
    IGithubService githubService) : IAuthService
{
    private readonly IConfiguration _configuration = configuration;
    private readonly IGithubService _githubService = githubService;
    private readonly SignInManager<User> _signInManager = signInManager;
    private readonly UserManager<User> _userManager = userManager;

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

    public async Task<OperationResult> LoginAsync(LoginDto loginDto)
    {
        var user = await _userManager.FindByEmailAsync(loginDto.Email!);

        if (user is null)
            return new OperationResult
            {
                Success = false,
                Message = "Login attempt failed.",
                Errors = ["User doesn't exist."]
            };

        var result =
            await _signInManager.PasswordSignInAsync(user, loginDto.Password!, loginDto.RememberMe, false);

        if (result.Succeeded)
            return new OperationResult
            {
                Success = true,
                Message = "Login Successful."
            };

        return new OperationResult
        {
            Success = false,
            Message = "Login attempt failed.",
            Errors = ["Invalid email or password."]
        };
    }

    public async Task<OperationResult> RegisterAsync(RegisterDto registerDto)
    {
        var user = new User
        {
            Email = registerDto.Email,
            UserName = registerDto.Username,
            Level = 1,
            Xp = 0,
            TotalMissionsAdded = 0,
            TotalMissionsCompleted = 0,
            TotalXpGained = 0
        };

        var result = await _userManager.CreateAsync(user, registerDto.Password!);

        if (result.Succeeded)
            return new OperationResult
            {
                Success = result.Succeeded,
                Message = "Register successful."
            };

        return new OperationResult
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

    public async Task<OperationResult> LoginOrLinkWithGithubAsync(string code, HttpClient client, string? userId = null)
    {
        var exchangeParams = new ExchangeCodeParams
        {
            Code = code,
            ClientId = _configuration["ExternalAuth:Github:ClientId"]!,
            ClientSecret = _configuration["ExternalAuth:Github:ClientSecret"]!,
            RequestUri = "https://github.com/login/oauth/access_token",
            RedirectUri = "http://localhost:3000/github-callback"
        };

        var token = await ExchangeCodeForTokenAsync(exchangeParams, client);
        if (token is null)
            return new OperationResult
            {
                Success = false,
                Message = "Github login failed!",
                Errors = ["Something went wrong when retrieving access token."]
            };

        var githubUser = await _githubService.GetGithubUserInfo(token, client);
        if (githubUser is null)
            return new OperationResult
            {
                Success = false,
                Message = "Github login failed!",
                Errors = ["Couldn't find user or user doesn't have public email address."]
            };

        // If userId is null that means user is logging in
        if (userId is null)
        {
            var user = await _userManager.FindByEmailAsync(githubUser.Email!) ?? new User
            {
                Email = githubUser.Email,
                UserName = await GenerateUsernameSuffixAsync(githubUser.Username!),
                Level = 1,
                Xp = 0,
                TotalMissionsAdded = 0,
                TotalMissionsCompleted = 0,
                TotalXpGained = 0
            };

            if (user.GithubId is null)
            {
                user.GithubId = githubUser.Id;
                await _userManager.UpdateAsync(user);
            }

            await _signInManager.SignInAsync(user, false);
            return new OperationResult
            {
                Success = true,
                Message = "User signed in successfully!"
            };
        }
        // If userId is not null that means user is logged in and want to link his account
        else
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user is null)
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = ["User doesn't exist."]
                };

            if (user.GithubId != null)
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = ["That account already has Github account assigned."]
                };

            if (await _userManager.Users.Where(u => u.GithubId == githubUser.Id).FirstOrDefaultAsync() != null)
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = ["That Github account is already assigned to other user."]
                };

            user.GithubId = githubUser.Id;
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = result.Errors.Select(e => e.Description)
                };

            return new OperationResult
            {
                Success = true,
                Message = "Github account linked successfully!"
            };
        }
    }

    public async Task<OperationResult> UnlinkAccountAsync(string providerName, string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null)
            return new OperationResult
            {
                Success = false,
                Message = "User doesn't exist."
            };

        switch (providerName)
        {
            case "Google":
                user.GoogleId = null;
                break;
            case "Github":
                user.GithubId = null;
                break;
            case "Facebook":
                user.FacebookId = null;
                break;
        }

        var result = await _userManager.UpdateAsync(user);
        if (!result.Succeeded)
            return new OperationResult
            {
                Success = false,
                Message = $"Unlinking account from {providerName} failed!",
                Errors = result.Errors.Select(e => e.Description)
            };

        return new OperationResult
        {
            Success = true,
            Message = $"Account unlinked from {providerName}!"
        };
    }

    public Task<OperationResult> LoginWithGoogleAsync(string code, HttpClient client)
    {
        throw new NotImplementedException();
    }

    public Task<OperationResult> LoginWithFacebookAsync(string code, HttpClient client)
    {
        throw new NotImplementedException();
    }

    private async Task<string?> ExchangeCodeForTokenAsync(ExchangeCodeParams exchangeParams, HttpClient client)
    {
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri(exchangeParams.RequestUri),
            Content = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                { "client_id", exchangeParams.ClientId },
                { "client_secret", exchangeParams.ClientSecret },
                { "code", exchangeParams.Code },
                { "redirect_uri", exchangeParams.RedirectUri }
            })
        };
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(content);
        return tokenResponse?.Token;
    }

    private async Task<string> GenerateUsernameSuffixAsync(string baseUsername)
    {
        var username = baseUsername;
        var counter = 1;
        while (await _userManager.FindByNameAsync(username) != null)
        {
            username = $"{username}{counter}";
            counter++;
        }

        return username;
    }
}
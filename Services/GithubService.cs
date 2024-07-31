using System.Net.Http.Headers;
using Contracts;
using Contracts.DTO.Auth.GithubDto;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace Services;

public class GithubService(UserManager<User> userManager) : IGithubService
{
    private readonly UserManager<User> _userManager = userManager;
    
    public async Task<GithubUser?> GetGithubUserInfo(string accessToken, HttpClient client)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/user");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        request.Headers.UserAgent.ParseAdd("Life is a Game");

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var user = JsonConvert.DeserializeObject<GithubUser>(content);
        if (user is null) return null;

        if (user.Email is null)
        {
            var email = await GetGithubUserEmail(accessToken, client);
            if (email is null) return null;
            user.Email = email.Email;
        }
        
        return user;
    }

    private async Task<GithubEmail?> GetGithubUserEmail(string accessToken, HttpClient client)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/user/emails");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        request.Headers.UserAgent.ParseAdd("Life is a Game");

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var emails = JsonConvert.DeserializeObject<List<GithubEmail>>(content);
        return emails?.FirstOrDefault(e => e.IsPrimary);
    }
}
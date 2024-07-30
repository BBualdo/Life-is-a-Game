using Contracts.DTO.Auth.GithubDto;
using Contracts.DTO.User;
using Data.Models;

namespace Contracts;

public interface IGithubService
{
    Task<GithubUser?> GetGithubUserInfo(string accessToken, HttpClient client);
    Task<User> FindOrCreateUser(GithubUser githubUser);
}
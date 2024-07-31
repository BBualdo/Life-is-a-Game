using Contracts.DTO.Auth.GithubDto;

namespace Contracts;

public interface IGithubService
{
    Task<GithubUser?> GetGithubUserInfo(string accessToken, HttpClient client);
}
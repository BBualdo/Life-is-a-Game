using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace Data.Helpers;

public class ExternalAuthHelpers
{
    public static async Task<string?> ExchangeCodeForTokenAsync(ExchangeCodeParams exchangeParams, HttpClient client)
    {
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri(exchangeParams.RequestUri),
            Content = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                {"client_id", exchangeParams.ClientId},
                {"client_secret", exchangeParams.ClientSecret},
                {"code", exchangeParams.Code},
                {"redirect_uri", exchangeParams.RedirectUri}
            })
        };
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(content);
        return tokenResponse?.Token;
    }  
}

public class ExchangeCodeParams
{
    public required string Code { get; set; }
    public required string RequestUri { get; set; }
    public required string ClientId { get; set; }
    public required string ClientSecret { get; set; }
    public required string RedirectUri { get; set; }
}

public class TokenResponse
{
    [JsonProperty("access_token")]
    public string? Token { get; set; }
}
using Azure.Core.Pipeline;
using Microsoft.AspNetCore.Identity;

namespace Contracts.DTO.Auth;

public class AuthOperationResult
{
  public bool Success { get; set; }
  public string? Message { get; set; }
  public IEnumerable<string>? Errors { get; set; }
}
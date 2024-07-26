using Data.Models;

namespace Contracts;

public interface ILevelsService
{
    Task<User?> AddXpAsync(string userId, int xpAmount);
}
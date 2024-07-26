using Contracts;
using Data.Helpers;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Services;

public class LevelsService(UserManager<User> userManager) : ILevelsService
{
    private readonly UserManager<User> _userManager = userManager;
    public async Task<User?> AddXpAsync(string userId, int xpAmount)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null) return null;
        user.Xp += xpAmount; 
        while (user.Xp >= LevelsHelper.GetCeilForLevel(user.Level))
        {
            user.Xp -= LevelsHelper.GetCeilForLevel(user.Level);
            user.Level++;
        }

        await _userManager.UpdateAsync(user);
        return user;
    }
}
using Contracts;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Services;

public class ProfileService(UserManager<User> userManager) : IProfileService
{
    private readonly UserManager<User> _userManager = userManager;
    
    public async Task UpdateProfile(string userId, EditProfileDto profileDto)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null) return;

        user.FirstName = profileDto.FirstName;
        user.LastName = profileDto.LastName;
        user.CurrentGoal = profileDto.CurrentGoal;
        user.Bio = profileDto.Bio;

        await _userManager.UpdateAsync(user);
    }
}
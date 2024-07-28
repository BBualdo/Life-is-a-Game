using Contracts.DTO.User;

namespace Contracts;

public interface IProfileService
{
    Task UpdateProfile(string userId, EditProfileDto profileDto);
}
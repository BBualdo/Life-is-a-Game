using Contracts.DTO.User;

namespace Contracts;

public interface IProfileService
{
    Task<OperationResult> UpdateProfile(string userId, EditProfileDto profileDto);
}
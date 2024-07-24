using Contracts.DTO.Missions;
using Data.Models;

namespace Contracts;

public interface IMissionsRepository
{
    Task<IEnumerable<Mission>> GetMissionsAsync(string userId);
    Task<Mission> GetMissionByIdAsync(Guid missionId);
    Task AddMissionAsync(AddMissionDto missionDto);
    Task UpdateMissionAsync(UpdateMissionDto missionDto);
    Task CompleteMissionAsync(Guid missionId);
    Task DeleteMissionAsync(Guid missionId);
}
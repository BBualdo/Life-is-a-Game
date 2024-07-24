using Contracts;
using Contracts.DTO.Missions;
using Data.Models;

namespace Services;

public class MissionsService(IMissionsRepository missionsRepository) : IMissionsService
{
    private readonly IMissionsRepository _missionsRepository = missionsRepository;
    
    public async Task<IEnumerable<Mission>> GetMissionsAsync(string userId)
    {
       return await _missionsRepository.GetMissionsAsync(userId);
    }

    public async Task<Mission> GetMissionByIdAsync(Guid missionId)
    {
        return await _missionsRepository.GetMissionByIdAsync(missionId);
    }

    public async Task AddMissionAsync(AddMissionDto missionDto)
    {
        await _missionsRepository.AddMissionAsync(missionDto);
    }

    public async Task UpdateMissionAsync(UpdateMissionDto missionDto)
    {
        await _missionsRepository.UpdateMissionAsync(missionDto);
    }

    public async Task CompleteMissionAsync(Guid missionId)
    {
        await _missionsRepository.CompleteMissionAsync(missionId);
    }

    public async Task DeleteMissionAsync(Guid missionId)
    {
        await _missionsRepository.DeleteMissionAsync(missionId);
    }
}
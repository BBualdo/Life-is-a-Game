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

    public async Task<Mission> AddMissionAsync(AddMissionDto missionDto)
    {
        var mission = missionDto.ToMission();
        await _missionsRepository.AddMissionAsync(mission);
        return mission;
    }

    public async Task UpdateMissionAsync(UpdateMissionDto missionDto)
    {
        var mission = await _missionsRepository.GetMissionByIdAsync(missionDto.Id);
        mission.Title = missionDto.Title;
        mission.Description = missionDto.Description;
        mission.Subtasks = missionDto.Subtasks?.Select(subtask => subtask.ToSubtask(mission.Id)).ToList();
        
        await _missionsRepository.UpdateMissionAsync(mission);
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
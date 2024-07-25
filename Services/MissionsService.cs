using Contracts;
using Contracts.DTO.Missions;
using Data.Models;

namespace Services;

public class MissionsService(IMissionsRepository missionsRepository, ISubtasksService subtasksService) : IMissionsService
{
    private readonly IMissionsRepository _missionsRepository = missionsRepository;
    private readonly ISubtasksService _subtasksService = subtasksService;
    
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

        var existingSubtasks = mission.Subtasks;

        foreach (var subtaskDto in missionDto.Subtasks)
        {
            var commonSubtask = existingSubtasks.FirstOrDefault(st => st.Id == subtaskDto.Id);
            if (commonSubtask != null)
            {
                commonSubtask.Title = subtaskDto.Title;
                commonSubtask.IsCompleted = subtaskDto.IsCompleted;
                await _subtasksService.UpdateSubtaskAsync(commonSubtask);
            }
            else
            {
                var newSubtask = subtaskDto.ToSubtask(mission.Id);
                await _subtasksService.AddSubtaskAsync(newSubtask);
            }
        }

        var subtaskIdsToRemove = existingSubtasks
            .Where(st => missionDto.Subtasks.All(dto => st.Id != dto.Id))
            .Select(st => st.Id)
            .ToList();

        foreach (var subtaskId in subtaskIdsToRemove)
        {
            await _subtasksService.DeleteSubtaskAsync(subtaskId);
        }
        
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
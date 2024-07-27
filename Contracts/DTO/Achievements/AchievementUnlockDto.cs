﻿using Contracts.DTO.User;
using Data.Models;

namespace Contracts.DTO.Achievements;

public class AchievementUnlockDto
{
    public Guid UserAchievementId { get; set; }
    public Achievement? Achievement { get; set; }
    public UserXpResponseDto? UpdatedXp { get; set; }
}
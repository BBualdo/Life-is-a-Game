"use client";

import useAchievements from "@/src/utils/hooks/useAchievements";
import AchievementsService from "@/src/services/AchievementsService";
import useUser from "@/src/utils/hooks/useUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { toast } from "sonner";
import { setUserXp } from "@/src/redux/slices/userSlice";
import { unlockAchievement } from "@/src/redux/slices/userAchievementsSlice";
import IUserAchievement from "@/src/models/IUserAchievement";
import IMission from "@/src/models/IMission";
import ACHIEVEMENT_KEYS from "@/src/constants/achievements";
import DifficultyLevel from "@/src/enums/DifficultyLevel";
import IUser from "@/src/models/IUser";

const useAchievementsUnlocker = () => {
  const { userAchievements, achievements } = useAchievements();
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  async function tryUnlockAchievement(achievementKey: string) {
    if (!userAchievements || !user || !achievements) return;

    const achievement = achievements.find((ach) => ach.key === achievementKey);
    if (!achievement) return;

    const userAchievement = userAchievements.find(
      (ua) => ua.achievementId === achievement.id,
    );
    if (userAchievement) return;

    try {
      const res = await AchievementsService.unlockAchievement(
        achievement.id,
        user.id,
      );
      const { message, description, userAchievementId, updatedXp } = res.data;

      toast(message, { description });

      const newUserAchievement: IUserAchievement = {
        id: userAchievementId,
        achievementId: achievement.id,
        unlockedAt: new Date(),
        userId: user.id,
      };

      dispatch(unlockAchievement(newUserAchievement));
      dispatch(setUserXp(updatedXp));
    } catch {
      //TODO:Error handling
      toast.error("Achievement unlocking failed!");
    }
  }

  async function checkMissionAchievements(
    selectedMission: IMission,
    missions: IMission[],
  ) {
    const completedDifficulties = new Set(
      missions.filter((m) => m.isCompleted).map((m) => m.difficulty),
    );

    await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_FIRST_MISSION);

    if (user!.totalMissionsCompleted >= 5)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_5_MISSIONS);

    if (user!.totalMissionsCompleted >= 10)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_10_MISSIONS);

    if (user!.totalMissionsCompleted >= 25)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_25_MISSIONS);

    if (user!.totalMissionsCompleted >= 50)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_50_MISSIONS);

    if (selectedMission.difficulty === DifficultyLevel.Daily)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_DAILY_MISSION);

    if (selectedMission.difficulty === DifficultyLevel["Drop of Sweat"])
      await tryUnlockAchievement(
        ACHIEVEMENT_KEYS.COMPLETE_DROP_OF_SWEAT_MISSION,
      );

    if (selectedMission.difficulty === DifficultyLevel.Challenging)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_CHALLENGING_MISSION);

    if (selectedMission.difficulty === DifficultyLevel["Life-Hacker"])
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_LIFE_HACKER_MISSION);

    if (selectedMission.difficulty === DifficultyLevel["Anti-Procrastinator"])
      await tryUnlockAchievement(
        ACHIEVEMENT_KEYS.COMPLETE_ANTI_PROCRASTINATOR_MISSION,
      );

    if (
      completedDifficulties.has(DifficultyLevel.Daily) &&
      completedDifficulties.has(DifficultyLevel["Drop of Sweat"]) &&
      completedDifficulties.has(DifficultyLevel.Challenging) &&
      completedDifficulties.has(DifficultyLevel["Life-Hacker"]) &&
      completedDifficulties.has(DifficultyLevel["Anti-Procrastinator"])
    )
      await tryUnlockAchievement(
        ACHIEVEMENT_KEYS.COMPLETE_ALL_DIFFICULTY_LEVELS,
      );
  }

  async function checkLevelAchievements(user: IUser) {
    if (user.level >= 5)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_5);

    if (user.level >= 10)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_10);

    if (user.level >= 25)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_25);

    if (user.level >= 50)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_50);
  }

  return {
    tryUnlockAchievement,
    checkMissionAchievements,
    checkLevelAchievements,
  };
};

export default useAchievementsUnlocker;

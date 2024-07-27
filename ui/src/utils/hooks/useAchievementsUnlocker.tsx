"use client";

import useAchievements from "@/src/utils/hooks/useAchievements";
import AchievementsService from "@/src/services/AchievementsService";
import useUser from "@/src/utils/hooks/useUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { toast } from "sonner";
import { setUserXp } from "@/src/redux/slices/authSlice";
import { unlockAchievement } from "@/src/redux/slices/userAchievementsSlice";
import IUserAchievement from "@/src/models/IUserAchievement";

const useAchievementsUnlocker = (): {
  findAndUnlock: (achievementKey: string) => Promise<void>;
} => {
  const { userAchievements, achievements } = useAchievements();
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  async function findAndUnlock(achievementKey: string) {
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

  return { findAndUnlock };
};

export default useAchievementsUnlocker;

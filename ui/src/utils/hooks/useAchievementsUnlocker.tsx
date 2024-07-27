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
  findAndUnlock: (achievementId: string) => Promise<void>;
} => {
  const { userAchievements } = useAchievements();
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  async function findAndUnlock(achievementId: string) {
    if (!userAchievements || !user) return;

    const userAchievement = userAchievements.find(
      (ua) => ua.achievementId === achievementId,
    );
    if (userAchievement) return;

    await AchievementsService.unlockAchievement(achievementId, user.id)
      .then((res) => {
        toast(res.data.message, { description: res.data.description });

        const newUserAchievement: IUserAchievement = {
          id: res.data.userAchievementId,
          achievementId,
          unlockedAt: new Date(),
          userId: user.id,
        };

        dispatch(unlockAchievement(newUserAchievement));
        dispatch(setUserXp(res.data.updatedXp));
      })
      .catch(() => {
        //TODO:Error handling
        toast.error("Achievement unlocking failed!");
      });
  }

  return { findAndUnlock };
};

export default useAchievementsUnlocker;

"use client";

import IAchievement from "@/src/models/IAchievement";
import IUserAchievement from "@/src/models/IUserAchievement";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { useEffect, useState } from "react";
import AchievementsService from "@/src/services/AchievementsService";
import { setAchievements } from "@/src/redux/slices/achievementsSlice";
import useUser from "@/src/utils/hooks/useUser";
import { setUserAchievements } from "@/src/redux/slices/userAchievementsSlice";

const useAchievements = () => {
  const { id } = useUser()!;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const achievements: IAchievement[] | null | undefined = useAppSelector(
    (state) => state.achievementsReducer.achievements,
  );
  const userAchievements: IUserAchievement[] | null | undefined =
    useAppSelector((state) => state.userAchievementsReducer.userAchievements);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!achievements) {
      try {
        AchievementsService.getAchievements().then((res) =>
          dispatch(setAchievements(res.data)),
        );
      } catch (error) {
        //TODO:Handle errors
        console.error("Fetching achievements error: " + error);
      }
    }

    if (!userAchievements) {
      try {
        AchievementsService.getUserAchievements(id).then((res) =>
          dispatch(setUserAchievements(res.data)),
        );
      } catch (error) {
        //TODO:Handle errors
        console.error("Fetching user achievements error: " + error);
      }
    }

    setIsLoading(false);
  }, [id, achievements, userAchievements, dispatch]);

  return { achievements, userAchievements, isLoading };
};

export default useAchievements;

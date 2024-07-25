"use client";

import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MissionsService from "@/src/services/MissionsService";
import { setMissions } from "@/src/redux/slices/missionsSlice";
import useUser from "@/src/utils/hooks/useUser";

const useMissions = () => {
  const user = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const missions = useAppSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) {
      return;
    }

    if (!missions) {
      try {
        MissionsService.getMissions(user.id).then((res) =>
          dispatch(setMissions(res.data)),
        );
      } catch (error) {
        // TODO: Handle errors
        console.error(error);
      }
    }

    setIsLoading(false);
  }, [user, missions, dispatch]);

  return { missions, isLoading };
};

export default useMissions;

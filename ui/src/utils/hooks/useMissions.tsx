"use client";

import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MissionsService from "@/src/services/MissionsService";
import { setMissions } from "@/src/redux/slices/missionsSlice";
import useUser from "@/src/utils/hooks/useUser";

const useMissions = () => {
  const { user } = useUser();
  const [isLoadingMissions, setIsLoadingMissions] = useState<boolean>(true);
  const missions = useAppSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!missions && user) {
      try {
        MissionsService.getMissions(user.id).then((res) =>
          dispatch(setMissions(res.data)),
        );
      } catch (error) {
        // TODO: Handle errors
        console.error(error);
      }
    }

    setIsLoadingMissions(false);
  }, [user, missions, dispatch]);

  return { missions, isLoadingMissions };
};

export default useMissions;

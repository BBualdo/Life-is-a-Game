"use client";

import { setDisplayedMission } from "@/src/redux/slices/displayedMissionSlice";
import { AppDispatch } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import clsx from "clsx";
import { useDispatch } from "react-redux";

const Mission = ({
  mission,
  displayedMission,
}: {
  mission: MissionSchema;
  displayedMission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => {
        dispatch(setDisplayedMission(mission));
      }}
      disabled={mission === displayedMission}
      className={clsx(
        "mission-container relative flex items-center justify-between transition-all duration-200 enabled:hover:bg-cp-red/50",
        {
          "border-cp-yellow bg-cp-yellow/10": mission === displayedMission,
          "border-cp-red bg-black/50": mission !== displayedMission,
        },
      )}
    >
      <div>
        <h2 className="text-lg font-bold uppercase text-cp-cyan">
          {mission.title}
        </h2>
        <p className="absolute bottom-1 right-2 text-[10px] text-cp-red/50">
          {mission.id}
        </p>
        <h3 className="text-md">
          Difficulty:{" "}
          <span className="font-bold uppercase text-cp-red">
            {mission.difficulty}
          </span>
        </h3>
      </div>
      <p className="text-xl text-cp-cyan">{mission.xp} XP</p>
    </button>
  );
};

export default Mission;

"use client";

import { setselectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import clsx from "clsx";
import { useDispatch } from "react-redux";

const Mission = ({
  mission,
  selectedMission,
}: {
  mission: MissionSchema;
  selectedMission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => {
        dispatch(setselectedMission(mission));
      }}
      disabled={mission === selectedMission}
      className={clsx(
        "mission-button relative flex items-center justify-between transition-all duration-200 enabled:hover:bg-cp-red/50",
        {
          "border-cp-yellow bg-cp-yellow/10": mission === selectedMission,
          "border-cp-red bg-black/50": mission !== selectedMission,
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

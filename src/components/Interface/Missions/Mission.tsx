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

  const completedSubtasks = mission.subtasks.filter(
    (subtask) => subtask.isCompleted === true,
  );
  const progress = Math.ceil(
    (completedSubtasks.length / mission.subtasks.length) * 100,
  );

  return (
    <button
      onClick={() => {
        dispatch(setselectedMission(mission));
      }}
      disabled={mission === selectedMission}
      className={clsx(
        "mission-button relative flex items-center justify-between bg-black/50 transition-all duration-200 enabled:hover:bg-cp-red/50",
        {
          "border-cp-yellow": mission === selectedMission,
          "border-cp-red": mission !== selectedMission,
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
      <div
        className="absolute left-0 top-0 h-full bg-cp-cyan/20 transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
    </button>
  );
};

export default Mission;

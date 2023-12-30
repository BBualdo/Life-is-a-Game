"use client";

import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";
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

  const missionCompleted = mission.status === "completed";

  return (
    <button
      onClick={() => {
        dispatch(setSelectedMission(mission));
      }}
      disabled={mission === selectedMission}
      className={clsx(
        "mission-button relative bg-black/50 transition-all duration-200 enabled:hover:bg-cp-red/50",
        {
          "border-cp-cyan": mission === selectedMission,
          "border-cp-red": mission !== selectedMission,
        },
      )}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaRegCheckCircle className="text-3xl text-cp-red" />
          <div>
            <h2
              className={clsx("text-lg font-bold uppercase", {
                "text-cp-cyan": !missionCompleted,
                "text-cp-green": missionCompleted,
              })}
            >
              {mission.title}
            </h2>
            <p className="absolute -bottom-2 right-0 text-[10px] text-cp-red/50">
              {mission.id}
            </p>
            <h3 className="text-md">
              Difficulty:{" "}
              <span className="font-bold uppercase text-cp-red">
                {mission.difficulty}
              </span>
            </h3>
          </div>
        </div>

        <p
          className={clsx("text-xl", {
            "text-cp-cyan": !missionCompleted,
            "text-cp-green": missionCompleted,
          })}
        >
          {mission.xp} XP
        </p>
      </div>
      <div
        className="absolute left-0 top-0 h-full bg-cp-cyan/20 transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
    </button>
  );
};

export default Mission;

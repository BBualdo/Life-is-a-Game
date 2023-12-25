import { MissionSchema } from "@/src/utils/types";
import clsx from "clsx";

const Mission = ({
  mission,
  onClick,
  displayedMission,
}: {
  mission: MissionSchema;
  onClick: (mission: MissionSchema) => void;
  displayedMission: MissionSchema;
}) => {
  return (
    <button
      onClick={() => onClick(mission)}
      disabled={mission === displayedMission}
      className={clsx(
        "mission-container flex items-center justify-between transition-all duration-200 enabled:hover:bg-cp-red/50",
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

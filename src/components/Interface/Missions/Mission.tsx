import { MissionSchema } from "@/src/utils/types";

const Mission = ({
  mission,
  onClick,
}: {
  mission: MissionSchema;
  onClick: (mission: MissionSchema) => void;
}) => {
  return (
    <button
      onClick={() => onClick(mission)}
      className="mission-container flex items-center justify-between bg-black/50 transition-all duration-200 hover:bg-cp-red/50"
    >
      <div>
        <h2 className="text-lg uppercase text-cp-cyan">{mission.title}</h2>
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

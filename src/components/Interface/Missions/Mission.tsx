import { MissionSchema } from "@/src/utils/types";

const Mission = ({
  mission,
  onClick,
  title,
}: {
  mission: MissionSchema;
  onClick: (mission: MissionSchema) => void;
  title: string;
}) => {
  return (
    <button
      onClick={() => onClick(mission)}
      className="mission-container bg-black/50 text-xl uppercase transition-all duration-200 hover:bg-cp-red/50"
    >
      {title}
    </button>
  );
};

export default Mission;

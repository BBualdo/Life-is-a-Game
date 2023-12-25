import { Checkbox } from "@/src/shadcn/ui/checkbox";
import { Label } from "@/src/shadcn/ui/label";
import { MissionSchema } from "@/src/utils/types";

const MissionDetails = ({
  displayedMission,
}: {
  displayedMission: MissionSchema;
}) => {
  const { id, title, description, difficulty, xp, subtasks } = displayedMission;

  return (
    <div key={id} className="h-full w-full pl-20">
      <h2 className="text-shadow-xl text-2xl text-cp-red shadow-cp-red">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {subtasks.map((subtask) => (
          <li
            key={subtask.id}
            className="flex items-center gap-4 border border-cp-red/30 bg-cp-red/10 p-2"
          >
            <Checkbox />
            <Label className="text-base uppercase text-cp-cyan">
              {subtask.title}
            </Label>
          </li>
        ))}
      </ul>
      <p>{description}</p>
      <p>{difficulty}</p>
      <p>Reward: {xp}</p>
    </div>
  );
};

export default MissionDetails;

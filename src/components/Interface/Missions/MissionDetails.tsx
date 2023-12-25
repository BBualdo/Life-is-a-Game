import { Checkbox } from "@/src/shadcn/ui/checkbox";
import { Label } from "@/src/shadcn/ui/label";
import { MissionSchema } from "@/src/utils/types";

const MissionDetails = ({
  displayedMission,
}: {
  displayedMission: MissionSchema;
}) => {
  const { id, title, description, subtasks } = displayedMission;

  return (
    <div key={id} className="flex h-full w-full flex-col gap-10 pl-20">
      <h2 className="text-2xl font-bold uppercase text-cp-red shadow-black text-shadow-xl">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {subtasks.map((subtask) => (
          <li
            key={subtask.id}
            className="flex items-center gap-4 border border-cp-red/30 bg-cp-red/10 p-2"
          >
            <Checkbox id={subtask.title} />
            <Label
              htmlFor={subtask.title}
              className="cursor-pointer text-base uppercase text-cp-cyan"
            >
              {subtask.title}
            </Label>
          </li>
        ))}
      </ul>
      <div className="min-h-[30vh] border-y border-cp-red p-4">
        <p className="text-cp-cyan">
          {description || "This mission has no description."}
        </p>
      </div>
    </div>
  );
};

export default MissionDetails;

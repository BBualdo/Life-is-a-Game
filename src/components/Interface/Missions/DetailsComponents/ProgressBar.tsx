import { MissionSchema } from "@/src/utils/types";

const ProgressBar = ({
  displayedMission,
}: {
  displayedMission: MissionSchema;
}) => {
  const completedSubtasks = displayedMission.subtasks.filter(
    (subtask) => subtask.isCompleted === true,
  );
  const progress = Math.ceil(
    (completedSubtasks.length / displayedMission.subtasks.length) * 100,
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-lg text-cp-cyan">Progress %:</h3>
      <div className="h-2 w-full -skew-x-12 bg-cp-cyan/20">
        <div
          className="gradient-cp-cyan-bar h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

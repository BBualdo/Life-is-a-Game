import { MissionSchema } from "@/src/utils/types";

const MissionButtons = ({
  selectedMission,
}: {
  selectedMission: MissionSchema;
}) => {
  const incompletedSubtasks = selectedMission.subtasks.filter(
    (subtask) => subtask.isCompleted === false,
  );

  return (
    <div className="flex items-center gap-20">
      <button className="btn btn-red hover:bg-cp-red/50">Give up</button>
      <button
        disabled={incompletedSubtasks.length !== 0}
        className="btn btn-green enabled:hover:bg-cp-green/50"
      >
        Complete Mission
      </button>
    </div>
  );
};

export default MissionButtons;

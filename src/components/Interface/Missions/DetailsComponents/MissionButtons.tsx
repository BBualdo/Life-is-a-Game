"use client";

import { deleteMission } from "@/src/redux/slices/missionsSlice";
import { setselectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import { useDispatch } from "react-redux";

const MissionButtons = ({
  selectedMission,
}: {
  selectedMission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const incompletedSubtasks = selectedMission.subtasks.filter(
    (subtask) => subtask.isCompleted === false,
  );

  const giveUpMission = () => {
    dispatch(deleteMission(selectedMission));
    dispatch(setselectedMission(null));
  };

  return (
    <div className="flex items-center gap-20">
      <button
        onClick={giveUpMission}
        className="btn btn-red hover:bg-cp-red/50"
      >
        Give up
      </button>
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

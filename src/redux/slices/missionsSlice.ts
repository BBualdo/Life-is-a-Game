import { MissionSchema } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  missions: {
    active: MissionSchema[];
    completed: MissionSchema[];
  };
};

const initialState: InitialState = {
  missions: { active: [], completed: [] },
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    addActiveMission: (state, action: PayloadAction<MissionSchema>) => {
      state.missions.active.push(action.payload);
    },
    addCompletedMission: (state, action: PayloadAction<MissionSchema>) => {
      state.missions.completed.push(action.payload);
    },
    toggleSubtaskComplition: (
      state,
      action: PayloadAction<{ missionId: string; subtaskId: string }>,
    ) => {
      const { missionId, subtaskId } = action.payload;
      const mission = state.missions.active.find(
        (mission) => mission.id === missionId,
      );

      if (mission) {
        const updatedSubtasks = mission.subtasks.map((subtask) =>
          subtask.id === subtaskId
            ? { ...subtask, isCompleted: !subtask.isCompleted }
            : subtask,
        );
        mission.subtasks = updatedSubtasks;
      }
    },
  },
});

export const {
  addActiveMission,
  addCompletedMission,
  toggleSubtaskComplition,
} = missionsSlice.actions;
export default missionsSlice.reducer;

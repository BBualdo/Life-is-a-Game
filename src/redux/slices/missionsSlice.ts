import { MissionSchema } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  missions: MissionSchema[];
};

const initialState: InitialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    addMission: (state, action: PayloadAction<MissionSchema>) => {
      state.missions.push(action.payload);
    },
    toggleSubtaskComplition: (
      state,
      action: PayloadAction<{ missionId: string; subtaskId: string }>,
    ) => {
      const { missionId, subtaskId } = action.payload;
      const mission = state.missions.find(
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
    updateMission: (state, action: PayloadAction<MissionSchema>) => {
      const { id, title, description, subtasks } = action.payload;

      const missionToUpdate = state.missions.find(
        (mission) => mission.id === id,
      );

      if (missionToUpdate) {
        const updatedMission = {
          ...missionToUpdate,
          title,
          description,
          subtasks,
        };

        const missionIndex = state.missions.findIndex(
          (mission) => mission.id === id,
        );

        const updatedMissions = [...state.missions];
        updatedMissions[missionIndex] = updatedMission;

        state.missions = updatedMissions;
      }
    },
    deleteMission: (state, action: PayloadAction<MissionSchema>) => {
      const { id } = action.payload;

      const missionToDelete = state.missions.find(
        (mission) => mission.id === id,
      );

      if (missionToDelete) {
        const filteredMissions = state.missions.filter(
          (mission) => mission !== missionToDelete,
        );

        state.missions = filteredMissions;
      }
    },
    completeMission: (state, action: PayloadAction<MissionSchema>) => {
      state.missions.push(action.payload);
    },
  },
});

export const {
  addMission,
  completeMission,
  toggleSubtaskComplition,
  updateMission,
  deleteMission,
} = missionsSlice.actions;
export default missionsSlice.reducer;

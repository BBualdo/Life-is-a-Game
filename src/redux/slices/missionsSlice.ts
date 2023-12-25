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
  },
});

export const { addActiveMission, addCompletedMission } = missionsSlice.actions;
export default missionsSlice.reducer;

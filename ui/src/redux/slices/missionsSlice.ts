import IMission from "@/src/models/IMission";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  missions: IMission[] | null | undefined;
};

const initialState: InitialState = {
  missions: undefined,
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    setMissions: (state, action: PayloadAction<IMission[]>) => {
      state.missions = action.payload;
    },
    clearMissions: (state) => {
      state.missions = null;
    },
    addMission: (state, action: PayloadAction<IMission>) => {
      state.missions?.unshift(action.payload);
    },
  },
});

export const { setMissions, clearMissions, addMission } = missionsSlice.actions;
export default missionsSlice.reducer;

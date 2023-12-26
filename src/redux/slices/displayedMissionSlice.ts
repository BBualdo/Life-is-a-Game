import { MissionSchema } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  displayedMission: MissionSchema | null;
};

const initialState: InitialState = {
  displayedMission: null,
};

const displayedMission = createSlice({
  name: "displayedMission",
  initialState,
  reducers: {
    setDisplayedMission: (
      state,
      action: PayloadAction<MissionSchema | null>,
    ) => {
      state.displayedMission = action.payload;
    },
  },
});

export const { setDisplayedMission } = displayedMission.actions;
export default displayedMission.reducer;

import levels from "@/src/data/levels";
import { Level } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  username: string;
  level: Level;
  xp: number;
};

const initialState: InitialState = {
  username: "BBualdo",
  level: levels[0],
  xp: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    giveXP: (state, action: PayloadAction<{ xp: number }>) => {
      const { xp } = action.payload;
      const updatedXP = state.xp + xp;
      state.xp = updatedXP;
    },
    levelUp: (state) => {
      const nextLevelIndex = state.level.level;
      const nextLevel = levels[nextLevelIndex];
      if (nextLevel) {
        state.level = nextLevel;
        state.xp = state.xp - nextLevel.ceil;
      }
    },
  },
});

export const { giveXP, levelUp } = userSlice.actions;
export default userSlice.reducer;

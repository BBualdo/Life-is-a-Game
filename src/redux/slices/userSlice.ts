import levels from "@/src/data/levels";
import { Level } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  xpGained: number;
  currentGoal: string;
  bio: string;
  level: Level;
  xp: number;
};

const initialState: User = {
  username: "BBualdo",
  email: "mrseb10@gmail.com",
  firstName: "Sebastian",
  lastName: "",
  xpGained: 0,
  currentGoal: "",
  bio: "",
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
      state.xpGained = state.xpGained + xp;
    },
    levelUp: (state) => {
      const nextLevelIndex = state.level.level;
      const nextLevel = levels[nextLevelIndex];
      if (nextLevel) {
        state.xp = state.xp - state.level.ceil;
        state.level = nextLevel;
      }
    },
  },
});

export const { giveXP, levelUp } = userSlice.actions;
export default userSlice.reducer;

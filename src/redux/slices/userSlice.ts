import levels from "@/src/data/levels";
import { Level } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  username: string;
  email: string | undefined;
  firstName: string;
  lastName: string | undefined;
  xpGained: number;
  currentGoal: string | undefined;
  bio: string | undefined;
  level: Level;
  xp: number;
};

const initialState: User = {
  username: "",
  email: "",
  firstName: "",
  lastName: undefined,
  xpGained: 0,
  currentGoal: undefined,
  bio: undefined,
  level: levels[0],
  xp: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Profile Reducers
    createUser: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string | undefined;
        username: string;
        currentGoal: string | undefined;
      }>,
    ) => {
      const { firstName, lastName, username, currentGoal } = action.payload;

      return { ...state, firstName, lastName, username, currentGoal };
    },
    // XP Reducers
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

export const { createUser, giveXP, levelUp } = userSlice.actions;
export default userSlice.reducer;

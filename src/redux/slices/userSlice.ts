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

const xpGained = JSON.parse(localStorage.getItem("xpGained")!);

const xp = JSON.parse(localStorage.getItem("xp")!);

const level = JSON.parse(localStorage.getItem("level")!);

const user = JSON.parse(localStorage.getItem("user")!);

const initialState: User = user || {
  username: "",
  email: "",
  firstName: "",
  lastName: undefined,
  xpGained: xpGained || 0,
  currentGoal: undefined,
  bio: undefined,
  level: level || levels[0],
  xp: xp || 0,
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
      state = { ...state, firstName, lastName, username, currentGoal };
      localStorage.setItem("user", JSON.stringify(state));
    },
    // XP Reducers
    giveXP: (state, action: PayloadAction<{ xp: number }>) => {
      const { xp } = action.payload;
      const updatedXP = state.xp + xp;
      state.xp = updatedXP;
      state.xpGained = state.xpGained + xp;
      localStorage.setItem("xp", JSON.stringify(state.xp));
      localStorage.setItem("xpGained", JSON.stringify(state.xpGained));
    },
    levelUp: (state) => {
      const nextLevelIndex = state.level.level;
      const nextLevel = levels[nextLevelIndex];
      if (nextLevel) {
        state.xp = state.xp - state.level.ceil;
        state.level = nextLevel;
        localStorage.setItem("level", JSON.stringify(state.level));
        localStorage.setItem("xp", JSON.stringify(state.xp));
      }
    },
  },
});

export const { createUser, giveXP, levelUp } = userSlice.actions;
export default userSlice.reducer;

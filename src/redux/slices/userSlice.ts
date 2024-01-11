import levels from "@/src/data/levels";
import { User, UserProfileEditType } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: undefined,
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
        id: string;
        firstName: string;
        lastName: string | undefined;
        username: string;
        currentGoal: string | undefined;
      }>,
    ) => {
      const { id, firstName, lastName, username, currentGoal } = action.payload;

      return { ...state, id, firstName, lastName, username, currentGoal };
    },
    updateProfile: (state, action: PayloadAction<UserProfileEditType>) => {
      const { firstName, lastName, username, currentGoal, bio } =
        action.payload;
      return { ...state, firstName, lastName, username, currentGoal, bio };
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

export const { createUser, updateProfile, giveXP, levelUp } = userSlice.actions;
export default userSlice.reducer;

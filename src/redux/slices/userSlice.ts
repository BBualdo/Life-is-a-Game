import achievements from "@/src/data/achievements";
import levels from "@/src/data/levels";
import { User, UserProfileEditType } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: undefined,
  avatar: "",
  username: "",
  email: "",
  firstName: "",
  lastName: undefined,
  xpGained: 0,
  currentGoal: undefined,
  bio: undefined,
  level: levels[0],
  xp: 0,
  achievements: achievements,
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
    updateAvatar: (state, action: PayloadAction<{ avatar: string }>) => {
      const { avatar } = action.payload;
      state.avatar = avatar;
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
    // Achievement Reducers
    unlockAchievement: (
      state,
      action: PayloadAction<{ requirements: string }>,
    ) => {
      const { requirements } = action.payload;
      const achievementToUnlock = state.achievements.find(
        (achievement) => achievement.requirements === requirements,
      );

      if (achievementToUnlock && !achievementToUnlock.isUnlocked) {
        const updatedAchievement = { ...achievementToUnlock, isUnlocked: true };
        const updatedAchievements = [...achievements, updatedAchievement];
        state.achievements = updatedAchievements;
      }
    },
  },
});

export const {
  createUser,
  updateProfile,
  updateAvatar,
  giveXP,
  levelUp,
  unlockAchievement,
} = userSlice.actions;
export default userSlice.reducer;

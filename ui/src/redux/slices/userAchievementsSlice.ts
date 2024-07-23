import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserAchievement from "@/src/models/IUserAchievement";

type InitialState = {
  userAchievements: IUserAchievement[] | null | undefined;
};

const initialState: InitialState = {
  userAchievements: undefined,
};

const userAchievementsSlice = createSlice({
  name: "userAchievements",
  initialState,
  reducers: {
    setUserAchievements: (state, action: PayloadAction<IUserAchievement[]>) => {
      state.userAchievements = action.payload;
    },
    clearUserAchievements: (state) => {
      state.userAchievements = null;
    },
  },
});

export const { setUserAchievements, clearUserAchievements } =
  userAchievementsSlice.actions;
export default userAchievementsSlice.reducer;

import IUser from "@/src/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserXpResponse from "@/src/services/DTO/IUserXpResponse";
import IEditProfileDto from "@/src/services/DTO/IEditProfileDto";

type InitialState = {
  user: IUser | null | undefined;
  isLoggedOut: boolean;
};

const initialState: InitialState = {
  user: undefined,
  isLoggedOut: true,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setIsLoggedOut: (state, action: PayloadAction<boolean>) => {
      state.isLoggedOut = action.payload;
    },
    setUserXp: (state, action: PayloadAction<IUserXpResponse>) => {
      const { level, xp, totalXpGained } = action.payload;
      if (state.user) {
        state.user = { ...state.user, level, xp, totalXpGained };
      }
    },
    setUserMissionsCounters: (state, action: PayloadAction<string>) => {
      if (state.user) {
        if (action.payload === "ADD_MISSION") state.user.totalMissionsAdded++;
        if (action.payload === "COMPLETE_MISSION")
          state.user.totalMissionsCompleted++;
      }
    },
    updateUserInfo: (state, action: PayloadAction<IEditProfileDto>) => {
      if (state.user) {
        const { firstName, lastName, currentGoal, bio } = action.payload;
        state.user = { ...state.user, firstName, lastName, currentGoal, bio };
      }
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  clearUser,
  setIsLoggedOut,
  setUserXp,
  setUserMissionsCounters,
  updateUserInfo,
} = userSlice.actions;

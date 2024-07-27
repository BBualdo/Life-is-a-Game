import IUser from "@/src/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserXpResponse from "@/src/services/DTO/IUserXpResponse";

type InitialState = {
  user: IUser | null | undefined;
  isLoggedOut: boolean;
};

const initialState: InitialState = {
  user: undefined,
  isLoggedOut: true,
};

const authSlice = createSlice({
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
  },
});

export default authSlice.reducer;
export const {
  setUser,
  clearUser,
  setIsLoggedOut,
  setUserXp,
  setUserMissionsCounters,
} = authSlice.actions;

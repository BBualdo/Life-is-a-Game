import IUser from "@/src/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export default authSlice.reducer;
export const { setUser, clearUser, setIsLoggedOut } = authSlice.actions;

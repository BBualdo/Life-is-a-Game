import IUser from "@/src/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  user: IUser | null | undefined;
};

const initialState: InitialState = {
  user: undefined,
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
  },
});

export default authSlice.reducer;
export const { setUser, clearUser } = authSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  username: string;
  level: number;
  xp: number;
};

const initialState: InitialState = {
  username: "BBualdo",
  level: 1,
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
    },
  },
});

export const { giveXP } = userSlice.actions;
export default userSlice.reducer;

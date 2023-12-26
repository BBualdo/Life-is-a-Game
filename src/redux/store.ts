import { configureStore } from "@reduxjs/toolkit";

import missionsReducer from "./slices/missionsSlice";
import selectedMissionReducer from "./slices/selectedMissionSlice";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    missionsReducer,
    selectedMissionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

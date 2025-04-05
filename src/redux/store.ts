import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./slices/popupSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

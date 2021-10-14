import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./tree/index";

export const store = configureStore({
  reducer: {
    tree: treeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

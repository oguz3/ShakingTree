import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

import { getRandomInteger } from "../../lib";

export type Tree = {
  number_of_apple: number;
  number_of_fall_apple: number;
};

const initialState: Tree = {
  number_of_apple: getRandomInteger(1, 12),
  number_of_fall_apple: 0,
};

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    dropRandomlyApple: (state: any) => {
      state.number_of_fall_apple = getRandomInteger(1, 4);
      state.number_of_apple -= state.number_of_fall_apple;
    },
  },
});

export const { dropRandomlyApple } = treeSlice.actions;

export const selectnumberOfApple = (state: RootState) =>
  state.tree.number_of_apple;
export const selectnumberOfFallApple = (state: RootState) =>
  state.tree.number_of_fall_apple;

export default treeSlice.reducer;

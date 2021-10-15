import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

import { getRandomInteger, generateApple } from "../../lib";

export type AppleProps = {
  id?: string;
  top?: string;
  left?: string;
  isFall?: boolean;
  fallTimeout?: number;
};

export type Tree = {
  apple_list: Array<AppleProps>;
  droped_apple_list: Array<AppleProps>;
  number_of_fall_apple: number;
  total_number_of_fall_apple: number;
};

const initialState: Tree = {
  apple_list: generateApple(),
  droped_apple_list: [],
  number_of_fall_apple: 0,
  total_number_of_fall_apple: 0,
};

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    dropRandomlyApple: (state: any) => {
      if (state?.apple_list.length === 0) return state;
      let number_falling_apple = getRandomInteger(1, state?.apple_list.length);
      state.number_falling_apple = number_falling_apple;
      state.total_number_of_fall_apple += number_falling_apple;
      for (let i = 0; i < number_falling_apple; i++) {
        state.apple_list = [
          ...state.apple_list,
          (state.apple_list[0].isFall = true),
        ];
      }
    },
    moveAppleToBasket: (state: any) => {
      state.apple_list.forEach((apple: AppleProps) => {
        if (apple.isFall) {
          state.droped_apple_list = [...state.droped_apple_list, apple];
          state.apple_list = [
            ...state.apple_list.slice(state.number_of_fall_apple),
          ];
        }
      });
    },
  },
});

export const { moveAppleToBasket, dropRandomlyApple } = treeSlice.actions;

export const selectApplesOnTree = (state: RootState) => state.tree.apple_list;
export const selectDropedApples = (state: RootState) =>
  state.tree.droped_apple_list;
export const selectnumberOfFallApple = (state: RootState) =>
  state.tree.number_of_fall_apple;

export default treeSlice.reducer;

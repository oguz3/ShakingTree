import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

import { getRandomInteger, generateApple } from "../../lib";

export type AppleProps = {
  id: string;
  top?: string;
  left?: string;
  isFall?: boolean;
  isInBasket: boolean;
  fallTimeout?: number;
};

export type Tree = {
  apple_list: Array<AppleProps>;
  isShaking: boolean;
};

const initialState: Tree = {
  apple_list: generateApple(),
  isShaking: false,
};

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    shakeTheTree: (state: any, action) => {
      state.isShaking = action.payload;
    },
    dropRandomlyApple: (state: any) => {
      let apples_on_tree = state.apple_list.filter(
        (apple: AppleProps) => apple.isFall === false
      );
      if (apples_on_tree.length === 0) return state;
      let number_falling_apple = getRandomInteger(1, apples_on_tree.length);
      let count: number = 0;
      let newArr = state.apple_list.map((obj: AppleProps) => {
        if (count < number_falling_apple && !obj.isFall) {
          count++;
          return { ...obj, isFall: true };
        } else {
          return obj;
        }
      });
      state.apple_list = newArr;
    },
    moveAppleToBasket: (state: any, action) => {
      const newList = state.apple_list.map((apple: AppleProps) => {
        if (apple.id === action.payload) {
          return { ...apple, isInBasket: true };
        } else {
          return apple;
        }
      });
      state.apple_list = newList;
    },
    resetTree: () => {
      return {
        apple_list: generateApple(),
        isShaking: false,
      };
    },
  },
});

export const { shakeTheTree, moveAppleToBasket, dropRandomlyApple, resetTree } =
  treeSlice.actions;

export const selectApplesOnTree = (state: RootState) =>
  state.tree.apple_list.filter((apple: AppleProps) => apple.isFall === false);
export const selectApplesInBasket = (state: RootState) =>
  state.tree.apple_list.filter(
    (apple: AppleProps) => apple.isInBasket === true
  );
export const selectnumberOfFallApple = (state: RootState) =>
  state.tree.apple_list.filter((apple: AppleProps) => apple.isFall === true)
    .length;
export const selectIsShaking = (state: RootState) => state.tree.isShaking;
export const selectIsTreeBusy = (state: RootState) =>
  state.tree.isShaking ||
  !!state.tree.apple_list.filter(
    (apple: AppleProps) => apple.isFall === true && apple.isInBasket === false
  ).length;

export default treeSlice.reducer;

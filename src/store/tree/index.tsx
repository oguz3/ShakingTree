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
  droped_apple_list: Array<AppleProps>;
  total_number_of_fall_apple: number;
  isShaking: boolean;
};

const initialState: Tree = {
  apple_list: generateApple(),
  droped_apple_list: [],
  total_number_of_fall_apple: 0,
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
      state.total_number_of_fall_apple += number_falling_apple;
      state.apple_list = newArr;
    },
    moveAppleToBasket: (state: any, action) => {
      let selectedApple = state.apple_list.find(
        (obj: AppleProps) => obj.id === action.payload
      );
      const filteredItems = state.apple_list.filter(
        (apple: AppleProps) => apple !== selectedApple
      );
      state.apple_list = filteredItems;
      state.droped_apple_list = [
        ...state.droped_apple_list,
        { ...selectedApple, isInBasket: true },
      ];
    },
  },
});

export const { shakeTheTree, moveAppleToBasket, dropRandomlyApple } =
  treeSlice.actions;

export const selectApplesOnTree = (state: RootState) => state.tree.apple_list;
export const selectDropedApples = (state: RootState) =>
  state.tree.droped_apple_list;
export const selectnumberOfFallApple = (state: RootState) =>
  state.tree.total_number_of_fall_apple;
export const selectIsShaking = (state: RootState) => state.tree.isShaking;
export const selectIsTreeBusy = (state: RootState) =>
  state.tree.isShaking ||
  !!state.tree.apple_list.filter((apple: AppleProps) => apple.isFall === true)
    .length;

export default treeSlice.reducer;

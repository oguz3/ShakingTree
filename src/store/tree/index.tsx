import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

import { generateApple } from "../../lib";

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
    dropRandomlyApple: (state: any, action) => {
      state.apple_list = action.payload;
    },
    moveAppleToBasket: (state: any, action) => {
      const newList = [...state.apple_list];
      newList.find((a) => a.id === action.payload).isInBasket = true;
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

export const selectAppleList = (state: RootState) => state.tree.apple_list;
export const selectApplesOnTree = (state: RootState) =>
  state.tree.apple_list.filter(
    (apple: AppleProps) => apple.isInBasket === false
  );
export const selectApplesInBasket = (state: RootState) =>
  state.tree.apple_list.filter(
    (apple: AppleProps) => apple.isInBasket === true
  );
export const selectUndroppedApple = (state: RootState) =>
  state.tree.apple_list.filter((apple: AppleProps) => apple.isFall === false);
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

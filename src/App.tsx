import React from "react";
import Apple from "./components/Apple";
import Basket from "./components/Basket";
import Tree from "./components/Tree";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import {
  dropRandomlyApple,
  selectnumberOfApple,
  selectnumberOfFallApple,
} from "./store/tree";

function App() {
  const number_apple = useAppSelector(selectnumberOfApple);
  const number_fall_apple = useAppSelector(selectnumberOfFallApple);
  const dispatch = useAppDispatch();

  return (
    <>
      {number_apple} - {number_fall_apple}
      <button
        onClick={() => {
          dispatch(dropRandomlyApple());
        }}
      >
        düşür
      </button>
      <Tree />
      <Apple />
      <Basket />
    </>
  );
}

export default App;

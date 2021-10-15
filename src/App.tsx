import React from "react";
import Basket from "./components/Basket";
import Tree from "./components/Tree";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import {
  dropRandomlyApple,
  moveAppleToBasket,
  selectnumberOfFallApple,
} from "./store/tree";

function App() {
  const number_fall_apple = useAppSelector(selectnumberOfFallApple);
  const dispatch = useAppDispatch();

  return (
    <>
      {number_fall_apple}
      <button
        onClick={() => {
          dispatch(dropRandomlyApple());
          setTimeout(() => {
            dispatch(moveAppleToBasket());
          }, 1000);
        }}
      >
        düşür
      </button>
      <Tree />
      <Basket />
    </>
  );
}

export default App;

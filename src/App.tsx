import React from "react";
import Basket from "./components/Basket";
import Tree from "./components/Tree";
import bg from "./assets/image/background.svg";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { dropRandomlyApple, selectnumberOfFallApple } from "./store/tree";

function App() {
  const dispatch = useAppDispatch();
  const number_fall_apple = useAppSelector(selectnumberOfFallApple);

  return (
    <div className="layout" style={{ backgroundImage: `url(${bg})` }}>
      {number_fall_apple}
      <button
        onClick={() => {
          dispatch(dropRandomlyApple());
        }}
      >
        düşür
      </button>
      <Tree />
      <Basket />
    </div>
  );
}

export default App;

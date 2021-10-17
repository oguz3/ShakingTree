import React from "react";
import Basket from "../Basket";
import Tree from "../Tree";
import Button from "../Button";
import bg from "../../assets/image/background.svg";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { dropRandomlyApple, selectnumberOfFallApple } from "../../store/tree";

import styles from "./Layout.module.scss";

function Layout() {
  const dispatch = useAppDispatch();
  const number_fall_apple = useAppSelector(selectnumberOfFallApple);

  return (
    <div className={styles.layout} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.counter}>Counter: {number_fall_apple}</div>
      <div className={styles.button_Wrapper}>
        <Button
          onClick={() => {
            dispatch(dropRandomlyApple());
          }}
        >
          Shake
        </Button>
      </div>
      <Tree />
      <Basket />
    </div>
  );
}

export default Layout;

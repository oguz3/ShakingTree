import React from "react";
import Apple from "../Apple";
import styles from "./Basket.module.scss";

import { useAppSelector } from "../../store/hooks";
import { selectDropedApples } from "../../store/tree";

function Basket() {
  const dropedApples = useAppSelector(selectDropedApples);

  return (
    <div className={styles.basket}>
      <div className={styles.apple_wrapper}>
        {dropedApples.map((apple) => {
          return <Apple key={apple.id} {...apple} />;
        })}
      </div>
    </div>
  );
}

export default Basket;

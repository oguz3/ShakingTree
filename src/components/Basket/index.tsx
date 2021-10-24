import React from "react";
import Apple from "../Apple";
import styles from "./Basket.module.scss";

import basket_image from "../../assets/image/basket.svg";

import { useAppSelector } from "../../store/hooks";
import { selectApplesInBasket } from "../../store/tree";

function Basket() {
  const dropedApples = useAppSelector(selectApplesInBasket);

  return (
    <div className={styles.basket}>
      <img src={basket_image} alt="basket" />
      <div className={styles.apple_wrapper}>
        {dropedApples.map((apple) => {
          return <Apple key={apple.id} {...apple} />;
        })}
      </div>
    </div>
  );
}

export default Basket;

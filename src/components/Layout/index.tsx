import React from "react";
import Basket from "../Basket";
import Tree from "../Tree";
import Button from "../Button";
import bg from "../../assets/image/background.svg";
import { getRandomInteger } from "../../lib";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  shakeTheTree,
  dropRandomlyApple,
  selectnumberOfFallApple,
  selectIsTreeBusy,
  selectAppleList,
  selectUndroppedApple,
  resetTree,
  AppleProps,
} from "../../store/tree";

import styles from "./Layout.module.scss";

function Layout() {
  const dispatch = useAppDispatch();
  const number_fall_apple = useAppSelector(selectnumberOfFallApple);
  const undropped_apples = useAppSelector(selectUndroppedApple);
  const apple_list = useAppSelector(selectAppleList);
  const isTreeBusy = useAppSelector(selectIsTreeBusy);

  const dropApples = () => {
    //bütün elmalar düştü mü diye kontrol ediyoruz.
    if (undropped_apples.length > 0) {
      //Düşen elma sayısını tutacağımız sayacı tanımlıyoruz.
      let count = 0;
      //Kaç elma düşeceğini rastgele bir sayı yaratarak buluyoruz.
      const rnd_int = getRandomInteger(1, undropped_apples.length);
      const newArr = apple_list.reduce(
        (acc: Array<AppleProps>, item: AppleProps) => {
          //Elma düşmemiş ve düşecek elma sayısına henüz ulaşmamışsak o elmayı düşürüyoruz ve sayacımızı arttırıyoruz.
          if (!item.isFall && count < rnd_int) {
            acc = [...acc, { ...item, isFall: true }];
            count = count + 1;
          } else {
            acc = [...acc, item];
          }
          return acc;
        },
        []
      );
      dispatch(dropRandomlyApple(newArr));
    }
  };

  return (
    <div className={styles.layout} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.counter}>Counter: {number_fall_apple}</div>
      <div className={styles.button_Wrapper}>
        <Button
          disabled={isTreeBusy}
          onClick={() => {
            dispatch(shakeTheTree(true));
            setTimeout(() => {
              dispatch(shakeTheTree(false));
              dropApples();
            }, 3000);
          }}
        >
          Shake
        </Button>
        <Button
          disabled={isTreeBusy}
          onClick={() => {
            dispatch(resetTree());
          }}
        >
          Reset
        </Button>
      </div>
      <Tree />
      <Basket />
    </div>
  );
}

export default Layout;

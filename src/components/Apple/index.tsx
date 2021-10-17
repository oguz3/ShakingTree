import React, { useState, useEffect } from "react";
import { AppleProps } from "store/tree";
import cn from "classnames";
import styles from "./Apple.module.scss";

import apple_image from "../../assets/image/apple.svg";

import { useAppDispatch } from "../../store/hooks";
import { moveAppleToBasket } from "../../store/tree";

const Apple: React.FC<AppleProps> = ({
  id,
  top,
  left,
  isFall,
  isInBasket,
  fallTimeout,
}) => {
  const dispatch = useAppDispatch();

  const [isFallTime, setIsFallTime] = useState(false);

  useEffect(() => {
    if (!isInBasket && isFall) {
      setTimeout(() => {
        console.log("fall zamanı");
        setIsFallTime(true);
      }, fallTimeout);
    }
  }, [isFall]);

  useEffect(() => {
    if (isFallTime) {
      setTimeout(() => {
        console.log("go basket", id);
        dispatch(moveAppleToBasket(id));
      }, 1000);
    }
  }, [isFallTime]);

  return (
    <div
      className={cn(
        styles.apple,
        isInBasket && styles.in_basket,
        isFallTime && styles.fall_transition
      )}
      style={{
        top: isFallTime ? "90%" : isInBasket ? "auto" : top,
        left: isInBasket ? "auto" : left,
      }}
    >
      <img src={apple_image} alt="apple" />
    </div>
  );
};

export default Apple;

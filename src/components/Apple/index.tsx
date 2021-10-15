import React from "react";
import { AppleProps } from "store/tree";
import styles from "./Apple.module.scss";

const Apple: React.FC<AppleProps> = ({ top, left, isFall }) => {
  return (
    <div
      className={styles.apple}
      style={{ top: isFall ? "100%" : top, left: left }}
    />
  );
};

export default Apple;

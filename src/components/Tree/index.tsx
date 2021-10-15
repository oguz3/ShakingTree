import Apple from "components/Apple";
import React from "react";
import styles from "./Tree.module.scss";

import { useAppSelector } from "../../store/hooks";
import { selectApplesOnTree, selectDropedApples } from "../../store/tree";

function Tree() {
  const applesOnTree = useAppSelector(selectApplesOnTree);
  const dropedApples = useAppSelector(selectDropedApples);

  return (
    <div>
      <div className={styles.tree}>
        {applesOnTree.map((apple, index) => {
          return (
            <Apple top={apple.top} left={apple.left} isFall={apple.isFall} />
          );
        })}
      </div>

      <div className={styles.ground}>
        {dropedApples.map((apple, index) => {
          return <Apple />;
        })}
      </div>
    </div>
  );
}

export default Tree;

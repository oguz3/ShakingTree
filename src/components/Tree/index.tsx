import Apple from "../Apple";
import styles from "./Tree.module.scss";

import { useAppSelector } from "../../store/hooks";
import { selectApplesOnTree } from "../../store/tree";

function Tree() {
  const applesOnTree = useAppSelector(selectApplesOnTree);

  return (
    <div>
      <div className={styles.tree}>
        {applesOnTree.map((apple) => {
          return <Apple key={apple.id} {...apple} />;
        })}
      </div>
    </div>
  );
}

export default Tree;

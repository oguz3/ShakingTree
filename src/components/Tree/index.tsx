import Apple from "../Apple";
import styles from "./Tree.module.scss";

import tree_image from "../../assets/image/tree.svg";

import { useAppSelector } from "../../store/hooks";
import { selectApplesOnTree } from "../../store/tree";

function Tree() {
  const applesOnTree = useAppSelector(selectApplesOnTree);

  return (
    <div>
      <div className={styles.tree}>
        <img src={tree_image} alt="tree" />
        {applesOnTree.map((apple) => {
          return <Apple key={apple.id} {...apple} />;
        })}
      </div>
    </div>
  );
}

export default Tree;

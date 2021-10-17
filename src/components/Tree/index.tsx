import Apple from "../Apple";
import cn from "classnames";
import { useAppSelector } from "../../store/hooks";
import { selectApplesOnTree } from "../../store/tree";
import tree_image from "../../assets/image/tree.svg";
import styles from "./Tree.module.scss";

function Tree() {
  const applesOnTree = useAppSelector(selectApplesOnTree);

  return (
    <div>
      <div className={cn(styles.tree, "shake")}>
        <img src={tree_image} alt="tree" />
        {applesOnTree.map((apple) => {
          return <Apple key={apple.id} {...apple} />;
        })}
      </div>
    </div>
  );
}

export default Tree;

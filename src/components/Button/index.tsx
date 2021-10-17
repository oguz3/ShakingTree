import { ReactChild } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type Props = {
  children: ReactChild;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <button className={cn(styles.button)} onClick={onClick} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;

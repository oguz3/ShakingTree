import { ReactChild } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type Props = {
  children: ReactChild;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, disabled, onClick, ...rest }) => {
  return (
    <button
      className={cn(styles.button)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;

import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  active?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxCountReached = useCallback(() => {
    if (counter === maxCount) {
      return true;
    } else {
      return false;
    }
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={` ${styles.buttonAdd} ${
          isMaxCountReached() && styles.disabled
        }`}
        onClick={() => increaseBy(1)}
        disabled={isMaxCountReached()}
      >
        +
      </button>
    </div>
  );
};

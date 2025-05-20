import styles from "./styles.module.css";
import type { CardProps } from "./types";

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
};

Card.displayName = "Card";

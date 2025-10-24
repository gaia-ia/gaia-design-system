import styles from "./styles.module.css";
import type { DividerProps } from "./types";

export const Divider = ({
  color = "var(--color-background-300)",
  orientation = "horizontal",
}: DividerProps) => {
  return (
    <div
      className={styles.separator}
      style={{
        backgroundColor: color,
        transform: orientation === "horizontal" ? "rotate(90deg)" : undefined,
      }}
    />
  );
};

Divider.displayName = "Divider";

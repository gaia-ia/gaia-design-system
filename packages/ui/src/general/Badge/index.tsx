import { Body } from "../../typography/Body";
import styles from "./styled.module.css";
import { BadgeProps } from "./types";

export const Badge = ({
  children,
  variant = "primary",
  ...props
}: BadgeProps) => {
  return (
    <div {...props} className={`${styles.badge} ${styles[variant]}`}>
      <Body variant="small_body">{children}</Body>
    </div>
  );
};

Badge.displayName = "Badge";

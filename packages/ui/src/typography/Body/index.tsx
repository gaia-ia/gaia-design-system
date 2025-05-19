import { createElement } from "react";

import styles from "./styles.module.css";
import type { BodyProps } from "./types";

export const Body: React.FC<BodyProps> = ({
  children,
  className,
  as = "span",
  variant = "body",
  ...props
}) => {
  return createElement(
    as,
    {
      className: `${styles.text} ${styles[variant]} ${className || ""}`,
      ...props,
    },
    children
  );
};

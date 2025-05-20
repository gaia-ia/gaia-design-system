import { createElement } from "react";

import styles from "./styles.module.css";
import { TitleProps } from "./types";

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  as = "span",
  variant = "title",
  ...props
}) => {
  return createElement(
    as,
    {
      className: `${styles.text} ${styles[variant]} ${className || ""}`,
      ...props,
    },
    children,
  );
};

Title.displayName = "Title";

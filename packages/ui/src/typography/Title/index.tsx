import { createElement } from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { TitleProps } from "./types";

/**
 * Typography component for rendering styled titles or headings.
 *
 * Allows control over both semantic tag (`as`) and visual style (`variant`).
 * Designed for section headers, page titles, or smaller contextual headings.
 *
 * @component
 * @example
 * <Title as="h2" variant="subtitle">Profile</Title>
 *
 * @example
 * <Title as="h1" variant="title">Dashboard</Title>
 */
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
      className: clsx(styles.text, styles[variant], className),
      ...props,
    },
    children,
  );
};

Title.displayName = "Title";

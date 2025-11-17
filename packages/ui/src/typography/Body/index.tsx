import { createElement } from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { BodyProps } from "./types";

/**
 * Typography component that renders text with semantic HTML and consistent styling.
 *
 * It supports multiple visual variants and HTML tag options, making it suitable for general
 * text, captions, labels, links, and headings.
 *
 * @component
 * @example
 * <Body variant="small_body_bold">Bold small text</Body>
 *
 * @example
 * <Body as="label" htmlFor="email" variant="label">Email Address</Body>
 */
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
      className: clsx(styles.text, styles[variant], className),
      ...props,
    },
    children,
  );
};

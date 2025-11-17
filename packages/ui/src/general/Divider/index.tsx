import * as SeparatorPrimitive from "@radix-ui/react-separator";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { DividerProps } from "./types";

/**
 * A styled separator component based on `@radix-ui/react-separator`, used to visually or semantically divide content.
 *
 * Supports both horizontal and vertical orientation, semantic or decorative use, and optional custom colors.
 * When `decorative` is `true`, the divider is hidden from screen readers for purely visual separation.
 *
 * @component
 * @param {DividerProps} props - Props for the Divider component.
 * @param {string} [props.color] - Optional custom background color for the divider (applied inline via `backgroundColor`).
 * @param {"horizontal" | "vertical"} [props.orientation="horizontal"] - The axis along which the divider is rendered.
 * @param {boolean} [props.decorative=true] - If true, hides the divider from assistive technologies (role="none").
 * @param {string} [props.className] - Optional class names to apply to the divider element.
 * @returns {JSX.Element} A customizable visual or semantic divider.
 *
 * @example
 * <Divider />
 *
 * @example
 * <Divider orientation="vertical" style={{ height: "100%" }} />
 *
 * @example
 * <Divider color="#ccc" className="my-divider" />
 */
export const Divider = ({
  color,
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: DividerProps) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={clsx(styles.separator, className)}
      style={color ? { backgroundColor: color } : undefined}
      {...props}
    />
  );
};

Divider.displayName = "Divider";

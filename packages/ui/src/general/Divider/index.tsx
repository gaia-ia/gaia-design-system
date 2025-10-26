import * as SeparatorPrimitive from "@radix-ui/react-separator";

import styles from "./styles.module.css";
import type { DividerProps } from "./types";

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
      className={`${styles.separator} ${className || ""}`}
      style={color ? { backgroundColor: color } : undefined}
      {...props}
    />
  );
};

Divider.displayName = "Divider";

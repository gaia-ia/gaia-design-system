import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import * as React from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { ScrollAreaProps, ScrollBarProps } from "./types";

/**
 * A scrollable container with custom scrollbars built on Radix UI ScrollArea.
 *
 * @component
 * @param className - Additional class names applied to the root element.
 * @param children - Content to be made scrollable.
 * @returns A positioned container with a styled viewport and scrollbars.
 * @example
 * <ScrollArea className="h-72 w-48">
 *   <div>Long content here...</div>
 * </ScrollArea>
 */
function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={clsx(styles.root, className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={styles.viewport}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

/**
 * The scrollbar track and thumb rendered inside a `ScrollArea`.
 *
 * @component
 * @param className - Additional class names applied to the scrollbar element.
 * @param orientation - Direction of the scrollbar. Defaults to `"vertical"`.
 * @returns A styled scrollbar with a draggable thumb.
 * @example
 * <ScrollBar orientation="horizontal" />
 */
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={clsx(styles.scrollbar, className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={styles.thumb}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };

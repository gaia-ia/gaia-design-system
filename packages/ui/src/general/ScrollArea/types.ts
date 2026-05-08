import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import * as React from "react";

export interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {}

export interface ScrollBarProps
  extends React.ComponentProps<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > {}

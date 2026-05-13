import { Dialog as SheetPrimitive } from "radix-ui";
import * as React from "react";

export interface SheetContentProps
  extends React.ComponentProps<typeof SheetPrimitive.Content> {
  /** Which edge the sheet slides in from. Defaults to `"right"`. */
  side?: "top" | "right" | "bottom" | "left";
  /** Whether to render the top-right close icon button. Defaults to `true`. */
  showCloseButton?: boolean;
}

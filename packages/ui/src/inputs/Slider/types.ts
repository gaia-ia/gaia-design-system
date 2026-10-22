import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

export interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  /**
   * Accessible name for each thumb, by index. Takes precedence over
   * `aria-label`/`aria-labelledby` for that thumb.
   */
  thumbLabels?: string[];
}

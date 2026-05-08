import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { clsx } from "../../utils/clsx";
import styles from "./styles.module.css";
import type { SliderProps } from "./types";

/**
 * A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/slider | Radix UI Slider}
 * that supports single-thumb and range modes via CSS Modules and design tokens.
 *
 * @component
 * @param className - Additional class names applied to the root element.
 * @param defaultValue - Uncontrolled initial value(s). Single thumb: `[50]`. Range: `[25, 75]`.
 * @param value - Controlled value(s).
 * @param min - Minimum value. Defaults to `0`.
 * @param max - Maximum value. Defaults to `100`.
 * @returns A horizontal or vertical slider with one or more draggable thumbs.
 *
 * @example
 * // Single thumb (uncontrolled)
 * <Slider defaultValue={[50]} />
 *
 * @example
 * // Range (two thumbs, controlled)
 * const [range, setRange] = useState([20, 80]);
 * <Slider value={range} onValueChange={setRange} />
 *
 * @example
 * // Vertical
 * <Slider orientation="vertical" defaultValue={[40]} />
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={clsx(styles.root, className)}
      {...props}
    >
      <SliderPrimitive.Track data-slot="slider-track" className={styles.track}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={styles.range}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={styles.thumb}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };

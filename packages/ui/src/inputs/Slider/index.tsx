import { Slider as SliderPrimitive } from "radix-ui";

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
 * @param thumbLabels - Accessible name for each thumb, by index (e.g. `["Preço mínimo", "Preço máximo"]`).
 * @param aria-label - Accessible name. Single thumb: applied to the thumb. Range: names the
 * slider group, and thumbs fall back to `thumbLabels` or Radix's "Minimum"/"Maximum".
 * Every slider needs a name: pass `aria-label`, `aria-labelledby` or `thumbLabels`.
 * @returns A horizontal or vertical slider with one or more draggable thumbs.
 *
 * @example
 * // Single thumb (uncontrolled)
 * <Slider aria-label="Volume" defaultValue={[50]} />
 *
 * @example
 * // Range (two thumbs, controlled)
 * const [range, setRange] = useState([20, 80]);
 * <Slider
 *   aria-label="Faixa de preço"
 *   thumbLabels={["Preço mínimo", "Preço máximo"]}
 *   value={range}
 *   onValueChange={setRange}
 * />
 *
 * @example
 * // Vertical
 * <Slider aria-label="Volume" orientation="vertical" defaultValue={[40]} />
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbLabels,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SliderProps) {
  // Same fallback as Radix (`[min]`): one thumb unless a value says otherwise.
  const thumbCount = (value ?? defaultValue ?? [min]).length;
  const isRange = thumbCount > 1;

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={clsx(styles.root, className)}
      // Range: the root becomes a named group and each thumb keeps its own
      // name (`thumbLabels` or Radix's "Minimum"/"Maximum").
      role={isRange && (ariaLabel || ariaLabelledBy) ? "group" : undefined}
      aria-label={isRange ? ariaLabel : undefined}
      aria-labelledby={isRange ? ariaLabelledBy : undefined}
      {...props}
    >
      <SliderPrimitive.Track data-slot="slider-track" className={styles.track}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={styles.range}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={styles.thumb}
          aria-label={thumbLabels?.[index] ?? (isRange ? undefined : ariaLabel)}
          aria-labelledby={
            isRange || thumbLabels?.[index] ? undefined : ariaLabelledBy
          }
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };

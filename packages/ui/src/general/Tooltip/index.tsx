import { Tooltip as T } from "react-tooltip";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { TooltipProps } from "./types";

/**
 * A styled wrapper around `react-tooltip` for displaying contextual information on hover or focus.
 *
 * Associates itself with a target element using the `anchorSelect` CSS selector, and supports configurable
 * placement, background color, and typography via the `Body` component.
 *
 * @component
 * @param {TooltipProps} props - Props to configure the tooltip.
 * @param {string} props.text - The tooltip content to display.
 * @param {string} props.anchorSelect - A CSS selector that identifies the element to anchor the tooltip to.
 * @param {import("react-tooltip").PlacesType} [props.place="top"] - Position of the tooltip relative to the anchor (`top`, `right`, `bottom`, `left`, etc.).
 * @param {string} [props.color="var(--color-background-100)"] - Background color of the tooltip.
 * @param {string} [props.className] - Optional additional class names for styling.
 * @returns {JSX.Element} A styled tooltip connected to an anchor element.
 *
 * @example
 * <button id="info-button">Hover me</button>
 * <Tooltip
 *   text="This button triggers an info modal"
 *   anchorSelect="#info-button"
 *   place="bottom"
 * />
 */
export const Tooltip = ({
  text,
  anchorSelect,
  place = "top",
  color = "var(--color-background-100)",
  className,
}: TooltipProps) => {
  return (
    <T
      className={clsx(styles.tooltip, className)}
      anchorSelect={anchorSelect}
      place={place}
      style={{ backgroundColor: color }}
    >
      <Body variant="small_body">{text}</Body>
    </T>
  );
};

Tooltip.displayName = "Tooltip";

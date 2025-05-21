import { Tooltip as T } from "react-tooltip";

import { Body } from "../../typography/Body";
import styles from "./styles.module.css";
import type { TooltipProps } from "./types";

export const Tooltip = ({
  text,
  anchorSelect,
  place = "top",
  color = "var(--color-background-100)",
}: TooltipProps) => {
  return (
    <T
      className={styles.tooltip}
      anchorSelect={anchorSelect}
      place={place}
      style={{ backgroundColor: color }}
    >
      <Body variant="small_body">{text}</Body>
    </T>
  );
};

Tooltip.displayName = "Tooltip";

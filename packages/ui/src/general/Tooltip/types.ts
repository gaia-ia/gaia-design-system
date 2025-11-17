import type { PlacesType } from "react-tooltip";

export type TooltipProps = {
  text: string;
  anchorSelect: string;
  place?: PlacesType;
  color?: string;
  className?: string;
};

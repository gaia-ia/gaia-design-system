import { ComponentProps, ComponentType, ReactNode } from "react";

import { THEMES } from "./constants";

export type RName = string | number;
export type RValue = number | string | Array<number | string>;

export type RTooltipItem = {
  name?: RName;
  value?: RValue;
  dataKey?: string | number;
  payload?: Record<string, unknown>;
  color?: string;
};

export type RLegendItem = {
  value?: string | number;
  dataKey?: string | number;
  color?: string;
};

export type TooltipFormatter = (
  value: RValue,
  name: RName,
  item: RTooltipItem,
  index: number,
  payload: RTooltipItem["payload"],
) => ReactNode;

export type TooltipLabelFormatter = (
  label: RName | ReactNode,
  payload: ReadonlyArray<RTooltipItem>,
) => ReactNode;

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode;
    icon?: ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

export type ChartContextProps = {
  config: ChartConfig;
};

export type PayloadLike = Record<string, unknown>;
export type FillColorish = { fill?: string; color?: string };

export type ExtraTooltipProps = ComponentProps<"div"> & {
  /** Recharts passes these to content components */
  active?: boolean;
  payload?: ReadonlyArray<RTooltipItem>;
  label?: RName;

  /** Our extras */
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;

  /** Recharts-compatible formatters */
  formatter?: TooltipFormatter;
  labelFormatter?: TooltipLabelFormatter;

  /** Force indicator color */
  color?: string;
};

export type LegendExtras = ComponentProps<"div"> & {
  hideIcon?: boolean;
  nameKey?: string;

  /** Recharts passes this to custom content */
  payload?: ReadonlyArray<RLegendItem>;
  verticalAlign?: "top" | "middle" | "bottom";
};

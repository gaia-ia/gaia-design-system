import {
  ComponentProps,
  ComponentType,
  createContext,
  CSSProperties,
  ReactNode,
  useContext,
  useId,
  useMemo,
} from "react";
import * as RechartsPrimitive from "recharts";

import styles from "./styles.module.css";

/* -------------------------------------------------------
   Local Recharts-compatible types for content components
------------------------------------------------------- */
type RName = string | number;
type RValue = number | string | Array<number | string>;

type RTooltipItem = {
  name?: RName;
  value?: RValue;
  dataKey?: string | number;
  payload?: Record<string, unknown>;
  color?: string;
};

type RLegendItem = {
  value?: string | number;
  dataKey?: string | number;
  color?: string;
};

type TooltipFormatter = (
  value: RValue,
  name: RName,
  item: RTooltipItem,
  index: number,
  payload: RTooltipItem["payload"],
) => ReactNode;

type TooltipLabelFormatter = (
  label: RName | ReactNode,
  payload: ReadonlyArray<RTooltipItem>,
) => ReactNode;

/* -------------------------------------------------------
   Theme plumbing
------------------------------------------------------- */
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode;
    icon?: ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

/* -------------------------------------------------------
   Context
------------------------------------------------------- */
type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);
  if (!context)
    throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

/* -------------------------------------------------------
   Utils
------------------------------------------------------- */
function joinClassNames(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

type PayloadLike = Record<string, unknown>;
type FillColorish = { fill?: string; color?: string };

/* -------------------------------------------------------
   Container + Style
------------------------------------------------------- */
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: ComponentProps<"div"> & {
  config: ChartConfig;
  children: ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={joinClassNames(styles.chartContainer, className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, c]) => c.theme || c.color,
  );
  if (!colorConfig.length) return null;

  const css = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const lines = colorConfig
        .map(([key, itemConfig]) => {
          const themed =
            "theme" in itemConfig
              ? itemConfig.theme?.[theme as keyof typeof THEMES]
              : undefined;
          const color =
            themed ?? ("color" in itemConfig ? itemConfig.color : undefined);
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter((x): x is string => Boolean(x))
        .join("\n");

      return `${prefix} [data-chart=${id}] {\n${lines}\n}\n`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

/* -------------------------------------------------------
   Tooltip
------------------------------------------------------- */
const ChartTooltip = RechartsPrimitive.Tooltip;

type ExtraTooltipProps = ComponentProps<"div"> & {
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

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  ...rest
}: ExtraTooltipProps & { labelClassName?: string }) {
  const { config } = useChart();
  const items = (payload ?? []) as ReadonlyArray<RTooltipItem>;

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !items.length) return null;

    const [item] = items;
    const key = `${labelKey || String(item?.dataKey ?? item?.name ?? "value")}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);

    const valueNode: ReactNode =
      !labelKey && typeof label === "string"
        ? (config[label as keyof typeof config]?.label ?? label)
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={joinClassNames(styles.tooltipLabel, labelClassName)}>
          {labelFormatter(valueNode, items)}
        </div>
      );
    }
    if (!valueNode) return null;
    return (
      <div className={joinClassNames(styles.tooltipLabel, labelClassName)}>
        {valueNode}
      </div>
    );
  }, [
    label,
    labelFormatter,
    items,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !items.length) return null;

  const nestLabel = items.length === 1 && indicator !== "dot";

  return (
    <div className={joinClassNames(styles.tooltip, className)} {...rest}>
      {!nestLabel ? tooltipLabel : null}
      <div className={styles.tooltipGrid}>
        {items.map((item, index) => {
          const key = `${nameKey || String(item.name ?? item.dataKey ?? "value")}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          // Extract color safely from payload or item
          const rawPayload = item.payload ?? {};
          const itemPayload: FillColorish =
            typeof rawPayload === "object" && rawPayload !== null
              ? (rawPayload as FillColorish)
              : {};
          const indicatorColor =
            (typeof color === "string" ? color : undefined) ??
            itemPayload.fill ??
            item.color;

          const indicatorClass =
            indicator === "dot"
              ? styles.dot
              : indicator === "line"
                ? styles.line
                : styles.dashed;

          return (
            <div
              key={String(item.dataKey ?? index)}
              className={joinClassNames(
                styles.tooltipRow,
                indicator === "dot" && styles.tooltipRowDotAlign,
              )}
            >
              {formatter &&
              item?.value !== undefined &&
              item.name !== undefined ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={joinClassNames(
                          styles.tooltipRowIcon,
                          indicatorClass,
                          nestLabel &&
                            indicator === "dashed" &&
                            styles.dashedNestFix,
                        )}
                        style={
                          {
                            "--_indicator-bg": indicatorColor,
                            "--_indicator-border": indicatorColor,
                          } as CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={joinClassNames(
                      styles.tooltipRowBody,
                      nestLabel
                        ? styles.tooltipRowBodyNestEnd
                        : styles.tooltipRowBodyCenter,
                    )}
                  >
                    <div className={styles.tooltipRowTextGroup}>
                      {nestLabel ? tooltipLabel : null}
                      <span className={styles.tooltipMuted}>
                        {itemConfig?.label ?? item.name}
                      </span>
                    </div>
                    {item.value !== undefined && item.value !== null && (
                      <span className={styles.tooltipValue}>
                        {formatValueForDisplay(item.value)}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Legend
------------------------------------------------------- */
const ChartLegend = RechartsPrimitive.Legend;

type LegendExtras = ComponentProps<"div"> & {
  hideIcon?: boolean;
  nameKey?: string;

  /** Recharts passes this to custom content */
  payload?: ReadonlyArray<RLegendItem>;
  verticalAlign?: "top" | "middle" | "bottom";
};

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: LegendExtras) {
  const { config } = useChart();
  const items = (payload ?? []) as ReadonlyArray<RLegendItem>;

  if (!items.length) return null;

  return (
    <div
      className={joinClassNames(
        styles.legend,
        verticalAlign === "top" ? styles.legendPadBottom : styles.legendPadTop,
        className,
      )}
    >
      {items.map((item, i) => {
        const key = `${nameKey || String(item.dataKey ?? item.value ?? i)}`;
        const itemConfig = getPayloadConfigFromPayload(
          config,
          item as unknown as PayloadLike,
          key,
        );

        return (
          <div
            key={String(item.value ?? item.dataKey ?? i)}
            className={styles.legendItem}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className={styles.legendSwatch}
                style={{ backgroundColor: String(item.color ?? "") }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------
   Helpers
------------------------------------------------------- */
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
): ChartConfig[string] | undefined {
  if (typeof payload !== "object" || payload === null) return undefined;

  const base = payload as PayloadLike;

  const payloadPayload =
    "payload" in base &&
    typeof (base as { payload?: unknown }).payload === "object" &&
    (base as { payload?: unknown }).payload !== null
      ? ((base as { payload?: object }).payload as PayloadLike)
      : undefined;

  let configLabelKey = key;

  if (key in base && typeof base[key] === "string") {
    configLabelKey = String(base[key]);
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = String(payloadPayload[key]);
  }

  if (configLabelKey in config) {
    return config[configLabelKey];
  }

  return (config as Record<string, ChartConfig[string]>)[key];
}

function formatValueForDisplay(value: RValue): string {
  if (Array.isArray(value)) {
    return value
      .map((v) => (typeof v === "number" ? v.toLocaleString() : String(v)))
      .join(", ");
  }
  return typeof value === "number" ? value.toLocaleString() : String(value);
}

/* -------------------------------------------------------
   Exports
------------------------------------------------------- */
export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
};

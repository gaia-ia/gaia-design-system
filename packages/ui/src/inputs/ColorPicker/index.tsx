import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Pipette } from "lucide-react";
import * as React from "react";
import {
  type RgbaColor,
  RgbaColorPicker,
  RgbColorPicker,
} from "react-colorful";

import { Body } from "../../typography/Body";
import { clsx } from "../../utils/clsx";
import { usePortalContainer } from "../../utils/portalContainer";
import {
  detectFormat,
  formatColor,
  hexToRgba,
  parseColorString,
  rgbaToHex,
} from "./colorUtils";
import styles from "./styles.module.css";
import type {
  ColorFormat,
  ColorPickerProps,
  ColorPickerSwatchProps,
} from "./types";

const DEFAULT_COLOR: RgbaColor = { r: 255, g: 123, b: 0, a: 1 };
const ALL_FORMATS: ColorFormat[] = ["hex", "rgb", "hsl"];

interface EyeDropperResult {
  sRGBHex: string;
}

interface EyeDropperInstance {
  open: () => Promise<EyeDropperResult>;
}

interface EyeDropperConstructor {
  new (): EyeDropperInstance;
}

declare global {
  interface Window {
    EyeDropper?: EyeDropperConstructor;
  }
}

/**
 * A standalone color swatch that renders a CSS color over an optional
 * transparent checkerboard pattern.
 *
 * @component
 * @param color - The CSS color string to display.
 * @param withAlphaPreview - Render a checkerboard backdrop. Defaults to `true`.
 * @param size - Visual size of the swatch. Defaults to `"md"`.
 * @returns A bordered swatch element.
 *
 * @example
 * <ColorPickerSwatch color="#ff7b00" />
 */
const ColorPickerSwatch = React.forwardRef<
  HTMLSpanElement,
  ColorPickerSwatchProps
>(function ColorPickerSwatch(
  { color, withAlphaPreview = true, size = "md", className, style, ...rest },
  ref,
) {
  const sizeClass =
    size === "sm"
      ? styles.swatchSm
      : size === "lg"
        ? styles.swatchLg
        : styles.swatchMd;

  return (
    <span
      ref={ref}
      data-slot="color-picker-swatch"
      data-alpha-preview={withAlphaPreview ? "true" : "false"}
      className={clsx(styles.swatch, sizeClass, className)}
      style={
        {
          ...style,
          "--swatch-color": color,
        } as React.CSSProperties
      }
      {...rest}
    />
  );
});

interface ColorPickerSurfaceProps {
  color: RgbaColor;
  onChange: (color: RgbaColor) => void;
  withoutAlpha: boolean;
}

function ColorPickerSurface({
  color,
  onChange,
  withoutAlpha,
}: ColorPickerSurfaceProps) {
  return (
    <div className={styles.surface}>
      {withoutAlpha ? (
        <RgbColorPicker
          color={{ r: color.r, g: color.g, b: color.b }}
          onChange={(next) => onChange({ ...next, a: 1 })}
        />
      ) : (
        <RgbaColorPicker color={color} onChange={onChange} />
      )}
    </div>
  );
}

interface ColorPickerToolbarProps {
  color: RgbaColor;
  format: ColorFormat;
  formats: ColorFormat[];
  withoutAlpha: boolean;
  withEyeDropper: boolean;
  withFormatSelect: boolean;
  withInput: boolean;
  disabled?: boolean;
  onFormatChange: (format: ColorFormat) => void;
  onColorChange: (color: RgbaColor) => void;
}

function ColorPickerToolbar({
  color,
  format,
  formats,
  withoutAlpha,
  withEyeDropper,
  withFormatSelect,
  withInput,
  disabled,
  onFormatChange,
  onColorChange,
}: ColorPickerToolbarProps) {
  const [draft, setDraft] = React.useState(() =>
    formatColor(color, format, withoutAlpha),
  );
  const [invalid, setInvalid] = React.useState(false);

  React.useEffect(() => {
    setDraft(formatColor(color, format, withoutAlpha));
    setInvalid(false);
  }, [color, format, withoutAlpha]);

  const eyeDropperSupported =
    typeof window !== "undefined" && typeof window.EyeDropper === "function";

  const commitDraft = () => {
    const parsed = parseColorString(draft);
    if (parsed) {
      onColorChange(withoutAlpha ? { ...parsed, a: 1 } : parsed);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };

  const handleEyeDropper = async () => {
    if (!eyeDropperSupported || !window.EyeDropper) return;
    try {
      const instance = new window.EyeDropper();
      const result = await instance.open();
      const next = hexToRgba(result.sRGBHex);
      if (next) onColorChange(withoutAlpha ? { ...next, a: 1 } : next);
    } catch {
      // Aborted by the user — no-op.
    }
  };

  const showEyeDropper = withEyeDropper && eyeDropperSupported;

  if (!showEyeDropper && !withFormatSelect && !withInput) return null;

  return (
    <div className={styles.toolbar}>
      {showEyeDropper && (
        <button
          type="button"
          aria-label="Pick color from screen"
          className={styles.eyeDropper}
          onClick={handleEyeDropper}
          disabled={disabled}
        >
          <Pipette size={14} />
        </button>
      )}
      {withFormatSelect && formats.length > 1 && (
        <select
          className={styles.formatSelect}
          value={format}
          onChange={(e) => onFormatChange(e.target.value as ColorFormat)}
          disabled={disabled}
          aria-label="Color format"
        >
          {formats.map((f) => (
            <option key={f} value={f}>
              {f.toUpperCase()}
            </option>
          ))}
        </select>
      )}
      {withInput && (
        <input
          type="text"
          className={styles.input}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitDraft}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commitDraft();
              (e.target as HTMLInputElement).blur();
            }
          }}
          aria-invalid={invalid || undefined}
          disabled={disabled}
        />
      )}
    </div>
  );
}

interface ColorPickerBodyProps {
  color: RgbaColor;
  format: ColorFormat;
  formats: ColorFormat[];
  withoutAlpha: boolean;
  withEyeDropper: boolean;
  withFormatSelect: boolean;
  withInput: boolean;
  disabled?: boolean;
  onColorChange: (color: RgbaColor) => void;
  onFormatChange: (format: ColorFormat) => void;
}

function ColorPickerBody(props: ColorPickerBodyProps) {
  return (
    <div className={styles.body}>
      <ColorPickerSurface
        color={props.color}
        onChange={props.onColorChange}
        withoutAlpha={props.withoutAlpha}
      />
      <ColorPickerToolbar
        color={props.color}
        format={props.format}
        formats={props.formats}
        withoutAlpha={props.withoutAlpha}
        withEyeDropper={props.withEyeDropper}
        withFormatSelect={props.withFormatSelect}
        withInput={props.withInput}
        disabled={props.disabled}
        onColorChange={props.onColorChange}
        onFormatChange={props.onFormatChange}
      />
    </div>
  );
}

/**
 * A color picker with a 2D saturation/value area, hue and alpha sliders,
 * a format selector (hex, rgb, hsl), editable text input, and optional
 * native EyeDropper integration. Renders inside a popover by default or
 * inline via the `inline` prop.
 *
 * @component
 * @param value - Controlled color value as a CSS color string.
 * @param defaultValue - Uncontrolled initial color value. Defaults to `"#ff7b00"`.
 * @param onChange - Called with a CSS color string in the active format.
 * @param inline - Render the picker inline instead of in a popover.
 * @param withoutAlpha - Hide the alpha channel and force opaque output.
 * @param withEyeDropper - Show the eye dropper button (when supported). Defaults to `true`.
 * @param formats - Formats available in the dropdown. Defaults to `["hex", "rgb", "hsl"]`.
 * @returns A color picker form control.
 *
 * @example
 * // Uncontrolled, popover
 * <ColorPicker defaultValue="#ff7b00" onChange={(c) => console.log(c)} />
 *
 * @example
 * // Controlled, inline, no alpha
 * const [color, setColor] = useState("#ff7b00");
 * <ColorPicker inline withoutAlpha value={color} onChange={setColor} />
 */
const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  defaultValue,
  onChange,
  inline = false,
  withoutAlpha = false,
  withEyeDropper = true,
  withFormatSelect = true,
  withInput = true,
  formats = ALL_FORMATS,
  defaultFormat,
  label,
  hint,
  error,
  required = false,
  id,
  disabled = false,
  className,
}) => {
  const initialValue = value ?? defaultValue;
  const initialFormat =
    defaultFormat ?? (initialValue ? detectFormat(initialValue) : "hex");

  const [format, setFormat] = React.useState<ColorFormat>(initialFormat);
  const [internalColor, setInternalColor] = React.useState<RgbaColor>(() => {
    if (initialValue) {
      const parsed = parseColorString(initialValue);
      if (parsed) return withoutAlpha ? { ...parsed, a: 1 } : parsed;
    }
    return DEFAULT_COLOR;
  });

  const isControlled = value !== undefined;
  const lastEmittedRef = React.useRef<string | null>(null);
  const portalContainer = usePortalContainer();

  React.useEffect(() => {
    if (!isControlled) return;
    if (value === lastEmittedRef.current) return;
    const parsed = parseColorString(value ?? "");
    if (parsed) {
      setInternalColor(withoutAlpha ? { ...parsed, a: 1 } : parsed);
    }
  }, [value, isControlled, withoutAlpha]);

  const handleColorChange = (next: RgbaColor) => {
    setInternalColor(next);
    const formatted = formatColor(next, format, withoutAlpha);
    lastEmittedRef.current = formatted;
    onChange?.(formatted);
  };

  const handleFormatChange = (next: ColorFormat) => {
    setFormat(next);
    const formatted = formatColor(internalColor, next, withoutAlpha);
    lastEmittedRef.current = formatted;
    onChange?.(formatted);
  };

  const displayValue = formatColor(internalColor, format, withoutAlpha);
  const swatchColor = rgbaToHex(internalColor, !withoutAlpha);

  const body = (
    <ColorPickerBody
      color={internalColor}
      format={format}
      formats={formats}
      withoutAlpha={withoutAlpha}
      withEyeDropper={withEyeDropper}
      withFormatSelect={withFormatSelect}
      withInput={withInput}
      disabled={disabled}
      onColorChange={handleColorChange}
      onFormatChange={handleFormatChange}
    />
  );

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body as="label" htmlFor={id} className={styles.label} variant="label">
          {label}
          {required && <span className={styles.required}>*</span>}
        </Body>
      )}
      {inline ? (
        <div className={styles.inlineContent} data-slot="color-picker-inline">
          {body}
        </div>
      ) : (
        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger asChild>
            <button
              id={id}
              type="button"
              className={styles.trigger}
              disabled={disabled}
              data-error={error ? "true" : undefined}
              data-slot="color-picker-trigger"
            >
              <ColorPickerSwatch
                color={swatchColor}
                withAlphaPreview={!withoutAlpha}
                size="sm"
              />
              <span className={styles.triggerValue}>{displayValue}</span>
            </button>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Portal container={portalContainer ?? undefined}>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={6}
              className={styles.popoverContent}
              data-slot="color-picker-content"
            >
              {body}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      )}
      {hint && !error && (
        <Body variant="caption" className={styles.hint}>
          {hint}
        </Body>
      )}
      {error && (
        <Body variant="caption" className={styles.error}>
          {error}
        </Body>
      )}
    </div>
  );
};

export { ColorPicker, ColorPickerSwatch };

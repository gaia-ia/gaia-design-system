import * as React from "react";

export type ColorFormat = "hex" | "rgb" | "hsl";

export interface ColorPickerProps {
  /** Controlled color value as a CSS color string (e.g. `#ff7b00`, `rgba(255,123,0,1)`). */
  value?: string;
  /** Uncontrolled initial color value. */
  defaultValue?: string;
  /** Emitted whenever the color changes. Returns a CSS color string in the current format. */
  onChange?: (value: string) => void;
  /** Render the picker inline instead of inside a popover. */
  inline?: boolean;
  /** Hide the alpha channel slider and force opaque colors. */
  withoutAlpha?: boolean;
  /** Show the native EyeDropper button when supported. Defaults to `true`. */
  withEyeDropper?: boolean;
  /** Show the format selector dropdown. Defaults to `true`. */
  withFormatSelect?: boolean;
  /** Show the editable text input. Defaults to `true`. */
  withInput?: boolean;
  /** Available formats in the dropdown. Defaults to all formats. */
  formats?: ColorFormat[];
  /** Initial color format. Defaults to `"hex"`. */
  defaultFormat?: ColorFormat;
  /** Label rendered above the trigger. */
  label?: string;
  /** Hint message rendered below the trigger. */
  hint?: string;
  /** Error message rendered below the trigger. Takes precedence over `hint`. */
  error?: string;
  /** Marks the field as required and renders an asterisk next to the label. */
  required?: boolean;
  /** Element id, applied to the trigger button. */
  id?: string;
  /** Disables the picker. */
  disabled?: boolean;
  /** Additional class names applied to the container. */
  className?: string;
}

export interface ColorPickerSwatchProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** CSS color string displayed in the swatch background. */
  color: string;
  /** Render with a transparent checkerboard backdrop to surface alpha. Defaults to `true`. */
  withAlphaPreview?: boolean;
  /** Visual size of the swatch. Defaults to `"md"`. */
  size?: "sm" | "md" | "lg";
}

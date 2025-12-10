import { Loader } from "lucide-react";
import React from "react";

import { Body } from "../../typography/Body";
import type { BodyVariant } from "../../typography/Body/types";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";

/**
 * A customizable button component supporting multiple variants, sizes, and optional icons.
 *
 * This component handles visual styling, loading states, and icon positioning.
 * When `loading` is true, a spinner is displayed and the button is disabled.
 *
 * @component
 * @param {React.PropsWithChildren<ButtonProps>} props - The props for the Button component.
 * @param {string} [props.className] - Additional custom class names.
 * @param {'primary' | 'secondary' | 'tertiary' | 'icon'} [props.variant='primary'] - Visual variant of the button.
 * @param {'small' | 'large' | 'extra_large'} [props.size='large'] - Button size.
 * @param {React.ComponentType<{ color?: string; size?: number }>} [props.icon] - Optional icon component to render.
 * @param {'left' | 'right'} [props.iconPosition='left'] - Position of the icon relative to the label.
 * @param {boolean} [props.loading=false] - Shows a loading spinner and disables the button when true.
 * @param {string} [props.iconColor] - Custom color for the icon. Defaults based on `variant` and `disabled` state.
 * @param {number} [props.iconSize=20] - Size of the icon in pixels.
 * @param {boolean} [props.disabled] - Disables the button when true.
 * @param {...React.ButtonHTMLAttributes<HTMLButtonElement>} props - Additional native button props.
 *
 * @returns {JSX.Element} The rendered Button component.
 *
 * @example
 * <Button variant="primary" size="large" onClick={() => alert("Clicked!")}>
 *   Submit
 * </Button>
 *
 * @example
 * <Button
 *   variant="secondary"
 *   icon={FiDownload}
 *   iconPosition="right"
 *   loading={isLoading}
 * >
 *   Download
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "large",
  icon: Icon,
  iconPosition = "left",
  loading = false,
  iconColor,
  iconSize = 20,
  disabled,
  ...props
}) => {
  const bodyVariant: BodyVariant =
    size === "extra_large"
      ? "body_bold"
      : size === "large"
        ? "small_body_bold"
        : "caption_bold";

  const iconColors = disabled
    ? "var(--color-text-400)"
    : variant === "primary"
      ? "var(--color-fixed-white)"
      : variant === "secondary"
        ? "var(--color-primary-400)"
        : variant === "icon"
          ? "var(--color-text-950)"
          : "var(--color-primary-400)";

  const _iconColor = iconColor || iconColors;

  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    { [styles.loading]: loading },
    className,
  );

  return (
    <button className={buttonClasses} {...props} disabled={disabled || loading}>
      {loading ? (
        <>
          <Loader color="var(--color-text-300)" className={styles.loader} />
          <Body variant={bodyVariant}>{children}</Body>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon color={_iconColor} size={iconSize} />
          )}
          <Body variant={bodyVariant}>{children}</Body>
          {Icon && iconPosition === "right" && (
            <Icon color={_iconColor} size={iconSize} />
          )}
        </>
      )}
    </button>
  );
};

Button.displayName = "Button";

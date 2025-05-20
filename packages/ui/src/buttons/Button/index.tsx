import { Loader } from "lucide-react";
import React from "react";

import { Body } from "../../typography/Body";
import type { BodyVariant } from "../../typography/Body/types";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";

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
    ? "var(--color-text-300)"
    : variant === "primary"
      ? "var(--color-fixed-white)"
      : variant === "secondary"
        ? "var(--color-text-900)"
        : variant === "icon"
          ? "var(--color-text-950)"
          : "var(--color-primary-800)";

  const _iconColor = iconColor || iconColors;

  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${loading ? styles.loading : ""} ${className}`;

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

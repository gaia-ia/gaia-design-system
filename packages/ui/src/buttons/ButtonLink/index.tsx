import { Link } from "react-router-dom";

import { Body } from "../../typography/Body";
import { BodyVariant } from "../../typography/Body/types";
import styles from "./styles.module.css";
import { ButtonLinkProps } from "./types";

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  variant = "primary",
  size = "large",
  icon: Icon,
  iconPosition = "left",
  iconColor,
  iconSize = 20,
  ...props
}) => {
  const bodyVariant: BodyVariant =
    size === "extra_large"
      ? "body_bold"
      : size === "large"
        ? "small_body_bold"
        : "caption_bold";

  const iconColors =
    variant === "primary"
      ? "var(--color-fixed-white)"
      : variant === "secondary"
        ? "var(--color-text-900)"
        : variant === "icon"
          ? "var(--color-text-950)"
          : "var(--color-primary-800)";

  const _iconColor = iconColor || iconColors;

  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <Link className={buttonClasses} {...props}>
      {Icon && iconPosition === "left" && (
        <Icon color={_iconColor} size={iconSize} />
      )}
      <Body variant={bodyVariant}>{children}</Body>
      {Icon && iconPosition === "right" && (
        <Icon color={_iconColor} size={iconSize} />
      )}
    </Link>
  );
};

ButtonLink.displayName = "ButtonLink";

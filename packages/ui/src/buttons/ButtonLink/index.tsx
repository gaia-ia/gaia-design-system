import { Body } from "../../typography/Body";
import { BodyVariant } from "../../typography/Body/types";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { ButtonLinkProps } from "./types";

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  variant = "primary",
  size = "large",
  icon: Icon,
  iconPosition = "left",
  ...props
}) => {
  const bodyVariant: BodyVariant =
    size === "extra_large"
      ? "body_bold"
      : size === "large"
        ? "small_body_bold"
        : "caption_bold";

  const iconColor =
    variant === "primary"
      ? "var(--color-fixed-white)"
      : variant === "secondary"
        ? "var(--color-text-900)"
        : "var(--color-primary-800)";

  return (
    <Link
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ""}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon color={iconColor} />}
      <Body variant={bodyVariant}>{children}</Body>
      {Icon && iconPosition === "right" && <Icon color={iconColor} />}
    </Link>
  );
};

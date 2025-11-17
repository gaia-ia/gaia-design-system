import { Link } from "react-router-dom";

import { Body } from "../../typography/Body";
import { BodyVariant } from "../../typography/Body/types";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { ButtonLinkProps } from "./types";

/**
 * A styled link component that visually resembles a button, with support for icons, variants, and sizes.
 *
 * This component wraps `react-router-dom`’s `<Link>` and accepts both button-like styling and routing behavior.
 * It supports left or right icons, customizable text styles, and theming via variants.
 *
 * @component
 * @param {ButtonLinkProps} props - Props for the ButtonLink component.
 * @param {React.ReactNode} props.children - The content inside the button link.
 * @param {string} [props.className] - Optional additional class names.
 * @param {'primary' | 'secondary' | 'outlined' | 'text' | 'icon'} [props.variant='primary'] - Visual variant of the button link.
 * @param {'small' | 'large' | 'extra_large'} [props.size='large'] - Size of the button link, which affects padding and typography.
 * @param {React.ComponentType<{ color?: string; size?: number }>} [props.icon] - Optional icon component to display.
 * @param {'left' | 'right'} [props.iconPosition='left'] - Position of the icon relative to the text content.
 * @param {string} [props.iconColor] - Optional override for icon color. Falls back to inferred color based on variant.
 * @param {number} [props.iconSize=20] - Pixel size of the icon.
 * @param {Omit<import('react-router-dom').LinkProps, 'to'> & { to: string }} props - Additional props passed to the underlying `Link` component, including `to`.
 *
 * @returns {JSX.Element} A button-styled `Link` component suitable for navigation.
 *
 * @example
 * <ButtonLink to="/profile" variant="secondary" icon={FiUser}>
 *   Profile
 * </ButtonLink>
 *
 * @example
 * <ButtonLink to="/signup" size="extra_large" icon={FiArrowRight} iconPosition="right">
 *   Get Started
 * </ButtonLink>
 */
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

  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className,
  );

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

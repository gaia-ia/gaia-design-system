import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styled.module.css";
import { BadgeProps } from "./types";

/**
 * A styled badge component used to display concise status or label text with predefined visual variants.
 *
 * Wraps content inside a styled `<div>` and uses the `Body` typography component with a `small_body` variant
 * for consistent text styling. Supports theme-based variants and forwards standard HTML div attributes.
 *
 * @component
 * @param {BadgeProps} props - Props for the `Badge` component.
 * @param {React.ReactNode} props.children - The content displayed inside the badge (usually short text).
 * @param {'primary' | 'secondary' | 'success' | 'error' | 'warning'} [props.variant='primary'] - Visual style variant of the badge.
 * @returns {JSX.Element} A stylized badge element.
 *
 * @example
 * <Badge>Default</Badge>
 *
 * @example
 * <Badge variant="success">Active</Badge>
 *
 * @example
 * <Badge variant="error" aria-label="Error status">
 *   Error
 * </Badge>
 */
export const Badge = ({
  children,
  variant = "primary",
  ...props
}: BadgeProps) => {
  return (
    <div
      {...props}
      className={clsx(styles.badge, styles[variant], props.className)}
    >
      <Body variant="small_body" className={styles.badge_text}>
        {children}
      </Body>
    </div>
  );
};

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { CardProps } from "./types";

/**
 * A simple container component used to group content with consistent padding, border, and background styling.
 *
 * Applies base card styles via a CSS module and allows additional class names to be passed for customization.
 *
 * @component
 * @param {CardProps} props - Props for the `Card` component.
 * @param {React.ReactNode} props.children - The content to render inside the card.
 * @param {string} [props.className] - Optional custom class name(s) to apply alongside the default card styles.
 * @returns {JSX.Element} A styled card container element.
 *
 * @example
 * <Card>
 *   <h2>Card Title</h2>
 *   <p>This is some content inside the card.</p>
 * </Card>
 *
 * @example
 * <Card className="custom-shadow">
 *   <UserProfile />
 * </Card>
 */
export const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

Card.displayName = "Card";

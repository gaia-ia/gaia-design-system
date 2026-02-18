import { Slot } from "radix-ui";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { BadgeProps } from "./types";

/**
 * A flexible Badge component used to display status, labels, or small pieces of metadata.
 *
 * The component renders a `<span>` element by default, but can render its child
 * element instead using the `asChild` prop (via Radix UI's `Slot.Root`).
 *
 * Styling is controlled through the `variant` prop, which maps to CSS module styles
 * via the `data-variant` attribute.
 *
 * @component
 *
 * @param {BadgeProps} props - Props for the Badge component.
 * @param {"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"} [props.variant="default"]
 * Determines the visual appearance of the badge.
 *
 * - `"default"`: Primary badge styling.
 * - `"secondary"`: Muted or alternative styling.
 * - `"destructive"`: Indicates dangerous or destructive actions (e.g., errors).
 * - `"outline"`: Transparent background with border styling.
 * - `"ghost"`: Minimal styling with subtle emphasis.
 * - `"link"`: Styled similarly to a link.
 *
 * @param {boolean} [props.asChild=false]
 * When `true`, the Badge will render its child element as the root component
 * instead of a `<span>`. This allows integration with other components
 * (e.g., links or buttons) while preserving badge styling.
 *
 * @param {string} [props.className]
 * Additional CSS class names to merge with the default badge styles.
 *
 * @returns {JSX.Element} A styled badge element.
 *
 * @example
 * // Default badge
 * <Badge>New</Badge>
 *
 * @example
 * // Secondary badge
 * <Badge variant="secondary">Draft</Badge>
 *
 * @example
 * // Destructive badge
 * <Badge variant="destructive">Deleted</Badge>
 *
 * @example
 * // Outline badge with custom class
 * <Badge variant="outline" className="my-custom-class">
 *   Beta
 * </Badge>
 *
 * @example
 * // Rendering as a link using asChild
 * <Badge asChild>
 *   <a href="/notifications">3 Notifications</a>
 * </Badge>
 *
 * @remarks
 * - All standard `<span>` HTML attributes are supported via `React.ComponentProps<"span">`.
 * - The component applies:
 *   - `data-slot="badge"`
 *   - `data-variant={variant}`
 *   These attributes can be used for styling or testing.
 */
const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot.Root : "span";
  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={clsx(styles.badge, className)}
      {...props}
    />
  );
};

export { Badge };

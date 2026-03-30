import { Slot } from "radix-ui";

import clsx from "../../utils/clsx";
import { buttonSizeClasses, buttonVariantClasses } from "./constants";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";

/**
 * A versatile button component with multiple visual variants and sizes.
 * Supports render delegation via the `asChild` prop using Radix UI's `Slot`.
 *
 * @component
 * @param {ButtonProps} props - The button props.
 * @param {"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"} [props.variant="default"] - The visual style variant of the button.
 * @param {"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"} [props.size="default"] - The size of the button.
 * @param {boolean} [props.asChild=false] - When true, delegates rendering to the child element via Radix `Slot`.
 * @param {string} [props.className] - Additional CSS class names to apply.
 * @returns {React.ReactElement} The rendered button element.
 *
 * @example
 * <Button variant="default" size="sm">
 *   Click me
 * </Button>
 *
 * @example
 * <Button variant="outline" asChild>
 *   <a href="/link">Navigate</a>
 * </Button>
 */
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={clsx(
        styles.button,
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export { Button };

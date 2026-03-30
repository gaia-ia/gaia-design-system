import { Slot } from "radix-ui";

import clsx from "../../utils/clsx";
import { buttonSizeClasses, buttonVariantClasses } from "./constants";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";

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

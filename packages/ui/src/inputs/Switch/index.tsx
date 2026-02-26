import { clsx } from "@gaia-dev/ui";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import styles from "./styles.module.css";
import { SwitchProps } from "./types";

/**
 * A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/switch | Radix UI Switch}
 * that integrates project-specific styles and size variants.
 *
 * This component extends all props from `@radix-ui/react-switch`'s `SwitchPrimitive.Root`
 * and adds a `size` prop for controlling visual appearance.
 *
 * @typeParam SwitchProps - Extends all native Radix Switch root props.
 *
 * @param props - Component props.
 * @param props.size - Visual size of the switch.
 * - `"default"`: Standard size (default).
 * - `"sm"`: Smaller variant.
 * @param props.className - Optional additional class names merged with the base styles.
 * @param props.checked - Controlled checked state.
 * @param props.defaultChecked - Uncontrolled initial checked state.
 * @param props.onCheckedChange - Callback fired when the checked state changes.
 * @param props.disabled - Whether the switch is disabled.
 *
 * @returns A styled switch component with a thumb indicator.
 *
 * @example
 * // Uncontrolled usage
 * import { Switch } from "./Switch";
 *
 * export function NotificationsToggle() {
 *   return (
 *     <Switch defaultChecked onCheckedChange={(checked) => {
 *       console.log("Switch state:", checked);
 *     }} />
 *   );
 * }
 *
 * @example
 * // Controlled usage
 * import { useState } from "react";
 * import { Switch } from "./Switch";
 *
 * export function ControlledSwitch() {
 *   const [enabled, setEnabled] = useState(false);
 *
 *   return (
 *     <Switch
 *       size="sm"
 *       checked={enabled}
 *       onCheckedChange={setEnabled}
 *     />
 *   );
 * }
 *
 * @remarks
 * - All additional props are forwarded to `SwitchPrimitive.Root`.
 * - The `data-slot` and `data-size` attributes are applied for styling hooks.
 * - Styling is handled via `styles.root` and `styles.thumb`.
 * - Uses `clsx` to merge internal and external class names.
 */
function Switch({ className, size = "default", ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={clsx(styles.root, className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={styles.thumb}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

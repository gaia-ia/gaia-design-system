import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useId } from "react";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
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
 * @param props.label - Visible text rendered as a `<label>` linked to the switch, giving it an
 * accessible name. Without it, pass `aria-label` or `aria-labelledby` — an unnamed switch is
 * announced only as "switch".
 *
 * @returns A styled switch component with a thumb indicator.
 *
 * @example
 * // Uncontrolled usage
 * import { Switch } from "./Switch";
 *
 * export function NotificationsToggle() {
 *   return (
 *     <Switch
 *       label="Ativar notificações"
 *       defaultChecked
 *       onCheckedChange={(checked) => {
 *         console.log("Switch state:", checked);
 *       }}
 *     />
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
 *       aria-label="Modo escuro"
 *       checked={enabled}
 *       onCheckedChange={setEnabled}
 *     />
 *   );
 * }
 *
 * @remarks
 * - All additional props (including `aria-label`/`aria-labelledby`) are forwarded to `SwitchPrimitive.Root`.
 * - When `label` is set, the root and label are wrapped in an inline `<span data-slot="switch-field">`.
 * - The `data-slot` and `data-size` attributes are applied for styling hooks.
 * - Styling is handled via `styles.root` and `styles.thumb`.
 * - Uses `clsx` to merge internal and external class names.
 */
function Switch({
  className,
  size = "default",
  label,
  id,
  ...props
}: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  const control = (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={clsx(styles.root, className)}
      id={label ? switchId : id}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={styles.thumb}
      />
    </SwitchPrimitive.Root>
  );

  if (!label) return control;

  return (
    <span className={styles.field} data-slot="switch-field">
      {control}
      <Body
        as="label"
        htmlFor={switchId}
        variant="small_body"
        className={styles.field_label}
      >
        {label}
      </Body>
    </span>
  );
}

export { Switch };

import { Root } from "@radix-ui/react-switch";

export type SwitchProps = React.ComponentProps<typeof Root> & {
  size?: "sm" | "default";
  /**
   * Visible text rendered as a `<label>` associated with the switch (accessible name).
   * When omitted, provide `aria-label` or `aria-labelledby` instead.
   */
  label?: React.ReactNode;
};

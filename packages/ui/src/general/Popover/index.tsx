import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";

/**
 * The root wrapper that manages the open/close state of the popover.
 *
 * This component should wrap `PopoverTrigger` and `PopoverContent`.
 * It supports both controlled and uncontrolled usage.
 *
 * @component
 * @param {React.ComponentProps<typeof PopoverPrimitive.Root>} props - Props passed to Radix's `Popover.Root`.
 * @returns {JSX.Element}
 *
 * @example
 * <Popover>
 *   <PopoverTrigger>Open</PopoverTrigger>
 *   <PopoverContent>Popover body</PopoverContent>
 * </Popover>
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

/**
 * The interactive element that opens the popover when triggered (e.g. clicked).
 *
 * Usually a button, icon, or other focusable element.
 *
 * @component
 * @param {React.ComponentProps<typeof PopoverPrimitive.Trigger>} props - Props passed to Radix's `Popover.Trigger`.
 * @returns {JSX.Element}
 *
 * @example
 * <PopoverTrigger>
 *   <Button>Toggle</Button>
 * </PopoverTrigger>
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/**
 * The floating content element shown when the popover is open.
 *
 * Positioned relative to the trigger or anchor, with optional alignment and offset.
 *
 * @component
 * @param {React.ComponentProps<typeof PopoverPrimitive.Content>} props - Popover content props.
 * @param {string} [props.className] - Optional class name(s) for styling.
 * @param {"start" | "center" | "end"} [props.align="center"] - Alignment relative to the trigger.
 * @param {number} [props.sideOffset=4] - Pixel offset between the trigger and content.
 * @returns {JSX.Element}
 *
 * @example
 * <PopoverContent align="end" sideOffset={8}>
 *   <p>This is a popover!</p>
 * </PopoverContent>
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={clsx(styles.popoverContent, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/**
 * Optional anchor used to control where the popover content is positioned.
 *
 * When provided, the popover aligns to the anchor instead of the trigger.
 *
 * @component
 * @param {React.ComponentProps<typeof PopoverPrimitive.Anchor>} props - Anchor props.
 * @returns {JSX.Element}
 *
 * @example
 * <PopoverAnchor>
 *   <span ref={customAnchorRef} />
 * </PopoverAnchor>
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };

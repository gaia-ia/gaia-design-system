"use client";

import { XIcon } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as React from "react";

import { Button } from "../../buttons/Button";
import clsx from "../../utils/clsx";
import { usePortalContainer } from "../../utils/portalContainer";
import styles from "./styles.module.css";
import type { SheetContentProps } from "./types";

/**
 * Root component for the sheet system.
 *
 * Provides context and accessibility bindings for slide-in panel behavior.
 * Must wrap `SheetTrigger` and `SheetContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Root>} props - Props passed to Radix's `Dialog.Root`.
 * @returns {JSX.Element}
 *
 * @example
 * <Sheet open={open} onOpenChange={setOpen}>
 *   <SheetTrigger>Open</SheetTrigger>
 *   <SheetContent>Sheet content</SheetContent>
 * </Sheet>
 */
function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

/**
 * Element that triggers the sheet to open when interacted with.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Trigger>} props - Trigger props.
 * @returns {JSX.Element}
 *
 * @example
 * <SheetTrigger>
 *   <button>Open Sheet</button>
 * </SheetTrigger>
 */
function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>,
) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

/**
 * A close button or element that dismisses the sheet when clicked.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Close>} props - Close button props.
 * @returns {JSX.Element}
 */
function SheetClose(props: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

/**
 * Mounts the sheet content outside of the regular DOM hierarchy.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Portal>} props - Portal props.
 * @returns {JSX.Element}
 */
function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>,
) {
  const container = usePortalContainer();
  return (
    <SheetPrimitive.Portal
      data-slot="sheet-portal"
      container={container ?? undefined}
      {...props}
    />
  );
}

/**
 * The semi-transparent overlay behind the sheet content.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Overlay>} props - Overlay props.
 * @returns {JSX.Element}
 */
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={clsx(styles.overlay, className)}
      {...props}
    />
  );
}

/**
 * The main sheet panel that slides in from a screen edge.
 *
 * Includes an optional close button and manages focus trapping and ARIA roles.
 *
 * @component
 * @param {SheetContentProps} props
 * @param {"top" | "right" | "bottom" | "left"} [props.side="right"] - Edge the sheet slides in from.
 * @param {boolean} [props.showCloseButton=true] - Whether to show the top-right close icon button.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <SheetContent side="left">
 *   <SheetHeader>
 *     <SheetTitle>Title</SheetTitle>
 *   </SheetHeader>
 * </SheetContent>
 */
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={clsx(styles.content, className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            className={styles.closeButton}
            asChild
          >
            <Button variant="ghost" size="icon-sm">
              <XIcon />
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

/**
 * A layout container for the sheet title and description.
 *
 * Typically placed at the top of `SheetContent`.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Standard div props.
 * @returns {JSX.Element}
 */
function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={clsx(styles.header, className)}
      {...props}
    />
  );
}

/**
 * A layout container for footer content (e.g. action buttons).
 *
 * Typically placed at the bottom of `SheetContent`.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Standard div props.
 * @returns {JSX.Element}
 */
function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={clsx(styles.footer, className)}
      {...props}
    />
  );
}

/**
 * Accessible title element for the sheet.
 *
 * Automatically linked to the sheet via ARIA.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Title>} props - Title props.
 * @returns {JSX.Element}
 */
function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={clsx(styles.title, className)}
      {...props}
    />
  );
}

/**
 * Accessible description element for the sheet.
 *
 * Automatically linked to the sheet via ARIA.
 *
 * @component
 * @param {React.ComponentProps<typeof SheetPrimitive.Description>} props - Description props.
 * @returns {JSX.Element}
 */
function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={clsx(styles.description, className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};

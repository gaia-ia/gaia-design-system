import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import * as React from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";

/**
 * Root component for the dialog system.
 *
 * Provides context and accessibility bindings for modal behavior. Must wrap the `DialogTrigger` and `DialogContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Root>} props - Props passed to Radix's `Dialog.Root`.
 * @returns {JSX.Element}
 *
 * @example
 * <Dialog open={open} onOpenChange={setOpen}>
 *   <DialogTrigger>Open</DialogTrigger>
 *   <DialogContent>Modal content</DialogContent>
 * </Dialog>
 */
function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

/**
 * Element that triggers the dialog to open when interacted with (e.g. clicked).
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Trigger>} props - Trigger props.
 * @returns {JSX.Element}
 *
 * @example
 * <DialogTrigger>
 *   <button>Open Dialog</button>
 * </DialogTrigger>
 */
function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

/**
 * Mounts the dialog content outside of the regular DOM hierarchy.
 *
 * Useful for positioning and stacking modals correctly above the page content.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Portal>} props - Portal props.
 * @returns {JSX.Element}
 */
function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>,
) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

/**
 * A close button or element that dismisses the dialog when clicked.
 *
 * Often used in header or corner positions inside `DialogContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Close>} props - Close button props.
 * @returns {JSX.Element}
 */
function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>,
) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

/**
 * The semi-transparent overlay behind the dialog content.
 *
 * Adds backdrop styling and disables background interactions.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Overlay>} props - Overlay props.
 * @returns {JSX.Element}
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={clsx(styles.dialogOverlay, className)}
      {...props}
    />
  );
}

/**
 * The main dialog container that appears when open.
 *
 * Includes optional close button and manages focus trapping, ARIA roles, and layout styling.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Content> & {
 *   showCloseButton?: boolean;
 * }} props
 * @param {boolean} [props.showCloseButton=true] - Whether to show the top-right close icon button.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <DialogContent>
 *   <DialogHeader>
 *     <DialogTitle>Title</DialogTitle>
 *     <DialogDescription>Description</DialogDescription>
 *   </DialogHeader>
 *   <p>Body content here.</p>
 *   <DialogFooter>
 *     <button>Cancel</button>
 *     <button>Confirm</button>
 *   </DialogFooter>
 * </DialogContent>
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={clsx(styles.dialogContent, className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={styles.dialogClose}
          >
            <XIcon />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

/**
 * A layout container for dialog titles and descriptions.
 *
 * Typically placed at the top of `DialogContent`.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Standard div props.
 * @returns {JSX.Element}
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={clsx(styles.dialogHeader, className)}
      {...props}
    />
  );
}

/**
 * A layout container for footer content (e.g. buttons).
 *
 * Typically placed at the bottom of `DialogContent`.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Standard div props.
 * @returns {JSX.Element}
 */
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={clsx(styles.dialogFooter, className)}
      {...props}
    />
  );
}

/**
 * Accessible title element for the dialog.
 *
 * Should describe the purpose of the dialog. Automatically linked via ARIA.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Title>} props - Title props.
 * @returns {JSX.Element}
 */
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={clsx(styles.dialogTitle, className)}
      {...props}
    />
  );
}

/**
 * Accessible description element for the dialog.
 *
 * Should provide supplemental guidance or context. Automatically linked via ARIA.
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Description>} props - Description props.
 * @returns {JSX.Element}
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={clsx(styles.dialogDescription, className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

import { Slot } from "radix-ui";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { EmptyMediaProps } from "./types";

/**
 * Root container for an empty state. Renders a centered, dashed-border block
 * intended to wrap a header, optional media, and call-to-action content.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Native `<div>` props.
 * @returns {JSX.Element} The empty state container.
 *
 * @example
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
 *     <EmptyTitle>No messages yet</EmptyTitle>
 *     <EmptyDescription>You'll see new messages here.</EmptyDescription>
 *   </EmptyHeader>
 * </Empty>
 */
function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={clsx(styles.empty, className)}
      {...props}
    />
  );
}

/**
 * Header section of an `Empty` state. Stacks the media, title, and description
 * vertically and constrains them to a readable max-width.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Native `<div>` props.
 * @returns {JSX.Element} The empty state header.
 */
function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={clsx(styles.header, className)}
      {...props}
    />
  );
}

/**
 * Media slot for the `Empty` header — typically an icon or illustration.
 *
 * The `icon` variant renders a 2rem rounded square with a muted background,
 * matching shadcn's compact icon treatment. The `default` variant is a
 * transparent wrapper for larger custom artwork.
 *
 * @component
 * @param {EmptyMediaProps} props - Component props.
 * @param {"default" | "icon"} [props.variant="default"] - Visual treatment.
 * @returns {JSX.Element} The media slot.
 */
function EmptyMedia({
  className,
  variant = "default",
  ...props
}: EmptyMediaProps) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={clsx(styles.media, className)}
      {...props}
    />
  );
}

/**
 * Title for the `Empty` state. Renders as a small heading using the heading
 * font family.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Native `<div>` props.
 * @param {boolean} [props.asChild=false] - Render the child element instead
 *   (e.g. an `<h2>`), keeping the title styles — for a real heading level.
 * @returns {JSX.Element} The empty state title.
 */
function EmptyTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      data-slot="empty-title"
      className={clsx(styles.title, className)}
      {...props}
    />
  );
}

/**
 * Description for the `Empty` state. Renders muted secondary text and styles
 * any inline anchors with an underline and primary-colored hover.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Native `<div>` props.
 * @returns {JSX.Element} The empty state description.
 */
function EmptyDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-description"
      className={clsx(styles.description, className)}
      {...props}
    />
  );
}

/**
 * Content section of the `Empty` state — use it to host action buttons or
 * supplementary controls below the header.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Native `<div>` props.
 * @returns {JSX.Element} The empty state content.
 */
function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={clsx(styles.content, className)}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
};

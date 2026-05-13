import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot } from "radix-ui";
import * as React from "react";

import { clsx } from "../../utils/clsx";
import styles from "./styles.module.css";
import type { BreadcrumbLinkProps } from "./types";

/**
 * Root navigation landmark for breadcrumb trails.
 *
 * @component
 * @param props - Props passed to the underlying `<nav>` element.
 * @returns A `<nav aria-label="breadcrumb">` wrapper.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem><BreadcrumbPage>Atual</BreadcrumbPage></BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 */
function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

/**
 * Ordered list that lays out breadcrumb items horizontally with wrapping.
 *
 * @component
 * @param className - Additional class names.
 * @param props - Props passed to the underlying `<ol>` element.
 * @returns A styled `<ol>` for breadcrumb items.
 */
function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={clsx(styles.list, className)}
      {...props}
    />
  );
}

/**
 * A single breadcrumb entry wrapping a link or page label.
 *
 * @component
 * @param className - Additional class names.
 * @param props - Props passed to the underlying `<li>` element.
 * @returns A styled `<li>` for one breadcrumb step.
 */
function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={clsx(styles.item, className)}
      {...props}
    />
  );
}

/**
 * A navigable link within a breadcrumb trail.
 *
 * Supports `asChild` to delegate rendering to a custom element (e.g. a router `<Link>`).
 *
 * @component
 * @param asChild - When `true`, merges props onto the immediate child element via `Slot`.
 * @param className - Additional class names.
 * @param props - Props passed to the underlying `<a>` or slot element.
 * @returns A styled anchor with a hover color transition.
 *
 * @example
 * <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *
 * @example
 * <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
 */
function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={clsx(!asChild && styles.link, className)}
      {...props}
    />
  );
}

/**
 * Non-interactive label for the current page in the breadcrumb trail.
 *
 * Marked with `aria-current="page"` and `aria-disabled="true"`.
 *
 * @component
 * @param className - Additional class names.
 * @param props - Props passed to the underlying `<span>` element.
 * @returns A foreground-colored `<span>` for the active breadcrumb step.
 *
 * @example
 * <BreadcrumbPage>Detalhes do produto</BreadcrumbPage>
 */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clsx(styles.page, className)}
      {...props}
    />
  );
}

/**
 * Visual separator between breadcrumb items.
 *
 * Defaults to a `<ChevronRight>` icon; pass custom `children` to override.
 *
 * @component
 * @param children - Custom separator content. Defaults to `<ChevronRight />`.
 * @param className - Additional class names.
 * @param props - Props passed to the underlying `<li>` element.
 * @returns A presentational `<li>` that renders a separator icon.
 *
 * @example
 * <BreadcrumbSeparator />
 * <BreadcrumbSeparator>/</BreadcrumbSeparator>
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={clsx(styles.separator, className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

/**
 * Collapsed breadcrumb indicator for truncated paths.
 *
 * Renders a `<MoreHorizontal>` icon with a screen-reader-only label.
 *
 * @component
 * @param className - Additional class names.
 * @param props - Props passed to the underlying `<span>` element.
 * @returns A 36×36 icon placeholder indicating hidden steps.
 *
 * @example
 * <BreadcrumbItem>
 *   <BreadcrumbEllipsis />
 * </BreadcrumbItem>
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={clsx(styles.ellipsis, className)}
      {...props}
    >
      <MoreHorizontal className={styles.ellipsisIcon} />
      <span className={styles.srOnly}>Mais</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};

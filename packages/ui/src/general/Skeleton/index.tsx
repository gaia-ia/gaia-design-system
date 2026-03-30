import styles from "./styles.module.css";

/**
 * A lightweight skeleton placeholder component used to indicate loading states.
 *
 * This component renders a `<div>` element styled with a skeleton animation
 * (typically a shimmer or pulse effect via CSS). It accepts all standard
 * `<div>` props, allowing full flexibility for customization and composition.
 *
 * @param props - The props for the skeleton component.
 * @param props.className - Optional additional class names to merge with the default skeleton styles.
 * @returns A styled `<div>` element representing a loading placeholder.
 *
 * @example
 * // Basic usage
 * <Skeleton />
 *
 * @example
 * // With custom sizing
 * <Skeleton style={{ width: 200, height: 20 }} />
 *
 * @example
 * // With additional class names
 * <Skeleton className="rounded-md my-2" />
 *
 * @example
 * // Composing multiple skeletons for a card layout
 * function CardSkeleton() {
 *   return (
 *     <div className="p-4 space-y-2">
 *       <Skeleton className="h-6 w-1/2" />
 *       <Skeleton className="h-4 w-full" />
 *       <Skeleton className="h-4 w-3/4" />
 *     </div>
 *   );
 * }
 *
 * @remarks
 * - The base skeleton styling is imported from a CSS module (`styles.skeleton`).
 * - The `data-slot="skeleton"` attribute can be used for testing or styling hooks.
 * - If `className` is not provided, only the default skeleton styles are applied.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={`${styles.skeleton} ${className ?? ""}`}
      {...props}
    />
  );
}

export { Skeleton };

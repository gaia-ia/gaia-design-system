import { ChevronLeftIcon, ChevronRightIcon, Ellipsis } from "lucide-react";
import * as React from "react";

import { Button } from "../../buttons/Button";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";

/**
 * The root container for the pagination component.
 *
 * Adds `aria-label="pagination"` for accessibility and applies layout styles.
 *
 * @component
 * @param {React.ComponentProps<"nav">} props - Native `nav` element props.
 * @returns {JSX.Element}
 *
 * @example
 * <Pagination>
 *   <PaginationContent>
 *     ...
 *   </PaginationContent>
 * </Pagination>
 */
export function Pagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={clsx(styles.pagination, className)}
      {...props}
    />
  );
}

/**
 * A flex container (`ul`) for pagination items.
 *
 * Wraps pagination buttons, ellipsis, and controls in an accessible list.
 *
 * @component
 * @param {React.ComponentProps<"ul">} props - Native `ul` props.
 * @returns {JSX.Element}
 */
export function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={clsx(styles.paginationContent, className)}
      {...props}
    />
  );
}

/**
 * A wrapper for individual pagination elements like links or ellipsis.
 *
 * @component
 * @param {React.ComponentProps<"li">} props - Native `li` props.
 * @returns {JSX.Element}
 */
export function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Button>;

/**
 * A button-like link for individual pages.
 *
 * Visually indicates the active page via the `isActive` prop.
 *
 * @component
 * @param {PaginationLinkProps} props - Props for the pagination link.
 * @param {boolean} [props.isActive] - Highlights the button as the current page.
 * @param {() => void} [props.onClick] - Click handler to update the page.
 * @param {React.ReactNode} [props.children] - Typically the page number.
 * @returns {JSX.Element}
 *
 * @example
 * <PaginationLink isActive onClick={() => setPage(3)}>3</PaginationLink>
 */
export function PaginationLink({
  className,
  isActive,
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant={isActive ? "outlined" : "text"}
      data-slot="pagination-link"
      data-active={isActive}
      className={clsx(styles.paginationLink, className)}
      {...props}
    >
      {children}
    </Button>
  );
}

/**
 * A button to navigate to the previous page.
 *
 * Automatically applies `aria-label` and left-chevron icon.
 *
 * @component
 * @param {React.ComponentProps<typeof Button>} props - Button props.
 * @returns {JSX.Element}
 *
 * @example
 * <PaginationPrevious onClick={() => setPage(page - 1)} />
 */
export function PaginationPrevious({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      aria-label="Go to previous page"
      size="large"
      variant="text"
      icon={ChevronLeftIcon}
      iconPosition="left"
      onClick={onClick}
      className={clsx(styles.prevNext, className)}
      {...props}
    />
  );
}

/**
 * A button to navigate to the next page.
 *
 * Automatically applies `aria-label` and right-chevron icon.
 *
 * @component
 * @param {React.ComponentProps<typeof Button>} props - Button props.
 * @returns {JSX.Element}
 *
 * @example
 * <PaginationNext onClick={() => setPage(page + 1)} />
 */
export function PaginationNext({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      aria-label="Go to next page"
      size="large"
      variant="text"
      icon={ChevronRightIcon}
      iconPosition="right"
      onClick={onClick}
      className={clsx(styles.prevNext, className)}
      {...props}
    />
  );
}

/**
 * A non-interactive ellipsis element used when pagination range is truncated.
 *
 * Visually rendered as "...", and hidden from screen readers.
 *
 * @component
 * @param {React.ComponentProps<"span">} props - Native span props.
 * @returns {JSX.Element}
 *
 * @example
 * <PaginationEllipsis />
 */
export function PaginationEllipsis({
  className = "",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={clsx(styles.ellipsis, className)}
      {...props}
    >
      <span className="sr-only">
        <Ellipsis />
      </span>
    </span>
  );
}

/**
 * A full-featured pagination component that renders numbered links, previous/next buttons,
 * and automatic ellipsis for large page sets.
 *
 * Manages truncation logic and handles updating state via `setPage`.
 *
 * @component
 * @param {Object} props
 * @param {number} props.page - The current active page (1-based).
 * @param {number} props.totalPages - Total number of pages to paginate.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setPage - State setter to update the current page.
 * @param {React.ComponentProps<"nav">} [props] - Additional props passed to the root `<Pagination />`.
 * @returns {JSX.Element}
 *
 * @example
 * const [page, setPage] = useState(1);
 *
 * <PaginationAll page={page} setPage={setPage} totalPages={10} />
 */
export function PaginationAll({
  page,
  totalPages,
  setPage,
  ...props
}: {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
} & React.ComponentProps<"nav">) {
  let wasEllipsisInserted = false;

  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isFirst = pageNumber === 1;
          const isLast = pageNumber === totalPages;
          const isNearCurrent = Math.abs(pageNumber - page) <= 1;
          const isEdgeCaseStart = page <= 2 && pageNumber <= 3;
          const isEdgeCaseEnd =
            page >= totalPages - 2 && pageNumber >= totalPages - 2;

          const shouldRender =
            isFirst ||
            isLast ||
            isNearCurrent ||
            isEdgeCaseStart ||
            isEdgeCaseEnd;

          if (!shouldRender) {
            if (!wasEllipsisInserted) {
              wasEllipsisInserted = true;
              return (
                <PaginationItem key={`ellipsis-${pageNumber}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
            return null;
          }

          wasEllipsisInserted = false;

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={page === pageNumber}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

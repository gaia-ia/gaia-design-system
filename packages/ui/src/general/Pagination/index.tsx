import { Button } from "@gaia-dev/ui";
import { ChevronLeftIcon, ChevronRightIcon, Ellipsis } from "lucide-react";
import * as React from "react";

import styles from "./styles.module.css";

export function Pagination({
  className = "",
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={`${styles.pagination} ${className}`}
      {...props}
    />
  );
}

export function PaginationContent({
  className = "",
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={`${styles.paginationContent} ${className}`}
      {...props}
    />
  );
}

export function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export function PaginationLink({
  className = "",
  isActive,
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant={isActive ? "outlined" : "text"}
      data-slot="pagination-link"
      data-active={isActive}
      className={`${styles.paginationLink} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export function PaginationPrevious({
  className = "",
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
      className={`${styles.prevNext} ${className}`}
      {...props}
    >
      <span className={styles.label}>Previous</span>
    </Button>
  );
}

export function PaginationNext({
  className = "",
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
      className={`${styles.prevNext} ${className}`}
      {...props}
    >
      <span className={styles.label}>Next</span>
    </Button>
  );
}

export function PaginationEllipsis({
  className = "",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={`${styles.ellipsis} ${className}`}
      {...props}
    >
      <span className="sr-only">
        <Ellipsis />
      </span>
    </span>
  );
}

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
          const isEdgeCaseStart = page <= 4 && pageNumber <= 5;
          const isEdgeCaseEnd =
            page >= totalPages - 3 && pageNumber >= totalPages - 4;

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

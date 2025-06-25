import styles from "./styles.module.css";
import {
  CaptionProps,
  TableProps,
  TBodyProps,
  TDProps,
  TFootProps,
  THeadProps,
  THProps,
  TRProps,
} from "./types";

export function Table({ className = "", ...props }: TableProps) {
  return (
    <div data-slot="table-container" className={styles.tableContainer}>
      <table
        data-slot="table"
        className={`${styles.table} ${className}`}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className = "", ...props }: THeadProps) {
  return (
    <thead
      data-slot="table-header"
      className={`${styles.tableHeader} ${className}`}
      {...props}
    />
  );
}

export function TableBody({ className = "", ...props }: TBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={`${styles.tableBody} ${className}`}
      {...props}
    />
  );
}

export function TableFooter({ className = "", ...props }: TFootProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={`${styles.tableFooter} ${className}`}
      {...props}
    />
  );
}

export function TableRow({ className = "", ...props }: TRProps) {
  return (
    <tr
      data-slot="table-row"
      className={`${styles.tableRow} ${className}`}
      {...props}
    />
  );
}

export function TableHead({ className = "", ...props }: THProps) {
  return (
    <th
      data-slot="table-head"
      className={`${styles.tableHead} ${className}`}
      {...props}
    />
  );
}

export function TableCell({ className = "", ...props }: TDProps) {
  return (
    <td
      data-slot="table-cell"
      className={`${styles.tableCell} ${className}`}
      {...props}
    />
  );
}

export function TableCaption({ className = "", ...props }: CaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={`${styles.tableCaption} ${className}`}
      {...props}
    />
  );
}

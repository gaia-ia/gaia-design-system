import clsx from "../../utils/clsx";
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

/**
 * A responsive table wrapper component with consistent layout and styling.
 *
 * Renders a native `<table>` element wrapped in a scrollable container. Designed to be used with
 * child components like `TableHeader`, `TableBody`, `TableRow`, etc.
 *
 * @component
 * @param {TableProps} props - Props for the table element.
 * @param {string} [props.className] - Additional class name(s) for the `<table>`.
 * @param {string} [props.containerLabel="Tabela"] - Accessible name of the scroll container. The container is a focusable `role="region"`, so a table wider than the screen can be scrolled from the keyboard.
 * @returns {JSX.Element}
 *
 * @example
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Email</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Alice</TableCell>
 *       <TableCell>alice@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */
export function Table({
  className,
  containerLabel = "Tabela",
  ...props
}: TableProps) {
  return (
    <div
      data-slot="table-container"
      className={clsx(styles.tableContainer)}
      role="region"
      aria-label={containerLabel}
      // Focável para rolar tabelas largas pelo teclado (WCAG 2.1.1).
      tabIndex={0}
    >
      <table
        data-slot="table"
        className={clsx(styles.table, className)}
        {...props}
      />
    </div>
  );
}

/**
 * Renders a `<thead>` section with consistent styling.
 *
 * Should contain one or more `TableRow` elements with `TableHead` cells.
 *
 * @component
 * @param {THeadProps} props - Props for the `<thead>` element.
 * @returns {JSX.Element}
 */
export function TableHeader({ className, ...props }: THeadProps) {
  return (
    <thead
      data-slot="table-header"
      className={clsx(styles.tableHeader, className)}
      {...props}
    />
  );
}

/**
 * Renders a `<tbody>` element to wrap the main table rows.
 *
 * @component
 * @param {TBodyProps} props - Props for the `<tbody>` element.
 * @returns {JSX.Element}
 */
export function TableBody({ className, ...props }: TBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={clsx(styles.tableBody, className)}
      {...props}
    />
  );
}

/**
 * Renders a `<tfoot>` section, usually for summary or totals.
 *
 * @component
 * @param {TFootProps} props - Props for the `<tfoot>` element.
 * @returns {JSX.Element}
 */
export function TableFooter({ className, ...props }: TFootProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={clsx(styles.tableFooter, className)}
      {...props}
    />
  );
}

/**
 * Renders a `<tr>` (table row) with optional styling hooks.
 *
 * Should be used inside `TableHeader`, `TableBody`, or `TableFooter`. To mark a
 * row as selected, pass `data-state="selected"` (visual only) or
 * `aria-selected` (also exposed to assistive tech, for tables with
 * `role="grid"`); both get the selected style: a tinted background and a 3px
 * bar in the action orange on the first cell.
 *
 * @component
 * @param {TRProps} props - Props for the `<tr>` element.
 * @returns {JSX.Element}
 */
export function TableRow({ className, ...props }: TRProps) {
  return (
    <tr
      data-slot="table-row"
      className={clsx(styles.tableRow, className)}
      {...props}
    />
  );
}

/**
 * Renders a `<th>` (header cell) inside a table row.
 *
 * Usually placed inside `TableHeader`.
 *
 * @component
 * @param {THProps} props - Props for the `<th>` element.
 * @returns {JSX.Element}
 */
export function TableHead({ className, ...props }: THProps) {
  return (
    <th
      data-slot="table-head"
      className={clsx(styles.tableHead, className)}
      {...props}
    />
  );
}

/**
 * Renders a `<td>` (data cell) inside a table row.
 *
 * @component
 * @param {TDProps} props - Props for the `<td>` element.
 * @returns {JSX.Element}
 */
export function TableCell({ className, ...props }: TDProps) {
  return (
    <td
      data-slot="table-cell"
      className={clsx(styles.tableCell, className)}
      {...props}
    />
  );
}

/**
 * Renders a `<caption>` for the table.
 *
 * Used for describing the table's purpose or context (for accessibility).
 *
 * @component
 * @param {CaptionProps} props - Props for the `<caption>` element.
 * @returns {JSX.Element}
 */
export function TableCaption({ className, ...props }: CaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={clsx(styles.tableCaption, className)}
      {...props}
    />
  );
}

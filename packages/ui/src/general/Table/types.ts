export type TableProps = React.ComponentProps<"table"> & {
  /**
   * Accessible name of the scroll container (`role="region"`). The container
   * is keyboard-focusable so wide tables can be scrolled with the arrow keys.
   * Defaults to `"Tabela"`; pass something specific when a page has more than
   * one table.
   */
  containerLabel?: string;
};
export type THeadProps = React.ComponentProps<"thead">;
export type TBodyProps = React.ComponentProps<"tbody">;
export type TFootProps = React.ComponentProps<"tfoot">;
export type TRProps = React.ComponentProps<"tr">;
export type THProps = React.ComponentProps<"th">;
export type TDProps = React.ComponentProps<"td">;
export type CaptionProps = React.ComponentProps<"caption">;

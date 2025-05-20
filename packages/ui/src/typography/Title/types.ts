export type TitleVariant =
  | "display"
  | "headline"
  | "title"
  | "subheading-bold"
  | "subheading"
  | "subtitle"
  | "subtitle-small";

export interface TitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
  variant?: TitleVariant;
  htmlFor?: string;
}

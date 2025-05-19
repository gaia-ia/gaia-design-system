export type BodyVariant =
  | "body"
  | "body_medium"
  | "body_bold"
  | "small_body"
  | "small_body_medium"
  | "small_body_bold"
  | "caption"
  | "caption_bold"
  | "label"
  | "button"
  | "link";

export interface BodyProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
  variant?: BodyVariant;
  htmlFor?: string;
}

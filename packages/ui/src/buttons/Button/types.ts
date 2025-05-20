import { LucideIcon } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined" | "text" | "icon";
  iconColor?: string;
  iconSize?: number;
  size?: "extra_large" | "large" | "small" | "icon";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

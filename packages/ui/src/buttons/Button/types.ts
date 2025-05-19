import { LucideIcon } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined" | "text";
  size?: "extra_large" | "large" | "small";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

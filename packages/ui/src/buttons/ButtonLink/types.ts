import { LucideIcon } from "lucide-react";
import { LinkProps } from "react-router-dom";

export interface ButtonLinkProps extends LinkProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined" | "text" | "icon";
  iconColor?: string;
  iconSize?: number;
  size?: "extra_large" | "large" | "small";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

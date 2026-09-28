export type ProgressBarProps = {
  size: number;
  currentStep?: number;
  color?: string;
  className?: string;
} & Omit<React.ComponentProps<"div">, "color" | "children">;

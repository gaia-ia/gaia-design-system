import { Tabs as TabsPrimitive } from "radix-ui";

export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  variant?: "default" | "line";
};

import { Tabs as TabsPrimitive } from "radix-ui";
import * as React from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { TabsListProps, TabsProps } from "./types";

/**
 * A tabbed interface component built on Radix UI primitives.
 * Organizes content into multiple panels, with only one panel visible at a time.
 *
 * @component
 * @param {TabsProps} props - The tabs root props.
 * @param {"horizontal" | "vertical"} [props.orientation="horizontal"] - The orientation of the tab list.
 * @param {string} [props.defaultValue] - The value of the tab to be active by default.
 * @param {string} [props.value] - The controlled active tab value.
 * @param {(value: string) => void} [props.onValueChange] - Callback fired when the active tab changes.
 * @param {string} [props.className] - Additional CSS class names to apply.
 * @returns {React.ReactElement} The rendered tabs root element.
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 *
 * @example
 * // Vertical orientation
 * <Tabs defaultValue="tab1" orientation="vertical">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 */
function Tabs({ className, orientation = "horizontal", ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={clsx(styles.root, className)}
      {...props}
    />
  );
}

/**
 * A container for tab triggers that provides visual grouping and layout.
 *
 * @component
 * @param {TabsListProps} props - The tabs list props.
 * @param {"default" | "line"} [props.variant="default"] - The visual style variant.
 *
 * - `"default"`: Contained style with background.
 * - `"line"`: Minimal style with underline indicator.
 *
 * @param {string} [props.className] - Additional CSS class names to apply.
 * @returns {React.ReactElement} The rendered tabs list element.
 *
 * @example
 * <TabsList>
 *   <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 * </TabsList>
 *
 * @example
 * // Line variant
 * <TabsList variant="line">
 *   <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 * </TabsList>
 */
function TabsList({ className, variant = "default", ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={clsx(styles.list, className)}
      {...props}
    />
  );
}

/**
 * A button that activates its associated tab panel.
 *
 * @component
 * @param {React.ComponentProps<typeof TabsPrimitive.Trigger>} props - The tab trigger props.
 * @param {string} props.value - The unique value that associates the trigger with a content panel.
 * @param {boolean} [props.disabled] - When true, prevents the user from interacting with the tab.
 * @param {string} [props.className] - Additional CSS class names to apply.
 * @returns {React.ReactElement} The rendered tab trigger element.
 *
 * @example
 * <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *
 * @example
 * // Disabled trigger
 * <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
 */
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={clsx(styles.trigger, className)}
      {...props}
    />
  );
}

/**
 * The content panel associated with a tab trigger.
 * Only the content for the active tab is rendered.
 *
 * @component
 * @param {React.ComponentProps<typeof TabsPrimitive.Content>} props - The tab content props.
 * @param {string} props.value - The unique value that associates the content with a trigger.
 * @param {string} [props.className] - Additional CSS class names to apply.
 * @returns {React.ReactElement} The rendered tab content element.
 *
 * @example
 * <TabsContent value="tab1">
 *   <p>Content for tab 1</p>
 * </TabsContent>
 */
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={clsx(styles.content, className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };

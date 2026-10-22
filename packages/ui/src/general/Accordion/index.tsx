import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={clsx(styles.root, className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={clsx(styles.item, className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={clsx(styles.trigger, className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className={styles.chevron} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={clsx(styles.content, className)}
      {...props}
    >
      <div className={styles.contentInner}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

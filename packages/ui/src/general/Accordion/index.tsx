import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import styles from "./styles.module.css";

function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>,
) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={styles.root}
      {...props}
    />
  );
}

function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item>,
) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={styles.item}
      {...props}
    />
  );
}

function AccordionTrigger({
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={styles.trigger}
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
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={styles.content}
      {...props}
    >
      <div className={styles.contentInner}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

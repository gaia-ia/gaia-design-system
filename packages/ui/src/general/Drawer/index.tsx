import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import styles from "./styles.module.css";

type DrawerContextType = {
  close: () => void;
  open: () => void;
};

export const DrawerContext = React.createContext<DrawerContextType | null>(
  null,
);

function useDrawer() {
  const ctx = React.useContext(DrawerContext);
  if (!ctx) {
    throw new Error("useDrawer must be used inside <Drawer>");
  }
  return ctx;
}

function Drawer(props: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  const [open, setOpen] = React.useState(false);

  return (
    <DrawerContext.Provider
      value={{
        open: () => setOpen(true),
        close: () => setOpen(false),
      }}
    >
      <DrawerPrimitive.Root
        data-slot="drawer"
        open={open}
        onOpenChange={setOpen}
        {...props}
      />
    </DrawerContext.Provider>
  );
}

function DrawerTrigger(
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger>,
) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal(
  props: React.ComponentProps<typeof DrawerPrimitive.Portal>,
) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose(
  props: React.ComponentProps<typeof DrawerPrimitive.Close>,
) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay(
  props: React.ComponentProps<typeof DrawerPrimitive.Overlay>,
) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={styles.overlay}
      {...props}
    />
  );
}

function DrawerContent({
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={styles.content}
        {...props}
      >
        <div className={styles.handle} />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader(props: React.ComponentProps<"div">) {
  return <div data-slot="drawer-header" className={styles.header} {...props} />;
}

function DrawerFooter(props: React.ComponentProps<"div">) {
  return <div data-slot="drawer-footer" className={styles.footer} {...props} />;
}

function DrawerTitle(
  props: React.ComponentProps<typeof DrawerPrimitive.Title>,
) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={styles.title}
      {...props}
    />
  );
}

function DrawerDescription(
  props: React.ComponentProps<typeof DrawerPrimitive.Description>,
) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={styles.description}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  useDrawer,
};

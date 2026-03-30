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

/**
 * Custom hook to access the Drawer context.
 *
 * Provides `open()` and `close()` methods to programmatically control the drawer.
 * Must be used inside a `<Drawer>` component.
 *
 * @component
 * @returns The drawer context with `open` and `close` methods.
 *
 * @example
 * const { open, close } = useDrawer();
 * <button onClick={open}>Open</button>
 */
function useDrawer() {
  const ctx = React.useContext(DrawerContext);
  if (!ctx) {
    throw new Error("useDrawer must be used inside <Drawer>");
  }
  return ctx;
}

/**
 * Root component for the drawer system.
 *
 * Provides context and state management for the drawer. Must wrap `DrawerTrigger` and `DrawerContent`.
 * Supports `direction` prop to control where the drawer slides in from (`bottom`, `top`, `left`, `right`).
 *
 * @component
 * @param props - Props passed to Vaul's `Drawer.Root`.
 * @returns The rendered component.
 *
 * @example
 * <Drawer direction="bottom">
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Title</DrawerTitle>
 *       <DrawerDescription>Description</DrawerDescription>
 *     </DrawerHeader>
 *   </DrawerContent>
 * </Drawer>
 */
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

/**
 * Element that triggers the drawer to open when interacted with (e.g. clicked).
 *
 * @component
 * @param props - Trigger props.
 * @returns The rendered component.
 *
 * @example
 * <DrawerTrigger asChild>
 *   <button>Open Drawer</button>
 * </DrawerTrigger>
 */
function DrawerTrigger(
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger>,
) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

/**
 * Mounts the drawer content outside of the regular DOM hierarchy.
 *
 * Useful for positioning and stacking the drawer correctly above the page content.
 *
 * @component
 * @param props - Portal props.
 * @returns The rendered component.
 */
function DrawerPortal(
  props: React.ComponentProps<typeof DrawerPrimitive.Portal>,
) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

/**
 * A close button or element that dismisses the drawer when clicked.
 *
 * @component
 * @param props - Close button props.
 * @returns The rendered component.
 *
 * @example
 * <DrawerClose asChild>
 *   <button>Cancel</button>
 * </DrawerClose>
 */
function DrawerClose(
  props: React.ComponentProps<typeof DrawerPrimitive.Close>,
) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

/**
 * The semi-transparent overlay behind the drawer content.
 *
 * Adds backdrop styling with optional blur and disables background interactions.
 *
 * @component
 * @param props - Overlay props.
 * @returns The rendered component.
 */
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

/**
 * The main drawer container that appears when open.
 *
 * Includes a draggable handle (visible for bottom direction), overlay, and manages layout styling.
 *
 * @component
 * @param props - Content props.
 * @returns The rendered component.
 *
 * @example
 * <DrawerContent>
 *   <DrawerHeader>
 *     <DrawerTitle>Title</DrawerTitle>
 *     <DrawerDescription>Description</DrawerDescription>
 *   </DrawerHeader>
 *   <p>Body content here.</p>
 *   <DrawerFooter>
 *     <button>Confirm</button>
 *   </DrawerFooter>
 * </DrawerContent>
 */
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

/**
 * A layout container for drawer titles and descriptions.
 *
 * Typically placed at the top of `DrawerContent`. Text is centered for bottom/top directions
 * and left-aligned on desktop.
 *
 * @component
 * @param props - Standard div props.
 * @returns The rendered component.
 */
function DrawerHeader(props: React.ComponentProps<"div">) {
  return <div data-slot="drawer-header" className={styles.header} {...props} />;
}

/**
 * A layout container for footer content (e.g. buttons).
 *
 * Typically placed at the bottom of `DrawerContent`. Uses `margin-top: auto` to push to the bottom.
 *
 * @component
 * @param props - Standard div props.
 * @returns The rendered component.
 */
function DrawerFooter(props: React.ComponentProps<"div">) {
  return <div data-slot="drawer-footer" className={styles.footer} {...props} />;
}

/**
 * Accessible title element for the drawer.
 *
 * Should describe the purpose of the drawer. Automatically linked via ARIA.
 *
 * @component
 * @param props - Title props.
 * @returns The rendered component.
 */
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

/**
 * Accessible description element for the drawer.
 *
 * Should provide supplemental guidance or context. Automatically linked via ARIA.
 *
 * @component
 * @param props - Description props.
 * @returns The rendered component.
 */
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

import * as React from "react";

/**
 * Context that provides a DOM element to use as the portal container for
 * floating UI components (DropdownMenu, Popover, Dialog, etc.).
 *
 * When a value is set, portal content renders inside that element instead of
 * `document.body`, allowing it to inherit CSS properties like `color-scheme`
 * from a theme wrapper.
 *
 * Use `PortalContainerProvider` to supply the container and `usePortalContainer`
 * to consume it inside a component.
 */
const PortalContainerContext = React.createContext<HTMLElement | null>(null);

/**
 * Provides a DOM element as the portal rendering target for all descendant
 * portal-based components.
 *
 * Wrap your theme container with this provider so that dropdowns, dialogs,
 * and popovers render inside it and inherit `color-scheme` or other
 * inherited CSS properties.
 *
 * @example
 * // In a Storybook decorator or app theme wrapper:
 * const ThemeWrapper = ({ children }) => {
 *   const [container, setContainer] = React.useState(null);
 *   return (
 *     <PortalContainerProvider value={container}>
 *       <div ref={setContainer} className="dark">
 *         {children}
 *       </div>
 *     </PortalContainerProvider>
 *   );
 * };
 */
export const PortalContainerProvider = PortalContainerContext.Provider;

/**
 * Returns the current portal container element from context, or `null` if
 * none is provided (components fall back to `document.body`).
 *
 * @returns {HTMLElement | null} The portal container element.
 */
export function usePortalContainer(): HTMLElement | null {
  return React.useContext(PortalContainerContext);
}

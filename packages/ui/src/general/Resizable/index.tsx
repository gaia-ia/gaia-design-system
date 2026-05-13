import * as ResizablePrimitive from "react-resizable-panels";

import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { ResizableHandleProps, ResizablePanelGroupProps } from "./types";

/**
 * Container for a group of resizable panels. Controls layout direction and coordinates resizing.
 *
 * @component
 * @param {ResizablePanelGroupProps} props - Props forwarded to react-resizable-panels PanelGroup.
 * @param {string} [props.className] - Additional class name to apply.
 * @returns {JSX.Element}
 *
 * @example
 * <ResizablePanelGroup direction="horizontal">
 *   <ResizablePanel defaultSize={50}>Left</ResizablePanel>
 *   <ResizableHandle />
 *   <ResizablePanel defaultSize={50}>Right</ResizablePanel>
 * </ResizablePanelGroup>
 */
function ResizablePanelGroup({
  className,
  ...props
}: ResizablePanelGroupProps) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={clsx(styles.panelGroup, className)}
      {...props}
    />
  );
}

/**
 * An individual panel within a ResizablePanelGroup.
 *
 * @component
 * @param {ResizablePrimitive.PanelProps} props - Props forwarded to react-resizable-panels Panel.
 * @returns {JSX.Element}
 *
 * @example
 * <ResizablePanel defaultSize={50}>Content</ResizablePanel>
 */
function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

/**
 * A drag handle placed between resizable panels.
 *
 * @component
 * @param {ResizableHandleProps} props - Props for the resize handle.
 * @param {boolean} [props.withHandle] - When true, renders a visible grip indicator.
 * @param {string} [props.className] - Additional class name to apply.
 * @returns {JSX.Element}
 *
 * @example
 * <ResizableHandle withHandle />
 */
function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={clsx(styles.handle, className)}
      {...props}
    >
      {withHandle && <div className={styles.handleGrip} />}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

ResizablePanelGroup.displayName = "ResizablePanelGroup";
ResizablePanel.displayName = "ResizablePanel";
ResizableHandle.displayName = "ResizableHandle";

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };

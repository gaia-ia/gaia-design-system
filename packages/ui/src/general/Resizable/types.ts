import type * as ResizablePrimitive from "react-resizable-panels";

export type ResizablePanelGroupProps = ResizablePrimitive.PanelGroupProps;
export type ResizableHandleProps = ResizablePrimitive.PanelResizeHandleProps & {
  withHandle?: boolean;
};

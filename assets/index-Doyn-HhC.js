import{j as o}from"./jsx-runtime-CDt2p4po.js";import{R as s,T as a,P as i,C as l}from"./index-V__cqR5r.js";import{c as m}from"./clsx-CNgb8Gju.js";import{u as c}from"./portalContainer-Cr0I3QJP.js";const g="_popoverContent_m111e_1",v={popoverContent:g};function d({...e}){return o.jsx(s,{"data-slot":"popover",...e})}function P({...e}){return o.jsx(a,{"data-slot":"popover-trigger",...e})}function f({className:e,align:n="center",sideOffset:t=4,...r}){const p=c();return o.jsx(i,{container:p??void 0,children:o.jsx(l,{"data-slot":"popover-content",align:n,sideOffset:t,className:m(v.popoverContent,e),...r})})}d.__docgenInfo={description:`The root wrapper that manages the open/close state of the popover.

This component should wrap \`PopoverTrigger\` and \`PopoverContent\`.
It supports both controlled and uncontrolled usage.

@component
@param {React.ComponentProps<typeof PopoverPrimitive.Root>} props - Props passed to Radix's \`Popover.Root\`.
@returns {JSX.Element}

@example
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Popover body</PopoverContent>
</Popover>`,methods:[],displayName:"Popover"};f.__docgenInfo={description:`The floating content element shown when the popover is open.

Positioned relative to the trigger or anchor, with optional alignment and offset.

@component
@param {React.ComponentProps<typeof PopoverPrimitive.Content>} props - Popover content props.
@param {string} [props.className] - Optional class name(s) for styling.
@param {"start" | "center" | "end"} [props.align="center"] - Alignment relative to the trigger.
@param {number} [props.sideOffset=4] - Pixel offset between the trigger and content.
@returns {JSX.Element}

@example
<PopoverContent align="end" sideOffset={8}>
  <p>This is a popover!</p>
</PopoverContent>`,methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};P.__docgenInfo={description:`The interactive element that opens the popover when triggered (e.g. clicked).

Usually a button, icon, or other focusable element.

@component
@param {React.ComponentProps<typeof PopoverPrimitive.Trigger>} props - Props passed to Radix's \`Popover.Trigger\`.
@returns {JSX.Element}

@example
<PopoverTrigger>
  <Button>Toggle</Button>
</PopoverTrigger>`,methods:[],displayName:"PopoverTrigger"};export{d as P,P as a,f as b};

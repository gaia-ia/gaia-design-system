import{j as o}from"./jsx-runtime-DiklIkkE.js";import{R as p,T as s,P as i,C as l}from"./index-CVXJttz3.js";import{c as d}from"./clsx-DegBVMCo.js";import{u as m}from"./portalContainer-jaNfC5BB.js";const c="_popoverContent_m111e_1",g={popoverContent:c};function v({...e}){return o.jsx(p,{"data-slot":"popover",...e})}function P({...e}){return o.jsx(s,{"data-slot":"popover-trigger",...e})}function h({className:e,align:n="center",sideOffset:t=4,...r}){const a=m();return o.jsx(i,{container:a??void 0,children:o.jsx(l,{"data-slot":"popover-content",align:n,sideOffset:t,className:d(g.popoverContent,e),...r})})}v.__docgenInfo={description:`The root wrapper that manages the open/close state of the popover.

This component should wrap \`PopoverTrigger\` and \`PopoverContent\`.
It supports both controlled and uncontrolled usage.

@component
@param {React.ComponentProps<typeof PopoverPrimitive.Root>} props - Props passed to Radix's \`Popover.Root\`.
@returns {JSX.Element}

@example
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Popover body</PopoverContent>
</Popover>`,methods:[],displayName:"Popover"};h.__docgenInfo={description:`The floating content element shown when the popover is open.

Positioned relative to the trigger or anchor, with optional alignment and offset.

Accessibility: Radix renders it with \`role="dialog"\`, which needs an accessible name.
Pass \`aria-label\` (short text) or \`aria-labelledby\` (id of a heading inside the content);
both are forwarded to the content element.

@component
@param {React.ComponentProps<typeof PopoverPrimitive.Content>} props - Popover content props.
@param {string} [props.aria-label] - Accessible name of the popover dialog.
@param {string} [props.aria-labelledby] - Id of the element that names the popover dialog.
@param {string} [props.className] - Optional class name(s) for styling.
@param {"start" | "center" | "end"} [props.align="center"] - Alignment relative to the trigger.
@param {number} [props.sideOffset=4] - Pixel offset between the trigger and content.
@returns {JSX.Element}

@example
<PopoverContent align="end" sideOffset={8} aria-label="Detalhes">
  <p>This is a popover!</p>
</PopoverContent>`,methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};P.__docgenInfo={description:`The interactive element that opens the popover when triggered (e.g. clicked).

Usually a button, icon, or other focusable element.

@component
@param {React.ComponentProps<typeof PopoverPrimitive.Trigger>} props - Props passed to Radix's \`Popover.Trigger\`.
@returns {JSX.Element}

@example
<PopoverTrigger>
  <Button>Toggle</Button>
</PopoverTrigger>`,methods:[],displayName:"PopoverTrigger"};export{v as P,P as a,h as b};

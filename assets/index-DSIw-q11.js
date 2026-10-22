import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as g,T as c,C as m,a as i,b as u,D,P as h,O as f}from"./index-DH9gUxBT.js";import{B as y}from"./index-DTYX8Gcn.js";import{c as a}from"./clsx-DegBVMCo.js";import{u as C}from"./portalContainer-jaNfC5BB.js";import{X as _}from"./x-BPa992hr.js";const v="_dialogOverlay_1txq4_1",b="_dialogContent_1txq4_9",x="_dialogClose_1txq4_32",T="_dialogHeader_1txq4_55",P="_dialogFooter_1txq4_67",R="_dialogTitle_1txq4_79",N="_dialogDescription_1txq4_85",t={dialogOverlay:v,dialogContent:b,dialogClose:x,dialogHeader:T,dialogFooter:P,dialogTitle:R,dialogDescription:N};function j(o){return e.jsx(g,{"data-slot":"dialog",...o})}function O(o){return e.jsx(c,{"data-slot":"dialog-trigger",...o})}function l(o){const n=C();return e.jsx(h,{"data-slot":"dialog-portal",container:n??void 0,...o})}function A(o){return e.jsx(i,{"data-slot":"dialog-close",...o})}function r({className:o,...n}){return e.jsx(f,{"data-slot":"dialog-overlay",className:a(t.dialogOverlay,o),...n})}function I({className:o,children:n,showCloseButton:s=!0,closeLabel:p="Fechar",...d}){return e.jsxs(l,{children:[e.jsx(r,{}),e.jsxs(m,{"data-slot":"dialog-content",className:a(t.dialogContent,o),...d,children:[n,s&&e.jsx(i,{"data-slot":"dialog-close",className:t.dialogClose,asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon","aria-label":p,children:e.jsx(_,{})})})]})]})}function S({className:o,...n}){return e.jsx("div",{"data-slot":"dialog-header",className:a(t.dialogHeader,o),...n})}function E({className:o,...n}){return e.jsx("div",{"data-slot":"dialog-footer",className:a(t.dialogFooter,o),...n})}function F({className:o,...n}){return e.jsx(u,{"data-slot":"dialog-title",className:a(t.dialogTitle,o),...n})}function X({className:o,...n}){return e.jsx(D,{"data-slot":"dialog-description",className:a(t.dialogDescription,o),...n})}j.__docgenInfo={description:`Root component for the dialog system.

Provides context and accessibility bindings for modal behavior. Must wrap the \`DialogTrigger\` and \`DialogContent\`.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Root>} props - Props passed to Radix's \`Dialog.Root\`.
@returns {JSX.Element}

@example
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Modal content</DialogContent>
</Dialog>`,methods:[],displayName:"Dialog"};A.__docgenInfo={description:`A close button or element that dismisses the dialog when clicked.

Often used in header or corner positions inside \`DialogContent\`.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Close>} props - Close button props.
@returns {JSX.Element}`,methods:[],displayName:"DialogClose"};I.__docgenInfo={description:`The main dialog container that appears when open.

Includes optional close button and manages focus trapping, ARIA roles, and layout styling.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  closeLabel?: string;
}} props
@param {boolean} [props.showCloseButton=true] - Whether to show the top-right close icon button.
@param {string} [props.closeLabel="Fechar"] - Accessible name of the close icon button.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<DialogContent>
  <DialogHeader>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
  </DialogHeader>
  <p>Body content here.</p>
  <DialogFooter>
    <button>Cancel</button>
    <button>Confirm</button>
  </DialogFooter>
</DialogContent>`,methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Fechar"',computed:!1}}}};X.__docgenInfo={description:`Accessible description element for the dialog.

Should provide supplemental guidance or context. Automatically linked via ARIA.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Description>} props - Description props.
@returns {JSX.Element}`,methods:[],displayName:"DialogDescription"};E.__docgenInfo={description:`A layout container for footer content (e.g. buttons).

Typically placed at the bottom of \`DialogContent\`.

@component
@param {React.ComponentProps<"div">} props - Standard div props.
@returns {JSX.Element}`,methods:[],displayName:"DialogFooter"};S.__docgenInfo={description:`A layout container for dialog titles and descriptions.

Typically placed at the top of \`DialogContent\`.

@component
@param {React.ComponentProps<"div">} props - Standard div props.
@returns {JSX.Element}`,methods:[],displayName:"DialogHeader"};r.__docgenInfo={description:`The semi-transparent overlay behind the dialog content.

Adds backdrop styling and disables background interactions.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Overlay>} props - Overlay props.
@returns {JSX.Element}`,methods:[],displayName:"DialogOverlay"};l.__docgenInfo={description:`Mounts the dialog content outside of the regular DOM hierarchy.

Useful for positioning and stacking modals correctly above the page content.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Portal>} props - Portal props.
@returns {JSX.Element}`,methods:[],displayName:"DialogPortal"};F.__docgenInfo={description:`Accessible title element for the dialog.

Should describe the purpose of the dialog. Automatically linked via ARIA.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Title>} props - Title props.
@returns {JSX.Element}`,methods:[],displayName:"DialogTitle"};O.__docgenInfo={description:`Element that triggers the dialog to open when interacted with (e.g. clicked).

@component
@param {React.ComponentProps<typeof DialogPrimitive.Trigger>} props - Trigger props.
@returns {JSX.Element}

@example
<DialogTrigger>
  <button>Open Dialog</button>
</DialogTrigger>`,methods:[],displayName:"DialogTrigger"};export{j as D,O as a,I as b,S as c,F as d,X as e,E as f,A as g};

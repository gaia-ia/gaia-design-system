import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";import{c as z}from"./index-DW48STyt.js";import{u as y}from"./index-Bms3GI6n.js";import{c as I}from"./index-DRtXj63t.js";import{u as B}from"./index-C0xqUTPU.js";import{u as A}from"./index-Iz9Zo_Nw.js";import{u as U}from"./index-D8lkqur8.js";import{P as _}from"./index-CLlkV7gm.js";import{B as M}from"./index-D9Woksp6.js";import{c as W}from"./clsx-DegBVMCo.js";var b="Switch",[q,ie]=I(b),[H,V]=q(b),g=i.forwardRef((t,c)=>{const{__scopeSwitch:e,name:a,checked:n,defaultChecked:d,required:r,disabled:s,value:p="on",onCheckedChange:S,form:l,...v}=t,[h,m]=i.useState(null),x=y(c,f=>m(f)),k=i.useRef(!1),C=h?l||!!h.closest("form"):!0,[u,E]=B({prop:n,defaultProp:d??!1,onChange:S,caller:b});return o.jsxs(H,{scope:e,checked:u,disabled:s,children:[o.jsx(_.button,{type:"button",role:"switch","aria-checked":u,"aria-required":r,"data-state":N(u),"data-disabled":s?"":void 0,disabled:s,value:p,...v,ref:x,onClick:z(t.onClick,f=>{E(T=>!T),C&&(k.current=f.isPropagationStopped(),k.current||f.stopPropagation())})}),C&&o.jsx(j,{control:h,bubbles:!k.current,name:a,value:p,checked:u,required:r,disabled:s,form:l,style:{transform:"translateX(-100%)"}})]})});g.displayName=b;var R="SwitchThumb",P=i.forwardRef((t,c)=>{const{__scopeSwitch:e,...a}=t,n=V(R,e);return o.jsx(_.span,{"data-state":N(n.checked),"data-disabled":n.disabled?"":void 0,...a,ref:c})});P.displayName=R;var O="SwitchBubbleInput",j=i.forwardRef(({__scopeSwitch:t,control:c,checked:e,bubbles:a=!0,...n},d)=>{const r=i.useRef(null),s=y(r,d),p=A(e),S=U(c);return i.useEffect(()=>{const l=r.current;if(!l)return;const v=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(v,"checked").set;if(p!==e&&m){const x=new Event("click",{bubbles:a});m.call(l,e),l.dispatchEvent(x)}},[p,e,a]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:e,...n,tabIndex:-1,ref:s,style:{...n.style,...S,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});j.displayName=O;function N(t){return t?"checked":"unchecked"}var F=g,L=P;const D="_root_1f4ji_1",X="_thumb_1f4ji_68",$="_field_1f4ji_93",G="_field_label_1f4ji_99",w={root:D,thumb:X,field:$,field_label:G};function J({className:t,size:c="default",label:e,id:a,...n}){const d=i.useId(),r=a??d,s=o.jsx(F,{"data-slot":"switch","data-size":c,className:W(w.root,t),id:e?r:a,...n,children:o.jsx(L,{"data-slot":"switch-thumb",className:w.thumb})});return e?o.jsxs("span",{className:w.field,"data-slot":"switch-field",children:[s,o.jsx(M,{as:"label",htmlFor:r,variant:"small_body",className:w.field_label,children:e})]}):s}J.__docgenInfo={description:`A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/switch | Radix UI Switch}
that integrates project-specific styles and size variants.

This component extends all props from \`@radix-ui/react-switch\`'s \`SwitchPrimitive.Root\`
and adds a \`size\` prop for controlling visual appearance.

@typeParam SwitchProps - Extends all native Radix Switch root props.

@param props - Component props.
@param props.size - Visual size of the switch.
- \`"default"\`: Standard size (default).
- \`"sm"\`: Smaller variant.
@param props.className - Optional additional class names merged with the base styles.
@param props.checked - Controlled checked state.
@param props.defaultChecked - Uncontrolled initial checked state.
@param props.onCheckedChange - Callback fired when the checked state changes.
@param props.disabled - Whether the switch is disabled.
@param props.label - Visible text rendered as a \`<label>\` linked to the switch, giving it an
accessible name. Without it, pass \`aria-label\` or \`aria-labelledby\` — an unnamed switch is
announced only as "switch".

@returns A styled switch component with a thumb indicator.

@example
// Uncontrolled usage
import { Switch } from "./Switch";

export function NotificationsToggle() {
  return (
    <Switch
      label="Ativar notificações"
      defaultChecked
      onCheckedChange={(checked) => {
        console.log("Switch state:", checked);
      }}
    />
  );
}

@example
// Controlled usage
import { useState } from "react";
import { Switch } from "./Switch";

export function ControlledSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      size="sm"
      aria-label="Modo escuro"
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  );
}

@remarks
- All additional props (including \`aria-label\`/\`aria-labelledby\`) are forwarded to \`SwitchPrimitive.Root\`.
- When \`label\` is set, the root and label are wrapped in an inline \`<span data-slot="switch-field">\`.
- The \`data-slot\` and \`data-size\` attributes are applied for styling hooks.
- Styling is handled via \`styles.root\` and \`styles.thumb\`.
- Uses \`clsx\` to merge internal and external class names.`,methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "default"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Visible text rendered as a `<label>` associated with the switch (accessible name).\nWhen omitted, provide `aria-label` or `aria-labelledby` instead."}}};export{J as S};

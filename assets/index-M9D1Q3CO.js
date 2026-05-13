import{j as n}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{c as T}from"./index-DW48STyt.js";import{u as g}from"./index-DBCqBOGF.js";import{c as I}from"./index-BYJyBkN8.js";import{u as B}from"./index-DEN0ugiW.js";import{u as U}from"./index-Dya9PstJ.js";import{u as A}from"./index-Bav0yaTQ.js";import{P as y}from"./index-C9v26AP-.js";import{c as M}from"./clsx-CNgb8Gju.js";var f="Switch",[H,ae]=I(f),[q,O]=H(f),P=s.forwardRef((t,o)=>{const{__scopeSwitch:e,name:r,checked:a,defaultChecked:w,required:d,disabled:i,value:l="on",onCheckedChange:S,form:c,...b}=t,[p,h]=s.useState(null),v=g(o,m=>h(m)),C=s.useRef(!1),k=p?c||!!p.closest("form"):!0,[u,j]=B({prop:a,defaultProp:w??!1,onChange:S,caller:f});return n.jsxs(q,{scope:e,checked:u,disabled:i,children:[n.jsx(y.button,{type:"button",role:"switch","aria-checked":u,"aria-required":d,"data-state":N(u),"data-disabled":i?"":void 0,disabled:i,value:l,...b,ref:v,onClick:T(t.onClick,m=>{j(z=>!z),k&&(C.current=m.isPropagationStopped(),C.current||m.stopPropagation())})}),k&&n.jsx(R,{control:p,bubbles:!C.current,name:r,value:l,checked:u,required:d,disabled:i,form:c,style:{transform:"translateX(-100%)"}})]})});P.displayName=f;var _="SwitchThumb",E=s.forwardRef((t,o)=>{const{__scopeSwitch:e,...r}=t,a=O(_,e);return n.jsx(y.span,{"data-state":N(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:o})});E.displayName=_;var L="SwitchBubbleInput",R=s.forwardRef(({__scopeSwitch:t,control:o,checked:e,bubbles:r=!0,...a},w)=>{const d=s.useRef(null),i=g(d,w),l=U(e),S=A(o);return s.useEffect(()=>{const c=d.current;if(!c)return;const b=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(b,"checked").set;if(l!==e&&h){const v=new Event("click",{bubbles:r});h.call(c,e),c.dispatchEvent(v)}},[l,e,r]),n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:e,...a,tabIndex:-1,ref:i,style:{...a.style,...S,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});R.displayName=L;function N(t){return t?"checked":"unchecked"}var V=P,W=E;const D="_root_1g70i_1",F="_thumb_1g70i_63",x={root:D,thumb:F};function X({className:t,size:o="default",...e}){return n.jsx(V,{"data-slot":"switch","data-size":o,className:M(x.root,t),...e,children:n.jsx(W,{"data-slot":"switch-thumb",className:x.thumb})})}X.__docgenInfo={description:`A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/switch | Radix UI Switch}
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

@returns A styled switch component with a thumb indicator.

@example
// Uncontrolled usage
import { Switch } from "./Switch";

export function NotificationsToggle() {
  return (
    <Switch defaultChecked onCheckedChange={(checked) => {
      console.log("Switch state:", checked);
    }} />
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
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  );
}

@remarks
- All additional props are forwarded to \`SwitchPrimitive.Root\`.
- The \`data-slot\` and \`data-size\` attributes are applied for styling hooks.
- Styling is handled via \`styles.root\` and \`styles.thumb\`.
- Uses \`clsx\` to merge internal and external class names.`,methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "default"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};export{X as S};

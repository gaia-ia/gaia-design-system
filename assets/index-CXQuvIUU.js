import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{c as T}from"./index-DW48STyt.js";import{u as g}from"./index-DBCqBOGF.js";import{u as I,c as B}from"./index-D5bCXf9E.js";import{u as U}from"./index-Dya9PstJ.js";import{u as A}from"./index-Bav0yaTQ.js";import{P as y}from"./index-C9v26AP-.js";import{c as M}from"./clsx-CNgb8Gju.js";var f="Switch",[H,ae]=B(f),[q,O]=H(f),P=s.forwardRef((t,a)=>{const{__scopeSwitch:e,name:r,checked:n,defaultChecked:w,required:d,disabled:i,value:l="on",onCheckedChange:S,form:c,...b}=t,[p,h]=s.useState(null),v=g(a,m=>h(m)),C=s.useRef(!1),k=p?c||!!p.closest("form"):!0,[u,j]=I({prop:n,defaultProp:w??!1,onChange:S,caller:f});return o.jsxs(q,{scope:e,checked:u,disabled:i,children:[o.jsx(y.button,{type:"button",role:"switch","aria-checked":u,"aria-required":d,"data-state":N(u),"data-disabled":i?"":void 0,disabled:i,value:l,...b,ref:v,onClick:T(t.onClick,m=>{j(z=>!z),k&&(C.current=m.isPropagationStopped(),C.current||m.stopPropagation())})}),k&&o.jsx(R,{control:p,bubbles:!C.current,name:r,value:l,checked:u,required:d,disabled:i,form:c,style:{transform:"translateX(-100%)"}})]})});P.displayName=f;var _="SwitchThumb",E=s.forwardRef((t,a)=>{const{__scopeSwitch:e,...r}=t,n=O(_,e);return o.jsx(y.span,{"data-state":N(n.checked),"data-disabled":n.disabled?"":void 0,...r,ref:a})});E.displayName=_;var L="SwitchBubbleInput",R=s.forwardRef(({__scopeSwitch:t,control:a,checked:e,bubbles:r=!0,...n},w)=>{const d=s.useRef(null),i=g(d,w),l=U(e),S=A(a);return s.useEffect(()=>{const c=d.current;if(!c)return;const b=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(b,"checked").set;if(l!==e&&h){const v=new Event("click",{bubbles:r});h.call(c,e),c.dispatchEvent(v)}},[l,e,r]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:e,...n,tabIndex:-1,ref:i,style:{...n.style,...S,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});R.displayName=L;function N(t){return t?"checked":"unchecked"}var V=P,W=E;const D="_root_1g70i_1",F="_thumb_1g70i_63",x={root:D,thumb:F};function X({className:t,size:a="default",...e}){return o.jsx(V,{"data-slot":"switch","data-size":a,className:M(x.root,t),...e,children:o.jsx(W,{"data-slot":"switch-thumb",className:x.thumb})})}X.__docgenInfo={description:`A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/switch | Radix UI Switch}
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

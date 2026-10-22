import{j as i}from"./jsx-runtime-DiklIkkE.js";import{r as f}from"./index-DRjF_FHU.js";import{P as h}from"./index-CLlkV7gm.js";import{c as y}from"./clsx-DegBVMCo.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";var g="Separator",d="horizontal",x=["horizontal","vertical"],u=f.forwardRef((e,s)=>{const{decorative:l,orientation:t=d,...a}=e,r=D(t)?t:d,v=l?{role:"none"}:{"aria-orientation":r==="vertical"?r:void 0,role:"separator"};return i.jsx(h.div,{"data-orientation":r,...v,...a,ref:s})});u.displayName=g;function D(e){return x.includes(e)}var N=u;const T="_separator_dyoay_1",z={separator:T},n=({color:e,orientation:s="horizontal",decorative:l=!0,className:t,style:a,...r})=>i.jsx(N,{"data-slot":"separator",decorative:l,orientation:s,className:y(z.separator,t),style:e?{...a,backgroundColor:e}:a,...r});n.displayName="Divider";n.__docgenInfo={description:`A styled separator component based on \`@radix-ui/react-separator\`, used to visually or semantically divide content.

Supports both horizontal and vertical orientation, semantic or decorative use, and optional custom colors.
When \`decorative\` is \`true\`, the divider is hidden from screen readers for purely visual separation.

@component
@param {DividerProps} props - Props for the Divider component.
@param {string} [props.color] - Optional custom background color for the divider (applied inline via \`backgroundColor\`).
@param {"horizontal" | "vertical"} [props.orientation="horizontal"] - The axis along which the divider is rendered.
@param {boolean} [props.decorative=true] - If true, hides the divider from assistive technologies (role="none").
@param {string} [props.className] - Optional class names to apply to the divider element.
@returns {JSX.Element} A customizable visual or semantic divider.

@example
<Divider />

@example
<Divider orientation="vertical" style={{ height: "100%" }} />

@example
<Divider color="#ccc" className="my-divider" />`,methods:[],displayName:"Divider",props:{color:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},decorative:{required:!1,tsType:{name:"boolean"},description:`Define se o divider é puramente decorativo (visual) ou semântico.

- \`true\`: Apenas visual, leitores de tela ignoram (role="none")
- \`false\`: Separa conteúdos importantes, leitores de tela anunciam (role="separator")

@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/general/Divider",component:n,tags:["autodocs"],argTypes:{color:{control:{type:"color"},description:"The color of the divider"},orientation:{control:{type:"select",options:["horizontal","vertical"]},description:"The orientation of the divider"}}},o=e=>i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"48px"},children:i.jsx(n,{...e})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`(arg: Meta<typeof Divider>) => <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px"
}}>
    <Divider {...arg} />
  </div>`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,S as default};

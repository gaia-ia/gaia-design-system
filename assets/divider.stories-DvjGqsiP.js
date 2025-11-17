import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as f}from"./index-GiUgBvb1.js";import{P as h}from"./index-0zgVkeg7.js";import{c as y}from"./clsx-CNgb8Gju.js";import"./index-CROobee-.js";import"./index-DBCqBOGF.js";var g="Separator",d="horizontal",x=["horizontal","vertical"],u=f.forwardRef((e,i)=>{const{decorative:n,orientation:o=d,...s}=e,l=D(o)?o:d,v=n?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return t.jsx(h.div,{"data-orientation":l,...v,...s,ref:i})});u.displayName=g;function D(e){return x.includes(e)}var N=u;const T="_separator_dyoay_1",z={separator:T},a=({color:e,orientation:i="horizontal",decorative:n=!0,className:o,...s})=>t.jsx(N,{"data-slot":"separator",decorative:n,orientation:i,className:y(z.separator,o),style:e?{backgroundColor:e}:void 0,...s});a.displayName="Divider";a.__docgenInfo={description:`A styled separator component based on \`@radix-ui/react-separator\`, used to visually or semantically divide content.

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

@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Components/general/Divider",component:a,tags:["autodocs"],argTypes:{color:{control:{type:"color"},description:"The color of the divider"},orientation:{control:{type:"select",options:["horizontal","vertical"]},description:"The orientation of the divider"}}},r=e=>t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"48px"},children:t.jsx(a,{...e})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(arg: Meta<typeof Divider>) => <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px"
}}>
    <Divider {...arg} />
  </div>`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,P as default};

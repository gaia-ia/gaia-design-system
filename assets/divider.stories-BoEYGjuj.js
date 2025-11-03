import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as f}from"./index-GiUgBvb1.js";import{P as y}from"./index-0zgVkeg7.js";import"./index-CROobee-.js";import"./index-DBCqBOGF.js";var h="Separator",d="horizontal",g=["horizontal","vertical"],u=f.forwardRef((e,i)=>{const{decorative:n,orientation:r=d,...s}=e,l=x(r)?r:d,v=n?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return o.jsx(y.div,{"data-orientation":l,...v,...s,ref:i})});u.displayName=h;function x(e){return g.includes(e)}var T=u;const D="_separator_dyoay_1",N={separator:D},a=({color:e,orientation:i="horizontal",decorative:n=!0,className:r,...s})=>o.jsx(T,{"data-slot":"separator",decorative:n,orientation:i,className:`${N.separator} ${r||""}`,style:e?{backgroundColor:e}:void 0,...s});a.displayName="Divider";a.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{color:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},decorative:{required:!1,tsType:{name:"boolean"},description:`Define se o divider é puramente decorativo (visual) ou semântico.

- \`true\`: Apenas visual, leitores de tela ignoram (role="none")
- \`false\`: Separa conteúdos importantes, leitores de tela anunciam (role="separator")

@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/general/Divider",component:a,tags:["autodocs"],argTypes:{color:{control:{type:"color"},description:"The color of the divider"},orientation:{control:{type:"select",options:["horizontal","vertical"]},description:"The orientation of the divider"}}},t=e=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"48px"},children:o.jsx(a,{...e})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(arg: Meta<typeof Divider>) => <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px"
}}>
    <Divider {...arg} />
  </div>`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,A as default};

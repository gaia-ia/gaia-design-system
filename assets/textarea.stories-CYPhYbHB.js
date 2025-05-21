import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as s}from"./index-B4Vk6642.js";import"./index-GiUgBvb1.js";const N="_container_n8lke_1",f="_label_n8lke_8",k="_required_n8lke_12",v="_input_container_wrapper_n8lke_16",E="_input_container_n8lke_16",L="_error_n8lke_45",r={container:N,label:f,required:k,input_container_wrapper:v,input_container:E,error:L},i=({label:o,id:c,error:l,hint:p,required:q,...y})=>e.jsxs("div",{className:r.container,children:[o&&e.jsxs(s,{as:"label",htmlFor:c,className:r.label,variant:"label",children:[o,q&&e.jsx("span",{className:r.required,children:"*"})]}),e.jsxs("div",{className:r.input_container_wrapper,children:[e.jsx("div",{className:r.input_container,"data-input-container":!0,children:e.jsx("textarea",{id:c,...y})}),p&&e.jsx(s,{variant:"caption",className:r.hint,children:p}),l&&e.jsx(s,{variant:"caption",className:r.error,children:l})]})]});i.displayName="Textarea";i.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const W={title:"Components/inputs/Textarea",component:i,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},id:{control:{type:"text"}},error:{control:{type:"text"}},hint:{control:{type:"text"}}}},a={args:{label:"Label",id:"input-id",required:!0}},t={args:{label:"Label",id:"input-id",required:!0,hint:"Hint message"}},n={args:{label:"Label",id:"input-id",required:!0,error:"Error message"}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,x,b;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    hint: "Hint message"
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,h,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    error: "Error message"
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const S=["Default","WithHint","WithError"];export{a as Default,n as WithError,t as WithHint,S as __namedExportsOrder,W as default};

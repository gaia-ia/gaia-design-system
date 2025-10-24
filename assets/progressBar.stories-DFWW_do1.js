import{j as s}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const k="_progressBarContainer_1dwzp_1",x="_progressBar_1dwzp_1",n={progressBarContainer:k,progressBar:x},t=({size:f,currentStep:z=1,color:B="var(--color-primary-500)"})=>{const _=z/f*100;return s.jsx("div",{children:s.jsx("div",{className:n.progressBarContainer,children:s.jsx("div",{className:n.progressBar,style:{width:`${_}%`,backgroundColor:B}})})})};t.displayName="ProgressBar";t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{size:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"var(--color-primary-500)"',computed:!1}}}};const w={title:"Components/general/ProgressBar",component:t,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:1,max:10},description:"Número total de etapas da barra de progresso"},currentStep:{control:{type:"number",min:0,max:10},description:"Etapa atual da barra de progresso"},color:{control:{type:"color"},description:"Cor da barra de progresso"}}},r={args:{size:5,currentStep:2,color:"var(--color-background-300)"}},e={args:{size:5,currentStep:0,color:"var(--color-background-300)"}},o={args:{size:10,currentStep:5,color:"var(--color-background-300)"}},a={args:{size:5,currentStep:5,color:"var(--color-background-300)"}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 2,
    color: "var(--color-background-300)"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 0,
    color: "var(--color-background-300)"
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,g,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 10,
    currentStep: 5,
    color: "var(--color-background-300)"
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,v,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 5,
    color: "var(--color-background-300)"
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const E=["Default","Empty","Halfway","Complete"];export{a as Complete,r as Default,e as Empty,o as Halfway,E as __namedExportsOrder,w as default};

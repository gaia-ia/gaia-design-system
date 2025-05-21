import{j as t}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const C="_progressBarContainer_1wqhx_1",b="_progressBar_1wqhx_1",n={progressBarContainer:C,progressBar:b},o=({size:f,currentStep:z=1})=>{const _=z/f*100;return t.jsx("div",{children:t.jsx("div",{className:n.progressBarContainer,children:t.jsx("div",{className:n.progressBar,style:{width:`${_}%`}})})})};o.displayName="ProgressBar";o.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{size:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const w={title:"Components/general/ProgressBar",component:o,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:1,max:10},description:"Número total de etapas da barra de progresso"},currentStep:{control:{type:"number",min:0,max:10},description:"Etapa atual da barra de progresso"}}},r={args:{size:5,currentStep:2}},e={args:{size:5,currentStep:0}},s={args:{size:10,currentStep:5}},a={args:{size:5,currentStep:5}};var p,c,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 2
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 0
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,l,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 10,
    currentStep: 5
  }
}`,...(S=(l=s.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var y,B,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 5
  }
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const E=["Default","Empty","Halfway","Complete"];export{a as Complete,r as Default,e as Empty,s as Halfway,E as __namedExportsOrder,w as default};

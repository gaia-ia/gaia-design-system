import{j as t}from"./jsx-runtime-CDt2p4po.js";import{c as P}from"./clsx-CNgb8Gju.js";import"./index-GiUgBvb1.js";const C="_progressBarContainer_1dwzp_1",_="_progressBar_1dwzp_1",n={progressBarContainer:C,progressBar:_},a=({size:z,currentStep:v=1,color:h="var(--color-primary-500)",className:B})=>{const x=v/z*100;return t.jsx("div",{className:P(n.progressBarContainer,B),children:t.jsx("div",{className:n.progressBar,style:{width:`${x}%`,backgroundColor:h}})})};a.displayName="ProgressBar";a.__docgenInfo={description:`A linear progress bar component representing the current step out of a total number of steps.

Useful for multi-step flows, onboarding, or quizzes. The bar fills proportionally based on the \`currentStep\` and \`size\`.

@component
@param {ProgressBarProps} props - Props for the \`ProgressBar\` component.
@param {number} props.size - The total number of steps in the progress sequence.
@param {number} [props.currentStep=1] - The current active step (defaults to \`1\`). Used to calculate the fill percentage.
@param {string} [props.color='var(--color-primary-500)'] - The CSS color of the filled portion of the bar.
@param {string} [props.className] - Optional additional class name(s) for styling the outer container.
@returns {JSX.Element} A visual representation of progress using a horizontal bar.

@example
<ProgressBar size={5} currentStep={3} />

@example
<ProgressBar size={4} color="#2ecc71" className="my-custom-progress" />`,methods:[],displayName:"ProgressBar",props:{size:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"var(--color-primary-500)"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/general/ProgressBar",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:1,max:10},description:"Número total de etapas da barra de progresso"},currentStep:{control:{type:"number",min:0,max:10},description:"Etapa atual da barra de progresso"},color:{control:{type:"color"},description:"Cor da barra de progresso"}}},r={args:{size:5,currentStep:2,color:"var(--color-background-300)"}},e={args:{size:5,currentStep:0,color:"var(--color-background-300)"}},o={args:{size:10,currentStep:5,color:"var(--color-background-300)"}},s={args:{size:5,currentStep:5,color:"var(--color-background-300)"}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 2,
    color: "var(--color-background-300)"
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,u,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 0,
    color: "var(--color-background-300)"
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 10,
    currentStep: 5,
    color: "var(--color-background-300)"
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 5,
    color: "var(--color-background-300)"
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const w=["Default","Empty","Halfway","Complete"];export{s as Complete,r as Default,e as Empty,o as Halfway,w as __namedExportsOrder,q as default};

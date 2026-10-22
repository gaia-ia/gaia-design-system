import{j as p}from"./jsx-runtime-DiklIkkE.js";import{c as C}from"./clsx-DegBVMCo.js";import"./index-DRjF_FHU.js";const T="_progressBarContainer_1kct2_1",_="_progressBar_1kct2_1",c={progressBarContainer:T,progressBar:_},a=({size:t,currentStep:n=1,color:B="var(--color-primary-fill)",className:v,...x})=>{const P=n/t*100;return p.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":t,"aria-valuenow":n,className:C(c.progressBarContainer,v),...x,children:p.jsx("div",{className:c.progressBar,style:{width:`${P}%`,backgroundColor:B}})})};a.displayName="ProgressBar";a.__docgenInfo={description:`A linear progress bar component representing the current step out of a total number of steps.

Useful for multi-step flows, onboarding, or quizzes. The bar fills proportionally based on the \`currentStep\` and \`size\`.

@component
@param {ProgressBarProps} props - Props for the \`ProgressBar\` component.
@param {number} props.size - The total number of steps in the progress sequence.
@param {number} [props.currentStep=1] - The current active step (defaults to \`1\`). Used to calculate the fill percentage.
@param {string} [props.color='var(--color-primary-fill)'] - The CSS color of the filled portion of the bar. The default reaches 3:1 against the track (\`--color-control\`) in both modes (3.8:1 light, 3.4:1 dark); a custom color must keep that 3:1 (WCAG 1.4.11).
@param {string} [props.className] - Optional additional class name(s) for styling the outer container.
@returns {JSX.Element} A visual representation of progress using a horizontal bar.

@example
<ProgressBar size={5} currentStep={3} />

@example
<ProgressBar size={4} color="#2ecc71" className="my-custom-progress" />`,methods:[],displayName:"ProgressBar",props:{size:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"var(--color-primary-fill)"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/general/ProgressBar",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:1,max:10},description:"Número total de etapas da barra de progresso"},currentStep:{control:{type:"number",min:0,max:10},description:"Etapa atual da barra de progresso"},color:{control:{type:"color"},description:"Cor do preenchimento. Padrão: `var(--color-primary-fill)`, ≥3:1 sobre o trilho. Uma cor própria precisa manter 3:1 sobre o trilho (`--color-control`)."}}},r={args:{size:5,currentStep:2}},e={args:{size:5,currentStep:0}},s={args:{size:10,currentStep:5}},o={args:{size:5,currentStep:5}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 2
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 0
  }
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 10,
    currentStep: 5
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,S,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 5,
    currentStep: 5
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const w=["Default","Empty","Halfway","Complete"];export{o as Complete,r as Default,e as Empty,s as Halfway,w as __namedExportsOrder,E as default};

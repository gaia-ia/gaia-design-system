import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as w}from"./index-DRjF_FHU.js";import{B as p}from"./index-D9Woksp6.js";import{c as E}from"./clsx-DegBVMCo.js";const V="_container_oplk4_1",W="_label_oplk4_8",M="_required_oplk4_12",P="_input_container_wrapper_oplk4_16",$="_error_oplk4_22",C="_input_container_oplk4_16",T="_option_oplk4_35",o={container:V,label:W,required:M,input_container_wrapper:P,error:$,input_container:C,option:T},b=({label:r,error:a,hint:n,required:t,name:g,options:i,className:s})=>{const l=w.useId(),v=r?`${l}-label`:void 0,h=a?`${l}-error`:void 0,_=n?`${l}-hint`:void 0,R=[h,_].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:E(o.container,s),role:"radiogroup","aria-labelledby":v,"aria-describedby":R,"aria-required":t||void 0,"aria-invalid":a?!0:void 0,children:[r&&e.jsxs(p,{id:v,className:o.label,variant:"label",children:[r,t&&e.jsx("span",{className:o.required,"aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:o.input_container_wrapper,children:[a&&e.jsx(p,{variant:"caption",className:o.error,id:h,children:a}),e.jsx("div",{className:o.input_container,children:i==null?void 0:i.map(({label:A,...m},B)=>{const y=m.id??`${l}-option-${B}`;return e.jsx("div",{className:o.option,children:e.jsxs(p,{htmlFor:y,as:"label",children:[e.jsx("input",{type:"radio",required:t,...m,id:y,name:g}),A]})},m.value)})}),n&&e.jsx(p,{variant:"caption",className:o.hint,id:_,children:n})]})]})};b.displayName="RadioInput";b.__docgenInfo={description:`A grouped radio input component that renders a labeled list of radio buttons.

Each option is rendered with an individual \`<input type="radio" />\` and its label, inside a
\`role="radiogroup"\` named by \`label\` and described by \`error\`/\`hint\`. Option ids are generated
per instance (\`useId\`), so two groups with the same values never collide.
Supports showing an overall field label, optional hint, and error message.
Leverages the \`Body\` component for consistent typography.

@component
@param {RadioInputProps} props - Props to configure the radio input group.
@param {string} props.name - Shared \`name\` attribute to group radio buttons.
@param {string} [props.label] - Optional label for the entire radio group.
@param {string} [props.error] - Optional error message displayed above the options.
@param {string} [props.hint] - Optional helper text displayed below the options.
@param {boolean} [props.required] - Whether the field is required; marks the group and radios as required and adds a visual asterisk.
@param {Option[]} props.options - An array of radio options (label/value and standard input attributes).
@param {string} [props.className] - Optional class name for the outer wrapper.
@returns {JSX.Element} A styled group of radio inputs.

@example
<RadioInput
  name="status"
  label="Status"
  required
  options={[
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ]}
  error="Please select a status"
/>`,methods:[],displayName:"RadioInput"};const D=(r,a)=>{const[n,t]=w.useState(""),i=(Array.isArray(a.args.options)?a.args.options:[]).map(s=>({...s,checked:s.value===n,onChange:()=>t(s.value)}));return e.jsx(r,{args:{...a.args,options:i}})},X={title:"Components/inputs/RadioInput",component:b,tags:["autodocs"],decorators:[D],argTypes:{label:{control:{type:"text"},description:"Rótulo principal do grupo de opções",defaultValue:"Selecione uma opção"},name:{control:{type:"text"},description:"Nome do grupo de botões radio (importante para agrupamento)",defaultValue:"radio-group"},required:{control:{type:"boolean"},description:"Indica se o campo é obrigatório",defaultValue:!1},error:{control:{type:"text"},description:"Mensagem de erro a ser exibida abaixo do label"},hint:{control:{type:"text"},description:"Texto de dica/ajuda exibido abaixo das opções"},options:{control:"object",description:"Array de opções com propriedades label e value"}}},d={args:{label:"Selecione uma opção",name:"radio-group",required:!0,options:[{label:"Opção 1",value:"option1"},{label:"Opção 2",value:"option2"},{label:"Opção 3",value:"option3"}]}},c={args:{label:"Método de pagamento",name:"payment-method",hint:"Você poderá alterar essa opção mais tarde",options:[{label:"Cartão de crédito",value:"credit-card"},{label:"Boleto bancário",value:"bank-slip"},{label:"Pix",value:"pix"}]}},u={args:{label:"Período de entrega",name:"delivery-time",error:"Selecione pelo menos uma opção",required:!0,options:[{label:"Manhã",value:"morning"},{label:"Tarde",value:"afternoon"},{label:"Noite",value:"night"}]}};var x,f,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Selecione uma opção",
    name: "radio-group",
    required: true,
    options: [{
      label: "Opção 1",
      value: "option1"
    }, {
      label: "Opção 2",
      value: "option2"
    }, {
      label: "Opção 3",
      value: "option3"
    }]
  }
}`,...(I=(f=d.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var j,N,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Método de pagamento",
    name: "payment-method",
    hint: "Você poderá alterar essa opção mais tarde",
    options: [{
      label: "Cartão de crédito",
      value: "credit-card"
    }, {
      label: "Boleto bancário",
      value: "bank-slip"
    }, {
      label: "Pix",
      value: "pix"
    }]
  }
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var O,k,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Período de entrega",
    name: "delivery-time",
    error: "Selecione pelo menos uma opção",
    required: true,
    options: [{
      label: "Manhã",
      value: "morning"
    }, {
      label: "Tarde",
      value: "afternoon"
    }, {
      label: "Noite",
      value: "night"
    }]
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const z=["Default","WithHint","WithError"];export{d as Default,u as WithError,c as WithHint,z as __namedExportsOrder,X as default};

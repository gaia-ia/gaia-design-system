import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as S}from"./index-GiUgBvb1.js";import{B as l}from"./index-BlwL9mIg.js";import{c as q}from"./clsx-CNgb8Gju.js";const O="_container_111cv_1",I="_label_111cv_8",R="_required_111cv_12",w="_input_container_wrapper_111cv_16",A="_error_111cv_22",E="_input_container_111cv_16",P="_option_111cv_34",a={container:O,label:I,required:R,input_container_wrapper:w,error:A,input_container:E,option:P},m=({label:i,error:o,hint:s,required:u,name:b,options:r,className:n})=>e.jsxs("div",{className:q(a.container,n),children:[i&&e.jsxs(l,{as:"label",className:a.label,variant:"label",children:[i,u&&e.jsx("span",{className:a.required,children:"*"})]}),e.jsxs("div",{className:a.input_container_wrapper,children:[o&&e.jsx(l,{variant:"caption",className:a.error,children:o}),e.jsx("div",{className:a.input_container,children:r==null?void 0:r.map(t=>e.jsx("div",{className:a.option,children:e.jsxs(l,{htmlFor:t.value,as:"label",children:[e.jsx("input",{type:"radio",...t,id:t.value,name:b}),t.label]})},t.label))}),s&&e.jsx(l,{variant:"caption",className:a.hint,children:s})]})]});m.displayName="RadioInput";m.__docgenInfo={description:`A grouped radio input component that renders a labeled list of radio buttons.

Each option is rendered with an individual \`<input type="radio" />\` and its label.
Supports showing an overall field label, optional hint, and error message.
Leverages the \`Body\` component for consistent typography.

@component
@param {RadioInputProps} props - Props to configure the radio input group.
@param {string} props.name - Shared \`name\` attribute to group radio buttons.
@param {string} [props.label] - Optional label for the entire radio group.
@param {string} [props.error] - Optional error message displayed above the options.
@param {string} [props.hint] - Optional helper text displayed below the options.
@param {boolean} [props.required] - Whether the field is required; adds a visual asterisk.
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
/>`,methods:[],displayName:"RadioInput"};const V=(i,o)=>{const[s,u]=S.useState(""),r=(Array.isArray(o.args.options)?o.args.options:[]).map(n=>({...n,checked:n.value===s,onChange:()=>u(n.value)}));return e.jsx(i,{args:{...o.args,options:r}})},C={title:"Components/inputs/RadioInput",component:m,tags:["autodocs"],decorators:[V],argTypes:{label:{control:{type:"text"},description:"Rótulo principal do grupo de opções",defaultValue:"Selecione uma opção"},name:{control:{type:"text"},description:"Nome do grupo de botões radio (importante para agrupamento)",defaultValue:"radio-group"},required:{control:{type:"boolean"},description:"Indica se o campo é obrigatório",defaultValue:!1},error:{control:{type:"text"},description:"Mensagem de erro a ser exibida abaixo do label"},hint:{control:{type:"text"},description:"Texto de dica/ajuda exibido abaixo das opções"},options:{control:"object",description:"Array de opções com propriedades label e value"}}},p={args:{label:"Selecione uma opção",name:"radio-group",required:!0,options:[{label:"Opção 1",value:"option1"},{label:"Opção 2",value:"option2"},{label:"Opção 3",value:"option3"}]}},d={args:{label:"Método de pagamento",name:"payment-method",hint:"Você poderá alterar essa opção mais tarde",options:[{label:"Cartão de crédito",value:"credit-card"},{label:"Boleto bancário",value:"bank-slip"},{label:"Pix",value:"pix"}]}},c={args:{label:"Período de entrega",name:"delivery-time",error:"Selecione pelo menos uma opção",required:!0,options:[{label:"Manhã",value:"morning"},{label:"Tarde",value:"afternoon"},{label:"Noite",value:"night"}]}};var v,g,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var _,x,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,j,N;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const T=["Default","WithHint","WithError"];export{p as Default,c as WithError,d as WithHint,T as __namedExportsOrder,C as default};

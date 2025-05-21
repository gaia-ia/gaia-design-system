import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as N}from"./index-GiUgBvb1.js";import{B as i}from"./index-B4Vk6642.js";const S="_container_111cv_1",q="_label_111cv_8",I="_required_111cv_12",O="_input_container_wrapper_111cv_16",R="_error_111cv_22",V="_input_container_111cv_16",E="_option_111cv_34",o={container:S,label:q,required:I,input_container_wrapper:O,error:R,input_container:V,option:E},u=({label:t,error:r,hint:l,required:d,name:m,options:n})=>e.jsxs("div",{className:o.container,children:[t&&e.jsxs(i,{as:"label",className:o.label,variant:"label",children:[t,d&&e.jsx("span",{className:o.required,children:"*"})]}),e.jsxs("div",{className:o.input_container_wrapper,children:[r&&e.jsx(i,{variant:"caption",className:o.error,children:r}),e.jsx("div",{className:o.input_container,children:n==null?void 0:n.map(a=>e.jsx("div",{className:o.option,children:e.jsxs(i,{htmlFor:a.value,as:"label",children:[e.jsx("input",{type:"radio",...a,id:a.value,name:m}),a.label]})},a.label))}),l&&e.jsx(i,{variant:"caption",className:o.hint,children:l})]})]});u.displayName="RadioInput";u.__docgenInfo={description:"",methods:[],displayName:"RadioInput"};const M=(t,r)=>{const[l,d]=N.useState(""),n=(Array.isArray(r.args.options)?r.args.options:[]).map(a=>({...a,checked:a.value===l,onChange:()=>d(a.value)}));return e.jsx(t,{args:{...r.args,options:n}})},C={title:"Components/inputs/RadioInput",component:u,tags:["autodocs"],decorators:[M],argTypes:{label:{control:{type:"text"},description:"Rótulo principal do grupo de opções",defaultValue:"Selecione uma opção"},name:{control:{type:"text"},description:"Nome do grupo de botões radio (importante para agrupamento)",defaultValue:"radio-group"},required:{control:{type:"boolean"},description:"Indica se o campo é obrigatório",defaultValue:!1},error:{control:{type:"text"},description:"Mensagem de erro a ser exibida abaixo do label"},hint:{control:{type:"text"},description:"Texto de dica/ajuda exibido abaixo das opções"},options:{control:"object",description:"Array de opções com propriedades label e value"}}},s={args:{label:"Selecione uma opção",name:"radio-group",required:!0,options:[{label:"Opção 1",value:"option1"},{label:"Opção 2",value:"option2"},{label:"Opção 3",value:"option3"}]}},p={args:{label:"Método de pagamento",name:"payment-method",hint:"Você poderá alterar essa opção mais tarde",options:[{label:"Cartão de crédito",value:"credit-card"},{label:"Boleto bancário",value:"bank-slip"},{label:"Pix",value:"pix"}]}},c={args:{label:"Período de entrega",name:"delivery-time",error:"Selecione pelo menos uma opção",required:!0,options:[{label:"Manhã",value:"morning"},{label:"Tarde",value:"afternoon"},{label:"Noite",value:"night"}]}};var b,v,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var g,h,x;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,j,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const P=["Default","WithHint","WithError"];export{s as Default,c as WithError,p as WithHint,P as __namedExportsOrder,C as default};

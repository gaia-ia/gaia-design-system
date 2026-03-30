import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as k}from"./index-GiUgBvb1.js";import{B as x}from"./index-BlwL9mIg.js";import{c as g}from"./clsx-CNgb8Gju.js";import{C as f}from"./check-BVeZ8qoc.js";import"./createLucideIcon-CRoqMwob.js";const y="_container_1o1ww_1",C="_checkbox_box_1o1ww_13",d={container:y,checkbox_box:C},r=({label:n,id:e,value:c,checked:s,...l})=>o.jsxs(x,{className:g(d.container,l.className),variant:"label",as:"label",htmlFor:e,children:[o.jsx("div",{className:d.checkbox_box,children:o.jsx(f,{color:"var(--color-fixed-white)",size:12})}),o.jsx("input",{type:"checkbox",id:e,value:c,checked:s,...l}),n]});r.displayName="Checkbox";r.__docgenInfo={description:`A styled checkbox component with a custom visual box and a label using the \`Body\` typography component.

Renders a visually enhanced checkbox with a \`Check\` icon overlay, hidden behind the native HTML input for accessibility and form compatibility.

@component
@param {CheckboxProps} props - Props to configure the checkbox input and label.
@param {string} props.label - Text label shown alongside the checkbox.
@param {string} props.id - Unique ID used to bind the label and input.
@param {string} props.value - Value of the checkbox input.
@param {boolean} [props.checked] - Whether the checkbox is currently checked.
@param {string} [props.className] - Optional additional class name applied to the outer label container.
@returns {JSX.Element} A styled and accessible checkbox element.

@example
<Checkbox
  id="accept-terms"
  label="I agree to the terms"
  value="accepted"
  checked={isChecked}
  onChange={(e) => setChecked(e.target.checked)}
/>`,methods:[],displayName:"Checkbox"};const v=(n,e)=>{const[c,s]=k.useState(e.args.checked||!1);return o.jsx(n,{args:{...e.args,checked:c,onChange:()=>s(!c)}})},N={title:"Components/inputs/Checkbox",component:r,tags:["autodocs"],decorators:[v],argTypes:{label:{control:{type:"text"},description:"O texto a ser exibido ao lado do checkbox",defaultValue:"Eu concordo com os termos"},id:{control:{type:"text"},description:"ID único para o elemento input",defaultValue:"checkbox-example"},value:{control:{type:"text"},description:"Valor do checkbox quando selecionado",defaultValue:"checked"},checked:{control:{type:"boolean"},description:"Estado de marcação do checkbox",defaultValue:!1},onChange:{action:"changed",description:"Função chamada quando o checkbox é alterado"},disabled:{control:{type:"boolean"},description:"Desabilita o checkbox",defaultValue:!1}}},a={args:{label:"Eu concordo com os termos",id:"checkbox-example",value:"checked",checked:!1}},t={args:{label:"Opção selecionada",id:"checkbox-checked",value:"checked",checked:!0}};var i,h,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Eu concordo com os termos",
    id: "checkbox-example",
    value: "checked",
    checked: false
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,b,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Opção selecionada",
    id: "checkbox-checked",
    value: "checked",
    checked: true
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const I=["Default","Checked"];export{t as Checked,a as Default,I as __namedExportsOrder,N as default};

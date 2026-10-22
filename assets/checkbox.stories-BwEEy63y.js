import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as x}from"./index-DRjF_FHU.js";import{B as f}from"./index-D9Woksp6.js";import{c as g}from"./clsx-DegBVMCo.js";import{C as y}from"./check-DQ2q5TA4.js";import"./createLucideIcon-Bl20gA7w.js";const C="_container_zqufj_1",v="_checkbox_box_zqufj_25",l={container:C,checkbox_box:v},r=({label:n,id:e,value:c,checked:s,className:b,...k})=>o.jsxs(f,{className:g(l.container,b),variant:"label",as:"label",htmlFor:e,children:[o.jsx("div",{className:l.checkbox_box,"aria-hidden":"true",children:o.jsx(y,{color:"var(--color-fixed-white)",size:12})}),o.jsx("input",{type:"checkbox",id:e,value:c,checked:s,...k}),n]});r.displayName="Checkbox";r.__docgenInfo={description:`A styled checkbox component with a custom visual box and a label using the \`Body\` typography component.

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
/>`,methods:[],displayName:"Checkbox"};const _=(n,e)=>{const[c,s]=x.useState(e.args.checked||!1);return o.jsx(n,{args:{...e.args,checked:c,onChange:()=>s(!c)}})},N={title:"Components/inputs/Checkbox",component:r,tags:["autodocs"],decorators:[_],argTypes:{label:{control:{type:"text"},description:"O texto a ser exibido ao lado do checkbox",defaultValue:"Eu concordo com os termos"},id:{control:{type:"text"},description:"ID único para o elemento input",defaultValue:"checkbox-example"},value:{control:{type:"text"},description:"Valor do checkbox quando selecionado",defaultValue:"checked"},checked:{control:{type:"boolean"},description:"Estado de marcação do checkbox",defaultValue:!1},onChange:{action:"changed",description:"Função chamada quando o checkbox é alterado"},disabled:{control:{type:"boolean"},description:"Desabilita o checkbox",defaultValue:!1}}},a={args:{label:"Eu concordo com os termos",id:"checkbox-example",value:"checked",checked:!1}},t={args:{label:"Opção selecionada",id:"checkbox-checked",value:"checked",checked:!0}};var d,i,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Eu concordo com os termos",
    id: "checkbox-example",
    value: "checked",
    checked: false
  }
}`,...(h=(i=a.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Opção selecionada",
    id: "checkbox-checked",
    value: "checked",
    checked: true
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const O=["Default","Checked"];export{t as Checked,a as Default,O as __namedExportsOrder,N as default};

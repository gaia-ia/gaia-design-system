import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as m}from"./index-GiUgBvb1.js";import{B as b}from"./index-B4Vk6642.js";import{c as f}from"./createLucideIcon-BuucLCb_.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_=f("check",g),C="_container_1o1ww_1",y="_checkbox_box_1o1ww_13",d={container:C,checkbox_box:y},n=({label:s,id:e,value:c,checked:r,...u})=>o.jsxs(b,{className:d.container,variant:"label",as:"label",htmlFor:e,children:[o.jsx("div",{className:d.checkbox_box,children:o.jsx(_,{color:"var(--color-fixed-white)",size:12})}),o.jsx("input",{type:"checkbox",id:e,value:c,checked:r,...u}),s]});n.displayName="Checkbox";n.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const v=(s,e)=>{const[c,r]=m.useState(e.args.checked||!1);return o.jsx(s,{args:{...e.args,checked:c,onChange:()=>r(!c)}})},D={title:"Components/inputs/Checkbox",component:n,tags:["autodocs"],decorators:[v],argTypes:{label:{control:{type:"text"},description:"O texto a ser exibido ao lado do checkbox",defaultValue:"Eu concordo com os termos"},id:{control:{type:"text"},description:"ID único para o elemento input",defaultValue:"checkbox-example"},value:{control:{type:"text"},description:"Valor do checkbox quando selecionado",defaultValue:"checked"},checked:{control:{type:"boolean"},description:"Estado de marcação do checkbox",defaultValue:!1},onChange:{action:"changed",description:"Função chamada quando o checkbox é alterado"},disabled:{control:{type:"boolean"},description:"Desabilita o checkbox",defaultValue:!1}}},a={args:{label:"Eu concordo com os termos",id:"checkbox-example",value:"checked",checked:!1}},t={args:{label:"Opção selecionada",id:"checkbox-checked",value:"checked",checked:!0}};var l,i,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Eu concordo com os termos",
    id: "checkbox-example",
    value: "checked",
    checked: false
  }
}`,...(h=(i=a.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var p,x,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Opção selecionada",
    id: "checkbox-checked",
    value: "checked",
    checked: true
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const N=["Default","Checked"];export{t as Checked,a as Default,N as __namedExportsOrder,D as default};

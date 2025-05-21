import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as N}from"./index-GiUgBvb1.js";import{B as r}from"./index-B-6zbtII.js";import{T as v}from"./index-B7--M_Z_.js";import{c as B}from"./createLucideIcon-BuucLCb_.js";import"./index-B4Vk6642.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],q=B("x",k),M="_background_n2bcm_1",y="_modal_n2bcm_11",L="_content_n2bcm_25",T="_header_n2bcm_35",E="_buttons_n2bcm_44",s={background:M,modal:y,content:L,header:T,buttons:E},C=({children:n,setOpen:e,title:c,className:u})=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:s.background,onClick:()=>e(!1)}),t.jsxs("div",{className:`${s.modal} ${u}`,children:[t.jsxs("div",{className:s.header,children:[t.jsx(v,{variant:"subtitle",children:c}),t.jsx(r,{variant:"icon",icon:q,onClick:()=>e(!1),className:s.close_button})]}),t.jsx("div",{className:s.content,children:n})]})]}),j=({children:n,className:e})=>t.jsx("div",{className:`${s.buttons} ${e}`,children:n});C.__docgenInfo={description:"",methods:[],displayName:"Content"};j.__docgenInfo={description:"",methods:[],displayName:"Buttons"};const S=({title:n="Título do Modal",content:e="Conteúdo do modal vai aqui.",hasButtons:c=!0})=>{const[u,o]=N.useState(!1);return t.jsxs("div",{style:{height:"200px"},children:[t.jsx(r,{onClick:()=>o(!0),children:"Abrir Modal"}),u&&t.jsxs(C,{title:n,setOpen:o,children:[t.jsx("div",{children:e}),c&&t.jsxs(j,{children:[t.jsx(r,{variant:"secondary",onClick:()=>o(!1),style:{marginRight:"8px"},children:"Cancelar"}),t.jsx(r,{variant:"primary",onClick:()=>o(!1),children:"Confirmar"})]})]})]})},F={title:"Components/general/Modal",component:S,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título exibido no topo do modal"},content:{control:"text",description:"Conteúdo exibido no corpo do modal"},hasButtons:{control:"boolean",description:"Se deve exibir botões de ação no modal"}}},i={args:{title:"Título do Modal",content:"Conteúdo do modal vai aqui.",hasButtons:!0}},l={args:{title:"Modal sem Botões",content:"Este modal não possui botões de ação.",hasButtons:!1}},a={args:{title:"Modal com Conteúdo Longo",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.`,hasButtons:!0}};var d,m,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Título do Modal",
    content: "Conteúdo do modal vai aqui.",
    hasButtons: true
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,h,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Modal sem Botões",
    content: "Este modal não possui botões de ação.",
    hasButtons: false
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,_,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Modal com Conteúdo Longo",
    content: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.\`,
    hasButtons: true
  }
}`,...(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const O=["Default","WithoutButtons","LongContent"];export{i as Default,a as LongContent,l as WithoutButtons,O as __namedExportsOrder,F as default};

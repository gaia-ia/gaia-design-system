import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as v}from"./index-GiUgBvb1.js";import{B as r}from"./index-DO8aoaPd.js";import{T as y}from"./index-D3S-s-av.js";import{c as C}from"./clsx-CNgb8Gju.js";import{c as N}from"./createLucideIcon-CRoqMwob.js";import"./index-BlwL9mIg.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],j=N("x",k),q="_background_n2bcm_1",T="_modal_n2bcm_11",S="_content_n2bcm_25",E="_header_n2bcm_35",R="_buttons_n2bcm_44",n={background:q,modal:T,content:S,header:E,buttons:R},M=({children:o,setOpen:e,title:c,className:d})=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:n.background,onClick:()=>e(!1)}),t.jsxs("div",{className:C(n.modal,d),children:[t.jsxs("div",{className:n.header,children:[t.jsx(y,{variant:"subtitle",children:c}),t.jsx(r,{variant:"icon",icon:j,onClick:()=>e(!1),className:n.close_button})]}),t.jsx("div",{className:n.content,children:o})]})]}),_=({children:o,className:e})=>t.jsx("div",{className:C(n.buttons,e),children:o});M.__docgenInfo={description:`A modal dialog container component with a title, close button, and backdrop.

Handles closing the modal via backdrop click or top-right icon button.
The title is rendered using the \`Title\` component with a \`subtitle\` variant.

@component
@param {ModalContentProps} props - Props for configuring the modal content.
@param {React.ReactNode} props.children - Content to render inside the modal body.
@param {React.Dispatch<React.SetStateAction<boolean>>} props.setOpen - State setter to control open/close behavior.
@param {string} props.title - Title text displayed in the modal header.
@param {string} [props.className] - Optional custom class name for the modal container.
@returns {JSX.Element} A modal structure with header, content area, and backdrop.

@example
<ModalContent title="Confirm Delete" setOpen={setOpen}>
  <p>Are you sure you want to delete this item?</p>
  <ModalButtons>
    <Button onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  </ModalButtons>
</ModalContent>`,methods:[],displayName:"ModalContent"};_.__docgenInfo={description:`A layout component for rendering modal action buttons in a consistent style.

Typically used inside \`ModalContent\` to wrap primary and secondary actions.

@component
@param {ModalButtonsProps} props - Props for the button container.
@param {React.ReactNode} props.children - Buttons or other interactive elements.
@param {string} [props.className] - Optional additional class name(s).
@returns {JSX.Element} A styled container for modal buttons.

@example
<ModalButtons>
  <Button>Cancel</Button>
  <Button variant="primary">Confirm</Button>
</ModalButtons>`,methods:[],displayName:"ModalButtons"};const A=({title:o="Título do Modal",content:e="Conteúdo do modal vai aqui.",hasButtons:c=!0})=>{const[d,s]=v.useState(!1);return t.jsxs("div",{style:{height:"200px"},children:[t.jsx(r,{onClick:()=>s(!0),children:"Abrir Modal"}),d&&t.jsxs(M,{title:o,setOpen:s,children:[t.jsx("div",{children:e}),c&&t.jsxs(_,{children:[t.jsx(r,{variant:"secondary",onClick:()=>s(!1),style:{marginRight:"8px"},children:"Cancelar"}),t.jsx(r,{variant:"primary",onClick:()=>s(!1),children:"Confirmar"})]})]})]})},J={title:"Components/general/Modal",component:A,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título exibido no topo do modal"},content:{control:"text",description:"Conteúdo exibido no corpo do modal"},hasButtons:{control:"boolean",description:"Se deve exibir botões de ação no modal"}}},a={args:{title:"Título do Modal",content:"Conteúdo do modal vai aqui.",hasButtons:!0}},i={args:{title:"Modal sem Botões",content:"Este modal não possui botões de ação.",hasButtons:!1}},l={args:{title:"Modal com Conteúdo Longo",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.`,hasButtons:!0}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Título do Modal",
    content: "Conteúdo do modal vai aqui.",
    hasButtons: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Modal sem Botões",
    content: "Este modal não possui botões de ação.",
    hasButtons: false
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,f,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(f=l.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const W=["Default","WithoutButtons","LongContent"];export{a as Default,l as LongContent,i as WithoutButtons,W as __namedExportsOrder,J as default};

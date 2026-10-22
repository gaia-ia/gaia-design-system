import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as M}from"./index-DRjF_FHU.js";import{B as r}from"./index-DTYX8Gcn.js";import{R as N,O as k,C as q,b as O,a as R}from"./index-DH9gUxBT.js";import{T}from"./index-XnWTpSuE.js";import{c as v}from"./clsx-DegBVMCo.js";import{X as S}from"./x-BPa992hr.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";import"./index-DRtXj63t.js";import"./index-X59MVnDc.js";import"./index-Bnhoviar.js";import"./index-C0xqUTPU.js";import"./index-CLlkV7gm.js";import"./index-DHHUZ-3A.js";import"./index-BrKBBPft.js";import"./index-I4Re_PL0.js";import"./createLucideIcon-Bl20gA7w.js";const E="_background_n2bcm_1",A="_modal_n2bcm_11",D="_content_n2bcm_25",L="_header_n2bcm_35",w="_buttons_n2bcm_44",n={background:E,modal:A,content:D,header:L,buttons:w},_=({children:o,setOpen:s,title:c,className:d,closeLabel:e="Fechar"})=>{const[u]=M.useState(()=>typeof document>"u"?null:document.activeElement);return t.jsxs(N,{open:!0,onOpenChange:m=>{m||s(!1)},children:[t.jsx(k,{className:n.background}),t.jsxs(q,{className:v(n.modal,d),"aria-modal":"true","aria-describedby":void 0,onCloseAutoFocus:m=>{m.preventDefault(),u==null||u.focus()},children:[t.jsxs("div",{className:n.header,children:[t.jsx(O,{asChild:!0,children:t.jsx(T,{variant:"subtitle",children:c})}),t.jsx(R,{asChild:!0,children:t.jsx(r,{size:"icon",variant:"ghost",className:n.close_button,"aria-label":e,children:t.jsx(S,{size:16})})})]}),t.jsx("div",{className:n.content,children:o})]})]})},j=({children:o,className:s})=>t.jsx("div",{className:v(n.buttons,s),children:o});_.__docgenInfo={description:`A modal dialog container component with a title, close button, and backdrop.

Built on the Radix Dialog primitive, so it is an accessible modal dialog: \`role="dialog"\`,
\`aria-modal\`, named by its title, closes on Escape, backdrop click or the top-right icon button,
keeps Tab focus inside, and returns focus to the element that was focused before it opened.
The title is rendered using the \`Title\` component with a \`subtitle\` variant.

Render it only while open (e.g. \`{open && <ModalContent ... />}\`); closing calls \`setOpen(false)\`.

@component
@param {ModalContentProps} props - Props for configuring the modal content.
@param {React.ReactNode} props.children - Content to render inside the modal body.
@param {React.Dispatch<React.SetStateAction<boolean>>} props.setOpen - State setter to control open/close behavior.
@param {string} props.title - Title text displayed in the modal header.
@param {string} [props.className] - Optional custom class name for the modal container.
@param {string} [props.closeLabel="Fechar"] - Accessible name of the close icon button.
@returns {JSX.Element} A modal structure with header, content area, and backdrop.

@example
<ModalContent title="Confirm Delete" setOpen={setOpen}>
  <p>Are you sure you want to delete this item?</p>
  <ModalButtons>
    <Button onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  </ModalButtons>
</ModalContent>`,methods:[],displayName:"ModalContent",props:{closeLabel:{defaultValue:{value:'"Fechar"',computed:!1},required:!1}}};j.__docgenInfo={description:`A layout component for rendering modal action buttons in a consistent style.

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
</ModalButtons>`,methods:[],displayName:"ModalButtons"};const P=({title:o="Título do Modal",content:s="Conteúdo do modal vai aqui.",hasButtons:c=!0})=>{const[d,e]=M.useState(!1);return t.jsxs("div",{style:{height:"200px"},children:[t.jsx(r,{onClick:()=>e(!0),children:"Abrir Modal"}),d&&t.jsxs(_,{title:o,setOpen:e,children:[t.jsx("div",{children:s}),c&&t.jsxs(j,{children:[t.jsx(r,{variant:"secondary",onClick:()=>e(!1),style:{marginRight:"8px"},children:"Cancelar"}),t.jsx(r,{onClick:()=>e(!1),children:"Confirmar"})]})]})]})},ot={title:"Components/general/Modal",component:P,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título exibido no topo do modal"},content:{control:"text",description:"Conteúdo exibido no corpo do modal"},hasButtons:{control:"boolean",description:"Se deve exibir botões de ação no modal"}}},a={args:{title:"Título do Modal",content:"Conteúdo do modal vai aqui.",hasButtons:!0}},i={args:{title:"Modal sem Botões",content:"Este modal não possui botões de ação.",hasButtons:!1}},l={args:{title:"Modal com Conteúdo Longo",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.`,hasButtons:!0}};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Título do Modal",
    content: "Conteúdo do modal vai aqui.",
    hasButtons: true
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Modal sem Botões",
    content: "Este modal não possui botões de ação.",
    hasButtons: false
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,B,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(B=l.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const st=["Default","WithoutButtons","LongContent"];export{a as Default,l as LongContent,i as WithoutButtons,st as __namedExportsOrder,ot as default};

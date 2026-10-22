import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as V}from"./index-DRjF_FHU.js";import{B as m}from"./index-DTYX8Gcn.js";import{c as r}from"./clsx-DegBVMCo.js";import{u as M,P as $}from"./portalContainer-jaNfC5BB.js";import{X as G}from"./x-BPa992hr.js";import{R as K,T as Q,b as U,C as D,a as Y,D as Z,P as ee,O as te}from"./index-LYULgoDc.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";import"./createLucideIcon-Bl20gA7w.js";import"./index-DW48STyt.js";import"./index-DRtXj63t.js";import"./index-X59MVnDc.js";import"./index-Bnhoviar.js";import"./index-C0xqUTPU.js";import"./index-Dp6F1CKK.js";import"./index-CLlkV7gm.js";import"./index-DHHUZ-3A.js";import"./index-BrKBBPft.js";import"./index-I4Re_PL0.js";import"./index--_4JVggg.js";const oe="_overlay_vh8kz_4",se="_content_vh8kz_28",re="_closeButton_vh8kz_130",ne="_header_vh8kz_137",ae="_footer_vh8kz_145",ie="_title_vh8kz_154",le="_description_vh8kz_163",s={overlay:oe,content:se,closeButton:re,header:ne,footer:ae,title:ie,description:le};function A(t){return e.jsx(K,{"data-slot":"sheet",...t})}function I(t){return e.jsx(Q,{"data-slot":"sheet-trigger",...t})}function q(t){return e.jsx(D,{"data-slot":"sheet-close",...t})}function pe(t){const o=M();return e.jsx(ee,{"data-slot":"sheet-portal",container:o??void 0,...t})}function ce({className:t,...o}){return e.jsx(te,{"data-slot":"sheet-overlay",className:r(s.overlay,t),...o})}function z({className:t,children:o,side:n="right",showCloseButton:a=!0,closeLabel:u="Fechar",...L}){return e.jsxs(pe,{children:[e.jsx(ce,{}),e.jsxs(U,{"data-slot":"sheet-content","data-side":n,className:r(s.content,t),...L,children:[o,a&&e.jsx(D,{"data-slot":"sheet-close",className:s.closeButton,asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon-sm","aria-label":u,children:e.jsx(G,{})})})]})]})}function O({className:t,...o}){return e.jsx("div",{"data-slot":"sheet-header",className:r(s.header,t),...o})}function X({className:t,...o}){return e.jsx("div",{"data-slot":"sheet-footer",className:r(s.footer,t),...o})}function J({className:t,...o}){return e.jsx(Y,{"data-slot":"sheet-title",className:r(s.title,t),...o})}function W({className:t,...o}){return e.jsx(Z,{"data-slot":"sheet-description",className:r(s.description,t),...o})}A.__docgenInfo={description:`Root component for the sheet system.

Provides context and accessibility bindings for slide-in panel behavior.
Must wrap \`SheetTrigger\` and \`SheetContent\`.

@component
@param {React.ComponentProps<typeof SheetPrimitive.Root>} props - Props passed to Radix's \`Dialog.Root\`.
@returns {JSX.Element}

@example
<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>Sheet content</SheetContent>
</Sheet>`,methods:[],displayName:"Sheet"};q.__docgenInfo={description:`A close button or element that dismisses the sheet when clicked.

@component
@param {React.ComponentProps<typeof SheetPrimitive.Close>} props - Close button props.
@returns {JSX.Element}`,methods:[],displayName:"SheetClose"};z.__docgenInfo={description:`The main sheet panel that slides in from a screen edge.

Includes an optional close button and manages focus trapping and ARIA roles.

@component
@param {SheetContentProps} props
@param {"top" | "right" | "bottom" | "left"} [props.side="right"] - Edge the sheet slides in from.
@param {boolean} [props.showCloseButton=true] - Whether to show the top-right close icon button.
@param {string} [props.closeLabel="Fechar"] - Accessible name of the close icon button.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<SheetContent side="left">
  <SheetHeader>
    <SheetTitle>Title</SheetTitle>
  </SheetHeader>
</SheetContent>`,methods:[],displayName:"SheetContent",props:{side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:'Which edge the sheet slides in from. Defaults to `"right"`.',defaultValue:{value:'"right"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to render the top-right close icon button. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the close icon button. Defaults to `"Fechar"`.',defaultValue:{value:'"Fechar"',computed:!1}}}};W.__docgenInfo={description:`Accessible description element for the sheet.

Automatically linked to the sheet via ARIA.

@component
@param {React.ComponentProps<typeof SheetPrimitive.Description>} props - Description props.
@returns {JSX.Element}`,methods:[],displayName:"SheetDescription"};X.__docgenInfo={description:`A layout container for footer content (e.g. action buttons).

Typically placed at the bottom of \`SheetContent\`.

@component
@param {React.ComponentProps<"div">} props - Standard div props.
@returns {JSX.Element}`,methods:[],displayName:"SheetFooter"};O.__docgenInfo={description:`A layout container for the sheet title and description.

Typically placed at the top of \`SheetContent\`.

@component
@param {React.ComponentProps<"div">} props - Standard div props.
@returns {JSX.Element}`,methods:[],displayName:"SheetHeader"};J.__docgenInfo={description:`Accessible title element for the sheet.

Automatically linked to the sheet via ARIA.

@component
@param {React.ComponentProps<typeof SheetPrimitive.Title>} props - Title props.
@returns {JSX.Element}`,methods:[],displayName:"SheetTitle"};I.__docgenInfo={description:`Element that triggers the sheet to open when interacted with.

@component
@param {React.ComponentProps<typeof SheetPrimitive.Trigger>} props - Trigger props.
@returns {JSX.Element}

@example
<SheetTrigger>
  <button>Open Sheet</button>
</SheetTrigger>`,methods:[],displayName:"SheetTrigger"};const de="_wrapper_p5knj_1",he="_dark_p5knj_6",me="_light_p5knj_7",H={wrapper:de,dark:he,light:me},g=({theme:t,children:o})=>{const[n,a]=V.useState(null);return e.jsx($,{value:n,children:e.jsx("div",{ref:a,className:H[t],children:o})})},ue=t=>e.jsxs("div",{className:H.wrapper,children:[e.jsx(g,{theme:"dark",children:e.jsx(t,{})}),e.jsx(g,{theme:"light",children:e.jsx(t,{})})]}),ge=({title:t="Título do Sheet",description:o="Descrição do sheet vai aqui.",side:n="right",showCloseButton:a=!0,hasFooter:u=!0})=>e.jsxs(A,{children:[e.jsx(I,{asChild:!0,children:e.jsx(m,{children:"Abrir Sheet"})}),e.jsxs(z,{side:n,showCloseButton:a,children:[e.jsxs(O,{children:[e.jsx(J,{children:t}),e.jsx(W,{children:o})]}),e.jsx("div",{style:{padding:"0 1rem"},children:e.jsx("p",{children:"Conteúdo principal do sheet."})}),u&&e.jsxs(X,{children:[e.jsx(m,{children:"Confirmar"}),e.jsx(q,{asChild:!0,children:e.jsx(m,{variant:"secondary",children:"Cancelar"})})]})]})]}),qe={title:"Components/general/Sheet",component:ge,tags:["autodocs"],decorators:[ue],argTypes:{title:{control:"text",description:"Título exibido no cabeçalho do sheet"},description:{control:"text",description:"Descrição exibida abaixo do título"},side:{options:["top","right","bottom","left"],control:{type:"select"},description:"Borda da tela pela qual o sheet desliza para dentro"},showCloseButton:{control:"boolean",description:"Se deve exibir o botão de fechar no canto superior direito"},hasFooter:{control:"boolean",description:"Se deve exibir o rodapé com botões de ação"}}},i={args:{title:"Título do Sheet",description:"Descrição do sheet vai aqui.",side:"right",showCloseButton:!0,hasFooter:!0}},l={args:{title:"Sheet pela Esquerda",description:"Este sheet abre a partir da esquerda.",side:"left",showCloseButton:!0,hasFooter:!0}},p={args:{title:"Sheet pelo Rodapé",description:"Este sheet abre a partir do rodapé da tela.",side:"bottom",showCloseButton:!0,hasFooter:!0}},c={args:{title:"Sheet pelo Topo",description:"Este sheet abre a partir do topo da tela.",side:"top",showCloseButton:!0,hasFooter:!0}},d={args:{title:"Sheet sem Botão de Fechar",description:"Este sheet não possui o ícone de fechar no canto.",side:"right",showCloseButton:!1,hasFooter:!0}},h={args:{title:"Sheet sem Rodapé",description:"Este sheet não possui botões de ação no rodapé.",side:"right",showCloseButton:!0,hasFooter:!1}};var f,S,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Título do Sheet",
    description: "Descrição do sheet vai aqui.",
    side: "right",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,b,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: "Sheet pela Esquerda",
    description: "Este sheet abre a partir da esquerda.",
    side: "left",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var _,j,y;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: "Sheet pelo Rodapé",
    description: "Este sheet abre a partir do rodapé da tela.",
    side: "bottom",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(y=(j=p.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var T,B,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Sheet pelo Topo",
    description: "Este sheet abre a partir do topo da tela.",
    side: "top",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var w,F,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Sheet sem Botão de Fechar",
    description: "Este sheet não possui o ícone de fechar no canto.",
    side: "right",
    showCloseButton: false,
    hasFooter: true
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,N,k;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Sheet sem Rodapé",
    description: "Este sheet não possui botões de ação no rodapé.",
    side: "right",
    showCloseButton: true,
    hasFooter: false
  }
}`,...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const ze=["Default","Left","Bottom","Top","WithoutCloseButton","WithoutFooter"];export{p as Bottom,i as Default,l as Left,c as Top,d as WithoutCloseButton,h as WithoutFooter,ze as __namedExportsOrder,qe as default};

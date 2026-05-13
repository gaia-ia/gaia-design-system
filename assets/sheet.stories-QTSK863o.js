import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as L}from"./index-GiUgBvb1.js";import{B as m}from"./index-B6QF9bbj.js";import{c as s}from"./clsx-CNgb8Gju.js";import{u as V,P as M}from"./portalContainer-Cr0I3QJP.js";import{X as $}from"./x-LE87PwJd.js";import{R as G,T as K,b as Q,C as D,a as U,D as Y,P as Z,O as ee}from"./index-Dx27LjIP.js";import"./index-BojL7TVx.js";import"./index-DBCqBOGF.js";import"./createLucideIcon-CRoqMwob.js";import"./index-DW48STyt.js";import"./index-BYJyBkN8.js";import"./index-BolwHxDA.js";import"./index-WUhAcQt0.js";import"./index-DEN0ugiW.js";import"./index-vsAI3BIz.js";import"./index-C9v26AP-.js";import"./index-CROobee-.js";import"./index-Dl0iWJCF.js";import"./index-DslUmEDu.js";import"./index-9j9_kZRm.js";const te="_overlay_vh8kz_4",oe="_content_vh8kz_28",re="_closeButton_vh8kz_130",se="_header_vh8kz_137",ne="_footer_vh8kz_145",ae="_title_vh8kz_154",ie="_description_vh8kz_163",r={overlay:te,content:oe,closeButton:re,header:se,footer:ne,title:ae,description:ie};function A(t){return e.jsx(G,{"data-slot":"sheet",...t})}function I(t){return e.jsx(K,{"data-slot":"sheet-trigger",...t})}function q(t){return e.jsx(D,{"data-slot":"sheet-close",...t})}function pe(t){const o=V();return e.jsx(Z,{"data-slot":"sheet-portal",container:o??void 0,...t})}function le({className:t,...o}){return e.jsx(ee,{"data-slot":"sheet-overlay",className:s(r.overlay,t),...o})}function z({className:t,children:o,side:n="right",showCloseButton:a=!0,...u}){return e.jsxs(pe,{children:[e.jsx(le,{}),e.jsxs(Q,{"data-slot":"sheet-content","data-side":n,className:s(r.content,t),...u,children:[o,a&&e.jsx(D,{"data-slot":"sheet-close",className:r.closeButton,asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon-sm",children:e.jsx($,{})})})]})]})}function O({className:t,...o}){return e.jsx("div",{"data-slot":"sheet-header",className:s(r.header,t),...o})}function X({className:t,...o}){return e.jsx("div",{"data-slot":"sheet-footer",className:s(r.footer,t),...o})}function J({className:t,...o}){return e.jsx(U,{"data-slot":"sheet-title",className:s(r.title,t),...o})}function W({className:t,...o}){return e.jsx(Y,{"data-slot":"sheet-description",className:s(r.description,t),...o})}A.__docgenInfo={description:`Root component for the sheet system.

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
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<SheetContent side="left">
  <SheetHeader>
    <SheetTitle>Title</SheetTitle>
  </SheetHeader>
</SheetContent>`,methods:[],displayName:"SheetContent",props:{side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:'Which edge the sheet slides in from. Defaults to `"right"`.',defaultValue:{value:'"right"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to render the top-right close icon button. Defaults to `true`.",defaultValue:{value:"true",computed:!1}}}};W.__docgenInfo={description:`Accessible description element for the sheet.

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
</SheetTrigger>`,methods:[],displayName:"SheetTrigger"};const de="_wrapper_p5knj_1",ce="_dark_p5knj_6",he="_light_p5knj_7",H={wrapper:de,dark:ce,light:he},g=({theme:t,children:o})=>{const[n,a]=L.useState(null);return e.jsx(M,{value:n,children:e.jsx("div",{ref:a,className:H[t],children:o})})},me=t=>e.jsxs("div",{className:H.wrapper,children:[e.jsx(g,{theme:"dark",children:e.jsx(t,{})}),e.jsx(g,{theme:"light",children:e.jsx(t,{})})]}),ue=({title:t="Título do Sheet",description:o="Descrição do sheet vai aqui.",side:n="right",showCloseButton:a=!0,hasFooter:u=!0})=>e.jsxs(A,{children:[e.jsx(I,{asChild:!0,children:e.jsx(m,{children:"Abrir Sheet"})}),e.jsxs(z,{side:n,showCloseButton:a,children:[e.jsxs(O,{children:[e.jsx(J,{children:t}),e.jsx(W,{children:o})]}),e.jsx("div",{style:{padding:"0 1rem"},children:e.jsx("p",{children:"Conteúdo principal do sheet."})}),u&&e.jsxs(X,{children:[e.jsx(m,{children:"Confirmar"}),e.jsx(q,{asChild:!0,children:e.jsx(m,{variant:"secondary",children:"Cancelar"})})]})]})]}),Ie={title:"Components/general/Sheet",component:ue,tags:["autodocs"],decorators:[me],argTypes:{title:{control:"text",description:"Título exibido no cabeçalho do sheet"},description:{control:"text",description:"Descrição exibida abaixo do título"},side:{options:["top","right","bottom","left"],control:{type:"select"},description:"Borda da tela pela qual o sheet desliza para dentro"},showCloseButton:{control:"boolean",description:"Se deve exibir o botão de fechar no canto superior direito"},hasFooter:{control:"boolean",description:"Se deve exibir o rodapé com botões de ação"}}},i={args:{title:"Título do Sheet",description:"Descrição do sheet vai aqui.",side:"right",showCloseButton:!0,hasFooter:!0}},p={args:{title:"Sheet pela Esquerda",description:"Este sheet abre a partir da esquerda.",side:"left",showCloseButton:!0,hasFooter:!0}},l={args:{title:"Sheet pelo Rodapé",description:"Este sheet abre a partir do rodapé da tela.",side:"bottom",showCloseButton:!0,hasFooter:!0}},d={args:{title:"Sheet pelo Topo",description:"Este sheet abre a partir do topo da tela.",side:"top",showCloseButton:!0,hasFooter:!0}},c={args:{title:"Sheet sem Botão de Fechar",description:"Este sheet não possui o ícone de fechar no canto.",side:"right",showCloseButton:!1,hasFooter:!0}},h={args:{title:"Sheet sem Rodapé",description:"Este sheet não possui botões de ação no rodapé.",side:"right",showCloseButton:!0,hasFooter:!1}};var S,f,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Título do Sheet",
    description: "Descrição do sheet vai aqui.",
    side: "right",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,v,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: "Sheet pela Esquerda",
    description: "Este sheet abre a partir da esquerda.",
    side: "left",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(_=(v=p.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var b,j,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Sheet pelo Rodapé",
    description: "Este sheet abre a partir do rodapé da tela.",
    side: "bottom",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var T,B,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Sheet pelo Topo",
    description: "Este sheet abre a partir do topo da tela.",
    side: "top",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var w,P,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Sheet sem Botão de Fechar",
    description: "Este sheet não possui o ícone de fechar no canto.",
    side: "right",
    showCloseButton: false,
    hasFooter: true
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var F,N,k;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: "Sheet sem Rodapé",
    description: "Este sheet não possui botões de ação no rodapé.",
    side: "right",
    showCloseButton: true,
    hasFooter: false
  }
}`,...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const qe=["Default","Left","Bottom","Top","WithoutCloseButton","WithoutFooter"];export{l as Bottom,i as Default,p as Left,d as Top,c as WithoutCloseButton,h as WithoutFooter,qe as __namedExportsOrder,Ie as default};

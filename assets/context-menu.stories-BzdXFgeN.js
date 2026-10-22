import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{c as M}from"./clsx-DegBVMCo.js";import{u as Ue,P as Xe}from"./portalContainer-jaNfC5BB.js";import{C as $e}from"./chevron-right-DB87OsJK.js";import{C as Ce}from"./check-DQ2q5TA4.js";import{c as P}from"./index-DW48STyt.js";import{c as Je}from"./index-DRtXj63t.js";import{P as Be}from"./index-CLlkV7gm.js";import{c as he,R as Fe,A as Ve,P as He,C as Qe,L as Ke,S as Ye,G as ze,I as Ze,a as en,b as nn,d as tn,e as on,f as rn,g as an,h as sn,i as un,j as q,U as cn,M as mn,k as xn,T as dn}from"./user-plus-DjM8xcUL.js";import{u as pn}from"./index-BrKBBPft.js";import{u as ln}from"./index-C0xqUTPU.js";import{U as R,C as U}from"./user-DKOFPSGd.js";import{L as D}from"./log-out-Du9foKSx.js";import{M as Cn}from"./mail-B604Yyuc.js";import"./createLucideIcon-Bl20gA7w.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";import"./index-B4P-2A7h.js";import"./index-CwIEgGhy.js";import"./index-Dp6F1CKK.js";import"./index-I4Re_PL0.js";import"./index-Bnhoviar.js";import"./index-X59MVnDc.js";import"./index-CFX21f3v.js";import"./index-D8lkqur8.js";import"./index--_4JVggg.js";import"./index-BARbeDrQ.js";var X="ContextMenu",[hn,qt]=Je(X,[he]),u=he(),[Mn,Me]=hn(X),ge=n=>{const{__scopeContextMenu:t,children:r,onOpenChange:o,dir:a,modal:p=!0}=n,[C,m]=s.useState(!1),l=u(t),v=pn(o),x=s.useCallback(_=>{m(_),v(_)},[v]);return e.jsx(Mn,{scope:t,open:C,onOpenChange:x,modal:p,children:e.jsx(Fe,{...l,dir:a,open:C,onOpenChange:x,modal:p,children:r})})};ge.displayName=X;var fe="ContextMenuTrigger",be=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,disabled:o=!1,...a}=n,p=Me(fe,r),C=u(r),m=s.useRef({x:0,y:0}),l=s.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...m.current})}),v=s.useRef(0),x=s.useCallback(()=>window.clearTimeout(v.current),[]),_=j=>{m.current={x:j.clientX,y:j.clientY},p.onOpenChange(!0)};return s.useEffect(()=>x,[x]),s.useEffect(()=>void(o&&x()),[o,x]),e.jsxs(e.Fragment,{children:[e.jsx(Ve,{...C,virtualRef:l}),e.jsx(Be.span,{"data-state":p.open?"open":"closed","data-disabled":o?"":void 0,...a,ref:t,style:{WebkitTouchCallout:"none",...n.style},onContextMenu:o?n.onContextMenu:P(n.onContextMenu,j=>{x(),_(j),j.preventDefault()}),onPointerDown:o?n.onPointerDown:P(n.onPointerDown,N(j=>{x(),v.current=window.setTimeout(()=>_(j),700)})),onPointerMove:o?n.onPointerMove:P(n.onPointerMove,N(x)),onPointerCancel:o?n.onPointerCancel:P(n.onPointerCancel,N(x)),onPointerUp:o?n.onPointerUp:P(n.onPointerUp,N(x))})]})});be.displayName=fe;var gn="ContextMenuPortal",je=n=>{const{__scopeContextMenu:t,...r}=n,o=u(t);return e.jsx(He,{...o,...r})};je.displayName=gn;var Ie="ContextMenuContent",Se=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=Me(Ie,r),p=u(r),C=s.useRef(!1);return e.jsx(Qe,{...p,...o,ref:t,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:m=>{var l;(l=n.onCloseAutoFocus)==null||l.call(n,m),!m.defaultPrevented&&C.current&&m.preventDefault(),C.current=!1},onInteractOutside:m=>{var l;(l=n.onInteractOutside)==null||l.call(n,m),!m.defaultPrevented&&!a.modal&&(C.current=!0)},style:{...n.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Se.displayName=Ie;var fn="ContextMenuGroup",ve=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(ze,{...a,...o,ref:t})});ve.displayName=fn;var bn="ContextMenuLabel",_e=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(Ke,{...a,...o,ref:t})});_e.displayName=bn;var jn="ContextMenuItem",Pe=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(Ze,{...a,...o,ref:t})});Pe.displayName=jn;var In="ContextMenuCheckboxItem",Re=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(on,{...a,...o,ref:t})});Re.displayName=In;var Sn="ContextMenuRadioGroup",Ne=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(an,{...a,...o,ref:t})});Ne.displayName=Sn;var vn="ContextMenuRadioItem",ye=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(sn,{...a,...o,ref:t})});ye.displayName=vn;var _n="ContextMenuItemIndicator",Te=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(rn,{...a,...o,ref:t})});Te.displayName=_n;var Pn="ContextMenuSeparator",we=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(Ye,{...a,...o,ref:t})});we.displayName=Pn;var Rn="ContextMenuArrow",Nn=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(un,{...a,...o,ref:t})});Nn.displayName=Rn;var Ee="ContextMenuSub",ke=n=>{const{__scopeContextMenu:t,children:r,onOpenChange:o,open:a,defaultOpen:p}=n,C=u(t),[m,l]=ln({prop:a,defaultProp:p??!1,onChange:o,caller:Ee});return e.jsx(en,{...C,open:m,onOpenChange:l,children:r})};ke.displayName=Ee;var yn="ContextMenuSubTrigger",Oe=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(nn,{...a,...o,ref:t})});Oe.displayName=yn;var Tn="ContextMenuSubContent",Ae=s.forwardRef((n,t)=>{const{__scopeContextMenu:r,...o}=n,a=u(r);return e.jsx(tn,{...a,...o,ref:t,style:{...n.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Ae.displayName=Tn;function N(n){return t=>t.pointerType!=="mouse"?n(t):void 0}var wn=ge,En=be,kn=je,On=Se,An=ve,Gn=_e,Ln=Pe,Wn=Re,qn=Ne,Dn=ye,Ge=Te,Un=we,Xn=ke,$n=Oe,Jn=Ae;const Bn="_content_8hnj1_2",Fn="_item_8hnj1_46",Vn="_shortcut_8hnj1_105",Hn="_checkboxItem_8hnj1_118",Qn="_radioItem_8hnj1_164",Kn="_indicatorWrapper_8hnj1_210",Yn="_label_8hnj1_220",zn="_separator_8hnj1_233",Zn="_subTrigger_8hnj1_240",et="_chevron_8hnj1_293",nt="_subContent_8hnj1_298",d={content:Bn,item:Fn,shortcut:Vn,checkboxItem:Hn,radioItem:Qn,indicatorWrapper:Kn,label:Yn,separator:zn,subTrigger:Zn,chevron:et,subContent:nt};function g({...n}){return e.jsx(wn,{"data-slot":"context-menu",...n})}function f({...n}){return e.jsx(En,{"data-slot":"context-menu-trigger",...n})}function b({className:n,...t}){const r=Ue();return e.jsx(kn,{container:r??void 0,children:e.jsx(On,{"data-slot":"context-menu-content",className:M(d.content,n),...t})})}function $({...n}){return e.jsx(An,{"data-slot":"context-menu-group",...n})}function i({className:n,inset:t,variant:r="default",...o}){return e.jsx(Ln,{"data-slot":"context-menu-item","data-inset":t,"data-variant":r,className:M(d.item,n),...o})}function L({className:n,children:t,checked:r,inset:o,...a}){return e.jsxs(Wn,{"data-slot":"context-menu-checkbox-item","data-inset":o,className:M(d.checkboxItem,n),checked:r,...a,children:[e.jsx("span",{className:d.indicatorWrapper,"data-slot":"context-menu-checkbox-item-indicator",children:e.jsx(Ge,{children:e.jsx(Ce,{})})}),t]})}function Le({...n}){return e.jsx(qn,{"data-slot":"context-menu-radio-group",...n})}function W({className:n,children:t,inset:r,...o}){return e.jsxs(Dn,{"data-slot":"context-menu-radio-item","data-inset":r,className:M(d.radioItem,n),...o,children:[e.jsx("span",{className:d.indicatorWrapper,"data-slot":"context-menu-radio-item-indicator",children:e.jsx(Ge,{children:e.jsx(Ce,{})})}),t]})}function I({className:n,inset:t,...r}){return e.jsx(Gn,{"data-slot":"context-menu-label","data-inset":t,className:M(d.label,n),...r})}function c({className:n,...t}){return e.jsx(Un,{"data-slot":"context-menu-separator",className:M(d.separator,n),...t})}function S({className:n,...t}){return e.jsx("span",{"data-slot":"context-menu-shortcut",className:M(d.shortcut,n),...t})}function We({...n}){return e.jsx(Xn,{"data-slot":"context-menu-sub",...n})}function qe({className:n,inset:t,children:r,...o}){return e.jsxs($n,{"data-slot":"context-menu-sub-trigger","data-inset":t,className:M(d.subTrigger,n),...o,children:[r,e.jsx($e,{className:d.chevron})]})}function De({className:n,...t}){return e.jsx(Jn,{"data-slot":"context-menu-sub-content",className:M(d.subContent,n),...t})}g.__docgenInfo={description:`Root component for the context menu system.

Provides context and accessibility bindings for the menu. Must wrap
\`ContextMenuTrigger\` and \`ContextMenuContent\`.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Root>} props - Props passed to Radix's \`ContextMenu.Root\`.
@returns {JSX.Element}

@example
<ContextMenu>
  <ContextMenuTrigger>Clique com o botão direito</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Item</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,methods:[],displayName:"ContextMenu"};L.__docgenInfo={description:`A checkable menu item that toggles between checked and unchecked states.

Displays a \`CheckIcon\` indicator when checked.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>} props - CheckboxItem props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.checked] - The controlled checked state.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<ContextMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
  Exibir status
</ContextMenuCheckboxItem>`,methods:[],displayName:"ContextMenuCheckboxItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};b.__docgenInfo={description:`The floating menu panel rendered in a portal at the cursor position.

Automatically handles positioning and plays open/close animations.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Content>} props - Content props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<ContextMenuContent>
  <ContextMenuItem>Item</ContextMenuItem>
</ContextMenuContent>`,methods:[],displayName:"ContextMenuContent"};$.__docgenInfo={description:`Groups related menu items together.

Has no visual styling by default — use \`ContextMenuLabel\` to add a heading.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Group>} props - Group props.
@returns {JSX.Element}

@example
<ContextMenuGroup>
  <ContextMenuLabel>Conta</ContextMenuLabel>
  <ContextMenuItem>Perfil</ContextMenuItem>
</ContextMenuGroup>`,methods:[],displayName:"ContextMenuGroup"};i.__docgenInfo={description:`An interactive item within the context menu.

Supports an optional \`inset\` layout and a \`destructive\` variant for dangerous actions.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Item>} props - Item props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with indented items.
@param {"default" | "destructive"} [props.variant="default"] - Visual variant.
@returns {JSX.Element}

@example
<ContextMenuItem>
  <UserIcon />
  Perfil
</ContextMenuItem>

@example
<ContextMenuItem variant="destructive">
  <TrashIcon />
  Excluir
</ContextMenuItem>`,methods:[],displayName:"ContextMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "destructive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};I.__docgenInfo={description:`A non-interactive label for a group of menu items.

Supports the same \`inset\` layout as \`ContextMenuItem\`.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Label>} props - Label props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<ContextMenuLabel>Minha Conta</ContextMenuLabel>`,methods:[],displayName:"ContextMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};Le.__docgenInfo={description:`Groups radio items to allow single selection within the context menu.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>} props - RadioGroup props.
@returns {JSX.Element}

@example
<ContextMenuRadioGroup value={position} onValueChange={setPosition}>
  <ContextMenuRadioItem value="top">Topo</ContextMenuRadioItem>
  <ContextMenuRadioItem value="bottom">Base</ContextMenuRadioItem>
</ContextMenuRadioGroup>`,methods:[],displayName:"ContextMenuRadioGroup"};W.__docgenInfo={description:`A radio-style menu item that belongs to a \`ContextMenuRadioGroup\`.

Displays a \`CheckIcon\` indicator when selected.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>} props - RadioItem props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<ContextMenuRadioItem value="light">Claro</ContextMenuRadioItem>`,methods:[],displayName:"ContextMenuRadioItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:`A visual separator line between groups of menu items.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Separator>} props - Separator props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<ContextMenuSeparator />`,methods:[],displayName:"ContextMenuSeparator"};S.__docgenInfo={description:`Displays a keyboard shortcut hint aligned to the right of a menu item.

Must be placed inside a \`ContextMenuItem\`.

@component
@param {React.ComponentProps<"span">} props - Standard span props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<ContextMenuItem>
  Perfil
  <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
</ContextMenuItem>`,methods:[],displayName:"ContextMenuShortcut"};We.__docgenInfo={description:`Root component for a nested sub-menu within the context menu.

Must wrap \`ContextMenuSubTrigger\` and \`ContextMenuSubContent\`.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Sub>} props - Sub props.
@returns {JSX.Element}

@example
<ContextMenuSub>
  <ContextMenuSubTrigger>Mais opções</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Opção A</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>`,methods:[],displayName:"ContextMenuSub"};De.__docgenInfo={description:`The content panel for a nested sub-menu.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.SubContent>} props - SubContent props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<ContextMenuSubContent>
  <ContextMenuItem>Opção A</ContextMenuItem>
</ContextMenuSubContent>`,methods:[],displayName:"ContextMenuSubContent"};qe.__docgenInfo={description:`The trigger item that opens a sub-menu when focused or hovered.

Renders a \`ChevronRightIcon\` on the right side to indicate the sub-menu.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>} props - SubTrigger props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<ContextMenuSubTrigger>Mais opções</ContextMenuSubTrigger>`,methods:[],displayName:"ContextMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};f.__docgenInfo={description:`The area that listens for right-click events to open the context menu.

@component
@param {React.ComponentProps<typeof ContextMenuPrimitive.Trigger>} props - Trigger props.
@returns {JSX.Element}

@example
<ContextMenuTrigger>
  <div>Clique com o botão direito aqui</div>
</ContextMenuTrigger>`,methods:[],displayName:"ContextMenuTrigger"};const tt="_wrapper_di7sc_1",ot="_dark_di7sc_7",rt="_light_di7sc_8",at="_trigger_di7sc_26",h={wrapper:tt,dark:ot,light:rt,trigger:at},J=({theme:n,children:t})=>{const[r,o]=s.useState(null);return e.jsx(Xe,{value:r,children:e.jsx("div",{ref:o,className:h[n],children:t})})},st=n=>e.jsxs("div",{className:h.wrapper,children:[e.jsx(J,{theme:"dark",children:e.jsx(n,{})}),e.jsx(J,{theme:"light",children:e.jsx(n,{})})]}),it=()=>e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsx(I,{children:"Minha Conta"}),e.jsx(c,{}),e.jsxs($,{children:[e.jsxs(i,{children:[e.jsx(R,{}),"Perfil"]}),e.jsxs(i,{children:[e.jsx(U,{}),"Faturamento"]}),e.jsxs(i,{children:[e.jsx(q,{}),"Configurações"]})]}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(D,{}),"Sair"]})]})]}),Dt={title:"Components/general/ContextMenu",component:it,tags:["autodocs"],decorators:[st]},y={},T={render:()=>e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsx(I,{inset:!0,children:"Minha Conta"}),e.jsx(c,{}),e.jsx(i,{inset:!0,children:"Perfil"}),e.jsx(i,{inset:!0,children:"Faturamento"}),e.jsx(i,{inset:!0,children:"Configurações"}),e.jsx(c,{}),e.jsx(i,{inset:!0,children:"Sair"})]})]})},w={render:()=>e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsxs($,{children:[e.jsxs(i,{children:[e.jsx(R,{}),"Perfil"]}),e.jsxs(We,{children:[e.jsxs(qe,{children:[e.jsx(cn,{}),"Convidar usuários"]}),e.jsxs(De,{children:[e.jsxs(i,{children:[e.jsx(Cn,{}),"Por e-mail"]}),e.jsxs(i,{children:[e.jsx(mn,{}),"Por mensagem"]}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(xn,{}),"Mais opções"]})]})]})]}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(D,{}),"Sair"]})]})]})},E={render:()=>e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsxs(i,{children:[e.jsx(R,{}),"Perfil",e.jsx(S,{children:"⇧⌘P"})]}),e.jsxs(i,{children:[e.jsx(U,{}),"Faturamento",e.jsx(S,{children:"⌘B"})]}),e.jsxs(i,{children:[e.jsx(q,{}),"Configurações",e.jsx(S,{children:"⌘S"})]}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(D,{}),"Sair",e.jsx(S,{children:"⇧⌘Q"})]})]})]})},ut=()=>{const[n,t]=s.useState(!0),[r,o]=s.useState(!1),[a,p]=s.useState(!0);return e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsx(I,{children:"Visibilidade"}),e.jsx(c,{}),e.jsx(L,{checked:n,onCheckedChange:t,children:"Exibir status"}),e.jsx(L,{checked:r,onCheckedChange:o,children:"Exibir painel lateral"}),e.jsx(L,{checked:a,onCheckedChange:p,children:"Exibir atividade recente"})]})]})},k={render:()=>e.jsx(ut,{})},ct=()=>{const[n,t]=s.useState("system");return e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsx(I,{children:"Tema"}),e.jsx(c,{}),e.jsxs(Le,{value:n,onValueChange:t,children:[e.jsx(W,{value:"light",children:"Claro"}),e.jsx(W,{value:"dark",children:"Escuro"}),e.jsx(W,{value:"system",children:"Sistema"})]})]})]})},O={render:()=>e.jsx(ct,{})},A={render:()=>e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsx(I,{children:"Conta"}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(R,{}),"Perfil"]}),e.jsxs(i,{children:[e.jsx(q,{}),"Configurações"]}),e.jsx(c,{}),e.jsxs(i,{variant:"destructive",children:[e.jsx(dn,{}),"Excluir conta"]})]})]})},G={render:()=>e.jsxs(g,{children:[e.jsx(f,{className:h.trigger,children:"Clique com o botão direito"}),e.jsxs(b,{children:[e.jsx(I,{children:"Conta"}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(R,{}),"Perfil"]}),e.jsxs(i,{disabled:!0,children:[e.jsx(U,{}),"Faturamento",e.jsx(S,{children:"⌘B"})]}),e.jsxs(i,{disabled:!0,children:[e.jsx(q,{}),"Configurações"]}),e.jsx(c,{}),e.jsxs(i,{children:[e.jsx(D,{}),"Sair"]})]})]})};var B,F,V;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(V=(F=y.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var H,Q,K;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>Minha Conta</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Perfil</ContextMenuItem>
        <ContextMenuItem inset>Faturamento</ContextMenuItem>
        <ContextMenuItem inset>Configurações</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Sair</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...(K=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var Y,z,Z;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <UserIcon />
            Perfil
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <UserPlusIcon />
              Convidar usuários
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>
                <MailIcon />
                Por e-mail
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageSquareIcon />
                Por mensagem
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <PlusCircleIcon />
                Mais opções
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOutIcon />
          Sair
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...(Z=(z=w.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var ee,ne,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <UserIcon />
          Perfil
          <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCardIcon />
          Faturamento
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings2Icon />
          Configurações
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOutIcon />
          Sair
          <ContextMenuShortcut>⇧⌘Q</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...(te=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,re,ae;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <CheckboxExample />
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ie,ue;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <RadioExample />
}`,...(ue=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,me,xe;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Conta</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <UserIcon />
          Perfil
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings2Icon />
          Configurações
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          Excluir conta
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...(xe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var de,pe,le;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Conta</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <UserIcon />
          Perfil
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <CreditCardIcon />
          Faturamento
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <Settings2Icon />
          Configurações
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOutIcon />
          Sair
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...(le=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const Ut=["Default","WithInset","WithSubMenu","WithShortcuts","WithCheckboxItems","WithRadioItems","WithDestructive","WithDisabledItems"];export{y as Default,k as WithCheckboxItems,A as WithDestructive,G as WithDisabledItems,T as WithInset,O as WithRadioItems,E as WithShortcuts,w as WithSubMenu,Ut as __namedExportsOrder,Dt as default};

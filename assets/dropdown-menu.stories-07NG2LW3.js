import{j as n}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{c as h}from"./clsx-CNgb8Gju.js";import{u as Un,P as Xn}from"./portalContainer-Cr0I3QJP.js";import{C as Jn}from"./chevron-right-DUgH9T71.js";import{C as hn}from"./check-BVeZ8qoc.js";import{c as A}from"./index-DW48STyt.js";import{c as zn}from"./index-DBCqBOGF.js";import{c as qn}from"./index-BYJyBkN8.js";import{u as Mn}from"./index-DEN0ugiW.js";import{P as Fn}from"./index-C9v26AP-.js";import{c as Dn,R as Vn,A as Kn,P as Hn,C as Qn,L as Yn,S as Zn,G as ne,I as ee,a as oe,b as re,d as te,e as ae,f as se,g as pe,h as de,i as ie,j as O,k as G,T as ue,U as ce,M as le,l as me}from"./user-plus-DHRi01Sg.js";import{u as U}from"./index-BolwHxDA.js";import{B as x}from"./index-B6QF9bbj.js";import{U as C,C as B}from"./user-DsyX2gIc.js";import{M as we}from"./mail-CkGpBlYt.js";import"./createLucideIcon-CRoqMwob.js";import"./index-WUhAcQt0.js";import"./index-CROobee-.js";import"./index-BojL7TVx.js";import"./index-CNfLqMdS.js";import"./index-B2zu5yC8.js";import"./index-vsAI3BIz.js";import"./index-Dl0iWJCF.js";import"./index-DslUmEDu.js";import"./index-SVyUj_8R.js";import"./index-Bav0yaTQ.js";import"./index-9j9_kZRm.js";import"./index-DfDSnz3T.js";var L="DropdownMenu",[he,Wo]=qn(L,[Dn]),u=Dn(),[Me,gn]=he(L),xn=e=>{const{__scopeDropdownMenu:o,children:r,dir:t,open:a,defaultOpen:d,onOpenChange:w,modal:i=!0}=e,m=u(o),W=p.useRef(null),[b,j]=Mn({prop:a,defaultProp:d??!1,onChange:w,caller:L});return n.jsx(Me,{scope:o,triggerId:U(),triggerRef:W,contentId:U(),open:b,onOpenChange:j,onOpenToggle:p.useCallback(()=>j($n=>!$n),[j]),modal:i,children:n.jsx(Vn,{...m,open:b,onOpenChange:j,dir:t,modal:i,children:r})})};xn.displayName=L;var fn="DropdownMenuTrigger",In=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,disabled:t=!1,...a}=e,d=gn(fn,r),w=u(r);return n.jsx(Kn,{asChild:!0,...w,children:n.jsx(Fn.button,{type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...a,ref:zn(o,d.triggerRef),onPointerDown:A(e.onPointerDown,i=>{!t&&i.button===0&&i.ctrlKey===!1&&(d.onOpenToggle(),d.open||i.preventDefault())}),onKeyDown:A(e.onKeyDown,i=>{t||(["Enter"," "].includes(i.key)&&d.onOpenToggle(),i.key==="ArrowDown"&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})})});In.displayName=fn;var De="DropdownMenuPortal",Cn=e=>{const{__scopeDropdownMenu:o,...r}=e,t=u(o);return n.jsx(Hn,{...t,...r})};Cn.displayName=De;var bn="DropdownMenuContent",jn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=gn(bn,r),d=u(r),w=p.useRef(!1);return n.jsx(Qn,{id:a.contentId,"aria-labelledby":a.triggerId,...d,...t,ref:o,onCloseAutoFocus:A(e.onCloseAutoFocus,i=>{var m;w.current||(m=a.triggerRef.current)==null||m.focus(),w.current=!1,i.preventDefault()}),onInteractOutside:A(e.onInteractOutside,i=>{const m=i.detail.originalEvent,W=m.button===0&&m.ctrlKey===!0,b=m.button===2||W;(!a.modal||b)&&(w.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});jn.displayName=bn;var ge="DropdownMenuGroup",Sn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(ne,{...a,...t,ref:o})});Sn.displayName=ge;var xe="DropdownMenuLabel",vn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(Yn,{...a,...t,ref:o})});vn.displayName=xe;var fe="DropdownMenuItem",_n=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(ee,{...a,...t,ref:o})});_n.displayName=fe;var Ie="DropdownMenuCheckboxItem",Pn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(ae,{...a,...t,ref:o})});Pn.displayName=Ie;var Ce="DropdownMenuRadioGroup",Rn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(pe,{...a,...t,ref:o})});Rn.displayName=Ce;var be="DropdownMenuRadioItem",yn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(de,{...a,...t,ref:o})});yn.displayName=be;var je="DropdownMenuItemIndicator",Tn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(se,{...a,...t,ref:o})});Tn.displayName=je;var Se="DropdownMenuSeparator",Nn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(Zn,{...a,...t,ref:o})});Nn.displayName=Se;var ve="DropdownMenuArrow",_e=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(ie,{...a,...t,ref:o})});_e.displayName=ve;var Pe=e=>{const{__scopeDropdownMenu:o,children:r,open:t,onOpenChange:a,defaultOpen:d}=e,w=u(o),[i,m]=Mn({prop:t,defaultProp:d??!1,onChange:a,caller:"DropdownMenuSub"});return n.jsx(oe,{...w,open:i,onOpenChange:m,children:r})},Re="DropdownMenuSubTrigger",En=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(re,{...a,...t,ref:o})});En.displayName=Re;var ye="DropdownMenuSubContent",kn=p.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...t}=e,a=u(r);return n.jsx(te,{...a,...t,ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});kn.displayName=ye;var Te=xn,Ne=In,Ee=Cn,ke=jn,Ae=Sn,Oe=vn,Ge=_n,Le=Pn,We=Rn,Be=yn,An=Tn,$e=Nn,Ue=Pe,Xe=En,Je=kn;const ze="_content_3zov2_2",qe="_item_3zov2_46",Fe="_shortcut_3zov2_102",Ve="_checkboxItem_3zov2_115",Ke="_radioItem_3zov2_161",He="_indicatorWrapper_3zov2_207",Qe="_label_3zov2_217",Ye="_separator_3zov2_230",Ze="_subTrigger_3zov2_237",no="_chevron_3zov2_279",eo="_subContent_3zov2_284",l={content:ze,item:qe,shortcut:Fe,checkboxItem:Ve,radioItem:Ke,indicatorWrapper:He,label:Qe,separator:Ye,subTrigger:Ze,chevron:no,subContent:eo};function M({...e}){return n.jsx(Te,{"data-slot":"dropdown-menu",...e})}function D({...e}){return n.jsx(Ne,{"data-slot":"dropdown-menu-trigger",...e})}function g({className:e,align:o="start",sideOffset:r=4,...t}){const a=Un();return n.jsx(Ee,{container:a??void 0,children:n.jsx(ke,{"data-slot":"dropdown-menu-content",sideOffset:r,align:o,className:h(l.content,e),...t})})}function $({...e}){return n.jsx(Ae,{"data-slot":"dropdown-menu-group",...e})}function s({className:e,inset:o,variant:r="default",...t}){return n.jsx(Ge,{"data-slot":"dropdown-menu-item","data-inset":o,"data-variant":r,className:h(l.item,e),...t})}function E({className:e,children:o,checked:r,inset:t,...a}){return n.jsxs(Le,{"data-slot":"dropdown-menu-checkbox-item","data-inset":t,className:h(l.checkboxItem,e),checked:r,...a,children:[n.jsx("span",{className:l.indicatorWrapper,"data-slot":"dropdown-menu-checkbox-item-indicator",children:n.jsx(An,{children:n.jsx(hn,{})})}),o]})}function On({...e}){return n.jsx(We,{"data-slot":"dropdown-menu-radio-group",...e})}function k({className:e,children:o,inset:r,...t}){return n.jsxs(Be,{"data-slot":"dropdown-menu-radio-item","data-inset":r,className:h(l.radioItem,e),...t,children:[n.jsx("span",{className:l.indicatorWrapper,"data-slot":"dropdown-menu-radio-item-indicator",children:n.jsx(An,{children:n.jsx(hn,{})})}),o]})}function f({className:e,inset:o,...r}){return n.jsx(Oe,{"data-slot":"dropdown-menu-label","data-inset":o,className:h(l.label,e),...r})}function c({className:e,...o}){return n.jsx($e,{"data-slot":"dropdown-menu-separator",className:h(l.separator,e),...o})}function I({className:e,...o}){return n.jsx("span",{"data-slot":"dropdown-menu-shortcut",className:h(l.shortcut,e),...o})}function Gn({...e}){return n.jsx(Ue,{"data-slot":"dropdown-menu-sub",...e})}function Ln({className:e,inset:o,children:r,...t}){return n.jsxs(Xe,{"data-slot":"dropdown-menu-sub-trigger","data-inset":o,className:h(l.subTrigger,e),...t,children:[r,n.jsx(Jn,{className:l.chevron})]})}function Wn({className:e,...o}){return n.jsx(Je,{"data-slot":"dropdown-menu-sub-content",className:h(l.subContent,e),...o})}M.__docgenInfo={description:`Root component for the dropdown menu system.

Provides context and accessibility bindings for the menu. Must wrap
\`DropdownMenuTrigger\` and \`DropdownMenuContent\`.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Root>} props - Props passed to Radix's \`DropdownMenu.Root\`.
@returns {JSX.Element}

@example
<DropdownMenu>
  <DropdownMenuTrigger>Abrir</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,methods:[],displayName:"DropdownMenu"};E.__docgenInfo={description:`A checkable menu item that toggles between checked and unchecked states.

Displays a \`CheckIcon\` indicator when checked.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>} props - CheckboxItem props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.checked] - The controlled checked state.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
  Exibir status
</DropdownMenuCheckboxItem>`,methods:[],displayName:"DropdownMenuCheckboxItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};g.__docgenInfo={description:`The floating menu panel rendered in a portal.

Automatically handles positioning relative to the trigger and plays
open/close animations.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Content>} props - Content props.
@param {string} [props.className] - Optional additional class names.
@param {"start" | "center" | "end"} [props.align="start"] - Alignment relative to the trigger.
@param {number} [props.sideOffset=4] - Distance in pixels from the trigger.
@returns {JSX.Element}

@example
<DropdownMenuContent align="end">
  <DropdownMenuItem>Item</DropdownMenuItem>
</DropdownMenuContent>`,methods:[],displayName:"DropdownMenuContent",props:{align:{defaultValue:{value:'"start"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};$.__docgenInfo={description:`Groups related menu items together.

Has no visual styling by default — use \`DropdownMenuLabel\` to add a heading.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Group>} props - Group props.
@returns {JSX.Element}

@example
<DropdownMenuGroup>
  <DropdownMenuLabel>Conta</DropdownMenuLabel>
  <DropdownMenuItem>Perfil</DropdownMenuItem>
</DropdownMenuGroup>`,methods:[],displayName:"DropdownMenuGroup"};s.__docgenInfo={description:`An interactive item within the dropdown menu.

Supports an optional \`inset\` layout (left-padded to align with checkbox/radio items)
and a \`destructive\` variant for dangerous actions.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Item>} props - Item props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with indented items.
@param {"default" | "destructive"} [props.variant="default"] - Visual variant.
@returns {JSX.Element}

@example
<DropdownMenuItem>
  <UserIcon />
  Perfil
</DropdownMenuItem>

@example
<DropdownMenuItem variant="destructive">
  <TrashIcon />
  Excluir conta
</DropdownMenuItem>`,methods:[],displayName:"DropdownMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "destructive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};f.__docgenInfo={description:`A non-interactive label for a group of menu items.

Supports the same \`inset\` layout as \`DropdownMenuItem\`.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Label>} props - Label props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<DropdownMenuLabel>Minha Conta</DropdownMenuLabel>`,methods:[],displayName:"DropdownMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};On.__docgenInfo={description:`Groups radio items to allow single selection within the dropdown menu.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>} props - RadioGroup props.
@returns {JSX.Element}

@example
<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
  <DropdownMenuRadioItem value="top">Topo</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">Base</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`,methods:[],displayName:"DropdownMenuRadioGroup"};k.__docgenInfo={description:`A radio-style menu item that belongs to a \`DropdownMenuRadioGroup\`.

Displays a \`CheckIcon\` indicator when selected.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>} props - RadioItem props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<DropdownMenuRadioItem value="light">Claro</DropdownMenuRadioItem>`,methods:[],displayName:"DropdownMenuRadioItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:`A visual separator line between groups of menu items.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Separator>} props - Separator props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<DropdownMenuSeparator />`,methods:[],displayName:"DropdownMenuSeparator"};I.__docgenInfo={description:`Displays a keyboard shortcut hint aligned to the right of a menu item.

Must be placed inside a \`DropdownMenuItem\`. Changes color when the parent
item is focused.

@component
@param {React.ComponentProps<"span">} props - Standard span props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<DropdownMenuItem>
  Perfil
  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
</DropdownMenuItem>`,methods:[],displayName:"DropdownMenuShortcut"};Gn.__docgenInfo={description:`Root component for a nested sub-menu within the dropdown menu.

Must wrap \`DropdownMenuSubTrigger\` and \`DropdownMenuSubContent\`.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Sub>} props - Sub props.
@returns {JSX.Element}

@example
<DropdownMenuSub>
  <DropdownMenuSubTrigger>Mais opções</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Opção A</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`,methods:[],displayName:"DropdownMenuSub"};Wn.__docgenInfo={description:`The content panel for a nested sub-menu.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>} props - SubContent props.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<DropdownMenuSubContent>
  <DropdownMenuItem>Opção A</DropdownMenuItem>
</DropdownMenuSubContent>`,methods:[],displayName:"DropdownMenuSubContent"};Ln.__docgenInfo={description:`The trigger item that opens a sub-menu when focused or hovered.

Renders a \`ChevronRightIcon\` on the right side to indicate the sub-menu.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>} props - SubTrigger props.
@param {string} [props.className] - Optional additional class names.
@param {boolean} [props.inset] - When true, adds left padding to align with inset items.
@returns {JSX.Element}

@example
<DropdownMenuSubTrigger>Mais opções</DropdownMenuSubTrigger>`,methods:[],displayName:"DropdownMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};D.__docgenInfo={description:`Element that triggers the dropdown menu to open when interacted with.

@component
@param {React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>} props - Trigger props.
@returns {JSX.Element}

@example
<DropdownMenuTrigger asChild>
  <button>Abrir Menu</button>
</DropdownMenuTrigger>`,methods:[],displayName:"DropdownMenuTrigger"};const oo="_wrapper_p5knj_1",ro="_dark_p5knj_6",to="_light_p5knj_7",Bn={wrapper:oo,dark:ro,light:to},X=({theme:e,children:o})=>{const[r,t]=p.useState(null);return n.jsx(Xn,{value:r,children:n.jsx("div",{ref:t,className:Bn[e],children:o})})},ao=e=>n.jsxs("div",{className:Bn.wrapper,children:[n.jsx(X,{theme:"dark",children:n.jsx(e,{})}),n.jsx(X,{theme:"light",children:n.jsx(e,{})})]}),so=()=>n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Abrir Menu"})}),n.jsxs(g,{children:[n.jsx(f,{children:"Minha Conta"}),n.jsx(c,{}),n.jsxs($,{children:[n.jsxs(s,{children:[n.jsx(C,{}),"Perfil"]}),n.jsxs(s,{children:[n.jsx(B,{}),"Faturamento"]}),n.jsxs(s,{children:[n.jsx(O,{}),"Configurações"]})]}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(G,{}),"Sair"]})]})]}),Bo={title:"Components/general/DropdownMenu",component:so,tags:["autodocs"],decorators:[ao]},S={},v={render:()=>n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Inset"})}),n.jsxs(g,{children:[n.jsx(f,{inset:!0,children:"Minha Conta"}),n.jsx(c,{}),n.jsx(s,{inset:!0,children:"Perfil"}),n.jsx(s,{inset:!0,children:"Faturamento"}),n.jsx(s,{inset:!0,children:"Configurações"}),n.jsx(c,{}),n.jsx(s,{inset:!0,children:"Sair"})]})]})},_={render:()=>n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Destrutivo"})}),n.jsxs(g,{children:[n.jsx(f,{children:"Conta"}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(C,{}),"Perfil"]}),n.jsxs(s,{children:[n.jsx(O,{}),"Configurações"]}),n.jsx(c,{}),n.jsxs(s,{variant:"destructive",children:[n.jsx(ue,{}),"Excluir conta"]})]})]})},po=()=>{const[e,o]=p.useState(!0),[r,t]=p.useState(!1),[a,d]=p.useState(!0);return n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Checkboxes"})}),n.jsxs(g,{children:[n.jsx(f,{children:"Visibilidade"}),n.jsx(c,{}),n.jsx(E,{checked:e,onCheckedChange:o,children:"Exibir status"}),n.jsx(E,{checked:r,onCheckedChange:t,children:"Exibir painel lateral"}),n.jsx(E,{checked:a,onCheckedChange:d,children:"Exibir atividade recente"})]})]})},P={render:()=>n.jsx(po,{})},io=()=>{const[e,o]=p.useState("system");return n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Rádio"})}),n.jsxs(g,{children:[n.jsx(f,{children:"Tema"}),n.jsx(c,{}),n.jsxs(On,{value:e,onValueChange:o,children:[n.jsx(k,{value:"light",children:"Claro"}),n.jsx(k,{value:"dark",children:"Escuro"}),n.jsx(k,{value:"system",children:"Sistema"})]})]})]})},R={render:()=>n.jsx(io,{})},y={render:()=>n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Sub-menu"})}),n.jsxs(g,{children:[n.jsxs($,{children:[n.jsxs(s,{children:[n.jsx(C,{}),"Perfil"]}),n.jsxs(Gn,{children:[n.jsxs(Ln,{children:[n.jsx(ce,{}),"Convidar usuários"]}),n.jsxs(Wn,{children:[n.jsxs(s,{children:[n.jsx(we,{}),"Por e-mail"]}),n.jsxs(s,{children:[n.jsx(le,{}),"Por mensagem"]}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(me,{}),"Mais opções"]})]})]})]}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(G,{}),"Sair"]})]})]})},T={render:()=>n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Atalhos"})}),n.jsxs(g,{children:[n.jsxs(s,{children:[n.jsx(C,{}),"Perfil",n.jsx(I,{children:"⇧⌘P"})]}),n.jsxs(s,{children:[n.jsx(B,{}),"Faturamento",n.jsx(I,{children:"⌘B"})]}),n.jsxs(s,{children:[n.jsx(O,{}),"Configurações",n.jsx(I,{children:"⌘S"})]}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(G,{}),"Sair",n.jsx(I,{children:"⇧⌘Q"})]})]})]})},N={render:()=>n.jsxs(M,{children:[n.jsx(D,{asChild:!0,children:n.jsx(x,{children:"Com Itens Desabilitados"})}),n.jsxs(g,{children:[n.jsx(f,{children:"Conta"}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(C,{}),"Perfil"]}),n.jsxs(s,{disabled:!0,children:[n.jsx(B,{}),"Faturamento",n.jsx(I,{children:"⌘B"})]}),n.jsxs(s,{disabled:!0,children:[n.jsx(O,{}),"Configurações"]}),n.jsx(c,{}),n.jsxs(s,{children:[n.jsx(G,{}),"Sair"]})]})]})};var J,z,q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var F,V,K;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Inset</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel inset>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Perfil</DropdownMenuItem>
        <DropdownMenuItem inset>Faturamento</DropdownMenuItem>
        <DropdownMenuItem inset>Configurações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(K=(V=v.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var H,Q,Y;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Destrutivo</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings2Icon />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Excluir conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(Y=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,nn,en;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <CheckboxExample />
}`,...(en=(nn=P.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var on,rn,tn;R.parameters={...R.parameters,docs:{...(on=R.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: () => <RadioExample />
}`,...(tn=(rn=R.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var an,sn,pn;y.parameters={...y.parameters,docs:{...(an=y.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Sub-menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Perfil
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlusIcon />
              Convidar usuários
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <MailIcon />
                Por e-mail
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquareIcon />
                Por mensagem
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircleIcon />
                Mais opções
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(pn=(sn=y.parameters)==null?void 0:sn.docs)==null?void 0:pn.source}}};var dn,un,cn;T.parameters={...T.parameters,docs:{...(dn=T.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Atalhos</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Perfil
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Faturamento
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings2Icon />
          Configurações
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sair
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(cn=(un=T.parameters)==null?void 0:un.docs)==null?void 0:cn.source}}};var ln,mn,wn;N.parameters={...N.parameters,docs:{...(ln=N.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Itens Desabilitados</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <CreditCardIcon />
          Faturamento
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings2Icon />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(wn=(mn=N.parameters)==null?void 0:mn.docs)==null?void 0:wn.source}}};const $o=["Default","WithInset","WithDestructive","WithCheckboxItems","WithRadioItems","WithSubMenu","WithShortcuts","WithDisabledItems"];export{S as Default,P as WithCheckboxItems,_ as WithDestructive,N as WithDisabledItems,v as WithInset,R as WithRadioItems,T as WithShortcuts,y as WithSubMenu,$o as __namedExportsOrder,Bo as default};

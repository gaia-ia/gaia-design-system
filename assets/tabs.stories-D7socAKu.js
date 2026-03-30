import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as D}from"./clsx-CNgb8Gju.js";import{r as i}from"./index-GiUgBvb1.js";import{c as C}from"./index-DW48STyt.js";import{c as le,u as ce}from"./index-D5bCXf9E.js";import{c as Le}from"./index-BZJxi_YX.js";import{u as Ve}from"./index-DBCqBOGF.js";import{u as ue}from"./index-BolwHxDA.js";import{P as y}from"./index-C9v26AP-.js";import{u as Pe}from"./index-Dl0iWJCF.js";import{u as de}from"./index-B2zu5yC8.js";import{P as De}from"./index-9j9_kZRm.js";import"./index-WUhAcQt0.js";import"./index-BojL7TVx.js";import"./index-CROobee-.js";var z="rovingFocusGroup.onEntryFocus",Ge={bubbles:!1,cancelable:!0},N="RovingFocusGroup",[U,pe,Oe]=Le(N),[Me,be]=le(N,[Oe]),[ke,Ke]=Me(N),ge=i.forwardRef((a,t)=>e.jsx(U.Provider,{scope:a.__scopeRovingFocusGroup,children:e.jsx(U.Slot,{scope:a.__scopeRovingFocusGroup,children:e.jsx(ze,{...a,ref:t})})}));ge.displayName=N;var ze=i.forwardRef((a,t)=>{const{__scopeRovingFocusGroup:r,orientation:n,loop:p=!1,dir:b,currentTabStopId:o,defaultCurrentTabStopId:T,onCurrentTabStopIdChange:h,onEntryFocus:v,preventScrollOnEntryFocus:s=!1,...l}=a,m=i.useRef(null),L=Ve(t,m),V=de(b),[P,c]=ce({prop:o,defaultProp:T??null,onChange:h,caller:N}),[x,M]=i.useState(!1),f=Pe(v),j=pe(r),k=i.useRef(!1),[Se,B]=i.useState(0);return i.useEffect(()=>{const g=m.current;if(g)return g.addEventListener(z,f),()=>g.removeEventListener(z,f)},[f]),e.jsx(ke,{scope:r,orientation:n,dir:V,loop:p,currentTabStopId:P,onItemFocus:i.useCallback(g=>c(g),[c]),onItemShiftTab:i.useCallback(()=>M(!0),[]),onFocusableItemAdd:i.useCallback(()=>B(g=>g+1),[]),onFocusableItemRemove:i.useCallback(()=>B(g=>g-1),[]),children:e.jsx(y.div,{tabIndex:x||Se===0?-1:0,"data-orientation":n,...l,ref:L,style:{outline:"none",...a.style},onMouseDown:C(a.onMouseDown,()=>{k.current=!0}),onFocus:C(a.onFocus,g=>{const Ee=!k.current;if(g.target===g.currentTarget&&Ee&&!x){const q=new CustomEvent(z,Ge);if(g.currentTarget.dispatchEvent(q),!q.defaultPrevented){const K=j().filter(I=>I.focusable),Ae=K.find(I=>I.active),Fe=K.find(I=>I.id===P),Ne=[Ae,Fe,...K].filter(Boolean).map(I=>I.ref.current);me(Ne,s)}}k.current=!1}),onBlur:C(a.onBlur,()=>M(!1))})})}),Te="RovingFocusGroupItem",ve=i.forwardRef((a,t)=>{const{__scopeRovingFocusGroup:r,focusable:n=!0,active:p=!1,tabStopId:b,children:o,...T}=a,h=ue(),v=b||h,s=Ke(Te,r),l=s.currentTabStopId===v,m=pe(r),{onFocusableItemAdd:L,onFocusableItemRemove:V,currentTabStopId:P}=s;return i.useEffect(()=>{if(n)return L(),()=>V()},[n,L,V]),e.jsx(U.ItemSlot,{scope:r,id:v,focusable:n,active:p,children:e.jsx(y.span,{tabIndex:l?0:-1,"data-orientation":s.orientation,...T,ref:t,onMouseDown:C(a.onMouseDown,c=>{n?s.onItemFocus(v):c.preventDefault()}),onFocus:C(a.onFocus,()=>s.onItemFocus(v)),onKeyDown:C(a.onKeyDown,c=>{if(c.key==="Tab"&&c.shiftKey){s.onItemShiftTab();return}if(c.target!==c.currentTarget)return;const x=Be(c,s.orientation,s.dir);if(x!==void 0){if(c.metaKey||c.ctrlKey||c.altKey||c.shiftKey)return;c.preventDefault();let f=m().filter(j=>j.focusable).map(j=>j.ref.current);if(x==="last")f.reverse();else if(x==="prev"||x==="next"){x==="prev"&&f.reverse();const j=f.indexOf(c.currentTarget);f=s.loop?qe(f,j+1):f.slice(j+1)}setTimeout(()=>me(f))}}),children:typeof o=="function"?o({isCurrentTabStop:l,hasTabStop:P!=null}):o})})});ve.displayName=Te;var Ue={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $e(a,t){return t!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Be(a,t,r){const n=$e(a.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return Ue[n]}function me(a,t=!1){const r=document.activeElement;for(const n of a)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}function qe(a,t){return a.map((r,n)=>a[(t+n)%a.length])}var Ye=ge,He=ve,G="Tabs",[We,xa]=le(G,[be]),fe=be(),[Je,$]=We(G),he=i.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,onValueChange:p,defaultValue:b,orientation:o="horizontal",dir:T,activationMode:h="automatic",...v}=a,s=de(T),[l,m]=ce({prop:n,onChange:p,defaultProp:b??"",caller:G});return e.jsx(Je,{scope:r,baseId:ue(),value:l,onValueChange:m,orientation:o,dir:s,activationMode:h,children:e.jsx(y.div,{dir:s,"data-orientation":o,...v,ref:t})})});he.displayName=G;var Ce="TabsList",xe=i.forwardRef((a,t)=>{const{__scopeTabs:r,loop:n=!0,...p}=a,b=$(Ce,r),o=fe(r);return e.jsx(Ye,{asChild:!0,...o,orientation:b.orientation,dir:b.dir,loop:n,children:e.jsx(y.div,{role:"tablist","aria-orientation":b.orientation,...p,ref:t})})});xe.displayName=Ce;var je="TabsTrigger",Ie=i.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,disabled:p=!1,...b}=a,o=$(je,r),T=fe(r),h=Re(o.baseId,n),v=we(o.baseId,n),s=n===o.value;return e.jsx(He,{asChild:!0,...T,focusable:!p,active:s,children:e.jsx(y.button,{type:"button",role:"tab","aria-selected":s,"aria-controls":v,"data-state":s?"active":"inactive","data-disabled":p?"":void 0,disabled:p,id:h,...b,ref:t,onMouseDown:C(a.onMouseDown,l=>{!p&&l.button===0&&l.ctrlKey===!1?o.onValueChange(n):l.preventDefault()}),onKeyDown:C(a.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&o.onValueChange(n)}),onFocus:C(a.onFocus,()=>{const l=o.activationMode!=="manual";!s&&!p&&l&&o.onValueChange(n)})})})});Ie.displayName=je;var _e="TabsContent",ye=i.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,forceMount:p,children:b,...o}=a,T=$(_e,r),h=Re(T.baseId,n),v=we(T.baseId,n),s=n===T.value,l=i.useRef(s);return i.useEffect(()=>{const m=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(De,{present:p||s,children:({present:m})=>e.jsx(y.div,{"data-state":s?"active":"inactive","data-orientation":T.orientation,role:"tabpanel","aria-labelledby":h,hidden:!m,id:v,tabIndex:0,...o,ref:t,style:{...a.style,animationDuration:l.current?"0s":void 0},children:m&&b})})});ye.displayName=_e;function Re(a,t){return`${a}-trigger-${t}`}function we(a,t){return`${a}-content-${t}`}var Qe=he,Xe=xe,Ze=Ie,ea=ye;const aa="_root_1png9_1",ta="_list_1png9_10",na="_trigger_1png9_38",ra="_content_1png9_140",O={root:aa,list:ta,trigger:na,content:ra};function _({className:a,orientation:t="horizontal",...r}){return e.jsx(Qe,{"data-slot":"tabs","data-orientation":t,orientation:t,className:D(O.root,a),...r})}function R({className:a,variant:t="default",...r}){return e.jsx(Xe,{"data-slot":"tabs-list","data-variant":t,className:D(O.list,a),...r})}function u({className:a,...t}){return e.jsx(Ze,{"data-slot":"tabs-trigger",className:D(O.trigger,a),...t})}function d({className:a,...t}){return e.jsx(ea,{"data-slot":"tabs-content",className:D(O.content,a),...t})}_.__docgenInfo={description:`A tabbed interface component built on Radix UI primitives.
Organizes content into multiple panels, with only one panel visible at a time.

@component
@param {TabsProps} props - The tabs root props.
@param {"horizontal" | "vertical"} [props.orientation="horizontal"] - The orientation of the tab list.
@param {string} [props.defaultValue] - The value of the tab to be active by default.
@param {string} [props.value] - The controlled active tab value.
@param {(value: string) => void} [props.onValueChange] - Callback fired when the active tab changes.
@param {string} [props.className] - Additional CSS class names to apply.
@returns {React.ReactElement} The rendered tabs root element.

@example
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

@example
// Vertical orientation
<Tabs defaultValue="tab1" orientation="vertical">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`,methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};d.__docgenInfo={description:`The content panel associated with a tab trigger.
Only the content for the active tab is rendered.

@component
@param {React.ComponentProps<typeof TabsPrimitive.Content>} props - The tab content props.
@param {string} props.value - The unique value that associates the content with a trigger.
@param {string} [props.className] - Additional CSS class names to apply.
@returns {React.ReactElement} The rendered tab content element.

@example
<TabsContent value="tab1">
  <p>Content for tab 1</p>
</TabsContent>`,methods:[],displayName:"TabsContent"};R.__docgenInfo={description:`A container for tab triggers that provides visual grouping and layout.

@component
@param {TabsListProps} props - The tabs list props.
@param {"default" | "line"} [props.variant="default"] - The visual style variant.

- \`"default"\`: Contained style with background.
- \`"line"\`: Minimal style with underline indicator.

@param {string} [props.className] - Additional CSS class names to apply.
@returns {React.ReactElement} The rendered tabs list element.

@example
<TabsList>
  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
</TabsList>

@example
// Line variant
<TabsList variant="line">
  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
</TabsList>`,methods:[],displayName:"TabsList",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "line"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"line"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};u.__docgenInfo={description:`A button that activates its associated tab panel.

@component
@param {React.ComponentProps<typeof TabsPrimitive.Trigger>} props - The tab trigger props.
@param {string} props.value - The unique value that associates the trigger with a content panel.
@param {boolean} [props.disabled] - When true, prevents the user from interacting with the tab.
@param {string} [props.className] - Additional CSS class names to apply.
@returns {React.ReactElement} The rendered tab trigger element.

@example
<TabsTrigger value="tab1">Tab 1</TabsTrigger>

@example
// Disabled trigger
<TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>`,methods:[],displayName:"TabsTrigger"};const ja={title:"Components/general/Tabs",component:_,tags:["autodocs"]},w=()=>e.jsxs(_,{defaultValue:"account",children:[e.jsxs(R,{children:[e.jsx(u,{value:"account",children:"Conta"}),e.jsx(u,{value:"password",children:"Senha"}),e.jsx(u,{value:"settings",children:"Configurações"})]}),e.jsx(d,{value:"account",children:e.jsx("p",{children:"Gerencie as informações da sua conta, como nome e e-mail."})}),e.jsx(d,{value:"password",children:e.jsx("p",{children:"Atualize sua senha para manter sua conta segura."})}),e.jsx(d,{value:"settings",children:e.jsx("p",{children:"Ajuste as configurações gerais do sistema."})})]}),S=()=>e.jsxs(_,{defaultValue:"overview",children:[e.jsxs(R,{variant:"line",children:[e.jsx(u,{value:"overview",children:"Visão Geral"}),e.jsx(u,{value:"analytics",children:"Análises"}),e.jsx(u,{value:"reports",children:"Relatórios"})]}),e.jsx(d,{value:"overview",children:e.jsx("p",{children:"Resumo das principais métricas e indicadores."})}),e.jsx(d,{value:"analytics",children:e.jsx("p",{children:"Dados detalhados de uso e comportamento."})}),e.jsx(d,{value:"reports",children:e.jsx("p",{children:"Relatórios exportáveis com histórico completo."})})]}),E=()=>e.jsxs(_,{defaultValue:"profile",orientation:"vertical",children:[e.jsxs(R,{children:[e.jsx(u,{value:"profile",children:"Perfil"}),e.jsx(u,{value:"notifications",children:"Notificações"}),e.jsx(u,{value:"billing",children:"Cobrança"})]}),e.jsx(d,{value:"profile",children:e.jsx("p",{children:"Edite suas informações de perfil e foto."})}),e.jsx(d,{value:"notifications",children:e.jsx("p",{children:"Configure suas preferências de notificação."})}),e.jsx(d,{value:"billing",children:e.jsx("p",{children:"Gerencie seu plano e métodos de pagamento."})})]}),A=()=>e.jsxs(_,{defaultValue:"active",children:[e.jsxs(R,{children:[e.jsx(u,{value:"active",children:"Ativa"}),e.jsx(u,{value:"disabled",disabled:!0,children:"Desabilitada"}),e.jsx(u,{value:"other",children:"Outra"})]}),e.jsx(d,{value:"active",children:e.jsx("p",{children:"Esta aba está ativa e pode ser selecionada."})}),e.jsx(d,{value:"disabled",children:e.jsx("p",{children:"Este conteúdo não pode ser acessado."})}),e.jsx(d,{value:"other",children:e.jsx("p",{children:"Outra aba disponível para interação."})})]}),F=()=>e.jsxs(_,{defaultValue:"general",orientation:"vertical",children:[e.jsxs(R,{variant:"line",children:[e.jsx(u,{value:"general",children:"Geral"}),e.jsx(u,{value:"security",children:"Segurança"}),e.jsx(u,{value:"integrations",children:"Integrações"})]}),e.jsx(d,{value:"general",children:e.jsx("p",{children:"Configurações gerais da aplicação."})}),e.jsx(d,{value:"security",children:e.jsx("p",{children:"Opções de segurança e autenticação."})}),e.jsx(d,{value:"integrations",children:e.jsx("p",{children:"Gerencie integrações com serviços externos."})})]});w.__docgenInfo={description:"",methods:[],displayName:"Default"};S.__docgenInfo={description:"",methods:[],displayName:"LineVariant"};E.__docgenInfo={description:"",methods:[],displayName:"Vertical"};A.__docgenInfo={description:"",methods:[],displayName:"Disabled"};F.__docgenInfo={description:"",methods:[],displayName:"VerticalLine"};var Y,H,W;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
        <TabsTrigger value="settings">Configurações</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Gerencie as informações da sua conta, como nome e e-mail.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Atualize sua senha para manter sua conta segura.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Ajuste as configurações gerais do sistema.</p>
      </TabsContent>
    </Tabs>;
}`,...(W=(H=w.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="analytics">Análises</TabsTrigger>
        <TabsTrigger value="reports">Relatórios</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>Resumo das principais métricas e indicadores.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p>Dados detalhados de uso e comportamento.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p>Relatórios exportáveis com histórico completo.</p>
      </TabsContent>
    </Tabs>;
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Tabs defaultValue="profile" orientation="vertical">
      <TabsList>
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="notifications">Notificações</TabsTrigger>
        <TabsTrigger value="billing">Cobrança</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <p>Edite suas informações de perfil e foto.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p>Configure suas preferências de notificação.</p>
      </TabsContent>
      <TabsContent value="billing">
        <p>Gerencie seu plano e métodos de pagamento.</p>
      </TabsContent>
    </Tabs>;
}`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Ativa</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Desabilitada
        </TabsTrigger>
        <TabsTrigger value="other">Outra</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p>Esta aba está ativa e pode ser selecionada.</p>
      </TabsContent>
      <TabsContent value="disabled">
        <p>Este conteúdo não pode ser acessado.</p>
      </TabsContent>
      <TabsContent value="other">
        <p>Outra aba disponível para interação.</p>
      </TabsContent>
    </Tabs>;
}`,...(re=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,ie;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Tabs defaultValue="general" orientation="vertical">
      <TabsList variant="line">
        <TabsTrigger value="general">Geral</TabsTrigger>
        <TabsTrigger value="security">Segurança</TabsTrigger>
        <TabsTrigger value="integrations">Integrações</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <p>Configurações gerais da aplicação.</p>
      </TabsContent>
      <TabsContent value="security">
        <p>Opções de segurança e autenticação.</p>
      </TabsContent>
      <TabsContent value="integrations">
        <p>Gerencie integrações com serviços externos.</p>
      </TabsContent>
    </Tabs>;
}`,...(ie=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Ia=["Default","LineVariant","Vertical","Disabled","VerticalLine"];export{w as Default,A as Disabled,S as LineVariant,E as Vertical,F as VerticalLine,Ia as __namedExportsOrder,ja as default};

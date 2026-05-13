import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as y}from"./clsx-CNgb8Gju.js";import{r as g}from"./index-GiUgBvb1.js";import{c as I}from"./index-DW48STyt.js";import{c as ne}from"./index-BYJyBkN8.js";import{c as B,R as te,I as se}from"./index-DfDSnz3T.js";import{P as re}from"./index-9j9_kZRm.js";import{P as V}from"./index-C9v26AP-.js";import{u as ie}from"./index-B2zu5yC8.js";import{u as oe}from"./index-DEN0ugiW.js";import{u as le}from"./index-BolwHxDA.js";import"./index-CNfLqMdS.js";import"./index-DBCqBOGF.js";import"./index-BojL7TVx.js";import"./index-Dl0iWJCF.js";import"./index-WUhAcQt0.js";import"./index-CROobee-.js";var L="Tabs",[ce,Ge]=ne(L,[B]),H=B(),[de,N]=ce(L),U=g.forwardRef((a,n)=>{const{__scopeTabs:o,value:r,onValueChange:c,defaultValue:u,orientation:i="horizontal",dir:p,activationMode:m="automatic",...h}=a,d=ie(p),[l,T]=oe({prop:r,onChange:c,defaultProp:u??"",caller:L});return e.jsx(de,{scope:o,baseId:le(),value:l,onValueChange:T,orientation:i,dir:d,activationMode:m,children:e.jsx(V.div,{dir:d,"data-orientation":i,...h,ref:n})})});U.displayName=L;var W="TabsList",J=g.forwardRef((a,n)=>{const{__scopeTabs:o,loop:r=!0,...c}=a,u=N(W,o),i=H(o);return e.jsx(te,{asChild:!0,...i,orientation:u.orientation,dir:u.dir,loop:r,children:e.jsx(V.div,{role:"tablist","aria-orientation":u.orientation,...c,ref:n})})});J.displayName=W;var Q="TabsTrigger",X=g.forwardRef((a,n)=>{const{__scopeTabs:o,value:r,disabled:c=!1,...u}=a,i=N(Q,o),p=H(o),m=ee(i.baseId,r),h=ae(i.baseId,r),d=r===i.value;return e.jsx(se,{asChild:!0,...p,focusable:!c,active:d,children:e.jsx(V.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":h,"data-state":d?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:m,...u,ref:n,onMouseDown:I(a.onMouseDown,l=>{!c&&l.button===0&&l.ctrlKey===!1?i.onValueChange(r):l.preventDefault()}),onKeyDown:I(a.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&i.onValueChange(r)}),onFocus:I(a.onFocus,()=>{const l=i.activationMode!=="manual";!d&&!c&&l&&i.onValueChange(r)})})})});X.displayName=Q;var Y="TabsContent",Z=g.forwardRef((a,n)=>{const{__scopeTabs:o,value:r,forceMount:c,children:u,...i}=a,p=N(Y,o),m=ee(p.baseId,r),h=ae(p.baseId,r),d=r===p.value,l=g.useRef(d);return g.useEffect(()=>{const T=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(re,{present:c||d,children:({present:T})=>e.jsx(V.div,{"data-state":d?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":m,hidden:!T,id:h,tabIndex:0,...i,ref:n,style:{...a.style,animationDuration:l.current?"0s":void 0},children:T&&u})})});Z.displayName=Y;function ee(a,n){return`${a}-trigger-${n}`}function ae(a,n){return`${a}-content-${n}`}var ue=U,pe=J,be=X,Te=Z;const ge="_root_1png9_1",ve="_list_1png9_10",me="_trigger_1png9_38",he="_content_1png9_140",R={root:ge,list:ve,trigger:me,content:he};function b({className:a,orientation:n="horizontal",...o}){return e.jsx(ue,{"data-slot":"tabs","data-orientation":n,orientation:n,className:y(R.root,a),...o})}function v({className:a,variant:n="default",...o}){return e.jsx(pe,{"data-slot":"tabs-list","data-variant":n,className:y(R.list,a),...o})}function t({className:a,...n}){return e.jsx(be,{"data-slot":"tabs-trigger",className:y(R.trigger,a),...n})}function s({className:a,...n}){return e.jsx(Te,{"data-slot":"tabs-content",className:y(R.content,a),...n})}b.__docgenInfo={description:`A tabbed interface component built on Radix UI primitives.
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
</Tabs>`,methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};s.__docgenInfo={description:`The content panel associated with a tab trigger.
Only the content for the active tab is rendered.

@component
@param {React.ComponentProps<typeof TabsPrimitive.Content>} props - The tab content props.
@param {string} props.value - The unique value that associates the content with a trigger.
@param {string} [props.className] - Additional CSS class names to apply.
@returns {React.ReactElement} The rendered tab content element.

@example
<TabsContent value="tab1">
  <p>Content for tab 1</p>
</TabsContent>`,methods:[],displayName:"TabsContent"};v.__docgenInfo={description:`A container for tab triggers that provides visual grouping and layout.

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
</TabsList>`,methods:[],displayName:"TabsList",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "line"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"line"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};t.__docgenInfo={description:`A button that activates its associated tab panel.

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
<TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>`,methods:[],displayName:"TabsTrigger"};const Me={title:"Components/general/Tabs",component:b,tags:["autodocs"]},f=()=>e.jsxs(b,{defaultValue:"account",children:[e.jsxs(v,{children:[e.jsx(t,{value:"account",children:"Conta"}),e.jsx(t,{value:"password",children:"Senha"}),e.jsx(t,{value:"settings",children:"Configurações"})]}),e.jsx(s,{value:"account",children:e.jsx("p",{children:"Gerencie as informações da sua conta, como nome e e-mail."})}),e.jsx(s,{value:"password",children:e.jsx("p",{children:"Atualize sua senha para manter sua conta segura."})}),e.jsx(s,{value:"settings",children:e.jsx("p",{children:"Ajuste as configurações gerais do sistema."})})]}),x=()=>e.jsxs(b,{defaultValue:"overview",children:[e.jsxs(v,{variant:"line",children:[e.jsx(t,{value:"overview",children:"Visão Geral"}),e.jsx(t,{value:"analytics",children:"Análises"}),e.jsx(t,{value:"reports",children:"Relatórios"})]}),e.jsx(s,{value:"overview",children:e.jsx("p",{children:"Resumo das principais métricas e indicadores."})}),e.jsx(s,{value:"analytics",children:e.jsx("p",{children:"Dados detalhados de uso e comportamento."})}),e.jsx(s,{value:"reports",children:e.jsx("p",{children:"Relatórios exportáveis com histórico completo."})})]}),C=()=>e.jsxs(b,{defaultValue:"profile",orientation:"vertical",children:[e.jsxs(v,{children:[e.jsx(t,{value:"profile",children:"Perfil"}),e.jsx(t,{value:"notifications",children:"Notificações"}),e.jsx(t,{value:"billing",children:"Cobrança"})]}),e.jsx(s,{value:"profile",children:e.jsx("p",{children:"Edite suas informações de perfil e foto."})}),e.jsx(s,{value:"notifications",children:e.jsx("p",{children:"Configure suas preferências de notificação."})}),e.jsx(s,{value:"billing",children:e.jsx("p",{children:"Gerencie seu plano e métodos de pagamento."})})]}),j=()=>e.jsxs(b,{defaultValue:"active",children:[e.jsxs(v,{children:[e.jsx(t,{value:"active",children:"Ativa"}),e.jsx(t,{value:"disabled",disabled:!0,children:"Desabilitada"}),e.jsx(t,{value:"other",children:"Outra"})]}),e.jsx(s,{value:"active",children:e.jsx("p",{children:"Esta aba está ativa e pode ser selecionada."})}),e.jsx(s,{value:"disabled",children:e.jsx("p",{children:"Este conteúdo não pode ser acessado."})}),e.jsx(s,{value:"other",children:e.jsx("p",{children:"Outra aba disponível para interação."})})]}),_=()=>e.jsxs(b,{defaultValue:"general",orientation:"vertical",children:[e.jsxs(v,{variant:"line",children:[e.jsx(t,{value:"general",children:"Geral"}),e.jsx(t,{value:"security",children:"Segurança"}),e.jsx(t,{value:"integrations",children:"Integrações"})]}),e.jsx(s,{value:"general",children:e.jsx("p",{children:"Configurações gerais da aplicação."})}),e.jsx(s,{value:"security",children:e.jsx("p",{children:"Opções de segurança e autenticação."})}),e.jsx(s,{value:"integrations",children:e.jsx("p",{children:"Gerencie integrações com serviços externos."})})]});f.__docgenInfo={description:"",methods:[],displayName:"Default"};x.__docgenInfo={description:"",methods:[],displayName:"LineVariant"};C.__docgenInfo={description:"",methods:[],displayName:"Vertical"};j.__docgenInfo={description:"",methods:[],displayName:"Disabled"};_.__docgenInfo={description:"",methods:[],displayName:"VerticalLine"};var S,w,A;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(A=(w=f.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,P,D;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(D=(P=x.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var G,M,O;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(O=(M=C.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var F,z,$;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...($=(z=j.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var k,q,K;_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(K=(q=_.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const Oe=["Default","LineVariant","Vertical","Disabled","VerticalLine"];export{f as Default,j as Disabled,x as LineVariant,C as Vertical,_ as VerticalLine,Oe as __namedExportsOrder,Me as default};

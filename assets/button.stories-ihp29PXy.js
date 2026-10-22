import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as ue}from"./index-DTYX8Gcn.js";import{M as te}from"./mail-B604Yyuc.js";import{P as ne}from"./plus-6r5jity2.js";import{c as r}from"./createLucideIcon-Bl20gA7w.js";import{L as he}from"./chunk-D4RADZKF-BJEPocWj.js";import{U as ge}from"./upload-Cld5TdAo.js";import{S as ve}from"./settings-Ct_hlzyW.js";import{S as Se}from"./search-DhFi9J07.js";import"./index-DRjF_FHU.js";import"./clsx-DegBVMCo.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";import"./index-DmSiaxFR.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ze=r("download",xe);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ye=r("heart",ke);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],je=r("square-pen",be);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],De=r("star",fe);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ie=r("trash-2",Le),_e="_panel_qfj94_6",Me={panel:_e},ce={none:null,Mail:e.jsx(te,{size:16}),Plus:e.jsx(ne,{size:16}),Trash2:e.jsx(ie,{size:16}),Heart:e.jsx(ye,{size:16}),Star:e.jsx(De,{size:16}),Search:e.jsx(Se,{size:16}),Settings:e.jsx(ve,{size:16}),Download:e.jsx(ze,{size:16}),Upload:e.jsx(ge,{size:16}),Edit:e.jsx(je,{size:16})},Ce=(le,de)=>{const{icon:me,...v}=de.args,pe=ce[me]??null??v.children;return e.jsx("div",{className:Me.panel,children:e.jsx(le,{args:{...v,children:pe,onClick:()=>window.alert("Clicked!")}})})},Ve={title:"Components/buttons/Button",component:ue,tags:["autodocs"],decorators:[Ce],argTypes:{variant:{options:["default","outline","secondary","ghost","destructive","link"],control:{type:"radio"},description:"Estilo visual do botão"},size:{options:["default","xs","sm","lg","icon","icon-xs","icon-sm","icon-lg"],control:{type:"radio"},description:"Tamanho do botão"},children:{control:{type:"text"},description:"Conteúdo do botão"},asChild:{control:{type:"boolean"},description:"Renderiza o elemento filho como root usando Radix Slot"},disabled:{control:{type:"boolean"},description:"Desabilita o botão"},icon:{options:Object.keys(ce),control:{type:"select"},description:"Ícone exibido ao lado do texto"}}},a={args:{children:"Click me",variant:"default",size:"default"}},s={args:{children:"Outline",variant:"outline"}},o={args:{children:"Secondary",variant:"secondary"}},t={args:{children:"Ghost",variant:"ghost"}},n={args:{children:"Delete",variant:"destructive"}},i={args:{children:"Link button",variant:"link"}},c={args:{children:"Small",size:"sm"}},l={args:{children:"Large",size:"lg"}},d={args:{children:"Extra small",size:"xs"}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(te,{size:16}),"Send email"]})}},p={args:{children:e.jsx(ne,{size:16}),size:"icon","aria-label":"Add item"}},u={args:{children:e.jsx(ie,{size:16}),variant:"destructive",size:"icon","aria-label":"Delete item"}},h={args:{children:"Disabled",disabled:!0}},g={args:{asChild:!0,variant:"default",children:e.jsx(he,{to:"https://google.com",target:"_blank",children:"Navigate to Google"})}};var S,x,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "default",
    size: "default"
  }
}`,...(z=(x=a.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var k,y,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,f,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var L,_,M;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...(M=(_=t.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var C,I,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Delete",
    variant: "destructive"
  }
}`,...(E=(I=n.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var N,O,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Link button",
    variant: "link"
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var A,G,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Small",
    size: "sm"
  }
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var P,R,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Large",
    size: "lg"
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var $,B,q;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Extra small",
    size: "xs"
  }
}`,...(q=(B=d.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var U,V,W;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: <>
        <Mail size={16} />
        Send email
      </>
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,J,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: <Plus size={16} />,
    size: "icon",
    "aria-label": "Add item"
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: <Trash2 size={16} />,
    variant: "destructive",
    size: "icon",
    "aria-label": "Delete item"
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    asChild: true,
    variant: "default",
    children: <RouterLink to="https://google.com" target="_blank">
        Navigate to Google
      </RouterLink>
  }
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const We=["Default","Outline","Secondary","Ghost","Destructive","Link","Small","Large","ExtraSmall","WithIcon","IconOnly","IconDestructive","Disabled","AsChildLink"];export{g as AsChildLink,a as Default,n as Destructive,h as Disabled,d as ExtraSmall,t as Ghost,u as IconDestructive,p as IconOnly,l as Large,i as Link,s as Outline,o as Secondary,c as Small,m as WithIcon,We as __namedExportsOrder,Ve as default};

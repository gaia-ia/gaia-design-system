import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as v}from"./index-GiUgBvb1.js";import{B as $}from"./index-BlwL9mIg.js";import{P as ee,a as te,b as oe}from"./index-Doyn-HhC.js";import{B as V}from"./index-DmwW-D_7.js";import{X as ae}from"./x-LE87PwJd.js";import{c as se}from"./createLucideIcon-CRoqMwob.js";import{C as ne,a as le,b as re,c as ce,d as ie,e as de}from"./index-C0Yns_a6.js";import{C as pe}from"./check-BVeZ8qoc.js";import{S as me}from"./index-M9D1Q3CO.js";import"./clsx-CNgb8Gju.js";import"./index-V__cqR5r.js";import"./index-DBCqBOGF.js";import"./index-BYJyBkN8.js";import"./index-C9v26AP-.js";import"./index-CROobee-.js";import"./index-BojL7TVx.js";import"./index-Dl0iWJCF.js";import"./index-DslUmEDu.js";import"./index-WUhAcQt0.js";import"./index-BolwHxDA.js";import"./index-SVyUj_8R.js";import"./index-Bav0yaTQ.js";import"./index-DEN0ugiW.js";import"./portalContainer-Cr0I3QJP.js";import"./index-D-_5VgnX.js";import"./index-B6QF9bbj.js";import"./search-ClEUPXBq.js";import"./index-DW48STyt.js";import"./index-Dya9PstJ.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],he=se("chevrons-up-down",ue),ge="_wrapper_1tlhg_5",xe="_trigger_1tlhg_12",be="_values_1tlhg_32",ve="_placeholder_1tlhg_43",fe="_chevron_1tlhg_48",we="_badge_1tlhg_53",Se="_badgeLabel_1tlhg_60",ke="_badgeRemoveBtn_1tlhg_66",_e="_badgeRemoveIcon_1tlhg_86",Ve="_popoverContent_1tlhg_91",Ce="_itemLabel_1tlhg_96",je="_itemCheck_1tlhg_102",o={wrapper:ge,trigger:xe,values:be,placeholder:ve,chevron:fe,badge:we,badgeLabel:Se,badgeRemoveBtn:ke,badgeRemoveIcon:_e,popoverContent:Ve,itemLabel:Ce,itemCheck:je},z=({id:d,selectedValues:s,setSelectedValues:i,maxShownItems:f=8,maxSelectedItems:n,label:r,options:p,searchPlaceholder:J="Search...",selectPlaceholder:X="Select option",showLessText:G="Show Less",moreText:U="more",noOptionFoundText:H="No option found"})=>{const[S,K]=v.useState(!1),[w,Q]=v.useState(!1),Y=t=>{i(a=>a.includes(t)?a.filter(l=>l!==t):n&&a.length>=n?a:[...a,t])},Z=t=>{i(a=>a.filter(l=>l!==t))},k=w?s:s.slice(0,f),_=s.length-k.length;return e.jsxs("div",{className:o.wrapper,children:[r&&e.jsx($,{htmlFor:`${d}commbobox`,as:"label",variant:"label",children:r}),e.jsxs(ee,{open:S,onOpenChange:K,children:[e.jsx(te,{asChild:!0,children:e.jsxs("div",{id:`${d}commbobox`,role:"combobox","aria-expanded":S,className:o.trigger,children:[e.jsx("div",{className:o.values,children:s.length>0?e.jsxs(e.Fragment,{children:[k.map(t=>{const a=p.find(l=>l.value===t);return a?e.jsxs(V,{className:o.badge,children:[e.jsx("span",{className:o.badgeLabel,children:a.label}),e.jsx("div",{className:o.badgeRemoveBtn,onClick:l=>{l.stopPropagation(),Z(t)},children:e.jsx("div",{children:e.jsx(ae,{className:o.badgeRemoveIcon})})})]},t):null}),_>0||w?e.jsx(V,{variant:"outline",onClick:t=>{t.stopPropagation(),Q(a=>!a)},className:o.badge,children:w?G:`+${_} ${U}`}):null]}):e.jsx("span",{className:o.placeholder,children:X})}),e.jsx(he,{className:o.chevron,size:16})]})}),e.jsx(oe,{className:o.popoverContent,"data-combobox-popper":!0,onWheelCapture:t=>t.stopPropagation(),onTouchMoveCapture:t=>t.stopPropagation(),children:e.jsxs(ne,{children:[e.jsx(le,{placeholder:J}),e.jsxs(re,{children:[e.jsx(ce,{children:H}),e.jsx(ie,{children:p.map(t=>e.jsxs(de,{value:t.value,onSelect:()=>Y(t.value),children:[e.jsx("span",{className:o.itemLabel,children:t.label}),s.includes(t.value)&&e.jsx(pe,{size:16,className:o.itemCheck})]},t.value))})]})]})})]})]})};z.__docgenInfo={description:`A searchable multi-select combobox component that lets users pick multiple options
and displays the current selections as removable badges.

Selections are controlled externally via \`selectedValues\` and \`setSelectedValues\`.
The dropdown is implemented with a \`Popover\`, and the searchable list is powered by
\`Command\` components.

The trigger shows up to \`maxShownItems\` selected badges. When there are more selected
values than can be shown, an additional badge appears that toggles an expanded view
(show all) / collapsed view (show fewer).

@component

@param {MulticheckProps} props - Props for the Multicheck component.
@param {string} props.id
Base identifier used to generate the combobox trigger element id (\`\${id}commbobox\`)
and link the optional label via \`htmlFor\`.

@param {string[]} props.selectedValues
Currently selected option values (controlled).

@param {React.Dispatch<React.SetStateAction<string[]>>} props.setSelectedValues
State setter used to update \`selectedValues\` (controlled).
Internally, the component uses a functional update to add/remove values.

@param {number} [props.maxShownItems=8]
Maximum number of selected badges shown when the selection display is collapsed.

@param {string} [props.label]
Optional label text rendered above the combobox. When provided, it is linked to the
trigger element via \`htmlFor\`.

@param {{ value: string; label: string }[]} props.options
Available options to select from. \`value\` is stored in \`selectedValues\` and \`label\`
is displayed in the list and badges.

@param {string} [props.searchPlaceholder="Search..."]
Placeholder text for the search input inside the dropdown.

@param {string} [props.selectPlaceholder="Select option"]
Placeholder text shown in the trigger when there are no selections.

@param {string} [props.showLessText="Show Less"]
Text shown on the toggle badge when expanded (used to collapse back).

@param {string} [props.moreText="more"]
Suffix text used in the collapsed toggle badge (e.g., \`+3 more\`).

@param {string} [props.noOptionFoundText="No option found"]
Text shown when the search yields no results.

@param {number} [props.maxSelectedItems=8]
Maximum number of selected items shown in the badge list.

@returns {JSX.Element} A multi-select combobox with searchable options and removable badges.

@example
// Basic usage with controlled state
import { useState } from "react";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
];

export function Example() {
  const [selectedValues, setSelectedValues] = useState<string[]>(["react"]);

  return (
    <Multicheck
      id="frameworks"
      label="Frameworks"
      options={options}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      maxSelectedItems={2}
    />
  );
}

@example
// Customizing placeholders and the "more" badge text
export function ExampleCustomText() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Multicheck
      id="tags"
      options={[
        { value: "design", label: "Design" },
        { value: "frontend", label: "Frontend" },
        { value: "backend", label: "Backend" },
      ]}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      selectPlaceholder="Select tags"
      searchPlaceholder="Type to search..."
      moreText="selected"
      showLessText="Collapse"
      noOptionFoundText="Nothing matches your search"
      maxShownItems={2}
    />
  );
}

@remarks
- This component is **controlled**: it does not own the selected values state.
- Clicking the remove icon on a badge stops event propagation so it won’t toggle the popover.
- The trigger uses \`role="combobox"\` and \`aria-expanded\` to reflect the popover state.`,methods:[],displayName:"Multicheck",props:{maxShownItems:{defaultValue:{value:"8",computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:'"Search..."',computed:!1},required:!1},selectPlaceholder:{defaultValue:{value:'"Select option"',computed:!1},required:!1},showLessText:{defaultValue:{value:'"Show Less"',computed:!1},required:!1},moreText:{defaultValue:{value:'"more"',computed:!1},required:!1},noOptionFoundText:{defaultValue:{value:'"No option found"',computed:!1},required:!1}}};const c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"nextjs",label:"Next.js"},{value:"nuxt",label:"Nuxt"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ye=(d,s)=>{const[i,f]=v.useState(s.args.selectedValues||[]),[n,r]=v.useState(!1);return e.jsxs("div",{style:{backgroundColor:"var(--color-background-200)",padding:"1rem",display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-end"},children:[e.jsx(d,{args:{...s.args,selectedValues:i,setSelectedValues:f,show:n,setShow:r}}),e.jsx("div",{style:{width:"100%"},children:e.jsxs($,{variant:"label",as:"label",htmlFor:"selected-values",onClick:()=>r(p=>!p),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(me,{id:"selected-values",checked:n,onCheckedChange:()=>r(!n)}),"Show selected values"]})}),n&&e.jsx("div",{style:{backgroundColor:"var(--color-background-100)",padding:"1rem",width:"100%"},children:e.jsx("pre",{children:JSON.stringify(i,null,2)})})]})},st={title:"Components/inputs/Multicheck",component:z,tags:["autodocs"],decorators:[ye],argTypes:{id:{control:{type:"text"},description:"ID base usado para gerar o id do elemento trigger"},label:{control:{type:"text"},description:"Texto do label exibido acima do combobox"},options:{control:{type:"object"},description:"Lista de opções disponíveis para seleção"},selectedValues:{control:{type:"object"},description:"Valores atualmente selecionados (controlado)"},setSelectedValues:{description:"Função para atualizar os valores selecionados"},maxShownItems:{control:{type:"number"},description:"Número máximo de badges exibidos antes de mostrar o botão '+N more'"},maxSelectedItems:{control:{type:"number"},description:"Número máximo de itens que podem ser selecionados"},searchPlaceholder:{control:{type:"text"},description:"Placeholder do campo de busca dentro do dropdown"},selectPlaceholder:{control:{type:"text"},description:"Placeholder exibido no trigger quando não há seleções"},showLessText:{control:{type:"text"},description:"Texto do badge para colapsar a lista expandida"},moreText:{control:{type:"text"},description:'Sufixo do badge colapsado (ex: "+3 more")'},noOptionFoundText:{control:{type:"text"},description:"Texto exibido quando a busca não retorna resultados"}}},m={args:{id:"multicheck-default",options:c,selectedValues:[]}},u={args:{id:"multicheck-label",label:"Frameworks",options:c,selectedValues:[]}},h={args:{id:"multicheck-preselected",label:"Frameworks",options:c,selectedValues:["react","vue","svelte"]}},g={args:{id:"multicheck-max-selected",label:"Selecione até 3 frameworks",options:c,selectedValues:[],maxSelectedItems:3}},x={args:{id:"multicheck-max-shown",label:"Frameworks",options:c,selectedValues:["react","vue","angular","svelte","nextjs"],maxShownItems:2}},b={args:{id:"multicheck-custom",label:"Tags",options:c,selectedValues:[],selectPlaceholder:"Selecione as tags",searchPlaceholder:"Digite para buscar...",moreText:"selecionados",showLessText:"Mostrar menos",noOptionFoundText:"Nenhuma opção encontrada"}};var C,j,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "multicheck-default",
    options: frameworkOptions,
    selectedValues: []
  }
}`,...(y=(j=m.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var T,P,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "multicheck-label",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: []
  }
}`,...(I=(P=u.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var N,L,F;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: "multicheck-preselected",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: ["react", "vue", "svelte"]
  }
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var O,M,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: "multicheck-max-selected",
    label: "Selecione até 3 frameworks",
    options: frameworkOptions,
    selectedValues: [],
    maxSelectedItems: 3
  }
}`,...(R=(M=g.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,W,D;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "multicheck-max-shown",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: ["react", "vue", "angular", "svelte", "nextjs"],
    maxShownItems: 2
  }
}`,...(D=(W=x.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var q,E,A;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: "multicheck-custom",
    label: "Tags",
    options: frameworkOptions,
    selectedValues: [],
    selectPlaceholder: "Selecione as tags",
    searchPlaceholder: "Digite para buscar...",
    moreText: "selecionados",
    showLessText: "Mostrar menos",
    noOptionFoundText: "Nenhuma opção encontrada"
  }
}`,...(A=(E=b.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const nt=["Default","WithLabel","WithPreselectedValues","WithMaxSelectedItems","WithMaxShownItems","CustomPlaceholders"];export{b as CustomPlaceholders,m as Default,u as WithLabel,g as WithMaxSelectedItems,x as WithMaxShownItems,h as WithPreselectedValues,nt as __namedExportsOrder,st as default};

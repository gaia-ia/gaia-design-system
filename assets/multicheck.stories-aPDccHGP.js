import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as m}from"./index-DRjF_FHU.js";import{B as H}from"./index-D9Woksp6.js";import{P as le,a as ce,b as ie}from"./index-CmDSL2h3.js";import{B as N}from"./index-DjkTgTb3.js";import{X as de}from"./x-BPa992hr.js";import{c as me}from"./createLucideIcon-Bl20gA7w.js";import{C as pe,a as ue,b as he,c as ge,d as be,e as xe}from"./index-xhAoJpuq.js";import{C as ve}from"./check-DQ2q5TA4.js";import{S as fe}from"./index-CELBroco.js";import"./clsx-DegBVMCo.js";import"./index-CVXJttz3.js";import"./index-Bms3GI6n.js";import"./index-DRtXj63t.js";import"./index-CLlkV7gm.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";import"./index-BrKBBPft.js";import"./index-I4Re_PL0.js";import"./index-Bnhoviar.js";import"./index-X59MVnDc.js";import"./index-CFX21f3v.js";import"./index-D8lkqur8.js";import"./index-C0xqUTPU.js";import"./portalContainer-jaNfC5BB.js";import"./index-DSIw-q11.js";import"./index-DH9gUxBT.js";import"./index-DTYX8Gcn.js";import"./search-DhFi9J07.js";import"./index-DW48STyt.js";import"./index-Iz9Zo_Nw.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],ke=me("chevrons-up-down",we),Se="_wrapper_2cdkm_5",ye="_trigger_2cdkm_12",_e="_srOnly_2cdkm_42",je="_values_2cdkm_54",Ce="_placeholder_2cdkm_65",Te="_chevron_2cdkm_70",Ve="_badge_2cdkm_75",Ie="_badgeLabel_2cdkm_82",Pe="_badgeRemoveBtn_2cdkm_88",Ne="_badgeToggle_2cdkm_119",Le="_badgeRemoveIcon_2cdkm_125",Oe="_popoverContent_2cdkm_130",Fe="_itemLabel_2cdkm_135",Me="_itemCheck_2cdkm_141",a={wrapper:Se,trigger:ye,srOnly:_e,values:je,placeholder:Ce,chevron:Te,badge:Ve,badgeLabel:Ie,badgeRemoveBtn:Pe,badgeToggle:Ne,badgeRemoveIcon:Le,popoverContent:Oe,itemLabel:Fe,itemCheck:Me},Q=({id:f,selectedValues:s,setSelectedValues:i,maxShownItems:w=8,maxSelectedItems:r,label:l,options:d,searchPlaceholder:Y="Search...",selectPlaceholder:y="Select option",showLessText:Z="Show Less",moreText:ee="more",noOptionFoundText:te="No option found"})=>{const[_,j]=m.useState(!1),[p,oe]=m.useState(!1),k=m.useId(),C=`${f}commbobox`,T=`${k}-label`,S=`${k}-summary`,V=`${k}-content`,ae=t=>{i(o=>o.includes(t)?o.filter(n=>n!==t):r&&o.length>=r?o:[...o,t])},se=t=>{i(o=>o.filter(n=>n!==t))},I=p?s:s.slice(0,w),P=s.length-I.length,ne=s.map(t=>{var o;return(o=d.find(n=>n.value===t))==null?void 0:o.label}).filter(Boolean).join(", "),re=t=>{t.target===t.currentTarget&&(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),j(!0))};return e.jsxs("div",{className:a.wrapper,children:[l&&e.jsx(H,{id:T,htmlFor:C,as:"label",variant:"label",children:l}),e.jsxs(le,{open:_,onOpenChange:j,children:[e.jsx(ce,{asChild:!0,children:e.jsxs("div",{id:C,role:"combobox",tabIndex:0,"aria-haspopup":"listbox","aria-expanded":_,"aria-controls":V,"aria-labelledby":l?`${T} ${S}`:S,onKeyDown:re,className:a.trigger,children:[e.jsx("span",{id:S,className:a.srOnly,children:ne||y}),e.jsx("div",{className:a.values,children:s.length>0?e.jsxs(e.Fragment,{children:[I.map(t=>{const o=d.find(n=>n.value===t);return o?e.jsxs(N,{className:a.badge,children:[e.jsx("span",{className:a.badgeLabel,children:o.label}),e.jsx("button",{type:"button",className:a.badgeRemoveBtn,"aria-label":`Remover ${o.label}`,onClick:n=>{n.stopPropagation(),se(t)},children:e.jsx("div",{children:e.jsx(de,{className:a.badgeRemoveIcon,"aria-hidden":"true"})})})]},t):null}),P>0||p?e.jsx(N,{variant:"outline",className:a.badge,asChild:!0,children:e.jsx("button",{type:"button",className:a.badgeToggle,"aria-expanded":p,onClick:t=>{t.stopPropagation(),oe(o=>!o)},children:p?Z:`+${P} ${ee}`})}):null]}):e.jsx("span",{className:a.placeholder,"aria-hidden":"true",children:y})}),e.jsx(ke,{className:a.chevron,size:16,"aria-hidden":"true"})]})}),e.jsx(ie,{id:V,className:a.popoverContent,"data-combobox-popper":!0,onWheelCapture:t=>t.stopPropagation(),onTouchMoveCapture:t=>t.stopPropagation(),children:e.jsxs(pe,{children:[e.jsx(ue,{placeholder:Y}),e.jsxs(he,{children:[e.jsx(ge,{children:te}),e.jsx(be,{children:d.map(t=>{const o=s.includes(t.value);return e.jsxs(xe,{value:t.value,keywords:[t.label],"aria-checked":o,onSelect:()=>ae(t.value),children:[e.jsx("span",{className:a.itemLabel,children:t.label}),o&&e.jsx(ve,{size:16,className:a.itemCheck,"aria-hidden":"true"})]},t.value)})})]})]})})]})]})};Q.__docgenInfo={description:`A searchable multi-select combobox component that lets users pick multiple options
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
- The trigger uses \`role="combobox"\` and \`aria-expanded\` to reflect the popover state.
  It is focusable and opens with Enter, Space or ArrowDown; its accessible name
  combines the label with the current selection.
- Badge remove and expand/collapse controls are real buttons reachable by keyboard.`,methods:[],displayName:"Multicheck",props:{maxShownItems:{defaultValue:{value:"8",computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:'"Search..."',computed:!1},required:!1},selectPlaceholder:{defaultValue:{value:'"Select option"',computed:!1},required:!1},showLessText:{defaultValue:{value:'"Show Less"',computed:!1},required:!1},moreText:{defaultValue:{value:'"more"',computed:!1},required:!1},noOptionFoundText:{defaultValue:{value:'"No option found"',computed:!1},required:!1}}};const c=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"nextjs",label:"Next.js"},{value:"nuxt",label:"Nuxt"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],De=(f,s)=>{const[i,w]=m.useState(s.args.selectedValues||[]),[r,l]=m.useState(!1);return e.jsxs("div",{style:{backgroundColor:"var(--color-background-200)",padding:"1rem",display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-end"},children:[e.jsx(f,{args:{...s.args,selectedValues:i,setSelectedValues:w,show:r,setShow:l}}),e.jsx("div",{style:{width:"100%"},children:e.jsxs(H,{variant:"label",as:"label",htmlFor:"selected-values",onClick:()=>l(d=>!d),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(fe,{id:"selected-values",checked:r,onCheckedChange:()=>l(!r)}),"Show selected values"]})}),r&&e.jsx("div",{style:{backgroundColor:"var(--color-background-100)",padding:"1rem",width:"100%"},children:e.jsx("pre",{children:JSON.stringify(i,null,2)})})]})},ht={title:"Components/inputs/Multicheck",component:Q,tags:["autodocs"],decorators:[De],argTypes:{id:{control:{type:"text"},description:"ID base usado para gerar o id do elemento trigger"},label:{control:{type:"text"},description:"Texto do label exibido acima do combobox"},options:{control:{type:"object"},description:"Lista de opções disponíveis para seleção"},selectedValues:{control:{type:"object"},description:"Valores atualmente selecionados (controlado)"},setSelectedValues:{description:"Função para atualizar os valores selecionados"},maxShownItems:{control:{type:"number"},description:"Número máximo de badges exibidos antes de mostrar o botão '+N more'"},maxSelectedItems:{control:{type:"number"},description:"Número máximo de itens que podem ser selecionados"},searchPlaceholder:{control:{type:"text"},description:"Placeholder do campo de busca dentro do dropdown"},selectPlaceholder:{control:{type:"text"},description:"Placeholder exibido no trigger quando não há seleções"},showLessText:{control:{type:"text"},description:"Texto do badge para colapsar a lista expandida"},moreText:{control:{type:"text"},description:'Sufixo do badge colapsado (ex: "+3 more")'},noOptionFoundText:{control:{type:"text"},description:"Texto exibido quando a busca não retorna resultados"}}},u={args:{id:"multicheck-default",options:c,selectedValues:[]}},h={args:{id:"multicheck-label",label:"Frameworks",options:c,selectedValues:[]}},g={args:{id:"multicheck-preselected",label:"Frameworks",options:c,selectedValues:["react","vue","svelte"]}},b={args:{id:"multicheck-max-selected",label:"Selecione até 3 frameworks",options:c,selectedValues:[],maxSelectedItems:3}},x={args:{id:"multicheck-max-shown",label:"Frameworks",options:c,selectedValues:["react","vue","angular","svelte","nextjs"],maxShownItems:2}},v={args:{id:"multicheck-custom",label:"Tags",options:c,selectedValues:[],selectPlaceholder:"Selecione as tags",searchPlaceholder:"Digite para buscar...",moreText:"selecionados",showLessText:"Mostrar menos",noOptionFoundText:"Nenhuma opção encontrada"}};var L,O,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: "multicheck-default",
    options: frameworkOptions,
    selectedValues: []
  }
}`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var M,D,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "multicheck-label",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: []
  }
}`,...(R=(D=h.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var B,W,E;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "multicheck-preselected",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: ["react", "vue", "svelte"]
  }
}`,...(E=(W=g.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var $,q,A;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: "multicheck-max-selected",
    label: "Selecione até 3 frameworks",
    options: frameworkOptions,
    selectedValues: [],
    maxSelectedItems: 3
  }
}`,...(A=(q=b.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var z,J,K;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "multicheck-max-shown",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: ["react", "vue", "angular", "svelte", "nextjs"],
    maxShownItems: 2
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,G,U;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const gt=["Default","WithLabel","WithPreselectedValues","WithMaxSelectedItems","WithMaxShownItems","CustomPlaceholders"];export{v as CustomPlaceholders,u as Default,h as WithLabel,b as WithMaxSelectedItems,x as WithMaxShownItems,g as WithPreselectedValues,gt as __namedExportsOrder,ht as default};

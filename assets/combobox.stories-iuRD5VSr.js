import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{R as Be,A as We,P as $e,C as Ge}from"./index-CVXJttz3.js";import{B as I}from"./index-D9Woksp6.js";import{c as M}from"./clsx-DegBVMCo.js";import{X as Le}from"./x-BPa992hr.js";import{C as Je}from"./chevron-down-CpJcI-Q_.js";import{C as ze}from"./check-DQ2q5TA4.js";import"./index-Bms3GI6n.js";import"./index-DRtXj63t.js";import"./index-CLlkV7gm.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";import"./index-BrKBBPft.js";import"./index-I4Re_PL0.js";import"./index-Bnhoviar.js";import"./index-X59MVnDc.js";import"./index-CFX21f3v.js";import"./index-D8lkqur8.js";import"./index-C0xqUTPU.js";import"./createLucideIcon-Bl20gA7w.js";const Qe="_container_1cg00_2",Ye="_label_1cg00_9",Ze="_required_1cg00_13",eo="_input_container_wrapper_1cg00_17",oo="_input_container_1cg00_17",ao="_input_container_error_1cg00_42",to="_input_container_disabled_1cg00_46",ro="_input_1cg00_17",no="_input_actions_1cg00_73",so="_clear_button_1cg00_81",io="_chevron_1cg00_104",lo="_chevron_open_1cg00_110",co="_popup_1cg00_115",po="_list_1cg00_135",uo="_group_1cg00_142",mo="_group_label_1cg00_146",bo="_item_1cg00_156",ho="_item_active_1cg00_174",_o="_item_disabled_1cg00_179",fo="_check_icon_1cg00_189",vo="_check_icon_hidden_1cg00_196",xo="_separator_1cg00_204",go="_empty_1cg00_211",yo="_hint_1cg00_219",So="_error_1cg00_223",jo="_chips_container_1cg00_228",wo="_chips_container_error_1cg00_250",Co="_chips_container_disabled_1cg00_254",No="_chip_1cg00_228",Do="_chip_label_1cg00_272",ko="_chip_remove_1cg00_276",Oo="_chips_input_1cg00_298",a={container:Qe,label:Ye,required:Ze,input_container_wrapper:eo,input_container:oo,input_container_error:ao,input_container_disabled:to,input:ro,input_actions:no,clear_button:so,chevron:io,chevron_open:lo,popup:co,list:po,group:uo,group_label:mo,item:bo,item_active:ho,item_disabled:_o,check_icon:fo,check_icon_hidden:vo,separator:xo,empty:go,hint:yo,error:So,chips_container:jo,chips_container_error:wo,chips_container_disabled:Co,chip:No,chip_label:Do,chip_remove:ko,chips_input:Oo};function q(c){return c.length>0&&"group"in c[0]}function Ke(c){return q(c)?c.flatMap(i=>i.options):c}const Ue=({label:c,id:i,error:u,hint:w,placeholder:D="Selecione uma opção",emptyText:ne="Nenhuma opção encontrada",options:b,value:_,onChange:d,disabled:g=!1,required:R=!1,clearable:se=!1,className:ie,"aria-label":k})=>{var W;const[h,v]=p.useState(!1),[C,x]=p.useState(""),[m,y]=p.useState(-1),F=p.useRef(null),$=p.useRef(null),E=p.useRef(!1),G=p.useId(),P=t=>`${G}-opt-${t}`,L=w?`${i}-hint`:void 0,le=u?`${i}-error`:void 0,z=[L,le].filter(Boolean).join(" ")||void 0,j=((W=Ke(b).find(t=>t.value===_))==null?void 0:W.label)??"",K=_!=null,ce=h?C:j,A=p.useMemo(()=>{const t=s=>C.length===0||s.label.toLowerCase().includes(C.toLowerCase());return q(b)?b.map(s=>({...s,options:s.options.filter(t)})).filter(s=>s.options.length>0):b.filter(t)},[b,C]),S=q(b)?A.flatMap(t=>t.options):A,pe=()=>{g||(x(""),y(-1),v(!0))},o=()=>{v(!1),x(""),y(-1)},r=t=>{d==null||d(t),o()},n=t=>{var s;t.stopPropagation(),d==null||d(null),x(""),v(!1),E.current=!0,(s=F.current)==null||s.focus(),E.current=!1},f=t=>{switch(t.key){case"ArrowDown":if(t.preventDefault(),!h){v(!0);return}y(s=>{var N;let l=s+1;for(;l<S.length&&((N=S[l])!=null&&N.disabled);)l++;return l<S.length?l:s});break;case"ArrowUp":t.preventDefault(),y(s=>{var N;let l=s-1;for(;l>=0&&((N=S[l])!=null&&N.disabled);)l--;return l>=0?l:s});break;case"Enter":t.preventDefault(),h&&m>=0&&S[m]&&!S[m].disabled?r(S[m].value):h||v(!0);break;case"Escape":o();break;case"Tab":o();break}},O=(t,s=0)=>t.map((l,N)=>{const U=s+N,He=U===m,de=_===l.value;return e.jsxs("div",{id:P(U),role:"option","aria-selected":de,"aria-disabled":l.disabled,className:M(a.item,He&&a.item_active,l.disabled&&a.item_disabled),onMouseDown:X=>X.preventDefault(),onClick:()=>!l.disabled&&r(l.value),onMouseEnter:()=>!l.disabled&&y(U),onMouseLeave:()=>y(X=>X===U?-1:X),children:[e.jsx(ze,{size:14,className:de?a.check_icon:a.check_icon_hidden}),l.label]},String(l.value))}),ue=()=>{if(S.length===0)return e.jsx("div",{className:a.empty,children:ne});if(q(b)){let t=0;return A.map((s,l)=>{const N=O(s.options,t);return t+=s.options.length,e.jsxs(p.Fragment,{children:[l>0&&e.jsx("div",{className:a.separator}),e.jsxs("div",{className:a.group,children:[e.jsx("div",{className:a.group_label,children:s.group}),N]})]},s.group)})}return O(A)};return e.jsxs("div",{className:M(a.container,ie),children:[c&&e.jsxs(I,{as:"label",htmlFor:i,className:a.label,variant:"label",children:[c,R&&e.jsx("span",{className:a.required,"aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:a.input_container_wrapper,children:[e.jsxs(Be,{open:h,onOpenChange:t=>{t||o()},children:[e.jsx(We,{asChild:!0,children:e.jsxs("div",{ref:$,className:M(a.input_container,u&&a.input_container_error,g&&a.input_container_disabled),children:[e.jsx("input",{ref:F,id:i,className:a.input,value:ce,onChange:t=>{x(t.target.value),y(-1),h||v(!0)},onFocus:()=>{E.current||pe()},onKeyDown:f,placeholder:D,disabled:g,autoComplete:"off",role:"combobox","aria-label":k,"aria-controls":`${i}-listbox`,"aria-expanded":h,"aria-haspopup":"listbox","aria-activedescendant":h&&m>=0?P(m):void 0,"aria-required":R||void 0,"aria-invalid":!!u||void 0,"aria-describedby":z,"aria-autocomplete":"list"}),e.jsxs("div",{className:a.input_actions,children:[se&&K&&!g&&e.jsx("button",{type:"button",className:a.clear_button,onMouseDown:t=>t.preventDefault(),onClick:n,"aria-label":"Limpar seleção",children:e.jsx(Le,{size:14})}),e.jsx(Je,{size:16,className:M(a.chevron,h&&a.chevron_open)})]})]})}),e.jsx($e,{children:e.jsx(Ge,{className:a.popup,side:"bottom",align:"start",sideOffset:4,onOpenAutoFocus:t=>t.preventDefault(),onInteractOutside:t=>{var s;(s=$.current)!=null&&s.contains(t.target)&&t.preventDefault()},children:e.jsx("div",{id:`${i}-listbox`,role:"listbox","aria-label":c??D,className:a.list,onMouseDown:t=>t.preventDefault(),children:ue()})})})]}),w&&e.jsx(I,{id:L,variant:"caption",className:a.hint,children:w}),u&&e.jsx(I,{id:le,variant:"caption",className:a.error,role:"alert",children:u})]})]})},re=({label:c,id:i,error:u,hint:w,placeholder:D="Selecione opções",emptyText:ne="Nenhuma opção encontrada",options:b,value:_=[],onChange:d,disabled:g=!1,required:R=!1,className:se,"aria-label":ie})=>{const[k,h]=p.useState(!1),[v,C]=p.useState(""),[x,m]=p.useState(-1),y=p.useRef(null),F=p.useRef(null),$=p.useId(),E=o=>`${$}-opt-${o}`,G=w?`${i}-hint`:void 0,P=u?`${i}-error`:void 0,L=[G,P].filter(Boolean).join(" ")||void 0,z=Ke(b).reduce((o,r)=>(o[String(r.value)]=r.label,o),{}),B=p.useMemo(()=>{const o=r=>v.length===0||r.label.toLowerCase().includes(v.toLowerCase());return q(b)?b.map(r=>({...r,options:r.options.filter(o)})).filter(r=>r.options.length>0):b.filter(o)},[b,v]),j=q(b)?B.flatMap(o=>o.options):B,K=o=>{var n;const r=_.includes(o)?_.filter(f=>f!==o):[..._,o];d==null||d(r),C(""),m(-1),(n=y.current)==null||n.focus()},ce=(o,r)=>{r.stopPropagation(),d==null||d(_.filter(n=>n!==o))},A=o=>{switch(o.key){case"Backspace":v===""&&_.length>0&&(d==null||d(_.slice(0,-1)));break;case"ArrowDown":if(o.preventDefault(),!k){h(!0);return}m(r=>{var f;let n=r+1;for(;n<j.length&&((f=j[n])!=null&&f.disabled);)n++;return n<j.length?n:r});break;case"ArrowUp":o.preventDefault(),m(r=>{var f;let n=r-1;for(;n>=0&&((f=j[n])!=null&&f.disabled);)n--;return n>=0?n:r});break;case"Enter":o.preventDefault(),k&&x>=0&&j[x]&&!j[x].disabled&&K(j[x].value);break;case"Escape":h(!1),C(""),m(-1);break}},S=(o,r=0)=>o.map((n,f)=>{const O=r+f,ue=O===x,W=_.includes(n.value);return e.jsxs("div",{id:E(O),role:"option","aria-selected":W,"aria-disabled":n.disabled,className:M(a.item,ue&&a.item_active,n.disabled&&a.item_disabled),onMouseDown:t=>t.preventDefault(),onClick:()=>!n.disabled&&K(n.value),onMouseEnter:()=>!n.disabled&&m(O),onMouseLeave:()=>m(t=>t===O?-1:t),children:[e.jsx(ze,{size:14,className:W?a.check_icon:a.check_icon_hidden}),n.label]},String(n.value))}),pe=()=>{if(j.length===0)return e.jsx("div",{className:a.empty,children:ne});if(q(b)){let o=0;return B.map((r,n)=>{const f=S(r.options,o);return o+=r.options.length,e.jsxs(p.Fragment,{children:[n>0&&e.jsx("div",{className:a.separator}),e.jsxs("div",{className:a.group,children:[e.jsx("div",{className:a.group_label,children:r.group}),f]})]},r.group)})}return S(B)};return e.jsxs("div",{className:M(a.container,se),children:[c&&e.jsxs(I,{as:"label",htmlFor:i,className:a.label,variant:"label",children:[c,R&&e.jsx("span",{className:a.required,"aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:a.input_container_wrapper,children:[e.jsxs(Be,{open:k,onOpenChange:o=>{!o&&!g&&(h(!1),C(""),m(-1))},children:[e.jsx(We,{asChild:!0,children:e.jsxs("div",{ref:F,className:M(a.chips_container,u&&a.chips_container_error,g&&a.chips_container_disabled),onClick:()=>{var o;return!g&&((o=y.current)==null?void 0:o.focus())},children:[_.map(o=>e.jsxs("span",{className:a.chip,children:[e.jsx("span",{className:a.chip_label,children:z[String(o)]??o}),!g&&e.jsx("button",{type:"button",className:a.chip_remove,onMouseDown:r=>r.preventDefault(),onClick:r=>ce(o,r),"aria-label":`Remover ${z[String(o)]}`,tabIndex:-1,children:e.jsx(Le,{size:10})})]},String(o))),e.jsx("input",{ref:y,id:i,className:a.chips_input,placeholder:_.length===0?D:void 0,value:v,onChange:o=>{C(o.target.value),m(-1),k||h(!0)},onFocus:()=>!g&&h(!0),onKeyDown:A,disabled:g,role:"combobox","aria-label":ie??c??D,"aria-controls":`${i}-listbox`,"aria-expanded":k,"aria-haspopup":"listbox","aria-activedescendant":k&&x>=0?E(x):void 0,"aria-required":R||void 0,"aria-invalid":!!u||void 0,"aria-describedby":L,"aria-autocomplete":"list",autoComplete:"off"})]})}),e.jsx($e,{children:e.jsx(Ge,{className:a.popup,side:"bottom",align:"start",sideOffset:4,onOpenAutoFocus:o=>o.preventDefault(),onInteractOutside:o=>{var r;(r=F.current)!=null&&r.contains(o.target)&&o.preventDefault()},children:e.jsx("div",{id:`${i}-listbox`,role:"listbox","aria-label":c??D,"aria-multiselectable":!0,className:a.list,onMouseDown:o=>o.preventDefault(),children:pe()})})})]}),w&&e.jsx(I,{id:G,variant:"caption",className:a.hint,children:w}),u&&e.jsx(I,{id:P,variant:"caption",className:a.error,role:"alert",children:u})]})]})};Ue.__docgenInfo={description:`A searchable single-select combobox. The visible input field doubles as the
search box — typing filters the options that appear in the dropdown below it.

Supports label, placeholder, hint, error, disabled, clearable, and grouped options.

@component
@param {ComboboxProps} props - Props to configure the combobox.
@returns {JSX.Element} An input-driven combobox with a filtered options dropdown.

@example
<Combobox
  id="country"
  label="País"
  value={country}
  onChange={setCountry}
  options={[
    { value: "br", label: "Brasil" },
    { value: "us", label: "Estados Unidos" },
  ]}
  placeholder="Selecione um país"
  clearable
/>`,methods:[],displayName:"Combobox",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Selecione uma opção"',computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},emptyText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},options:{required:!0,tsType:{name:"union",raw:"ComboboxOption[] | ComboboxOptionGroup[]",elements:[{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},{name:"Array",elements:[{name:"ComboboxOptionGroup"}],raw:"ComboboxOptionGroup[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the input when there is no visible `label`."}}};re.__docgenInfo={description:`A searchable multi-select combobox. Selected items appear as removable chips
inside the input container. Typing in the inline input filters the dropdown options.

Press Backspace on an empty input to remove the last chip.
Supports label, placeholder, hint, error, disabled, and grouped options.

@component
@param {ComboboxMultiProps} props - Props to configure the multi-select combobox.
@returns {JSX.Element} A multi-select combobox with chip display.

@example
<ComboboxMulti
  id="tags"
  label="Tags"
  value={tags}
  onChange={setTags}
  options={[
    { value: "react", label: "React" },
    { value: "typescript", label: "TypeScript" },
  ]}
  placeholder="Adicionar tags..."
/>`,methods:[],displayName:"ComboboxMulti",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{defaultValue:{value:'"Selecione opções"',computed:!1},required:!1},emptyText:{defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const Qo={title:"Components/inputs/Combobox",component:Ue,tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Rótulo exibido acima do campo"},id:{control:{type:"text"},description:"Identificador único do campo (usado para acessibilidade)"},placeholder:{control:{type:"text"},description:"Texto exibido quando nenhuma opção está selecionada"},searchPlaceholder:{control:{type:"text"},description:"Placeholder do campo de busca interno"},emptyText:{control:{type:"text"},description:"Mensagem exibida quando nenhuma opção corresponde à busca"},hint:{control:{type:"text"},description:"Texto de ajuda exibido abaixo do campo"},error:{control:{type:"text"},description:"Mensagem de erro exibida abaixo do campo"},disabled:{control:{type:"boolean"},description:"Desabilita o campo impedindo interação"},required:{control:{type:"boolean"},description:"Marca o campo como obrigatório com asterisco no rótulo"},clearable:{control:{type:"boolean"},description:"Exibe botão para limpar a seleção atual"}}},V=(c,i)=>{const[u,w]=p.useState(i.args.value);return e.jsx(c,{args:{...i.args,value:u,onChange:D=>w(D??void 0)}})},T=[{value:"option1",label:"Primeira Opção"},{value:"option2",label:"Segunda Opção"},{value:"option3",label:"Terceira Opção"},{value:"option4",label:"Quarta Opção"},{value:"option5",label:"Quinta Opção",disabled:!0}],Xe=[{group:"Frutas",options:[{value:"apple",label:"Maçã"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cereja"}]},{group:"Legumes",options:[{value:"carrot",label:"Cenoura"},{value:"broccoli",label:"Brócolis"},{value:"spinach",label:"Espinafre",disabled:!0}]}],H={decorators:[V],args:{id:"combobox-default",label:"Selecione uma opção",options:T,placeholder:"Escolha uma opção..."}},J={decorators:[V],args:{id:"combobox-groups",label:"Selecione um alimento",options:Xe,placeholder:"Escolha um alimento..."}},Q={decorators:[V],args:{id:"combobox-clearable",label:"Selecione uma opção",options:T,placeholder:"Escolha uma opção...",value:"option1",clearable:!0,hint:"Clique no × para limpar a seleção"}},Y={decorators:[V],args:{id:"combobox-error",label:"Selecione uma opção",options:T,placeholder:"Escolha uma opção...",error:"Este campo é obrigatório",required:!0}},Z={decorators:[V],args:{id:"combobox-hint",label:"Selecione uma opção",options:T,placeholder:"Escolha uma opção...",hint:"Você pode digitar para filtrar as opções"}},ee={decorators:[V],args:{id:"combobox-disabled",label:"Campo desabilitado",options:T,placeholder:"Não disponível",value:"option2",disabled:!0}},oe={render:()=>{const c=()=>{const[i,u]=p.useState([]);return e.jsx(re,{id:"combobox-multi",label:"Selecione múltiplas opções",options:T,placeholder:"Adicionar opções...",value:i,onChange:u,hint:"Pressione Backspace para remover a última opção"})};return e.jsx(c,{})}},ae={render:()=>{const c=()=>{const[i,u]=p.useState([]);return e.jsx(re,{id:"combobox-multi-groups",label:"Selecione alimentos",options:Xe,placeholder:"Adicionar alimentos...",value:i,onChange:u})};return e.jsx(c,{})}},te={render:()=>e.jsx(re,{id:"combobox-multi-disabled",label:"Campo desabilitado",options:T,placeholder:"Não disponível",value:["option1","option3"],onChange:()=>{},disabled:!0})};var me,be,he;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-default",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção..."
  }
}`,...(he=(be=H.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var _e,fe,ve;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-groups",
    label: "Selecione um alimento",
    options: groupedOptions,
    placeholder: "Escolha um alimento..."
  }
}`,...(ve=(fe=J.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,ge,ye;Q.parameters={...Q.parameters,docs:{...(xe=Q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-clearable",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
    value: "option1",
    clearable: true,
    hint: "Clique no × para limpar a seleção"
  }
}`,...(ye=(ge=Q.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Se,je,we;Y.parameters={...Y.parameters,docs:{...(Se=Y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-error",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
    error: "Este campo é obrigatório",
    required: true
  }
}`,...(we=(je=Y.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Ce,Ne,De;Z.parameters={...Z.parameters,docs:{...(Ce=Z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-hint",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
    hint: "Você pode digitar para filtrar as opções"
  }
}`,...(De=(Ne=Z.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var ke,Oe,Me;ee.parameters={...ee.parameters,docs:{...(ke=ee.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-disabled",
    label: "Campo desabilitado",
    options: mockOptions,
    placeholder: "Não disponível",
    value: "option2",
    disabled: true
  }
}`,...(Me=(Oe=ee.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};var qe,Te,Ee;oe.parameters={...oe.parameters,docs:{...(qe=oe.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const MultiWrapper = () => {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <ComboboxMulti id="combobox-multi" label="Selecione múltiplas opções" options={mockOptions} placeholder="Adicionar opções..." value={value} onChange={setValue} hint="Pressione Backspace para remover a última opção" />;
    };
    return <MultiWrapper />;
  }
}`,...(Ee=(Te=oe.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ae,Ie,Ve;ae.parameters={...ae.parameters,docs:{...(Ae=ae.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const MultiGroupWrapper = () => {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <ComboboxMulti id="combobox-multi-groups" label="Selecione alimentos" options={groupedOptions} placeholder="Adicionar alimentos..." value={value} onChange={setValue} />;
    };
    return <MultiGroupWrapper />;
  }
}`,...(Ve=(Ie=ae.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Re,Fe,Pe;te.parameters={...te.parameters,docs:{...(Re=te.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    return <ComboboxMulti id="combobox-multi-disabled" label="Campo desabilitado" options={mockOptions} placeholder="Não disponível" value={["option1", "option3"]} onChange={() => {}} disabled />;
  }
}`,...(Pe=(Fe=te.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};const Yo=["Default","WithGroups","Clearable","WithError","WithHint","Disabled","MultiSelect","MultiSelectWithGroups","MultiSelectDisabled"];export{Q as Clearable,H as Default,ee as Disabled,oe as MultiSelect,te as MultiSelectDisabled,ae as MultiSelectWithGroups,Y as WithError,J as WithGroups,Z as WithHint,Yo as __namedExportsOrder,Qo as default};

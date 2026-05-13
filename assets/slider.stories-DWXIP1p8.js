import{j as c}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{c as je}from"./clsx-CNgb8Gju.js";import{c as pe}from"./index-BdQq_4o_.js";import{c as E}from"./index-DW48STyt.js";import{u as A}from"./index-DBCqBOGF.js";import{c as Me}from"./index-BYJyBkN8.js";import{u as ke}from"./index-DEN0ugiW.js";import{u as Ie}from"./index-B2zu5yC8.js";import{u as Ne}from"./index-Dya9PstJ.js";import{u as Te}from"./index-Bav0yaTQ.js";import{P as N}from"./index-C9v26AP-.js";import{c as Be}from"./index-CNfLqMdS.js";import"./index-WUhAcQt0.js";import"./index-CROobee-.js";import"./index-BojL7TVx.js";var fe=["PageUp","PageDown"],ge=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],he={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},j="Slider",[Y,Ke,ze]=Be(j),[Se,Et]=Me(j,[ze]),[He,$]=Se(j),ve=d.forwardRef((e,t)=>{const{name:r,min:n=0,max:o=100,step:l=1,orientation:a="horizontal",disabled:s=!1,minStepsBetweenThumbs:u=0,defaultValue:h=[n],value:S,onValueChange:i=()=>{},onValueCommit:m=()=>{},inverted:x=!1,form:w,...v}=e,f=d.useRef(new Set),p=d.useRef(0),b=a==="horizontal"?Oe:$e,[g=[],M]=ke({prop:S,defaultProp:h,onChange:y=>{var C;(C=[...f.current][p.current])==null||C.focus(),i(y)}}),L=d.useRef(g);function U(y){const _=We(g,y);k(y,_)}function Ee(y){k(y,p.current)}function Ae(){const y=L.current[p.current];g[p.current]!==y&&m(g)}function k(y,_,{commit:C}={commit:!1}){const G=Je(l),F=Qe(Math.round((y-n)/l)*l+n,G),I=pe(F,[n,o]);M((D=[])=>{const R=Fe(D,I,_);if(Ge(R,u*l)){p.current=R.indexOf(I);const J=String(R)!==String(D);return J&&C&&m(R),J?R:D}else return D})}return c.jsx(He,{scope:e.__scopeSlider,name:r,disabled:s,min:n,max:o,valueIndexToChangeRef:p,thumbs:f.current,values:g,orientation:a,form:w,children:c.jsx(Y.Provider,{scope:e.__scopeSlider,children:c.jsx(Y.Slot,{scope:e.__scopeSlider,children:c.jsx(b,{"aria-disabled":s,"data-disabled":s?"":void 0,...v,ref:t,onPointerDown:E(v.onPointerDown,()=>{s||(L.current=g)}),min:n,max:o,inverted:x,onSlideStart:s?void 0:U,onSlideMove:s?void 0:Ee,onSlideEnd:s?void 0:Ae,onHomeKeyDown:()=>!s&&k(n,0,{commit:!0}),onEndKeyDown:()=>!s&&k(o,g.length-1,{commit:!0}),onStepKeyDown:({event:y,direction:_})=>{if(!s){const F=fe.includes(y.key)||y.shiftKey&&ge.includes(y.key)?10:1,I=p.current,D=g[I],R=l*F*_;k(D+R,I,{commit:!0})}}})})})})});ve.displayName=j;var[xe,be]=Se(j,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Oe=d.forwardRef((e,t)=>{const{min:r,max:n,dir:o,inverted:l,onSlideStart:a,onSlideMove:s,onSlideEnd:u,onStepKeyDown:h,...S}=e,[i,m]=d.useState(null),x=A(t,b=>m(b)),w=d.useRef(void 0),v=Ie(o),f=v==="ltr",p=f&&!l||!f&&l;function V(b){const g=w.current||i.getBoundingClientRect(),M=[0,g.width],U=q(M,p?[r,n]:[n,r]);return w.current=g,U(b-g.left)}return c.jsx(xe,{scope:e.__scopeSlider,startEdge:p?"left":"right",endEdge:p?"right":"left",direction:p?1:-1,size:"width",children:c.jsx(ye,{dir:v,"data-orientation":"horizontal",...S,ref:x,style:{...S.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:b=>{const g=V(b.clientX);a==null||a(g)},onSlideMove:b=>{const g=V(b.clientX);s==null||s(g)},onSlideEnd:()=>{w.current=void 0,u==null||u()},onStepKeyDown:b=>{const M=he[p?"from-left":"from-right"].includes(b.key);h==null||h({event:b,direction:M?-1:1})}})})}),$e=d.forwardRef((e,t)=>{const{min:r,max:n,inverted:o,onSlideStart:l,onSlideMove:a,onSlideEnd:s,onStepKeyDown:u,...h}=e,S=d.useRef(null),i=A(t,S),m=d.useRef(void 0),x=!o;function w(v){const f=m.current||S.current.getBoundingClientRect(),p=[0,f.height],b=q(p,x?[n,r]:[r,n]);return m.current=f,b(v-f.top)}return c.jsx(xe,{scope:e.__scopeSlider,startEdge:x?"bottom":"top",endEdge:x?"top":"bottom",size:"height",direction:x?1:-1,children:c.jsx(ye,{"data-orientation":"vertical",...h,ref:i,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:v=>{const f=w(v.clientY);l==null||l(f)},onSlideMove:v=>{const f=w(v.clientY);a==null||a(f)},onSlideEnd:()=>{m.current=void 0,s==null||s()},onStepKeyDown:v=>{const p=he[x?"from-bottom":"from-top"].includes(v.key);u==null||u({event:v,direction:p?-1:1})}})})}),ye=d.forwardRef((e,t)=>{const{__scopeSlider:r,onSlideStart:n,onSlideMove:o,onSlideEnd:l,onHomeKeyDown:a,onEndKeyDown:s,onStepKeyDown:u,...h}=e,S=$(j,r);return c.jsx(N.span,{...h,ref:t,onKeyDown:E(e.onKeyDown,i=>{i.key==="Home"?(a(i),i.preventDefault()):i.key==="End"?(s(i),i.preventDefault()):fe.concat(ge).includes(i.key)&&(u(i),i.preventDefault())}),onPointerDown:E(e.onPointerDown,i=>{const m=i.target;m.setPointerCapture(i.pointerId),i.preventDefault(),S.thumbs.has(m)?m.focus():n(i)}),onPointerMove:E(e.onPointerMove,i=>{i.target.hasPointerCapture(i.pointerId)&&o(i)}),onPointerUp:E(e.onPointerUp,i=>{const m=i.target;m.hasPointerCapture(i.pointerId)&&(m.releasePointerCapture(i.pointerId),l(i))})})}),we="SliderTrack",_e=d.forwardRef((e,t)=>{const{__scopeSlider:r,...n}=e,o=$(we,r);return c.jsx(N.span,{"data-disabled":o.disabled?"":void 0,"data-orientation":o.orientation,...n,ref:t})});_e.displayName=we;var W="SliderRange",Re=d.forwardRef((e,t)=>{const{__scopeSlider:r,...n}=e,o=$(W,r),l=be(W,r),a=d.useRef(null),s=A(t,a),u=o.values.length,h=o.values.map(m=>Ce(m,o.min,o.max)),S=u>1?Math.min(...h):0,i=100-Math.max(...h);return c.jsx(N.span,{"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,...n,ref:s,style:{...e.style,[l.startEdge]:S+"%",[l.endEdge]:i+"%"}})});Re.displayName=W;var X="SliderThumb",Pe=d.forwardRef((e,t)=>{const r=Ke(e.__scopeSlider),[n,o]=d.useState(null),l=A(t,s=>o(s)),a=d.useMemo(()=>n?r().findIndex(s=>s.ref.current===n):-1,[r,n]);return c.jsx(Le,{...e,ref:l,index:a})}),Le=d.forwardRef((e,t)=>{const{__scopeSlider:r,index:n,name:o,...l}=e,a=$(X,r),s=be(X,r),[u,h]=d.useState(null),S=A(t,V=>h(V)),i=u?a.form||!!u.closest("form"):!0,m=Te(u),x=a.values[n],w=x===void 0?0:Ce(x,a.min,a.max),v=Ye(n,a.values.length),f=m==null?void 0:m[s.size],p=f?Xe(f,w,s.direction):0;return d.useEffect(()=>{if(u)return a.thumbs.add(u),()=>{a.thumbs.delete(u)}},[u,a.thumbs]),c.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:`calc(${w}% + ${p}px)`},children:[c.jsx(Y.ItemSlot,{scope:e.__scopeSlider,children:c.jsx(N.span,{role:"slider","aria-label":e["aria-label"]||v,"aria-valuemin":a.min,"aria-valuenow":x,"aria-valuemax":a.max,"aria-orientation":a.orientation,"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,tabIndex:a.disabled?void 0:0,...l,ref:S,style:x===void 0?{display:"none"}:e.style,onFocus:E(e.onFocus,()=>{a.valueIndexToChangeRef.current=n})})}),i&&c.jsx(Ve,{name:o??(a.name?a.name+(a.values.length>1?"[]":""):void 0),form:a.form,value:x},n)]})});Pe.displayName=X;var Ue="RadioBubbleInput",Ve=d.forwardRef(({__scopeSlider:e,value:t,...r},n)=>{const o=d.useRef(null),l=A(o,n),a=Ne(t);return d.useEffect(()=>{const s=o.current;if(!s)return;const u=window.HTMLInputElement.prototype,S=Object.getOwnPropertyDescriptor(u,"value").set;if(a!==t&&S){const i=new Event("input",{bubbles:!0});S.call(s,t),s.dispatchEvent(i)}},[a,t]),c.jsx(N.input,{style:{display:"none"},...r,ref:l,defaultValue:t})});Ve.displayName=Ue;function Fe(e=[],t,r){const n=[...e];return n[r]=t,n.sort((o,l)=>o-l)}function Ce(e,t,r){const l=100/(r-t)*(e-t);return pe(l,[0,100])}function Ye(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function We(e,t){if(e.length===1)return 0;const r=e.map(o=>Math.abs(o-t)),n=Math.min(...r);return r.indexOf(n)}function Xe(e,t,r){const n=e/2,l=q([0,50],[0,n]);return(n-l(t)*r)*r}function qe(e){return e.slice(0,-1).map((t,r)=>e[r+1]-t)}function Ge(e,t){if(t>0){const r=qe(e);return Math.min(...r)>=t}return!0}function q(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function Je(e){return(String(e).split(".")[1]||"").length}function Qe(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}var Ze=ve,et=_e,tt=Re,rt=Pe;const nt="_root_9yz99_2",ot="_track_9yz99_23",at="_range_9yz99_42",st="_thumb_9yz99_57",T={root:nt,track:ot,range:at,thumb:st};function De({className:e,defaultValue:t,value:r,min:n=0,max:o=100,...l}){const a=d.useMemo(()=>Array.isArray(r)?r:Array.isArray(t)?t:[n,o],[r,t,n,o]);return c.jsxs(Ze,{"data-slot":"slider",defaultValue:t,value:r,min:n,max:o,className:je(T.root,e),...l,children:[c.jsx(et,{"data-slot":"slider-track",className:T.track,children:c.jsx(tt,{"data-slot":"slider-range",className:T.range})}),Array.from({length:a.length},(s,u)=>c.jsx(rt,{"data-slot":"slider-thumb",className:T.thumb},u))]})}De.__docgenInfo={description:`A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/slider | Radix UI Slider}
that supports single-thumb and range modes via CSS Modules and design tokens.

@component
@param className - Additional class names applied to the root element.
@param defaultValue - Uncontrolled initial value(s). Single thumb: \`[50]\`. Range: \`[25, 75]\`.
@param value - Controlled value(s).
@param min - Minimum value. Defaults to \`0\`.
@param max - Maximum value. Defaults to \`100\`.
@returns A horizontal or vertical slider with one or more draggable thumbs.

@example
// Single thumb (uncontrolled)
<Slider defaultValue={[50]} />

@example
// Range (two thumbs, controlled)
const [range, setRange] = useState([20, 80]);
<Slider value={range} onValueChange={setRange} />

@example
// Vertical
<Slider orientation="vertical" defaultValue={[40]} />`,methods:[],displayName:"Slider",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const it="_wrapper_1myra_1",lt="_panel_1myra_7",ct="_label_1myra_18",dt="_dark_1myra_24",ut="_light_1myra_28",P={wrapper:it,panel:lt,label:ct,dark:dt,light:ut},mt=(e,t)=>{const[r,n]=d.useState(t.args.value??[50]),o={...t.args,value:r,onValueChange:n};return c.jsxs("div",{className:P.wrapper,children:[c.jsxs("div",{className:`${P.panel} ${P.light}`,children:[c.jsx("span",{className:P.label,children:"Tema Claro"}),c.jsx(e,{args:o})]}),c.jsxs("div",{className:`${P.panel} ${P.dark}`,children:[c.jsx("span",{className:P.label,children:"Tema Escuro"}),c.jsx(e,{args:o})]})]})},At={title:"Components/inputs/Slider",component:De,tags:["autodocs"],decorators:[mt],argTypes:{value:{control:!1,description:"Valor(es) controlado(s) do slider"},defaultValue:{control:!1,description:"Valor(es) inicial(is) não controlado(s)"},min:{control:{type:"number"},description:"Valor mínimo do slider"},max:{control:{type:"number"},description:"Valor máximo do slider"},step:{control:{type:"number"},description:"Incremento entre valores"},orientation:{options:["horizontal","vertical"],control:{type:"select"},description:"Orientação do slider"},disabled:{control:"boolean",description:"Se o slider está desabilitado"}}},B={args:{value:[50],min:0,max:100}},K={decorators:[(e,t)=>{const[r,n]=d.useState([25,75]),o={...t.args,value:r,onValueChange:n};return c.jsx(e,{args:o})}],args:{value:[25,75],min:0,max:100}},z={decorators:[(e,t)=>{const[r,n]=d.useState([40]),o={...t.args,value:r,onValueChange:n,orientation:"vertical"};return c.jsx(e,{args:o})}],args:{value:[40],orientation:"vertical",min:0,max:100}},H={args:{value:[50],min:0,max:100,step:10}},O={args:{value:[60],disabled:!0}};var Q,Z,ee;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value: [50],
    min: 0,
    max: 100
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;K.parameters={...K.parameters,docs:{...(te=K.parameters)==null?void 0:te.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn, context: StoryContext) => {
    const [value, setValue] = useState<number[]>([25, 75]);
    const sharedArgs = {
      ...context.args,
      value,
      onValueChange: setValue
    };
    return <Story args={sharedArgs} />;
  }],
  args: {
    value: [25, 75],
    min: 0,
    max: 100
  }
}`,...(ne=(re=K.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,se;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn, context: StoryContext) => {
    const [value, setValue] = useState<number[]>([40]);
    const sharedArgs = {
      ...context.args,
      value,
      onValueChange: setValue,
      orientation: "vertical" as const
    };
    return <Story args={sharedArgs} />;
  }],
  args: {
    value: [40],
    orientation: "vertical",
    min: 0,
    max: 100
  }
}`,...(se=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,le,ce;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    value: [50],
    min: 0,
    max: 100,
    step: 10
  }
}`,...(ce=(le=H.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    value: [60],
    disabled: true
  }
}`,...(me=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const jt=["Default","Range","Vertical","WithStep","Disabled"];export{B as Default,O as Disabled,K as Range,z as Vertical,H as WithStep,jt as __namedExportsOrder,At as default};

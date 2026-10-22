import{j as m}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{c as Ae}from"./clsx-DegBVMCo.js";import{c as me}from"./index-BdQq_4o_.js";import{c as D}from"./index-DW48STyt.js";import{u as E}from"./index-Bms3GI6n.js";import{c as Me}from"./index-DRtXj63t.js";import{u as je}from"./index-C0xqUTPU.js";import{u as Ie}from"./index-CwIEgGhy.js";import{u as ke}from"./index-Iz9Zo_Nw.js";import{u as Te}from"./index-D8lkqur8.js";import{P as k}from"./index-CLlkV7gm.js";import{c as Ne}from"./index-B4P-2A7h.js";import"./index-Bnhoviar.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";var pe=["PageUp","PageDown"],fe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ge={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},A="Slider",[L,Ke,Be]=Ne(A),[he,Pt]=Me(A,[Be]),[ze,F]=he(A),be=d.forwardRef((e,t)=>{const{name:n,min:r=0,max:a=100,step:i=1,orientation:o="horizontal",disabled:s=!1,minStepsBetweenThumbs:u=0,defaultValue:f=[r],value:p,onValueChange:l=()=>{},onValueCommit:c=()=>{},inverted:v=!1,form:w,...S}=e,h=d.useRef(new Set),g=d.useRef(0),x=o==="horizontal"?He:Fe,[b=[],M]=je({prop:p,defaultProp:f,onChange:y=>{var _;(_=[...h.current][g.current])==null||_.focus(),l(y)}}),O=d.useRef(b);function U(y){const R=Ye(b,y);j(y,R)}function De(y){j(y,g.current)}function Ee(){const y=O.current[g.current];b[g.current]!==y&&c(b)}function j(y,R,{commit:_}={commit:!1}){const X=Ge(i),$=Je(Math.round((y-r)/i)*i+r,X),I=me($,[r,a]);M((C=[])=>{const V=$e(C,I,R);if(Xe(V,u*i)){g.current=V.indexOf(I);const G=String(V)!==String(C);return G&&_&&c(V),G?V:C}else return C})}return m.jsx(ze,{scope:e.__scopeSlider,name:n,disabled:s,min:r,max:a,valueIndexToChangeRef:g,thumbs:h.current,values:b,orientation:o,form:w,children:m.jsx(L.Provider,{scope:e.__scopeSlider,children:m.jsx(L.Slot,{scope:e.__scopeSlider,children:m.jsx(x,{"aria-disabled":s,"data-disabled":s?"":void 0,...S,ref:t,onPointerDown:D(S.onPointerDown,()=>{s||(O.current=b)}),min:r,max:a,inverted:v,onSlideStart:s?void 0:U,onSlideMove:s?void 0:De,onSlideEnd:s?void 0:Ee,onHomeKeyDown:()=>!s&&j(r,0,{commit:!0}),onEndKeyDown:()=>!s&&j(a,b.length-1,{commit:!0}),onStepKeyDown:({event:y,direction:R})=>{if(!s){const $=pe.includes(y.key)||y.shiftKey&&fe.includes(y.key)?10:1,I=g.current,C=b[I],V=i*$*R;j(C+V,I,{commit:!0})}}})})})})});be.displayName=A;var[Se,ve]=he(A,{startEdge:"left",endEdge:"right",size:"width",direction:1}),He=d.forwardRef((e,t)=>{const{min:n,max:r,dir:a,inverted:i,onSlideStart:o,onSlideMove:s,onSlideEnd:u,onStepKeyDown:f,...p}=e,[l,c]=d.useState(null),v=E(t,x=>c(x)),w=d.useRef(void 0),S=Ie(a),h=S==="ltr",g=h&&!i||!h&&i;function P(x){const b=w.current||l.getBoundingClientRect(),M=[0,b.width],U=W(M,g?[n,r]:[r,n]);return w.current=b,U(x-b.left)}return m.jsx(Se,{scope:e.__scopeSlider,startEdge:g?"left":"right",endEdge:g?"right":"left",direction:g?1:-1,size:"width",children:m.jsx(xe,{dir:S,"data-orientation":"horizontal",...p,ref:v,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:x=>{const b=P(x.clientX);o==null||o(b)},onSlideMove:x=>{const b=P(x.clientX);s==null||s(b)},onSlideEnd:()=>{w.current=void 0,u==null||u()},onStepKeyDown:x=>{const M=ge[g?"from-left":"from-right"].includes(x.key);f==null||f({event:x,direction:M?-1:1})}})})}),Fe=d.forwardRef((e,t)=>{const{min:n,max:r,inverted:a,onSlideStart:i,onSlideMove:o,onSlideEnd:s,onStepKeyDown:u,...f}=e,p=d.useRef(null),l=E(t,p),c=d.useRef(void 0),v=!a;function w(S){const h=c.current||p.current.getBoundingClientRect(),g=[0,h.height],x=W(g,v?[r,n]:[n,r]);return c.current=h,x(S-h.top)}return m.jsx(Se,{scope:e.__scopeSlider,startEdge:v?"bottom":"top",endEdge:v?"top":"bottom",size:"height",direction:v?1:-1,children:m.jsx(xe,{"data-orientation":"vertical",...f,ref:l,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:S=>{const h=w(S.clientY);i==null||i(h)},onSlideMove:S=>{const h=w(S.clientY);o==null||o(h)},onSlideEnd:()=>{c.current=void 0,s==null||s()},onStepKeyDown:S=>{const g=ge[v?"from-bottom":"from-top"].includes(S.key);u==null||u({event:S,direction:g?-1:1})}})})}),xe=d.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:a,onSlideEnd:i,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:u,...f}=e,p=F(A,n);return m.jsx(k.span,{...f,ref:t,onKeyDown:D(e.onKeyDown,l=>{l.key==="Home"?(o(l),l.preventDefault()):l.key==="End"?(s(l),l.preventDefault()):pe.concat(fe).includes(l.key)&&(u(l),l.preventDefault())}),onPointerDown:D(e.onPointerDown,l=>{const c=l.target;c.setPointerCapture(l.pointerId),l.preventDefault(),p.thumbs.has(c)?c.focus():r(l)}),onPointerMove:D(e.onPointerMove,l=>{l.target.hasPointerCapture(l.pointerId)&&a(l)}),onPointerUp:D(e.onPointerUp,l=>{const c=l.target;c.hasPointerCapture(l.pointerId)&&(c.releasePointerCapture(l.pointerId),i(l))})})}),ye="SliderTrack",we=d.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,a=F(ye,n);return m.jsx(k.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...r,ref:t})});we.displayName=ye;var Y="SliderRange",Re=d.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,a=F(Y,n),i=ve(Y,n),o=d.useRef(null),s=E(t,o),u=a.values.length,f=a.values.map(c=>_e(c,a.min,a.max)),p=u>1?Math.min(...f):0,l=100-Math.max(...f);return m.jsx(k.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...r,ref:s,style:{...e.style,[i.startEdge]:p+"%",[i.endEdge]:l+"%"}})});Re.displayName=Y;var q="SliderThumb",Ve=d.forwardRef((e,t)=>{const n=Ke(e.__scopeSlider),[r,a]=d.useState(null),i=E(t,s=>a(s)),o=d.useMemo(()=>r?n().findIndex(s=>s.ref.current===r):-1,[n,r]);return m.jsx(Oe,{...e,ref:i,index:o})}),Oe=d.forwardRef((e,t)=>{const{__scopeSlider:n,index:r,name:a,...i}=e,o=F(q,n),s=ve(q,n),[u,f]=d.useState(null),p=E(t,P=>f(P)),l=u?o.form||!!u.closest("form"):!0,c=Te(u),v=o.values[r],w=v===void 0?0:_e(v,o.min,o.max),S=Le(r,o.values.length),h=c==null?void 0:c[s.size],g=h?qe(h,w,s.direction):0;return d.useEffect(()=>{if(u)return o.thumbs.add(u),()=>{o.thumbs.delete(u)}},[u,o.thumbs]),m.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:`calc(${w}% + ${g}px)`},children:[m.jsx(L.ItemSlot,{scope:e.__scopeSlider,children:m.jsx(k.span,{role:"slider","aria-label":e["aria-label"]||S,"aria-valuemin":o.min,"aria-valuenow":v,"aria-valuemax":o.max,"aria-orientation":o.orientation,"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,tabIndex:o.disabled?void 0:0,...i,ref:p,style:v===void 0?{display:"none"}:e.style,onFocus:D(e.onFocus,()=>{o.valueIndexToChangeRef.current=r})})}),l&&m.jsx(Pe,{name:a??(o.name?o.name+(o.values.length>1?"[]":""):void 0),form:o.form,value:v},r)]})});Ve.displayName=q;var Ue="RadioBubbleInput",Pe=d.forwardRef(({__scopeSlider:e,value:t,...n},r)=>{const a=d.useRef(null),i=E(a,r),o=ke(t);return d.useEffect(()=>{const s=a.current;if(!s)return;const u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"value").set;if(o!==t&&p){const l=new Event("input",{bubbles:!0});p.call(s,t),s.dispatchEvent(l)}},[o,t]),m.jsx(k.input,{style:{display:"none"},...n,ref:i,defaultValue:t})});Pe.displayName=Ue;function $e(e=[],t,n){const r=[...e];return r[n]=t,r.sort((a,i)=>a-i)}function _e(e,t,n){const i=100/(n-t)*(e-t);return me(i,[0,100])}function Le(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Ye(e,t){if(e.length===1)return 0;const n=e.map(a=>Math.abs(a-t)),r=Math.min(...n);return n.indexOf(r)}function qe(e,t,n){const r=e/2,i=W([0,50],[0,r]);return(r-i(t)*n)*n}function We(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Xe(e,t){if(t>0){const n=We(e);return Math.min(...n)>=t}return!0}function W(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Ge(e){return(String(e).split(".")[1]||"").length}function Je(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}var Qe=be,Ze=we,et=Re,tt=Ve;const rt="_root_35f0p_2",nt="_track_35f0p_23",ot="_range_35f0p_42",at="_thumb_35f0p_57",T={root:rt,track:nt,range:ot,thumb:at};function Ce({className:e,defaultValue:t,value:n,min:r=0,max:a=100,thumbLabels:i,"aria-label":o,"aria-labelledby":s,...u}){const f=(n??t??[r]).length,p=f>1;return m.jsxs(Qe,{"data-slot":"slider",defaultValue:t,value:n,min:r,max:a,className:Ae(T.root,e),role:p&&(o||s)?"group":void 0,"aria-label":p?o:void 0,"aria-labelledby":p?s:void 0,...u,children:[m.jsx(Ze,{"data-slot":"slider-track",className:T.track,children:m.jsx(et,{"data-slot":"slider-range",className:T.range})}),Array.from({length:f},(l,c)=>m.jsx(tt,{"data-slot":"slider-thumb",className:T.thumb,"aria-label":(i==null?void 0:i[c])??(p?void 0:o),"aria-labelledby":p||i!=null&&i[c]?void 0:s},c))]})}Ce.__docgenInfo={description:`A styled wrapper around {@link https://www.radix-ui.com/primitives/docs/components/slider | Radix UI Slider}
that supports single-thumb and range modes via CSS Modules and design tokens.

@component
@param className - Additional class names applied to the root element.
@param defaultValue - Uncontrolled initial value(s). Single thumb: \`[50]\`. Range: \`[25, 75]\`.
@param value - Controlled value(s).
@param min - Minimum value. Defaults to \`0\`.
@param max - Maximum value. Defaults to \`100\`.
@param thumbLabels - Accessible name for each thumb, by index (e.g. \`["Preço mínimo", "Preço máximo"]\`).
@param aria-label - Accessible name. Single thumb: applied to the thumb. Range: names the
slider group, and thumbs fall back to \`thumbLabels\` or Radix's "Minimum"/"Maximum".
Every slider needs a name: pass \`aria-label\`, \`aria-labelledby\` or \`thumbLabels\`.
@returns A horizontal or vertical slider with one or more draggable thumbs.

@example
// Single thumb (uncontrolled)
<Slider aria-label="Volume" defaultValue={[50]} />

@example
// Range (two thumbs, controlled)
const [range, setRange] = useState([20, 80]);
<Slider
  aria-label="Faixa de preço"
  thumbLabels={["Preço mínimo", "Preço máximo"]}
  value={range}
  onValueChange={setRange}
/>

@example
// Vertical
<Slider aria-label="Volume" orientation="vertical" defaultValue={[40]} />`,methods:[],displayName:"Slider",props:{thumbLabels:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Accessible name for each thumb, by index. Takes precedence over\n`aria-label`/`aria-labelledby` for that thumb."},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const st="_panel_1dqcd_7",it={panel:st},lt=(e,t)=>{const[n,r]=d.useState(t.args.value??[50]),a={...t.args,value:n,onValueChange:r};return m.jsx("div",{className:it.panel,children:m.jsx(e,{args:a})})},_t={title:"Components/inputs/Slider",component:Ce,tags:["autodocs"],decorators:[lt],argTypes:{value:{control:!1,description:"Valor(es) controlado(s) do slider"},defaultValue:{control:!1,description:"Valor(es) inicial(is) não controlado(s)"},min:{control:{type:"number"},description:"Valor mínimo do slider"},max:{control:{type:"number"},description:"Valor máximo do slider"},step:{control:{type:"number"},description:"Incremento entre valores"},orientation:{options:["horizontal","vertical"],control:{type:"select"},description:"Orientação do slider"},disabled:{control:"boolean",description:"Se o slider está desabilitado"},"aria-label":{control:"text",description:"Nome acessível. Um thumb: vai no thumb. Range: nomeia o grupo; cada thumb usa thumbLabels ou o padrão do Radix."},thumbLabels:{control:"object",description:"Nome acessível de cada thumb, por índice"}}},N={args:{"aria-label":"Volume",value:[50],min:0,max:100}},K={decorators:[(e,t)=>{const[n,r]=d.useState([25,75]),a={...t.args,value:n,onValueChange:r};return m.jsx(e,{args:a})}],args:{"aria-label":"Faixa de preço",thumbLabels:["Preço mínimo","Preço máximo"],value:[25,75],min:0,max:100}},B={decorators:[(e,t)=>{const[n,r]=d.useState([40]),a={...t.args,value:n,onValueChange:r,orientation:"vertical"};return m.jsx(e,{args:a})}],args:{"aria-label":"Volume",value:[40],orientation:"vertical",min:0,max:100}},z={args:{"aria-label":"Volume",value:[50],min:0,max:100,step:10}},H={args:{"aria-label":"Volume",value:[60],disabled:!0}};var J,Q,Z;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    "aria-label": "Volume",
    value: [50],
    min: 0,
    max: 100
  }
}`,...(Z=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;K.parameters={...K.parameters,docs:{...(ee=K.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    "aria-label": "Faixa de preço",
    thumbLabels: ["Preço mínimo", "Preço máximo"],
    value: [25, 75],
    min: 0,
    max: 100
  }
}`,...(re=(te=K.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,oe,ae;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    "aria-label": "Volume",
    value: [40],
    orientation: "vertical",
    min: 0,
    max: 100
  }
}`,...(ae=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ie,le;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    "aria-label": "Volume",
    value: [50],
    min: 0,
    max: 100,
    step: 10
  }
}`,...(le=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    "aria-label": "Volume",
    value: [60],
    disabled: true
  }
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ct=["Default","Range","Vertical","WithStep","Disabled"];export{N as Default,H as Disabled,K as Range,B as Vertical,z as WithStep,Ct as __namedExportsOrder,_t as default};

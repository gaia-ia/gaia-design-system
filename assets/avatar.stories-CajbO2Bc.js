import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as i,a as _a}from"./index-GiUgBvb1.js";import{u as ya}from"./index-Dl0iWJCF.js";import{u as R}from"./index-WUhAcQt0.js";import"./index-CROobee-.js";import{c as Ia}from"./index-DBCqBOGF.js";import{s as ka}from"./index-B10begHO.js";function Ca(){return ka.useSyncExternalStore(Fa,()=>!0,()=>!1)}function Fa(){return()=>{}}function wa(a,r=[]){let o=[];function s(n,c){const l=i.createContext(c);l.displayName=n+"Context";const d=o.length;o=[...o,c];const u=g=>{var G;const{scope:A,children:z,...j}=g,b=((G=A==null?void 0:A[a])==null?void 0:G[d])||l,Sa=i.useMemo(()=>j,Object.values(j));return e.jsx(b.Provider,{value:Sa,children:z})};u.displayName=n+"Provider";function h(g,A){var b;const z=((b=A==null?void 0:A[a])==null?void 0:b[d])||l,j=i.useContext(z);if(j)return j;if(c!==void 0)return c;throw new Error(`\`${g}\` must be used within \`${n}\``)}return[u,h]}const t=()=>{const n=o.map(c=>i.createContext(c));return function(l){const d=(l==null?void 0:l[a])||n;return i.useMemo(()=>({[`__scope${a}`]:{...l,[a]:d}}),[l,d])}};return t.scopeName=a,[s,La(t,...r)]}function La(...a){const r=a[0];if(a.length===1)return r;const o=()=>{const s=a.map(t=>({useScope:t(),scopeName:t.scopeName}));return function(n){const c=s.reduce((l,{useScope:d,scopeName:u})=>{const g=d(n)[`__scope${u}`];return{...l,...g}},{});return i.useMemo(()=>({[`__scope${r.scopeName}`]:c}),[c])}};return o.scopeName=r.scopeName,o}var Na=Symbol.for("react.lazy"),N=_a[" use ".trim().toString()];function za(a){return typeof a=="object"&&a!==null&&"then"in a}function pa(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===Na&&"_payload"in a&&za(a._payload)}function Ea(a){const r=Ra(a),o=i.forwardRef((s,t)=>{let{children:n,...c}=s;pa(n)&&typeof N=="function"&&(n=N(n._payload));const l=i.Children.toArray(n),d=l.find(Pa);if(d){const u=d.props.children,h=l.map(g=>g===d?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:g);return e.jsx(r,{...c,ref:t,children:i.isValidElement(u)?i.cloneElement(u,void 0,h):null})}return e.jsx(r,{...c,ref:t,children:n})});return o.displayName=`${a}.Slot`,o}function Ra(a){const r=i.forwardRef((o,s)=>{let{children:t,...n}=o;if(pa(t)&&typeof N=="function"&&(t=N(t._payload)),i.isValidElement(t)){const c=Ga(t),l=$a(n,t.props);return t.type!==i.Fragment&&(l.ref=s?Ia(s,c):c),i.cloneElement(t,l)}return i.Children.count(t)>1?i.Children.only(null):null});return r.displayName=`${a}.SlotClone`,r}var Oa=Symbol("radix.slottable");function Pa(a){return i.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===Oa}function $a(a,r){const o={...r};for(const s in r){const t=a[s],n=r[s];/^on[A-Z]/.test(s)?t&&n?o[s]=(...l)=>{const d=n(...l);return t(...l),d}:t&&(o[s]=t):s==="style"?o[s]={...t,...n}:s==="className"&&(o[s]=[t,n].filter(Boolean).join(" "))}return{...a,...o}}function Ga(a){var s,t;let r=(s=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:s.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?a.ref:(r=(t=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?a.props.ref:a.props.ref||a.ref)}var Ba=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],O=Ba.reduce((a,r)=>{const o=Ea(`Primitive.${r}`),s=i.forwardRef((t,n)=>{const{asChild:c,...l}=t,d=c?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(d,{...l,ref:n})});return s.displayName=`Primitive.${r}`,{...a,[r]:s}},{}),P="Avatar",[Wa,ce]=wa(P),[Ka,va]=Wa(P),fa=i.forwardRef((a,r)=>{const{__scopeAvatar:o,...s}=a,[t,n]=i.useState("idle");return e.jsx(Ka,{scope:o,imageLoadingStatus:t,onImageLoadingStatusChange:n,children:e.jsx(O.span,{...s,ref:r})})});fa.displayName=P;var ga="AvatarImage",ha=i.forwardRef((a,r)=>{const{__scopeAvatar:o,src:s,onLoadingStatusChange:t=()=>{},...n}=a,c=va(ga,o),l=Da(s,n),d=ya(u=>{t(u),c.onImageLoadingStatusChange(u)});return R(()=>{l!=="idle"&&d(l)},[l,d]),l==="loaded"?e.jsx(O.img,{...n,ref:r,src:s}):null});ha.displayName=ga;var Aa="AvatarFallback",xa=i.forwardRef((a,r)=>{const{__scopeAvatar:o,delayMs:s,...t}=a,n=va(Aa,o),[c,l]=i.useState(s===void 0);return i.useEffect(()=>{if(s!==void 0){const d=window.setTimeout(()=>l(!0),s);return()=>window.clearTimeout(d)}},[s]),c&&n.imageLoadingStatus!=="loaded"?e.jsx(O.span,{...t,ref:r}):null});xa.displayName=Aa;function B(a,r){return a?r?(a.src!==r&&(a.src=r),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function Da(a,{referrerPolicy:r,crossOrigin:o}){const s=Ca(),t=i.useRef(null),n=s?(t.current||(t.current=new window.Image),t.current):null,[c,l]=i.useState(()=>B(n,a));return R(()=>{l(B(n,a))},[n,a]),R(()=>{const d=g=>()=>{l(g)};if(!n)return;const u=d("loaded"),h=d("error");return n.addEventListener("load",u),n.addEventListener("error",h),r&&(n.referrerPolicy=r),typeof o=="string"&&(n.crossOrigin=o),()=>{n.removeEventListener("load",u),n.removeEventListener("error",h)}},[n,o,r]),c}var Ta=fa,Ma=ha,Va=xa;const Ha="_avatar_m8sv2_1",qa="_image_m8sv2_23",Ya="_fallback_m8sv2_30",Za="_badge_m8sv2_47",Ja="_group_m8sv2_95",Qa="_groupCount_m8sv2_108",x={avatar:Ha,image:qa,fallback:Ya,badge:Za,group:Ja,groupCount:Qa};function f({size:a="default",...r}){return e.jsx(Ta,{"data-slot":"avatar","data-size":a,className:x.avatar,...r})}function p(a){return e.jsx(Ma,{"data-slot":"avatar-image",className:x.image,...a})}function m(a){return e.jsx(Va,{"data-slot":"avatar-fallback",className:x.fallback,...a})}function ja(a){return e.jsx("span",{"data-slot":"avatar-badge",className:x.badge,...a})}function $(a){return e.jsx("div",{"data-slot":"avatar-group",className:x.group,...a})}function ba(a){return e.jsx("div",{"data-slot":"avatar-group-count",className:x.groupCount,...a})}f.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "lg"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};ja.__docgenInfo={description:"",methods:[],displayName:"AvatarBadge"};m.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"};$.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup"};ba.__docgenInfo={description:"",methods:[],displayName:"AvatarGroupCount"};p.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"};const Ua="_wrapper_b1nf9_1",Xa="_dark_b1nf9_6",ae="_light_b1nf9_7",E={wrapper:Ua,dark:Xa,light:ae},v={woman:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",man:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",person:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"},ee=a=>e.jsxs("div",{className:E.wrapper,children:[e.jsx("div",{className:E.dark,children:e.jsx(a,{})}),e.jsx("div",{className:E.light,children:e.jsx(a,{})})]}),de={title:"Components/general/Avatar",component:f,tags:["autodocs"],decorators:[ee],argTypes:{size:{options:["default","sm","lg"],control:{type:"radio"},description:"Tamanho do avatar"},children:{control:!1,description:"Conteúdo interno do avatar"}}},S={args:{size:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{src:v.woman,alt:"Olivia Rhye"}),e.jsx(m,{children:"OR"})]})}},_={args:{size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{src:v.man,alt:"Noah Kim"}),e.jsx(m,{children:"NK"})]})}},y={args:{size:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{src:v.person,alt:"Sophia Lee"}),e.jsx(m,{children:"SL"})]})}},I={args:{size:"default",children:e.jsx(m,{children:"ER"})}},k={args:{size:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{src:"https://invalid-url/avatar.png",alt:"Broken avatar"}),e.jsx(m,{children:"BR"})]})}},C={render:a=>e.jsxs("div",{style:{position:"relative",width:"fit-content"},children:[e.jsxs(f,{...a,children:[e.jsx(p,{src:v.woman,alt:"Emma Wilson"}),e.jsx(m,{children:"EW"})]}),e.jsx(ja,{})]}),args:{size:"default"}},F={render:()=>e.jsxs($,{children:[e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.woman,alt:"Olivia Rhye"}),e.jsx(m,{children:"OR"})]}),e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.man,alt:"Noah Kim"}),e.jsx(m,{children:"NK"})]}),e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.person,alt:"Sophia Lee"}),e.jsx(m,{children:"SL"})]})]})},w={render:()=>e.jsxs($,{children:[e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.woman,alt:"Olivia Rhye"}),e.jsx(m,{children:"OR"})]}),e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.man,alt:"Noah Kim"}),e.jsx(m,{children:"NK"})]}),e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.person,alt:"Sophia Lee"}),e.jsx(m,{children:"SL"})]}),e.jsx(ba,{children:"+4"})]})},L={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs(f,{size:"sm",children:[e.jsx(p,{src:v.woman,alt:"Small avatar"}),e.jsx(m,{children:"SM"})]}),e.jsxs(f,{size:"default",children:[e.jsx(p,{src:v.man,alt:"Default avatar"}),e.jsx(m,{children:"DF"})]}),e.jsxs(f,{size:"lg",children:[e.jsx(p,{src:v.person,alt:"Large avatar"}),e.jsx(m,{children:"LG"})]})]})};var W,K,D;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: "default",
    children: <>
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </>
  }
}`,...(D=(K=S.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var T,M,V;_.parameters={..._.parameters,docs:{...(T=_.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: <>
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </>
  }
}`,...(V=(M=_.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var H,q,Y;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: <>
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </>
  }
}`,...(Y=(q=y.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var Z,J,Q;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: "default",
    children: <AvatarFallback>ER</AvatarFallback>
  }
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,aa;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: "default",
    children: <>
        <AvatarImage src="https://invalid-url/avatar.png" alt="Broken avatar" />
        <AvatarFallback>BR</AvatarFallback>
      </>
  }
}`,...(aa=(X=k.parameters)==null?void 0:X.docs)==null?void 0:aa.source}}};var ea,ra,ta;C.parameters={...C.parameters,docs:{...(ea=C.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: args => <div style={{
    position: "relative",
    width: "fit-content"
  }}>
      <Avatar {...args}>
        <AvatarImage src={avatarImages.woman} alt="Emma Wilson" />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <AvatarBadge />
    </div>,
  args: {
    size: "default"
  }
}`,...(ta=(ra=C.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var na,sa,oa;F.parameters={...F.parameters,docs:{...(na=F.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
}`,...(oa=(sa=F.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var la,ia,ca;w.parameters={...w.parameters,docs:{...(la=w.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>

      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
}`,...(ca=(ia=w.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var da,ua,ma;L.parameters={...L.parameters,docs:{...(da=L.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      <Avatar size="sm">
        <AvatarImage src={avatarImages.woman} alt="Small avatar" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Default avatar" />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>

      <Avatar size="lg">
        <AvatarImage src={avatarImages.person} alt="Large avatar" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
}`,...(ma=(ua=L.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};const ue=["Default","Small","Large","Fallback","BrokenImage","WithBadge","Group","GroupWithCount","SizesComparison"];export{k as BrokenImage,S as Default,I as Fallback,F as Group,w as GroupWithCount,y as Large,L as SizesComparison,_ as Small,C as WithBadge,ue as __namedExportsOrder,de as default};

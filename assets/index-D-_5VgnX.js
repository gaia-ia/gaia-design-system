import{j as s}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{u as P}from"./index-DBCqBOGF.js";import{c as ye,a as Ce}from"./index-BYJyBkN8.js";import{u as S}from"./index-BolwHxDA.js";import{u as Ee}from"./index-DEN0ugiW.js";import{P as E,d as Pe}from"./index-C9v26AP-.js";import{u as H}from"./index-Dl0iWJCF.js";import{u as be,P as Ne,h as _e,R as xe,F as Re}from"./index-DslUmEDu.js";import{u as X}from"./index-WUhAcQt0.js";import{c as Oe}from"./index-BojL7TVx.js";import{B as Te}from"./index-B6QF9bbj.js";import{c as b}from"./clsx-CNgb8Gju.js";import{u as Ae}from"./portalContainer-Cr0I3QJP.js";import{X as Ie}from"./x-LE87PwJd.js";function h(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e==null||e(n),o===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}var we="DismissableLayer",M="dismissableLayer.update",Se="dismissableLayer.pointerDownOutside",je="dismissableLayer.focusOutside",G,q=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),V=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:n,onFocusOutside:a,onInteractOutside:d,onDismiss:c,...p}=e,l=i.useContext(q),[u,D]=i.useState(null),g=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=i.useState({}),A=P(t,f=>D(f)),N=Array.from(l.layers),[I]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),De=N.indexOf(I),k=u?N.indexOf(u):-1,ve=l.layersWithOutsidePointerEventsDisabled.size>0,B=k>=De,he=Le(f=>{const _=f.target,$=[...l.branches].some(w=>w.contains(_));!B||$||(n==null||n(f),d==null||d(f),f.defaultPrevented||c==null||c())},g),U=We(f=>{const _=f.target;[...l.branches].some(w=>w.contains(_))||(a==null||a(f),d==null||d(f),f.defaultPrevented||c==null||c())},g);return be(f=>{k===l.layers.size-1&&(r==null||r(f),!f.defaultPrevented&&c&&(f.preventDefault(),c()))},g),i.useEffect(()=>{if(u)return o&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(G=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(u)),l.layers.add(u),J(),()=>{o&&l.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=G)}},[u,g,o,l]),i.useEffect(()=>()=>{u&&(l.layers.delete(u),l.layersWithOutsidePointerEventsDisabled.delete(u),J())},[u,l]),i.useEffect(()=>{const f=()=>v({});return document.addEventListener(M,f),()=>document.removeEventListener(M,f)},[]),s.jsx(E.div,{...p,ref:A,style:{pointerEvents:ve?B?"auto":"none":void 0,...e.style},onFocusCapture:h(e.onFocusCapture,U.onFocusCapture),onBlurCapture:h(e.onBlurCapture,U.onBlurCapture),onPointerDownCapture:h(e.onPointerDownCapture,he.onPointerDownCapture)})});V.displayName=we;var Me="DismissableLayerBranch",Fe=i.forwardRef((e,t)=>{const o=i.useContext(q),r=i.useRef(null),n=P(t,r);return i.useEffect(()=>{const a=r.current;if(a)return o.branches.add(a),()=>{o.branches.delete(a)}},[o.branches]),s.jsx(E.div,{...e,ref:n})});Fe.displayName=Me;function Le(e,t=globalThis==null?void 0:globalThis.document){const o=H(e),r=i.useRef(!1),n=i.useRef(()=>{});return i.useEffect(()=>{const a=c=>{if(c.target&&!r.current){let p=function(){Y(Se,o,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",n.current),n.current=p,t.addEventListener("click",n.current,{once:!0})):p()}else t.removeEventListener("click",n.current);r.current=!1},d=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(d),t.removeEventListener("pointerdown",a),t.removeEventListener("click",n.current)}},[t,o]),{onPointerDownCapture:()=>r.current=!0}}function We(e,t=globalThis==null?void 0:globalThis.document){const o=H(e),r=i.useRef(!1);return i.useEffect(()=>{const n=a=>{a.target&&!r.current&&Y(je,o,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,o]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function J(){const e=new CustomEvent(M);document.dispatchEvent(e)}function Y(e,t,o,{discrete:r}){const n=o.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:o});t&&n.addEventListener(e,t,{once:!0}),r?Pe(n,a):n.dispatchEvent(a)}function ke(e,t){return i.useReducer((o,r)=>t[o][r]??o,e)}var O=e=>{const{present:t,children:o}=e,r=Be(t),n=typeof o=="function"?o({present:r.isPresent}):i.Children.only(o),a=P(r.ref,Ue(n));return typeof o=="function"||r.isPresent?i.cloneElement(n,{ref:a}):null};O.displayName="Presence";function Be(e){const[t,o]=i.useState(),r=i.useRef(null),n=i.useRef(e),a=i.useRef("none"),d=e?"mounted":"unmounted",[c,p]=ke(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const l=x(r.current);a.current=c==="mounted"?l:"none"},[c]),X(()=>{const l=r.current,u=n.current;if(u!==e){const g=a.current,v=x(l);e?p("MOUNT"):v==="none"||(l==null?void 0:l.display)==="none"?p("UNMOUNT"):p(u&&g!==v?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,p]),X(()=>{if(t){let l;const u=t.ownerDocument.defaultView??window,D=v=>{const N=x(r.current).includes(v.animationName);if(v.target===t&&N&&(p("ANIMATION_END"),!n.current)){const I=t.style.animationFillMode;t.style.animationFillMode="forwards",l=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=I)})}},g=v=>{v.target===t&&(a.current=x(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",D),t.addEventListener("animationend",D),()=>{u.clearTimeout(l),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",D),t.removeEventListener("animationend",D)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:i.useCallback(l=>{r.current=l?getComputedStyle(l):null,o(l)},[])}}function x(e){return(e==null?void 0:e.animationName)||"none"}function Ue(e){var r,n;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var j=0;function $e(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??z()),document.body.insertAdjacentElement("beforeend",e[1]??z()),j++,()=>{j===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),j--}},[])}function z(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var T="Dialog",[K,Mt]=ye(T),[Xe,m]=K(T),Z=e=>{const{__scopeDialog:t,children:o,open:r,defaultOpen:n,onOpenChange:a,modal:d=!0}=e,c=i.useRef(null),p=i.useRef(null),[l,u]=Ee({prop:r,defaultProp:n??!1,onChange:a,caller:T});return s.jsx(Xe,{scope:t,triggerRef:c,contentRef:p,contentId:S(),titleId:S(),descriptionId:S(),open:l,onOpenChange:u,onOpenToggle:i.useCallback(()=>u(D=>!D),[u]),modal:d,children:o})};Z.displayName=T;var Q="DialogTrigger",ee=i.forwardRef((e,t)=>{const{__scopeDialog:o,...r}=e,n=m(Q,o),a=P(t,n.triggerRef);return s.jsx(E.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":W(n.open),...r,ref:a,onClick:h(e.onClick,n.onOpenToggle)})});ee.displayName=Q;var F="DialogPortal",[Ge,te]=K(F,{forceMount:void 0}),ne=e=>{const{__scopeDialog:t,forceMount:o,children:r,container:n}=e,a=m(F,t);return s.jsx(Ge,{scope:t,forceMount:o,children:i.Children.map(r,d=>s.jsx(O,{present:o||a.open,children:s.jsx(Ne,{asChild:!0,container:n,children:d})}))})};ne.displayName=F;var R="DialogOverlay",oe=i.forwardRef((e,t)=>{const o=te(R,e.__scopeDialog),{forceMount:r=o.forceMount,...n}=e,a=m(R,e.__scopeDialog);return a.modal?s.jsx(O,{present:r||a.open,children:s.jsx(ze,{...n,ref:t})}):null});oe.displayName=R;var Je=Oe("DialogOverlay.RemoveScroll"),ze=i.forwardRef((e,t)=>{const{__scopeDialog:o,...r}=e,n=m(R,o);return s.jsx(xe,{as:Je,allowPinchZoom:!0,shards:[n.contentRef],children:s.jsx(E.div,{"data-state":W(n.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),y="DialogContent",re=i.forwardRef((e,t)=>{const o=te(y,e.__scopeDialog),{forceMount:r=o.forceMount,...n}=e,a=m(y,e.__scopeDialog);return s.jsx(O,{present:r||a.open,children:a.modal?s.jsx(He,{...n,ref:t}):s.jsx(qe,{...n,ref:t})})});re.displayName=y;var He=i.forwardRef((e,t)=>{const o=m(y,e.__scopeDialog),r=i.useRef(null),n=P(t,o.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return _e(a)},[]),s.jsx(ae,{...e,ref:n,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,a=>{var d;a.preventDefault(),(d=o.triggerRef.current)==null||d.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,a=>{const d=a.detail.originalEvent,c=d.button===0&&d.ctrlKey===!0;(d.button===2||c)&&a.preventDefault()}),onFocusOutside:h(e.onFocusOutside,a=>a.preventDefault())})}),qe=i.forwardRef((e,t)=>{const o=m(y,e.__scopeDialog),r=i.useRef(!1),n=i.useRef(!1);return s.jsx(ae,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var d,c;(d=e.onCloseAutoFocus)==null||d.call(e,a),a.defaultPrevented||(r.current||(c=o.triggerRef.current)==null||c.focus(),a.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:a=>{var p,l;(p=e.onInteractOutside)==null||p.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const d=a.target;((l=o.triggerRef.current)==null?void 0:l.contains(d))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&n.current&&a.preventDefault()}})}),ae=i.forwardRef((e,t)=>{const{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:a,...d}=e,c=m(y,o),p=i.useRef(null),l=P(t,p);return $e(),s.jsxs(s.Fragment,{children:[s.jsx(Re,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:a,children:s.jsx(V,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":W(c.open),...d,ref:l,onDismiss:()=>c.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(Ve,{titleId:c.titleId}),s.jsx(Ke,{contentRef:p,descriptionId:c.descriptionId})]})]})}),L="DialogTitle",ie=i.forwardRef((e,t)=>{const{__scopeDialog:o,...r}=e,n=m(L,o);return s.jsx(E.h2,{id:n.titleId,...r,ref:t})});ie.displayName=L;var se="DialogDescription",le=i.forwardRef((e,t)=>{const{__scopeDialog:o,...r}=e,n=m(se,o);return s.jsx(E.p,{id:n.descriptionId,...r,ref:t})});le.displayName=se;var ce="DialogClose",de=i.forwardRef((e,t)=>{const{__scopeDialog:o,...r}=e,n=m(ce,o);return s.jsx(E.button,{type:"button",...r,ref:t,onClick:h(e.onClick,()=>n.onOpenChange(!1))})});de.displayName=ce;function W(e){return e?"open":"closed"}var ue="DialogTitleWarning",[Ft,pe]=Ce(ue,{contentName:y,titleName:L,docsSlug:"dialog"}),Ve=({titleId:e})=>{const t=pe(ue),o=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},Ye="DialogDescriptionWarning",Ke=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${pe(Ye).contentName}}.`;return i.useEffect(()=>{var a;const n=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&n&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Ze=Z,Qe=ee,et=ne,tt=oe,nt=re,ot=ie,rt=le,fe=de;const at="_dialogOverlay_3pnjw_1",it="_dialogContent_3pnjw_9",st="_dialogClose_3pnjw_29",lt="_dialogHeader_3pnjw_52",ct="_dialogFooter_3pnjw_64",dt="_dialogTitle_3pnjw_76",ut="_dialogDescription_3pnjw_82",C={dialogOverlay:at,dialogContent:it,dialogClose:st,dialogHeader:lt,dialogFooter:ct,dialogTitle:dt,dialogDescription:ut};function pt(e){return s.jsx(Ze,{"data-slot":"dialog",...e})}function ft(e){return s.jsx(Qe,{"data-slot":"dialog-trigger",...e})}function ge(e){const t=Ae();return s.jsx(et,{"data-slot":"dialog-portal",container:t??void 0,...e})}function gt(e){return s.jsx(fe,{"data-slot":"dialog-close",...e})}function me({className:e,...t}){return s.jsx(tt,{"data-slot":"dialog-overlay",className:b(C.dialogOverlay,e),...t})}function mt({className:e,children:t,showCloseButton:o=!0,...r}){return s.jsxs(ge,{children:[s.jsx(me,{}),s.jsxs(nt,{"data-slot":"dialog-content",className:b(C.dialogContent,e),...r,children:[t,o&&s.jsx(fe,{"data-slot":"dialog-close",className:C.dialogClose,asChild:!0,children:s.jsx(Te,{variant:"ghost",size:"icon",children:s.jsx(Ie,{})})})]})]})}function Dt({className:e,...t}){return s.jsx("div",{"data-slot":"dialog-header",className:b(C.dialogHeader,e),...t})}function vt({className:e,...t}){return s.jsx("div",{"data-slot":"dialog-footer",className:b(C.dialogFooter,e),...t})}function ht({className:e,...t}){return s.jsx(ot,{"data-slot":"dialog-title",className:b(C.dialogTitle,e),...t})}function yt({className:e,...t}){return s.jsx(rt,{"data-slot":"dialog-description",className:b(C.dialogDescription,e),...t})}pt.__docgenInfo={description:`Root component for the dialog system.

Provides context and accessibility bindings for modal behavior. Must wrap the \`DialogTrigger\` and \`DialogContent\`.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Root>} props - Props passed to Radix's \`Dialog.Root\`.
@returns {JSX.Element}

@example
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Modal content</DialogContent>
</Dialog>`,methods:[],displayName:"Dialog"};gt.__docgenInfo={description:`A close button or element that dismisses the dialog when clicked.

Often used in header or corner positions inside \`DialogContent\`.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Close>} props - Close button props.
@returns {JSX.Element}`,methods:[],displayName:"DialogClose"};mt.__docgenInfo={description:`The main dialog container that appears when open.

Includes optional close button and manages focus trapping, ARIA roles, and layout styling.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}} props
@param {boolean} [props.showCloseButton=true] - Whether to show the top-right close icon button.
@param {string} [props.className] - Optional additional class names.
@returns {JSX.Element}

@example
<DialogContent>
  <DialogHeader>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
  </DialogHeader>
  <p>Body content here.</p>
  <DialogFooter>
    <button>Cancel</button>
    <button>Confirm</button>
  </DialogFooter>
</DialogContent>`,methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};yt.__docgenInfo={description:`Accessible description element for the dialog.

Should provide supplemental guidance or context. Automatically linked via ARIA.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Description>} props - Description props.
@returns {JSX.Element}`,methods:[],displayName:"DialogDescription"};vt.__docgenInfo={description:`A layout container for footer content (e.g. buttons).

Typically placed at the bottom of \`DialogContent\`.

@component
@param {React.ComponentProps<"div">} props - Standard div props.
@returns {JSX.Element}`,methods:[],displayName:"DialogFooter"};Dt.__docgenInfo={description:`A layout container for dialog titles and descriptions.

Typically placed at the top of \`DialogContent\`.

@component
@param {React.ComponentProps<"div">} props - Standard div props.
@returns {JSX.Element}`,methods:[],displayName:"DialogHeader"};me.__docgenInfo={description:`The semi-transparent overlay behind the dialog content.

Adds backdrop styling and disables background interactions.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Overlay>} props - Overlay props.
@returns {JSX.Element}`,methods:[],displayName:"DialogOverlay"};ge.__docgenInfo={description:`Mounts the dialog content outside of the regular DOM hierarchy.

Useful for positioning and stacking modals correctly above the page content.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Portal>} props - Portal props.
@returns {JSX.Element}`,methods:[],displayName:"DialogPortal"};ht.__docgenInfo={description:`Accessible title element for the dialog.

Should describe the purpose of the dialog. Automatically linked via ARIA.

@component
@param {React.ComponentProps<typeof DialogPrimitive.Title>} props - Title props.
@returns {JSX.Element}`,methods:[],displayName:"DialogTitle"};ft.__docgenInfo={description:`Element that triggers the dialog to open when interacted with (e.g. clicked).

@component
@param {React.ComponentProps<typeof DialogPrimitive.Trigger>} props - Trigger props.
@returns {JSX.Element}

@example
<DialogTrigger>
  <button>Open Dialog</button>
</DialogTrigger>`,methods:[],displayName:"DialogTrigger"};export{pt as D,ft as a,mt as b,Dt as c,ht as d,yt as e,vt as f,gt as g};

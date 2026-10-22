import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{B as W}from"./index-D9Woksp6.js";import{c as y}from"./clsx-DegBVMCo.js";import{U as ke}from"./upload-Cld5TdAo.js";import{c as Me}from"./createLucideIcon-Bl20gA7w.js";import{X as Re}from"./x-BPa992hr.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ae=Me("file-text",$e);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],Ve=Me("file",Be);function Ce(n){const r=["Bytes","KB","MB","GB","TB"];if(n===0)return"n/a";const t=Math.floor(Math.log(n)/Math.log(1024));return t===0?n+" "+r[t]:(n/Math.pow(1024,t)).toFixed(1)+" "+r[t]}const qe=["jpg","jpeg","png","gif","webp"],Oe=["mp4","mov","avi","wmv","flv","mkv"];function Xe(n){var t;const r=(t=n.split(".").pop())==null?void 0:t.toLowerCase();return qe.includes(r)?"IMAGE":Oe.includes(r)?"VIDEO":void 0}const Te=c.createContext(null);function S(){const n=c.useContext(Te);if(!n)throw new Error("FileUpload sub-components must be used inside <FileUpload>");return n}const Je="_root_a3n5x_1",We="_hiddenInput_a3n5x_12",He="_srOnly_a3n5x_14",Ge="_dropzone_a3n5x_26",Qe="_dropzoneContent_a3n5x_66",Ye="_dropzoneIcon_a3n5x_74",Ze="_dropzoneTitle_a3n5x_80",Ke="_trigger_a3n5x_84",et="_list_a3n5x_118",tt="_item_a3n5x_130",nt="_itemPreview_a3n5x_146",rt="_itemPreviewImage_a3n5x_158",ot="_itemPreviewIcon_a3n5x_164",at="_itemMetadata_a3n5x_170",lt="_itemName_a3n5x_177",st="_itemSize_a3n5x_184",it="_itemError_a3n5x_188",dt="_itemProgress_a3n5x_192",ct="_itemProgressFill_a3n5x_201",pt="_itemDelete_a3n5x_211",mt="_itemDeleteIcon_a3n5x_243",ut="_clear_a3n5x_248",p={root:Je,hiddenInput:We,srOnly:He,dropzone:Ge,dropzoneContent:Qe,dropzoneIcon:Ye,dropzoneTitle:Ze,trigger:Ke,list:et,item:tt,itemPreview:nt,itemPreviewImage:rt,itemPreviewIcon:ot,itemMetadata:at,itemName:lt,itemSize:st,itemError:it,itemProgress:dt,itemProgressFill:ct,itemDelete:pt,itemDeleteIcon:mt,clear:ut};function se(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`}function ft(n,r){if(!r)return!0;const t=r.split(",").map(a=>a.trim().toLowerCase()),o=n.name.toLowerCase(),l=n.type.toLowerCase();return t.some(a=>{if(!a)return!1;if(a.startsWith("."))return o.endsWith(a);if(a.endsWith("/*")){const i=a.slice(0,-1);return l.startsWith(i)}return l===a})}const w=({id:n,value:r,defaultValue:t,onValueChange:o,onUpload:l,onFileValidate:a,onFileReject:i,accept:u,maxSize:g,maxFiles:h,multiple:v=!1,disabled:f=!1,className:ee,children:te,...ne})=>{const E=c.useId(),I=n??`file-upload-${E}`,R=c.useRef(null),$=r!==void 0,[re,oe]=c.useState(""),[ae,L]=c.useState(""),[s,j]=c.useState(()=>(t??[]).map(m=>({id:se(),file:m,progress:0,status:"idle"})));c.useEffect(()=>{$&&j(m=>{const d=[];for(const F of r){const b=m.find(A=>A.file===F);b?d.push(b):d.push({id:se(),file:F,progress:0,status:"idle"})}return d})},[$,r]);const M=c.useCallback(m=>{o==null||o(m.map(d=>d.file))},[o]),ie=c.useCallback((m,d)=>{if(!ft(m,u))return`File type not accepted. Allowed: ${u}`;if(g!==void 0&&m.size>g)return`File exceeds max size of ${Ce(g)}`;if(h!==void 0&&d>=h)return`Maximum of ${h} file${h===1?"":"s"} allowed`;if(a){const F=a(m);if(F)return F}return null},[u,g,h,a]),C=c.useCallback((m,d)=>{j(F=>F.map(b=>b.id===m?{...b,...d}:b))},[]),le=c.useCallback(m=>{if(f)return;const d=[],F=[];let b=s.length;for(const T of m){const N=ie(T,b);if(N){i==null||i(T,N),F.push(`${T.name}: ${N}`);continue}if(d.push({id:se(),file:T,progress:0,status:"idle"}),b+=1,!v)break}if(F.length>0&&L(F.join(". ")),d.length===0)return;const A=v?[...s,...d]:d.slice(0,1);if(j(A),M(A),l){const T=d.map(x=>x.file);d.forEach(x=>C(x.id,{status:"uploading",progress:0}));const N=x=>{var U;return(U=d.find(_=>_.file===x))==null?void 0:U.id};Promise.resolve(l(T,{onProgress:(x,U)=>{const _=N(x);_&&C(_,{progress:Math.max(0,Math.min(100,U))})},onSuccess:x=>{const U=N(x);U&&(C(U,{status:"success",progress:100}),oe(`${x.name} enviado`))},onError:(x,U)=>{const _=N(x);_&&(C(_,{status:"error",error:U}),L(`${x.name}: ${U}`))}})).catch(x=>{const U=x instanceof Error?x.message:"Falha no envio";d.forEach(_=>C(_.id,{status:"error",error:U})),L(U)})}},[f,s,ie,i,v,l,M,C]),de=c.useCallback(m=>{const d=s.filter(F=>F.id!==m);j(d),M(d)},[s,M]),ce=c.useCallback(()=>{j([]),M([])},[M]),pe=c.useCallback(()=>{var m;f||(m=R.current)==null||m.click()},[f]),me=s.some(m=>m.status==="error"),Ee=c.useMemo(()=>({files:s,inputId:I,multiple:v,disabled:f,accept:u,maxSize:g,maxFiles:h,invalid:me,openFileDialog:pe,addFiles:le,removeFile:de,clearFiles:ce}),[s,I,v,f,u,g,h,me,pe,le,de,ce]),Le=m=>{const d=m.target.files;!d||d.length===0||(le(Array.from(d)),m.target.value="")};return e.jsx(Te.Provider,{value:Ee,children:e.jsxs("div",{className:y(p.root,ee),"data-slot":"file-upload","data-disabled":f?"":void 0,...ne,children:[e.jsx("input",{ref:R,id:I,type:"file",className:p.hiddenInput,accept:u,multiple:v,disabled:f,onChange:Le,tabIndex:-1,"aria-hidden":"true"}),te,e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:p.srOnly,"data-slot":"file-upload-status",children:re}),e.jsx("div",{role:"alert","aria-live":"assertive","aria-atomic":"true",className:p.srOnly,"data-slot":"file-upload-alert",children:ae})]})})};w.displayName="FileUpload";const D=({className:n,children:r,onClick:t,onKeyDown:o,onDragEnter:l,onDragLeave:a,onDragOver:i,onDrop:u,...g})=>{const{addFiles:h,openFileDialog:v,disabled:f,invalid:ee,multiple:te}=S(),[ne,E]=c.useState(!1),I=c.useRef(0),R=s=>{t==null||t(s),!s.defaultPrevented&&v()},$=s=>{o==null||o(s),!s.defaultPrevented&&(f||(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),v()))},re=s=>{l==null||l(s),!f&&(s.preventDefault(),I.current+=1,s.dataTransfer.types.includes("Files")&&E(!0))},oe=s=>{a==null||a(s),!f&&(I.current=Math.max(0,I.current-1),I.current===0&&E(!1))},ae=s=>{i==null||i(s),!f&&s.preventDefault()},L=s=>{if(u==null||u(s),f)return;s.preventDefault(),I.current=0,E(!1);const j=Array.from(s.dataTransfer.files);j.length!==0&&h(te?j:j.slice(0,1))};return e.jsx("div",{role:"button",tabIndex:f?-1:0,"data-slot":"file-upload-dropzone","data-disabled":f?"":void 0,"data-dragging":ne?"":void 0,"data-invalid":ee?"":void 0,"aria-disabled":f||void 0,className:y(p.dropzone,n),onClick:R,onKeyDown:$,onDragEnter:re,onDragLeave:oe,onDragOver:ae,onDrop:L,...g,children:r??e.jsxs("div",{className:p.dropzoneContent,children:[e.jsx(ke,{className:p.dropzoneIcon,"aria-hidden":"true"}),e.jsx(W,{variant:"small_body_medium",className:p.dropzoneTitle,children:"Drag files here or click to browse"})]})})};D.displayName="FileUploadDropzone";const k=({children:n,className:r,onClick:t,disabled:o,...l})=>{const{openFileDialog:a,disabled:i}=S(),u=o||i,g=h=>{t==null||t(h),!h.defaultPrevented&&a()};return e.jsx("button",{type:"button","data-slot":"file-upload-trigger","data-disabled":u?"":void 0,disabled:u,className:y(p.trigger,r),onClick:g,...l,children:n??"Browse files"})};k.displayName="FileUploadTrigger";const P=({className:n,orientation:r="vertical",children:t,...o})=>{const{files:l}=S(),a=l.length>0;return!a&&!t?null:e.jsx("div",{"data-slot":"file-upload-list","data-orientation":r,"data-state":a?"active":"inactive",className:y(p.list,n),...o,children:t??l.map(i=>e.jsxs(G,{value:i.file,children:[e.jsx(Q,{}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(K,{})]},i.id))})};P.displayName="FileUploadList";const Se=c.createContext(null);function H(){const n=c.useContext(Se);if(!n)throw new Error("FileUploadItem sub-components must be used inside <FileUploadItem>");return n}const G=c.forwardRef(({value:n,className:r,children:t,...o},l)=>{const{files:a}=S(),i=a.find(u=>u.file===n);return i?e.jsx(Se.Provider,{value:{item:i},children:e.jsx("div",{ref:l,"data-slot":"file-upload-item","data-status":i.status,className:y(p.item,r),...o,children:t})}):null});G.displayName="FileUploadItem";const Q=({className:n,...r})=>{const{item:t}=H(),o=Xe(t.file.name),[l,a]=c.useState(null);return c.useEffect(()=>{if(o!=="IMAGE"){a(null);return}const i=URL.createObjectURL(t.file);return a(i),()=>URL.revokeObjectURL(i)},[t.file,o]),e.jsx("div",{"data-slot":"file-upload-item-preview",className:y(p.itemPreview,n),...r,children:o==="IMAGE"&&l?e.jsx("img",{src:l,alt:t.file.name,className:p.itemPreviewImage}):o==="VIDEO"?e.jsx(Ve,{className:p.itemPreviewIcon,"aria-hidden":"true"}):e.jsx(Ae,{className:p.itemPreviewIcon,"aria-hidden":"true"})})};Q.displayName="FileUploadItemPreview";const Y=({className:n,...r})=>{const{item:t}=H();return e.jsxs("div",{"data-slot":"file-upload-item-metadata",className:y(p.itemMetadata,n),...r,children:[e.jsx(W,{variant:"small_body_medium",className:p.itemName,children:t.file.name}),e.jsx(W,{variant:"caption",className:p.itemSize,children:Ce(t.file.size)}),t.error&&e.jsx(W,{variant:"caption",className:p.itemError,children:t.error})]})};Y.displayName="FileUploadItemMetadata";const Z=({className:n,...r})=>{const{item:t}=H();return t.status==="idle"||t.status==="error"?null:e.jsx("div",{"data-slot":"file-upload-item-progress","data-state":t.status,className:y(p.itemProgress,n),role:"progressbar","aria-label":`Progresso do envio de ${t.file.name}`,"aria-valuenow":t.progress,"aria-valuemin":0,"aria-valuemax":100,...r,children:e.jsx("div",{className:p.itemProgressFill,style:{width:`${t.progress}%`}})})};Z.displayName="FileUploadItemProgress";const K=({children:n,className:r,onClick:t,disabled:o,...l})=>{const{item:a}=H(),{removeFile:i,disabled:u}=S(),g=o||u,h=v=>{t==null||t(v),!v.defaultPrevented&&i(a.id)};return e.jsx("button",{type:"button","data-slot":"file-upload-item-delete","data-disabled":g?"":void 0,disabled:g,"aria-label":`Remove ${a.file.name}`,className:y(p.itemDelete,r),onClick:h,...l,children:n??e.jsx(Re,{className:p.itemDeleteIcon,"aria-hidden":"true"})})};K.displayName="FileUploadItemDelete";const z=({children:n,className:r,onClick:t,disabled:o,...l})=>{const{clearFiles:a,disabled:i,files:u}=S(),g=o||i||u.length===0,h=v=>{t==null||t(v),!v.defaultPrevented&&a()};return e.jsx("button",{type:"button","data-slot":"file-upload-clear","data-disabled":g?"":void 0,disabled:g,className:y(p.clear,r),onClick:h,...l,children:n??"Clear all"})};z.displayName="FileUploadClear";w.__docgenInfo={description:'Root of the FileUpload compound component.\n\nOwns the file list state (controlled via `value`/`onValueChange` or uncontrolled via\n`defaultValue`), runs the validation pipeline (`accept`, `maxSize`, `maxFiles`,\n`onFileValidate`), and provides context to all sub-components.\n\nWhen `onUpload` is supplied, accepted files trigger an upload pass with progress,\nsuccess, and error callbacks that update item state in place.\n\n@component\n@param {FileUploadProps} props - Props for the root.\n@returns {JSX.Element} The compound provider plus a hidden native `<input type="file">`.\n\n@example\n<FileUpload accept="image/*" maxSize={5 * 1024 * 1024} multiple>\n  <FileUploadDropzone>Drop files here</FileUploadDropzone>\n  <FileUploadTrigger>Browse</FileUploadTrigger>\n  <FileUploadList />\n</FileUpload>',methods:[],displayName:"FileUpload",props:{multiple:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};D.__docgenInfo={description:`Drag-and-drop surface for the FileUpload.

Listens to native HTML5 drag events and forwards valid drops to the root.
Acts as a focusable button: pressing \`Enter\` or \`Space\` opens the native picker.
Exposes \`data-disabled\`, \`data-dragging\`, and \`data-invalid\` for styling.

@component
@param {FileUploadDropzoneProps} props - Props for the dropzone.
@returns {JSX.Element} The drop surface.

@example
<FileUploadDropzone>Drag files here or click to browse</FileUploadDropzone>`,methods:[],displayName:"FileUploadDropzone"};k.__docgenInfo={description:`Button that opens the native file picker.

Inherits \`disabled\` from the root. Forwards arbitrary button props so consumers
can swap in their own styling via \`className\` while keeping behavior.

@component
@param {FileUploadTriggerProps} props - Props for the trigger button.
@returns {JSX.Element} A \`<button>\` element.

@example
<FileUploadTrigger>Choose files</FileUploadTrigger>`,methods:[],displayName:"FileUploadTrigger"};P.__docgenInfo={description:`Container for selected file items.

If no \`children\` are provided, automatically renders a default \`FileUploadItem\`
(with preview, metadata, progress, and delete) for each file in context. Pass
children to fully control the rendering.

@component
@param {FileUploadListProps} props - Props for the list container.
@returns {JSX.Element | null} The list, or \`null\` when no files are present and no children are passed.

@example
<FileUploadList />

@example
<FileUploadList>
  {files.map((file) => (
    <FileUploadItem key={file.name} value={file}>
      <FileUploadItemPreview />
      <FileUploadItemMetadata />
      <FileUploadItemProgress />
      <FileUploadItemDelete />
    </FileUploadItem>
  ))}
</FileUploadList>`,methods:[],displayName:"FileUploadList",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};G.__docgenInfo={description:`Single file row.

Looks up the matching \`FileWithState\` from context by reference equality and
provides it to its descendants (preview, metadata, progress, delete).

@component
@param {FileUploadItemProps} props - Props; \`value\` must reference a \`File\` currently in the list.
@returns {JSX.Element | null} The item row, or \`null\` if the file is no longer present.

@example
<FileUploadItem value={file}>
  <FileUploadItemPreview />
  <FileUploadItemMetadata />
  <FileUploadItemDelete />
</FileUploadItem>`,methods:[],displayName:"FileUploadItem",props:{value:{required:!0,tsType:{name:"File"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};Q.__docgenInfo={description:`Renders an image thumbnail for image files or a file-type icon otherwise.

Image previews use \`URL.createObjectURL\` and revoke the URL on unmount to avoid leaks.

@component
@returns {JSX.Element} A thumbnail or icon for the current item's file.`,methods:[],displayName:"FileUploadItemPreview"};Y.__docgenInfo={description:`Displays the file name, human-readable size, and any per-item error.

Uses \`convertBytesToReadable\` for the size string and the \`Body\` typography
component for consistent styling.

@component
@returns {JSX.Element} The metadata block for the current item.`,methods:[],displayName:"FileUploadItemMetadata"};Z.__docgenInfo={description:'Linear progress bar for the current item.\n\nRenders only while `status === "uploading"` (or `status === "success"` with\n`progress === 100`), driven by the values reported through the root\'s\n`onUpload` helpers.\n\n@component\n@returns {JSX.Element | null} The progress bar, or `null` when the item is idle or errored.',methods:[],displayName:"FileUploadItemProgress"};K.__docgenInfo={description:`Button that removes the current item from the list.

@component
@param {FileUploadItemDeleteProps} props - Props for the delete button.
@returns {JSX.Element} A \`<button>\` element with an \`X\` icon by default.

@example
<FileUploadItemDelete aria-label="Remove file" />`,methods:[],displayName:"FileUploadItemDelete"};z.__docgenInfo={description:`Button that clears every file from the list.

Disabled automatically when the list is empty or the root is disabled.

@component
@param {FileUploadClearProps} props - Props for the clear button.
@returns {JSX.Element} A \`<button>\` element.

@example
<FileUploadClear>Remove all</FileUploadClear>`,methods:[],displayName:"FileUploadClear"};const It={title:"Components/inputs/FileUpload",component:w,tags:["autodocs"],argTypes:{id:{control:{type:"text"},description:"Identificador único do input de arquivo"},accept:{control:{type:"text"},description:"Tipos de arquivo aceitos (formato HTML `accept`)"},maxSize:{control:{type:"number"},description:"Tamanho máximo por arquivo em bytes"},maxFiles:{control:{type:"number"},description:"Número máximo de arquivos permitidos na lista"},multiple:{control:{type:"boolean"},description:"Permite seleção de múltiplos arquivos"},disabled:{control:{type:"boolean"},description:"Desabilita a interação com o componente"}}},B={args:{multiple:!0},render:n=>e.jsxs(w,{...n,children:[e.jsx(D,{}),e.jsx(k,{}),e.jsx(P,{}),e.jsx(z,{})]})},V={args:{multiple:!0,maxFiles:5},render:n=>e.jsxs(w,{...n,children:[e.jsx(D,{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("strong",{children:"Drop up to 5 files here"}),e.jsx("p",{style:{color:"var(--color-text-600)",marginTop:4},children:"or click to browse"})]})}),e.jsx(P,{}),e.jsx(z,{})]})},q={render:()=>{const n=()=>{const[r,t]=c.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(w,{multiple:!0,accept:"image/*",maxSize:2097152,onFileValidate:o=>o.name.toLowerCase().includes("test")?"Filenames containing 'test' are not allowed":null,onFileReject:(o,l)=>t(a=>[...a,`${o.name}: ${l}`]),children:[e.jsx(D,{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("strong",{children:"Images only, max 2 MB each"}),e.jsx("p",{style:{color:"var(--color-text-600)",marginTop:4},children:'Filenames with "test" will be rejected'})]})}),e.jsx(P,{}),e.jsx(z,{})]}),r.length>0&&e.jsxs("div",{style:{padding:12,borderRadius:6,border:"1px solid var(--color-alert-error-500)",background:"var(--color-background-100)"},children:[e.jsx("strong",{style:{color:"var(--color-alert-error-500)"},children:"Rejected files"}),e.jsx("ul",{style:{margin:"8px 0 0",paddingLeft:18},children:r.map((o,l)=>e.jsx("li",{children:o},l))})]})]})};return e.jsx(n,{})}},O={render:()=>e.jsxs(w,{multiple:!0,onUpload:async(n,{onProgress:r,onSuccess:t})=>{await Promise.all(n.map(o=>new Promise(l=>{let a=0;const i=setInterval(()=>{a+=10,r(o,a),a>=100&&(clearInterval(i),t(o),l())},200)})))},children:[e.jsx(D,{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("strong",{children:"Drop files to simulate upload"}),e.jsx("p",{style:{color:"var(--color-text-600)",marginTop:4},children:"Each file fills 0–100% over ~2s"})]})}),e.jsx(P,{}),e.jsx(z,{})]})},X={args:{disabled:!0,multiple:!0},render:n=>e.jsxs(w,{...n,children:[e.jsx(D,{}),e.jsx(k,{}),e.jsx(P,{})]})},J={render:()=>{const n=()=>{const[r,t]=c.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(w,{multiple:!0,value:r,onValueChange:t,children:[e.jsx(D,{}),e.jsx(k,{}),e.jsx(P,{children:r.map(o=>e.jsxs(G,{value:o,children:[e.jsx(Q,{}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(K,{})]},`${o.name}-${o.size}`))}),e.jsx(z,{})]}),e.jsxs("p",{style:{color:"var(--color-text-600)"},children:["Current value: ",r.length," file",r.length===1?"":"s"]})]})};return e.jsx(n,{})}};var ue,fe,ge;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => <FileUpload {...args}>
      <FileUploadDropzone />
      <FileUploadTrigger />
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
}`,...(ge=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,xe,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    multiple: true,
    maxFiles: 5
  },
  render: args => <FileUpload {...args}>
      <FileUploadDropzone>
        <div style={{
        textAlign: "center"
      }}>
          <strong>Drop up to 5 files here</strong>
          <p style={{
          color: "var(--color-text-600)",
          marginTop: 4
        }}>
            or click to browse
          </p>
        </div>
      </FileUploadDropzone>
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
}`,...(ve=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Fe,Ue,ye;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const ValidationDemo = () => {
      const [rejections, setRejections] = useState<string[]>([]);
      return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>
          <FileUpload multiple accept="image/*" maxSize={2 * 1024 * 1024} onFileValidate={file => file.name.toLowerCase().includes("test") ? "Filenames containing 'test' are not allowed" : null} onFileReject={(file, message) => setRejections(prev => [...prev, \`\${file.name}: \${message}\`])}>
            <FileUploadDropzone>
              <div style={{
              textAlign: "center"
            }}>
                <strong>Images only, max 2 MB each</strong>
                <p style={{
                color: "var(--color-text-600)",
                marginTop: 4
              }}>
                  Filenames with &quot;test&quot; will be rejected
                </p>
              </div>
            </FileUploadDropzone>
            <FileUploadList />
            <FileUploadClear />
          </FileUpload>

          {rejections.length > 0 && <div style={{
          padding: 12,
          borderRadius: 6,
          border: "1px solid var(--color-alert-error-500)",
          background: "var(--color-background-100)"
        }}>
              <strong style={{
            color: "var(--color-alert-error-500)"
          }}>
                Rejected files
              </strong>
              <ul style={{
            margin: "8px 0 0",
            paddingLeft: 18
          }}>
                {rejections.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>}
        </div>;
    };
    return <ValidationDemo />;
  }
}`,...(ye=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:ye.source}}};var Ie,je,be;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <FileUpload multiple onUpload={async (files, {
    onProgress,
    onSuccess
  }) => {
    await Promise.all(files.map(file => new Promise<void>(resolve => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        onProgress(file, progress);
        if (progress >= 100) {
          clearInterval(interval);
          onSuccess(file);
          resolve();
        }
      }, 200);
    })));
  }}>
      <FileUploadDropzone>
        <div style={{
        textAlign: "center"
      }}>
          <strong>Drop files to simulate upload</strong>
          <p style={{
          color: "var(--color-text-600)",
          marginTop: 4
        }}>
            Each file fills 0–100% over ~2s
          </p>
        </div>
      </FileUploadDropzone>
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
}`,...(be=(je=O.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var _e,we,De;X.parameters={...X.parameters,docs:{...(_e=X.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    disabled: true,
    multiple: true
  },
  render: args => <FileUpload {...args}>
      <FileUploadDropzone />
      <FileUploadTrigger />
      <FileUploadList />
    </FileUpload>
}`,...(De=(we=X.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Pe,Ne,ze;J.parameters={...J.parameters,docs:{...(Pe=J.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const ControlledDemo = () => {
      const [files, setFiles] = useState<File[]>([]);
      return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>
          <FileUpload multiple value={files} onValueChange={setFiles}>
            <FileUploadDropzone />
            <FileUploadTrigger />
            <FileUploadList>
              {files.map(file => <FileUploadItem key={\`\${file.name}-\${file.size}\`} value={file}>
                  <FileUploadItemPreview />
                  <FileUploadItemMetadata />
                  <FileUploadItemProgress />
                  <FileUploadItemDelete />
                </FileUploadItem>)}
            </FileUploadList>
            <FileUploadClear />
          </FileUpload>
          <p style={{
          color: "var(--color-text-600)"
        }}>
            Current value: {files.length} file{files.length === 1 ? "" : "s"}
          </p>
        </div>;
    };
    return <ControlledDemo />;
  }
}`,...(ze=(Ne=J.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};const jt=["Default","Multiple","WithValidation","WithDirectUpload","Disabled","Controlled"];export{J as Controlled,B as Default,X as Disabled,V as Multiple,O as WithDirectUpload,q as WithValidation,jt as __namedExportsOrder,It as default};

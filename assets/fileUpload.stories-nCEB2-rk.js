import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{B as O}from"./index-BlwL9mIg.js";import{c as I}from"./clsx-CNgb8Gju.js";import{U as Ce}from"./upload-HaXuwZko.js";import{c as we}from"./createLucideIcon-CRoqMwob.js";import{X as Me}from"./x-LE87PwJd.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Se=we("file-text",Ee);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],ke=we("file",Le);function De(n){const r=["Bytes","KB","MB","GB","TB"];if(n===0)return"n/a";const t=Math.floor(Math.log(n)/Math.log(1024));return t===0?n+" "+r[t]:(n/Math.pow(1024,t)).toFixed(1)+" "+r[t]}const Re=["jpg","jpeg","png","gif","webp"],Ae=["mp4","mov","avi","wmv","flv","mkv"];function Be(n){const r=n.split(".").pop();return Re.includes(r)?"IMAGE":Ae.includes(r)?"VIDEO":void 0}const Pe=c.createContext(null);function S(){const n=c.useContext(Pe);if(!n)throw new Error("FileUpload sub-components must be used inside <FileUpload>");return n}const $e="_root_125pi_1",Ve="_hiddenInput_125pi_12",qe="_dropzone_125pi_24",Xe="_dropzoneContent_125pi_64",Je="_dropzoneIcon_125pi_72",We="_dropzoneTitle_125pi_78",Oe="_trigger_125pi_82",He="_list_125pi_116",Ge="_item_125pi_128",Qe="_itemPreview_125pi_144",Ye="_itemPreviewImage_125pi_156",Ze="_itemPreviewIcon_125pi_162",Ke="_itemMetadata_125pi_168",et="_itemName_125pi_175",tt="_itemSize_125pi_182",nt="_itemError_125pi_186",rt="_itemProgress_125pi_190",ot="_itemProgressFill_125pi_199",lt="_itemDelete_125pi_209",it="_itemDeleteIcon_125pi_241",st="_clear_125pi_246",m={root:$e,hiddenInput:Ve,dropzone:qe,dropzoneContent:Xe,dropzoneIcon:Je,dropzoneTitle:We,trigger:Oe,list:He,item:Ge,itemPreview:Qe,itemPreviewImage:Ye,itemPreviewIcon:Ze,itemMetadata:Ke,itemName:et,itemSize:tt,itemError:nt,itemProgress:rt,itemProgressFill:ot,itemDelete:lt,itemDeleteIcon:it,clear:st};function re(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`}function at(n,r){if(!r)return!0;const t=r.split(",").map(l=>l.trim().toLowerCase()),o=n.name.toLowerCase(),i=n.type.toLowerCase();return t.some(l=>{if(!l)return!1;if(l.startsWith("."))return o.endsWith(l);if(l.endsWith("/*")){const s=l.slice(0,-1);return i.startsWith(s)}return i===l})}const w=({id:n,value:r,defaultValue:t,onValueChange:o,onUpload:i,onFileValidate:l,onFileReject:s,accept:u,maxSize:g,maxFiles:h,multiple:v=!1,disabled:f=!1,className:ee,children:te,...ne})=>{const L=c.useId(),j=n??`file-upload-${L}`,R=c.useRef(null),A=r!==void 0,[y,z]=c.useState(()=>(t??[]).map(p=>({id:re(),file:p,progress:0,status:"idle"})));c.useEffect(()=>{A&&z(p=>{const d=[];for(const F of r){const b=p.find(C=>C.file===F);b?d.push(b):d.push({id:re(),file:F,progress:0,status:"idle"})}return d})},[A,r]);const D=c.useCallback(p=>{o==null||o(p.map(d=>d.file))},[o]),B=c.useCallback((p,d)=>{if(!at(p,u))return`File type not accepted. Allowed: ${u}`;if(g!==void 0&&p.size>g)return`File exceeds max size of ${De(g)}`;if(h!==void 0&&d>=h)return`Maximum of ${h} file${h===1?"":"s"} allowed`;if(l){const F=l(p);if(F)return F}return null},[u,g,h,l]),a=c.useCallback((p,d)=>{z(F=>F.map(b=>b.id===p?{...b,...d}:b))},[]),T=c.useCallback(p=>{if(f)return;const d=[];let F=y.length;for(const C of p){const E=B(C,F);if(E){s==null||s(C,E);continue}if(d.push({id:re(),file:C,progress:0,status:"idle"}),F+=1,!v)break}if(d.length===0)return;const b=v?[...y,...d]:d.slice(0,1);if(z(b),D(b),i){const C=d.map(x=>x.file);d.forEach(x=>a(x.id,{status:"uploading",progress:0}));const E=x=>{var U;return(U=d.find(_=>_.file===x))==null?void 0:U.id};Promise.resolve(i(C,{onProgress:(x,U)=>{const _=E(x);_&&a(_,{progress:Math.max(0,Math.min(100,U))})},onSuccess:x=>{const U=E(x);U&&a(U,{status:"success",progress:100})},onError:(x,U)=>{const _=E(x);_&&a(_,{status:"error",error:U})}})).catch(x=>{const U=x instanceof Error?x.message:"Upload failed";d.forEach(_=>a(_.id,{status:"error",error:U}))})}},[f,y,B,s,v,i,D,a]),oe=c.useCallback(p=>{const d=y.filter(F=>F.id!==p);z(d),D(d)},[y,D]),le=c.useCallback(()=>{z([]),D([])},[D]),ie=c.useCallback(()=>{var p;f||(p=R.current)==null||p.click()},[f]),se=y.some(p=>p.status==="error"),ze=c.useMemo(()=>({files:y,inputId:j,multiple:v,disabled:f,accept:u,maxSize:g,maxFiles:h,invalid:se,openFileDialog:ie,addFiles:T,removeFile:oe,clearFiles:le}),[y,j,v,f,u,g,h,se,ie,T,oe,le]),Te=p=>{const d=p.target.files;!d||d.length===0||(T(Array.from(d)),p.target.value="")};return e.jsx(Pe.Provider,{value:ze,children:e.jsxs("div",{className:I(m.root,ee),"data-slot":"file-upload","data-disabled":f?"":void 0,...ne,children:[e.jsx("input",{ref:R,id:j,type:"file",className:m.hiddenInput,accept:u,multiple:v,disabled:f,onChange:Te,tabIndex:-1,"aria-hidden":"true"}),te]})})};w.displayName="FileUpload";const P=({className:n,children:r,onClick:t,onKeyDown:o,onDragEnter:i,onDragLeave:l,onDragOver:s,onDrop:u,...g})=>{const{addFiles:h,openFileDialog:v,disabled:f,invalid:ee,multiple:te}=S(),[ne,L]=c.useState(!1),j=c.useRef(0),R=a=>{t==null||t(a),!a.defaultPrevented&&v()},A=a=>{o==null||o(a),!a.defaultPrevented&&(f||(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),v()))},y=a=>{i==null||i(a),!f&&(a.preventDefault(),j.current+=1,a.dataTransfer.types.includes("Files")&&L(!0))},z=a=>{l==null||l(a),!f&&(j.current=Math.max(0,j.current-1),j.current===0&&L(!1))},D=a=>{s==null||s(a),!f&&a.preventDefault()},B=a=>{if(u==null||u(a),f)return;a.preventDefault(),j.current=0,L(!1);const T=Array.from(a.dataTransfer.files);T.length!==0&&h(te?T:T.slice(0,1))};return e.jsx("div",{role:"button",tabIndex:f?-1:0,"data-slot":"file-upload-dropzone","data-disabled":f?"":void 0,"data-dragging":ne?"":void 0,"data-invalid":ee?"":void 0,"aria-disabled":f||void 0,className:I(m.dropzone,n),onClick:R,onKeyDown:A,onDragEnter:y,onDragLeave:z,onDragOver:D,onDrop:B,...g,children:r??e.jsxs("div",{className:m.dropzoneContent,children:[e.jsx(Ce,{className:m.dropzoneIcon,"aria-hidden":"true"}),e.jsx(O,{variant:"small_body_medium",className:m.dropzoneTitle,children:"Drag files here or click to browse"})]})})};P.displayName="FileUploadDropzone";const k=({children:n,className:r,onClick:t,disabled:o,...i})=>{const{openFileDialog:l,disabled:s}=S(),u=o||s,g=h=>{t==null||t(h),!h.defaultPrevented&&l()};return e.jsx("button",{type:"button","data-slot":"file-upload-trigger","data-disabled":u?"":void 0,disabled:u,className:I(m.trigger,r),onClick:g,...i,children:n??"Browse files"})};k.displayName="FileUploadTrigger";const N=({className:n,orientation:r="vertical",children:t,...o})=>{const{files:i}=S(),l=i.length>0;return!l&&!t?null:e.jsx("div",{"data-slot":"file-upload-list","data-orientation":r,"data-state":l?"active":"inactive",className:I(m.list,n),...o,children:t??i.map(s=>e.jsxs(G,{value:s.file,children:[e.jsx(Q,{}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(K,{})]},s.id))})};N.displayName="FileUploadList";const Ne=c.createContext(null);function H(){const n=c.useContext(Ne);if(!n)throw new Error("FileUploadItem sub-components must be used inside <FileUploadItem>");return n}const G=c.forwardRef(({value:n,className:r,children:t,...o},i)=>{const{files:l}=S(),s=l.find(u=>u.file===n);return s?e.jsx(Ne.Provider,{value:{item:s},children:e.jsx("div",{ref:i,"data-slot":"file-upload-item","data-status":s.status,className:I(m.item,r),...o,children:t})}):null});G.displayName="FileUploadItem";const Q=({className:n,...r})=>{const{item:t}=H(),o=Be(t.file.name),[i,l]=c.useState(null);return c.useEffect(()=>{if(o!=="IMAGE"){l(null);return}const s=URL.createObjectURL(t.file);return l(s),()=>URL.revokeObjectURL(s)},[t.file,o]),e.jsx("div",{"data-slot":"file-upload-item-preview",className:I(m.itemPreview,n),...r,children:o==="IMAGE"&&i?e.jsx("img",{src:i,alt:t.file.name,className:m.itemPreviewImage}):o==="VIDEO"?e.jsx(ke,{className:m.itemPreviewIcon,"aria-hidden":"true"}):e.jsx(Se,{className:m.itemPreviewIcon,"aria-hidden":"true"})})};Q.displayName="FileUploadItemPreview";const Y=({className:n,...r})=>{const{item:t}=H();return e.jsxs("div",{"data-slot":"file-upload-item-metadata",className:I(m.itemMetadata,n),...r,children:[e.jsx(O,{variant:"small_body_medium",className:m.itemName,children:t.file.name}),e.jsx(O,{variant:"caption",className:m.itemSize,children:De(t.file.size)}),t.error&&e.jsx(O,{variant:"caption",className:m.itemError,children:t.error})]})};Y.displayName="FileUploadItemMetadata";const Z=({className:n,...r})=>{const{item:t}=H();return t.status==="idle"||t.status==="error"?null:e.jsx("div",{"data-slot":"file-upload-item-progress","data-state":t.status,className:I(m.itemProgress,n),role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":0,"aria-valuemax":100,...r,children:e.jsx("div",{className:m.itemProgressFill,style:{width:`${t.progress}%`}})})};Z.displayName="FileUploadItemProgress";const K=({children:n,className:r,onClick:t,disabled:o,...i})=>{const{item:l}=H(),{removeFile:s,disabled:u}=S(),g=o||u,h=v=>{t==null||t(v),!v.defaultPrevented&&s(l.id)};return e.jsx("button",{type:"button","data-slot":"file-upload-item-delete","data-disabled":g?"":void 0,disabled:g,"aria-label":`Remove ${l.file.name}`,className:I(m.itemDelete,r),onClick:h,...i,children:n??e.jsx(Me,{className:m.itemDeleteIcon,"aria-hidden":"true"})})};K.displayName="FileUploadItemDelete";const M=({children:n,className:r,onClick:t,disabled:o,...i})=>{const{clearFiles:l,disabled:s,files:u}=S(),g=o||s||u.length===0,h=v=>{t==null||t(v),!v.defaultPrevented&&l()};return e.jsx("button",{type:"button","data-slot":"file-upload-clear","data-disabled":g?"":void 0,disabled:g,className:I(m.clear,r),onClick:h,...i,children:n??"Clear all"})};M.displayName="FileUploadClear";w.__docgenInfo={description:'Root of the FileUpload compound component.\n\nOwns the file list state (controlled via `value`/`onValueChange` or uncontrolled via\n`defaultValue`), runs the validation pipeline (`accept`, `maxSize`, `maxFiles`,\n`onFileValidate`), and provides context to all sub-components.\n\nWhen `onUpload` is supplied, accepted files trigger an upload pass with progress,\nsuccess, and error callbacks that update item state in place.\n\n@component\n@param {FileUploadProps} props - Props for the root.\n@returns {JSX.Element} The compound provider plus a hidden native `<input type="file">`.\n\n@example\n<FileUpload accept="image/*" maxSize={5 * 1024 * 1024} multiple>\n  <FileUploadDropzone>Drop files here</FileUploadDropzone>\n  <FileUploadTrigger>Browse</FileUploadTrigger>\n  <FileUploadList />\n</FileUpload>',methods:[],displayName:"FileUpload",props:{multiple:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};P.__docgenInfo={description:`Drag-and-drop surface for the FileUpload.

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
<FileUploadTrigger>Choose files</FileUploadTrigger>`,methods:[],displayName:"FileUploadTrigger"};N.__docgenInfo={description:`Container for selected file items.

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
<FileUploadItemDelete aria-label="Remove file" />`,methods:[],displayName:"FileUploadItemDelete"};M.__docgenInfo={description:`Button that clears every file from the list.

Disabled automatically when the list is empty or the root is disabled.

@component
@param {FileUploadClearProps} props - Props for the clear button.
@returns {JSX.Element} A \`<button>\` element.

@example
<FileUploadClear>Remove all</FileUploadClear>`,methods:[],displayName:"FileUploadClear"};const ht={title:"Components/inputs/FileUpload",component:w,tags:["autodocs"],argTypes:{id:{control:{type:"text"},description:"Identificador único do input de arquivo"},accept:{control:{type:"text"},description:"Tipos de arquivo aceitos (formato HTML `accept`)"},maxSize:{control:{type:"number"},description:"Tamanho máximo por arquivo em bytes"},maxFiles:{control:{type:"number"},description:"Número máximo de arquivos permitidos na lista"},multiple:{control:{type:"boolean"},description:"Permite seleção de múltiplos arquivos"},disabled:{control:{type:"boolean"},description:"Desabilita a interação com o componente"}}},$={args:{multiple:!0},render:n=>e.jsxs(w,{...n,children:[e.jsx(P,{}),e.jsx(k,{}),e.jsx(N,{}),e.jsx(M,{})]})},V={args:{multiple:!0,maxFiles:5},render:n=>e.jsxs(w,{...n,children:[e.jsx(P,{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("strong",{children:"Drop up to 5 files here"}),e.jsx("p",{style:{color:"var(--color-text-600)",marginTop:4},children:"or click to browse"})]})}),e.jsx(N,{}),e.jsx(M,{})]})},q={render:()=>{const n=()=>{const[r,t]=c.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(w,{multiple:!0,accept:"image/*",maxSize:2097152,onFileValidate:o=>o.name.toLowerCase().includes("test")?"Filenames containing 'test' are not allowed":null,onFileReject:(o,i)=>t(l=>[...l,`${o.name}: ${i}`]),children:[e.jsx(P,{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("strong",{children:"Images only, max 2 MB each"}),e.jsx("p",{style:{color:"var(--color-text-600)",marginTop:4},children:'Filenames with "test" will be rejected'})]})}),e.jsx(N,{}),e.jsx(M,{})]}),r.length>0&&e.jsxs("div",{style:{padding:12,borderRadius:6,border:"1px solid var(--color-alert-error-500)",background:"var(--color-background-100)"},children:[e.jsx("strong",{style:{color:"var(--color-alert-error-500)"},children:"Rejected files"}),e.jsx("ul",{style:{margin:"8px 0 0",paddingLeft:18},children:r.map((o,i)=>e.jsx("li",{children:o},i))})]})]})};return e.jsx(n,{})}},X={render:()=>e.jsxs(w,{multiple:!0,onUpload:async(n,{onProgress:r,onSuccess:t})=>{await Promise.all(n.map(o=>new Promise(i=>{let l=0;const s=setInterval(()=>{l+=10,r(o,l),l>=100&&(clearInterval(s),t(o),i())},200)})))},children:[e.jsx(P,{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("strong",{children:"Drop files to simulate upload"}),e.jsx("p",{style:{color:"var(--color-text-600)",marginTop:4},children:"Each file fills 0–100% over ~2s"})]})}),e.jsx(N,{}),e.jsx(M,{})]})},J={args:{disabled:!0,multiple:!0},render:n=>e.jsxs(w,{...n,children:[e.jsx(P,{}),e.jsx(k,{}),e.jsx(N,{})]})},W={render:()=>{const n=()=>{const[r,t]=c.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(w,{multiple:!0,value:r,onValueChange:t,children:[e.jsx(P,{}),e.jsx(k,{}),e.jsx(N,{children:r.map(o=>e.jsxs(G,{value:o,children:[e.jsx(Q,{}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(K,{})]},`${o.name}-${o.size}`))}),e.jsx(M,{})]}),e.jsxs("p",{style:{color:"var(--color-text-600)"},children:["Current value: ",r.length," file",r.length===1?"":"s"]})]})};return e.jsx(n,{})}};var ae,de,pe;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => <FileUpload {...args}>
      <FileUploadDropzone />
      <FileUploadTrigger />
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
}`,...(pe=(de=$.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,me,ue;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,ge,he;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,xe,Fe;X.parameters={...X.parameters,docs:{...(ve=X.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Fe=(xe=X.parameters)==null?void 0:xe.docs)==null?void 0:Fe.source}}};var Ue,ye,Ie;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    disabled: true,
    multiple: true
  },
  render: args => <FileUpload {...args}>
      <FileUploadDropzone />
      <FileUploadTrigger />
      <FileUploadList />
    </FileUpload>
}`,...(Ie=(ye=J.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var je,be,_e;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(_e=(be=W.parameters)==null?void 0:be.docs)==null?void 0:_e.source}}};const vt=["Default","Multiple","WithValidation","WithDirectUpload","Disabled","Controlled"];export{W as Controlled,$ as Default,J as Disabled,V as Multiple,X as WithDirectUpload,q as WithValidation,vt as __namedExportsOrder,ht as default};

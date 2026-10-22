import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as L}from"./index-DRjF_FHU.js";import{B as c}from"./index-D9Woksp6.js";import{c as H}from"./clsx-DegBVMCo.js";const S="_container_1kxwr_1",W="_label_1kxwr_8",I="_required_1kxwr_12",A="_input_container_wrapper_1kxwr_16",C="_input_container_1kxwr_16",D="_error_1kxwr_52",r={container:S,label:W,required:I,input_container_wrapper:A,input_container:C,error:D},l=L.forwardRef(({label:d,id:t,error:a,hint:o,required:p,className:v,rows:T=4,"aria-describedby":j,"aria-invalid":N,...E},k)=>{const u=o?`${t}-hint`:void 0,m=a?`${t}-error`:void 0,B=[j,m,u].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:H(r.container,v),children:[d&&e.jsxs(c,{as:"label",htmlFor:t,className:r.label,variant:"label",children:[d,p&&e.jsx("span",{className:r.required,"aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:r.input_container_wrapper,children:[e.jsx("div",{className:r.input_container,"data-input-container":!0,children:e.jsx("textarea",{ref:k,id:t,rows:T,required:p,"aria-invalid":N??(a?!0:void 0),"aria-describedby":B,...E})}),o&&e.jsx(c,{variant:"caption",className:r.hint,id:u,children:o}),a&&e.jsx(c,{variant:"caption",className:r.error,id:m,children:a})]})]})});l.displayName="Textarea";l.__docgenInfo={description:`A custom styled \`<textarea>\` component with label, hint, and error support.

@component
@param {TextareaProps} props - The props to configure the textarea field.
\`rows\` defaults to 4; the ref is forwarded to the \`<textarea>\`.
@returns {JSX.Element} A styled textarea input component with accessibility features.

@example
<Textarea
  id="bio"
  label="Biography"
  placeholder="Tell us about yourself..."
  hint="You can write up to 500 characters."
  required
  value={bio}
  onChange={(e) => setBio(e.target.value)}
/>`,methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},rows:{defaultValue:{value:"4",computed:!1},required:!1}}};const O={title:"Components/inputs/Textarea",component:l,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},id:{control:{type:"text"}},error:{control:{type:"text"}},hint:{control:{type:"text"}}}},n={args:{label:"Label",id:"input-id",required:!0}},i={args:{label:"Label",id:"input-id",required:!0,hint:"Hint message"}},s={args:{label:"Label",id:"input-id",required:!0,error:"Error message"}};var x,_,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true
  }
}`,...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var b,f,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    hint: "Hint message"
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,w,q;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    error: "Error message"
  }
}`,...(q=(w=s.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const P=["Default","WithHint","WithError"];export{n as Default,s as WithError,i as WithHint,P as __namedExportsOrder,O as default};

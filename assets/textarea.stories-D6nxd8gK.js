import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as s}from"./index-BlwL9mIg.js";import{c as N}from"./clsx-CNgb8Gju.js";import"./index-GiUgBvb1.js";const T="_container_n8lke_1",v="_label_n8lke_8",w="_required_n8lke_12",E="_input_container_wrapper_n8lke_16",k="_input_container_n8lke_16",L="_error_n8lke_45",r={container:T,label:v,required:w,input_container_wrapper:E,input_container:k,error:L},o=({label:i,id:l,error:c,hint:p,required:f,className:q,...j})=>e.jsxs("div",{className:N(r.container,q),children:[i&&e.jsxs(s,{as:"label",htmlFor:l,className:r.label,variant:"label",children:[i,f&&e.jsx("span",{className:r.required,children:"*"})]}),e.jsxs("div",{className:r.input_container_wrapper,children:[e.jsx("div",{className:r.input_container,"data-input-container":!0,children:e.jsx("textarea",{id:l,...j})}),p&&e.jsx(s,{variant:"caption",className:r.hint,children:p}),c&&e.jsx(s,{variant:"caption",className:r.error,children:c})]})]});o.displayName="Textarea";o.__docgenInfo={description:`A custom styled \`<textarea>\` component with label, hint, and error support.

@component
@param {TextareaProps} props - The props to configure the textarea field.
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
/>`,methods:[],displayName:"Textarea"};const A={title:"Components/inputs/Textarea",component:o,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},id:{control:{type:"text"}},error:{control:{type:"text"}},hint:{control:{type:"text"}}}},t={args:{label:"Label",id:"input-id",required:!0}},a={args:{label:"Label",id:"input-id",required:!0,hint:"Hint message"}},n={args:{label:"Label",id:"input-id",required:!0,error:"Error message"}};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var _,x,h;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    hint: "Hint message"
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    error: "Error message"
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const C=["Default","WithHint","WithError"];export{t as Default,n as WithError,a as WithHint,C as __namedExportsOrder,A as default};

import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as r}from"./index-BlwL9mIg.js";import{c as b}from"./clsx-CNgb8Gju.js";import"./index-GiUgBvb1.js";const h="_container_13n9b_1",y="_label_13n9b_8",f="_required_13n9b_12",x="_input_container_wrapper_13n9b_16",g="_input_container_13n9b_16",v="_error_13n9b_56",n={container:h,label:y,required:f,input_container_wrapper:x,input_container:g,error:v},a=({label:i,id:o,error:s,hint:p,required:u,className:m,..._})=>e.jsxs("div",{className:b(n.container,m),children:[i&&e.jsxs(r,{as:"label",htmlFor:o,className:n.label,variant:"label",children:[i,u&&e.jsx("span",{className:n.required,children:"*"})]}),e.jsxs("div",{className:n.input_container_wrapper,children:[e.jsx("div",{className:n.input_container,"data-input-container":!0,children:e.jsx("input",{id:o,..._})}),p&&e.jsx(r,{variant:"caption",className:n.hint,children:p}),s&&e.jsx(r,{variant:"caption",className:n.error,children:s})]})]});a.displayName="Input";a.__docgenInfo={description:`A styled text input component with support for label, hint, and error messaging.

Wraps a native \`<input>\` element and displays associated label text, optional hint below the field,
and error messages when present. Uses the \`Body\` component for consistent typography and styling.

@component
@param {InputProps} props - Props for configuring the input field.
@param {string} props.id - A unique identifier used for the \`id\` and \`htmlFor\` attributes to link input and label.
@param {string} [props.label] - Optional label displayed above the input field.
@param {string} [props.error] - Optional error message displayed below the input field.
@param {string} [props.hint] - Optional hint text displayed below the input and above the error (if any).
@param {boolean} [props.required] - If true, appends a visual asterisk to the label.
@param {string} [props.className] - Optional class name for styling the outermost container.
@returns {JSX.Element} A complete, styled, accessible input field.

@example
<Input
  id="email"
  label="Email address"
  type="email"
  placeholder="you@example.com"
  required
  hint="We’ll never share your email."
  error={formErrors.email}
/>`,methods:[],displayName:"Input"};const I={title:"Components/inputs/Input",component:a,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},id:{control:{type:"text"}},error:{control:{type:"text"}},hint:{control:{type:"text"}}}},t={args:{label:"Label",id:"input-id",required:!0}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Label",
    id: "input-id",
    required: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,I as default};

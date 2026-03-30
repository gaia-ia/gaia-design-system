import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as r}from"./index-BlwL9mIg.js";import{c as d}from"./clsx-CNgb8Gju.js";const m="_container_13n9b_1",u="_label_13n9b_8",_="_required_13n9b_12",h="_input_container_wrapper_13n9b_16",b="_input_container_13n9b_16",f="_error_13n9b_56",n={container:m,label:u,required:_,input_container_wrapper:h,input_container:b,error:f},o=({label:a,id:t,error:i,hint:s,required:p,className:l,...c})=>e.jsxs("div",{className:d(n.container,l),children:[a&&e.jsxs(r,{as:"label",htmlFor:t,className:n.label,variant:"label",children:[a,p&&e.jsx("span",{className:n.required,children:"*"})]}),e.jsxs("div",{className:n.input_container_wrapper,children:[e.jsx("div",{className:n.input_container,"data-input-container":!0,children:e.jsx("input",{id:t,...c})}),s&&e.jsx(r,{variant:"caption",className:n.hint,children:s}),i&&e.jsx(r,{variant:"caption",className:n.error,children:i})]})]});o.displayName="Input";o.__docgenInfo={description:`A styled text input component with support for label, hint, and error messaging.

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
/>`,methods:[],displayName:"Input"};export{o as I};

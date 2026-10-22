import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as b}from"./index-DRjF_FHU.js";import{B as i}from"./index-D9Woksp6.js";import{c as y}from"./clsx-DegBVMCo.js";const g="_container_l03rc_1",v="_label_l03rc_8",x="_required_l03rc_12",j="_input_container_wrapper_l03rc_16",q="_input_container_l03rc_16",w="_error_l03rc_63",r={container:g,label:v,required:x,input_container_wrapper:j,input_container:q,error:w},d=b.forwardRef(({label:s,id:n,error:a,hint:t,required:o,className:c,"aria-describedby":m,"aria-invalid":u,...h},_)=>{const p=t?`${n}-hint`:void 0,l=a?`${n}-error`:void 0,f=[m,l,p].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:y(r.container,c),children:[s&&e.jsxs(i,{as:"label",htmlFor:n,className:r.label,variant:"label",children:[s,o&&e.jsx("span",{className:r.required,"aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:r.input_container_wrapper,children:[e.jsx("div",{className:r.input_container,"data-input-container":!0,children:e.jsx("input",{ref:_,id:n,required:o,"aria-invalid":u??(a?!0:void 0),"aria-describedby":f,...h})}),t&&e.jsx(i,{variant:"caption",className:r.hint,id:p,children:t}),a&&e.jsx(i,{variant:"caption",className:r.error,id:l,children:a})]})]})});d.displayName="Input";d.__docgenInfo={description:`A styled text input component with support for label, hint, and error messaging.

Wraps a native \`<input>\` element and displays associated label text, optional hint below the field,
and error messages when present. Uses the \`Body\` component for consistent typography and styling.

@component
@param {InputProps} props - Props for configuring the input field.
The ref is forwarded to the \`<input>\`.
@param {string} props.id - A unique identifier used for the \`id\` and \`htmlFor\` attributes to link input and label.
@param {string} [props.label] - Optional label displayed above the input field.
@param {string} [props.error] - Optional error message displayed below the input field.
@param {string} [props.hint] - Optional hint text displayed below the input and above the error (if any).
@param {boolean} [props.required] - If true, marks the native input as required and appends a visual asterisk to the label.
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
/>`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""}}};export{d as I};

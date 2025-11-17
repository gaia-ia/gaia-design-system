import{j as r}from"./jsx-runtime-CDt2p4po.js";import{B as t}from"./index-BlwL9mIg.js";import{c as i}from"./clsx-CNgb8Gju.js";const o="_badge_n6igv_1",d="_primary_n6igv_8",c="_secondary_n6igv_12",l="_error_n6igv_16",p="_badge_text_n6igv_20",m="_success_n6igv_24",g="_warning_n6igv_32",e={badge:o,primary:d,secondary:c,error:l,badge_text:p,success:m,warning:g},u=({children:n,variant:s="primary",...a})=>r.jsx("div",{...a,className:i(e.badge,e[s],a.className),children:r.jsx(t,{variant:"small_body",className:e.badge_text,children:n})});u.__docgenInfo={description:`A styled badge component used to display concise status or label text with predefined visual variants.

Wraps content inside a styled \`<div>\` and uses the \`Body\` typography component with a \`small_body\` variant
for consistent text styling. Supports theme-based variants and forwards standard HTML div attributes.

@component
@param {BadgeProps} props - Props for the \`Badge\` component.
@param {React.ReactNode} props.children - The content displayed inside the badge (usually short text).
@param {'primary' | 'secondary' | 'success' | 'error' | 'warning'} [props.variant='primary'] - Visual style variant of the badge.
@returns {JSX.Element} A stylized badge element.

@example
<Badge>Default</Badge>

@example
<Badge variant="success">Active</Badge>

@example
<Badge variant="error" aria-label="Error status">
  Error
</Badge>`,methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}},composes:["HTMLAttributes"]};export{u as B};

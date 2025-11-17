import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as m}from"./index-BlwL9mIg.js";import{c as v}from"./clsx-CNgb8Gju.js";import{c as f}from"./createLucideIcon-CRoqMwob.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],x=f("loader",h),q="_button_2qbvp_1",B="_primary_2qbvp_13",T="_secondary_2qbvp_28",j="_outlined_2qbvp_43",w="_text_2qbvp_58",k="_icon_2qbvp_74",C="_loading_2qbvp_130",z="_rotating_2qbvp_1",N="_extra_large_2qbvp_141",R="_large_2qbvp_142",V="_small_2qbvp_157",a={button:q,primary:B,secondary:T,outlined:j,text:w,icon:k,loading:C,rotating:z,extra_large:N,large:R,small:V},u=({children:l,className:y="",variant:t="primary",size:r="large",icon:o,iconPosition:i="left",loading:n=!1,iconColor:_,iconSize:s=20,disabled:p,...b})=>{const c=r==="extra_large"?"body_bold":r==="large"?"small_body_bold":"caption_bold",d=_||(p?"var(--color-text-300)":t==="primary"?"var(--color-fixed-white)":t==="secondary"?"var(--color-text-900)":t==="icon"?"var(--color-text-950)":"var(--color-primary-800)"),g=v(a.button,a[t],a[r],{[a.loading]:n},y);return e.jsx("button",{className:g,...b,disabled:p||n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(x,{color:"var(--color-text-300)",className:a.loader}),e.jsx(m,{variant:c,children:l})]}):e.jsxs(e.Fragment,{children:[o&&i==="left"&&e.jsx(o,{color:d,size:s}),e.jsx(m,{variant:c,children:l}),o&&i==="right"&&e.jsx(o,{color:d,size:s})]})})};u.displayName="Button";u.__docgenInfo={description:`A customizable button component supporting multiple variants, sizes, and optional icons.

This component handles visual styling, loading states, and icon positioning.
When \`loading\` is true, a spinner is displayed and the button is disabled.

@component
@param {React.PropsWithChildren<ButtonProps>} props - The props for the Button component.
@param {string} [props.className] - Additional custom class names.
@param {'primary' | 'secondary' | 'tertiary' | 'icon'} [props.variant='primary'] - Visual variant of the button.
@param {'small' | 'large' | 'extra_large'} [props.size='large'] - Button size.
@param {React.ComponentType<{ color?: string; size?: number }>} [props.icon] - Optional icon component to render.
@param {'left' | 'right'} [props.iconPosition='left'] - Position of the icon relative to the label.
@param {boolean} [props.loading=false] - Shows a loading spinner and disables the button when true.
@param {string} [props.iconColor] - Custom color for the icon. Defaults based on \`variant\` and \`disabled\` state.
@param {number} [props.iconSize=20] - Size of the icon in pixels.
@param {boolean} [props.disabled] - Disables the button when true.
@param {...React.ButtonHTMLAttributes<HTMLButtonElement>} props - Additional native button props.

@returns {JSX.Element} The rendered Button component.

@example
<Button variant="primary" size="large" onClick={() => alert("Clicked!")}>
  Submit
</Button>

@example
<Button
  variant="secondary"
  icon={FiDownload}
  iconPosition="right"
  loading={isLoading}
>
  Download
</Button>`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outlined" | "text" | "icon"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},iconColor:{required:!1,tsType:{name:"string"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"extra_large" | "large" | "small" | "icon"',elements:[{name:"literal",value:'"extra_large"'},{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},icon:{required:!1,tsType:{name:"LucideIcon"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};export{u as B};

import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as m}from"./index-BlwL9mIg.js";import{c as h}from"./clsx-CNgb8Gju.js";import{c as b}from"./createLucideIcon-CRoqMwob.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],x=b("loader",v),j="_button_16gjn_1",B="_primary_16gjn_13",T="_secondary_16gjn_32",w="_outlined_16gjn_47",k="_text_16gjn_62",C="_icon_16gjn_78",q="_loading_16gjn_135",z="_rotating_16gjn_1",N="_extra_large_16gjn_146",R="_large_16gjn_147",V="_small_16gjn_162",a={button:j,primary:B,secondary:T,outlined:w,text:k,icon:C,loading:q,rotating:z,extra_large:N,large:R,small:V},u=({children:l,className:g="",variant:t="primary",size:n="large",icon:o,iconPosition:i="left",loading:r=!1,iconColor:y,iconSize:s=20,disabled:c,..._})=>{const p=n==="extra_large"?"body_bold":n==="large"?"small_body_bold":"caption_bold",d=y||(c?"var(--color-text-400)":t==="primary"?"var(--color-fixed-white)":t==="secondary"?"var(--color-primary-400)":t==="icon"?"var(--color-text-950)":"var(--color-primary-400)"),f=h(a.button,a[t],a[n],{[a.loading]:r},g);return e.jsx("button",{className:f,..._,disabled:c||r,children:r?e.jsxs(e.Fragment,{children:[e.jsx(x,{color:"var(--color-text-300)",className:a.loader}),e.jsx(m,{variant:p,children:l})]}):e.jsxs(e.Fragment,{children:[o&&i==="left"&&e.jsx(o,{color:d,size:s}),e.jsx(m,{variant:p,children:l}),o&&i==="right"&&e.jsx(o,{color:d,size:s})]})})};u.displayName="Button";u.__docgenInfo={description:`A customizable button component supporting multiple variants, sizes, and optional icons.

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

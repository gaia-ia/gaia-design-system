import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as p}from"./index-BlwL9mIg.js";import{c as h}from"./clsx-CNgb8Gju.js";import{c as b}from"./createLucideIcon-CRoqMwob.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],x=b("loader",v),B="_button_1s73e_1",T="_primary_1s73e_13",j="_secondary_1s73e_29",k="_outlined_1s73e_44",w="_text_1s73e_59",q="_icon_1s73e_75",z="_loading_1s73e_132",C="_rotating_1s73e_1",N="_extra_large_1s73e_143",R="_large_1s73e_144",V="_small_1s73e_159",a={button:B,primary:T,secondary:j,outlined:k,text:w,icon:q,loading:z,rotating:C,extra_large:N,large:R,small:V},c=({children:r,className:m="",variant:u="primary",size:o="large",icon:t,iconPosition:l="left",loading:n=!1,iconColor:_,iconSize:i=20,disabled:g,...y})=>{const s=o==="extra_large"?"body_bold":o==="large"?"small_body_bold":"caption_bold",d=_||"var(--color-text-900)",f=h(a.button,a[u],a[o],{[a.loading]:n},m);return e.jsx("button",{className:f,...y,disabled:g||n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(x,{color:"var(--color-text-900)",className:a.loader}),e.jsx(p,{variant:s,children:r})]}):e.jsxs(e.Fragment,{children:[t&&l==="left"&&e.jsx(t,{color:d,size:i}),e.jsx(p,{variant:s,children:r}),t&&l==="right"&&e.jsx(t,{color:d,size:i})]})})};c.displayName="Button";c.__docgenInfo={description:`A customizable button component supporting multiple variants, sizes, and optional icons.

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
</Button>`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outlined" | "text" | "icon"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},iconColor:{required:!1,tsType:{name:"string"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"extra_large" | "large" | "small" | "icon"',elements:[{name:"literal",value:'"extra_large"'},{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},icon:{required:!1,tsType:{name:"LucideIcon"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};export{c as B};

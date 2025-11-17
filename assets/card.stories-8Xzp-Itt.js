import{j as d}from"./jsx-runtime-CDt2p4po.js";import{c}from"./clsx-CNgb8Gju.js";import"./index-GiUgBvb1.js";const i="_container_15v2v_1",p={container:i},a=({children:s,className:o})=>d.jsx("div",{className:c(p.container,o),children:s});a.displayName="Card";a.__docgenInfo={description:`A simple container component used to group content with consistent padding, border, and background styling.

Applies base card styles via a CSS module and allows additional class names to be passed for customization.

@component
@param {CardProps} props - Props for the \`Card\` component.
@param {React.ReactNode} props.children - The content to render inside the card.
@param {string} [props.className] - Optional custom class name(s) to apply alongside the default card styles.
@returns {JSX.Element} A styled card container element.

@example
<Card>
  <h2>Card Title</h2>
  <p>This is some content inside the card.</p>
</Card>

@example
<Card className="custom-shadow">
  <UserProfile />
</Card>`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Components/general/Card",component:a,tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"The content of the card",defaultValue:"Card"}}},e={args:{children:"Card"}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Card"
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,h as default};

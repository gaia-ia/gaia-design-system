import{j as i}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const r="_skeleton_1o9ay_1",p={skeleton:r};function o({className:a,...l}){return i.jsx("div",{"data-slot":"skeleton",className:`${p.skeleton} ${a??""}`,...l})}o.__docgenInfo={description:`A lightweight skeleton placeholder component used to indicate loading states.

This component renders a \`<div>\` element styled with a skeleton animation
(typically a shimmer or pulse effect via CSS). It accepts all standard
\`<div>\` props, allowing full flexibility for customization and composition.

@param props - The props for the skeleton component.
@param props.className - Optional additional class names to merge with the default skeleton styles.
@returns A styled \`<div>\` element representing a loading placeholder.

@example
// Basic usage
<Skeleton />

@example
// With custom sizing
<Skeleton style={{ width: 200, height: 20 }} />

@example
// With additional class names
<Skeleton className="rounded-md my-2" />

@example
// Composing multiple skeletons for a card layout
function CardSkeleton() {
  return (
    <div className="p-4 space-y-2">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

@remarks
- The base skeleton styling is imported from a CSS module (\`styles.skeleton\`).
- The \`data-slot="skeleton"\` attribute can be used for testing or styling hooks.
- If \`className\` is not provided, only the default skeleton styles are applied.`,methods:[],displayName:"Skeleton"};const c={title:"Components/general/Skeleton",component:o,tags:["autodocs"],argTypes:{style:{control:{type:"object"},description:"Estilo customizado para o Skeleton",defaultValue:{width:"200px",height:"200px"}}}},e={args:{style:{width:"200px",height:"200px"}}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    style: {
      width: "200px",
      height: "200px"
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,c as default};

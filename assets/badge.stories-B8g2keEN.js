import{j as s}from"./jsx-runtime-DiklIkkE.js";import{B as f}from"./index-DjkTgTb3.js";import"./index-DRjF_FHU.js";import"./clsx-DegBVMCo.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";const j={title:"Components/general/Badge",component:f,tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"The text to display inside the badge",defaultValue:"Badge"},variant:{options:["default","secondary","destructive","outline","ghost","link"],control:{type:"radio"},defaultValue:"default"}}},a={args:{children:"Badge"}},r={args:{children:"Badge",variant:"secondary"}},v=["default","secondary","destructive","outline","ghost","link"],e={render:()=>s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:v.map(t=>s.jsx(f,{variant:t,children:t},t))})};var o,n,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "secondary"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,u,g,y;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {VARIANTS.map(variant => <Badge key={variant} variant={variant}>
          {variant}
        </Badge>)}
    </div>
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Todas as variantes lado a lado, para comparar.",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};const A=["Default","Secondary","Variantes"];export{a as Default,r as Secondary,e as Variantes,A as __namedExportsOrder,j as default};

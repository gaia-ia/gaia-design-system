import{j as e}from"./jsx-runtime-DiklIkkE.js";import{P as h,a as v,b as y}from"./index-CmDSL2h3.js";import{B as b}from"./index-DTYX8Gcn.js";import{B as S}from"./index-D9Woksp6.js";import{I as B}from"./index-BclXEZWd.js";import"./index-DRjF_FHU.js";import"./index-CVXJttz3.js";import"./index-Bms3GI6n.js";import"./index-DRtXj63t.js";import"./index-CLlkV7gm.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";import"./index-BrKBBPft.js";import"./index-I4Re_PL0.js";import"./index-Bnhoviar.js";import"./index-X59MVnDc.js";import"./index-CFX21f3v.js";import"./index-D8lkqur8.js";import"./index-C0xqUTPU.js";import"./clsx-DegBVMCo.js";import"./portalContainer-jaNfC5BB.js";const E=({align:j="center",sideOffset:P=4,content:C="Conteúdo do popover vai aqui."})=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"200px"},children:e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(b,{children:"Abrir Popover"})}),e.jsx(y,{align:j,sideOffset:P,"aria-label":"Exemplo de popover",children:e.jsx("p",{children:C})})]})}),Q={title:"Components/general/Popover",component:E,tags:["autodocs"],argTypes:{align:{options:["start","center","end"],control:{type:"select"},description:"Alinhamento do popover em relação ao gatilho"},sideOffset:{control:{type:"number"},description:"Distância em pixels entre o gatilho e o conteúdo do popover"},content:{control:"text",description:"Conteúdo exibido dentro do popover"}}},o={args:{align:"center",sideOffset:4,content:"Conteúdo do popover vai aqui."}},r={args:{align:"start",sideOffset:4,content:"Popover alinhado ao início do gatilho."}},t={args:{align:"end",sideOffset:4,content:"Popover alinhado ao final do gatilho."}},n={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"300px"},children:e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(b,{children:"Editar Nome"})}),e.jsx(y,{"aria-labelledby":"edit-name-title",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(S,{variant:"label",htmlFor:"name",as:"label",id:"edit-name-title",children:"Nome"}),e.jsx(B,{id:"name",defaultValue:"Gaia Design System",style:{padding:"6px 8px",borderRadius:"6px",border:"1px solid var(--color-background-200)",fontSize:"0.875rem"}})]})})]})})};var a,i,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    align: "center",
    sideOffset: 4,
    content: "Conteúdo do popover vai aqui."
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    align: "start",
    sideOffset: 4,
    content: "Popover alinhado ao início do gatilho."
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    align: "end",
    sideOffset: 4,
    content: "Popover alinhado ao final do gatilho."
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,u,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px"
  }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Editar Nome</Button>
        </PopoverTrigger>
        {/* role="dialog" precisa de nome: aria-labelledby aponta para um texto do conteúdo. */}
        <PopoverContent aria-labelledby="edit-name-title">
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
            <Body variant="label" htmlFor="name" as="label" id="edit-name-title">
              Nome
            </Body>
            <Input id="name" defaultValue="Gaia Design System" style={{
            padding: "6px 8px",
            borderRadius: "6px",
            border: "1px solid var(--color-background-200)",
            fontSize: "0.875rem"
          }} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const U=["Default","AlignStart","AlignEnd","WithForm"];export{t as AlignEnd,r as AlignStart,o as Default,n as WithForm,U as __namedExportsOrder,Q as default};

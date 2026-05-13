import{j as e}from"./jsx-runtime-CDt2p4po.js";import{P as h,a as v,b as y}from"./index-Doyn-HhC.js";import{B as j}from"./index-B6QF9bbj.js";import{B as S}from"./index-BlwL9mIg.js";import{I as B}from"./index-Du4LiuMI.js";import"./index-GiUgBvb1.js";import"./index-V__cqR5r.js";import"./index-DBCqBOGF.js";import"./index-BYJyBkN8.js";import"./index-C9v26AP-.js";import"./index-CROobee-.js";import"./index-BojL7TVx.js";import"./index-Dl0iWJCF.js";import"./index-DslUmEDu.js";import"./index-WUhAcQt0.js";import"./index-BolwHxDA.js";import"./index-SVyUj_8R.js";import"./index-Bav0yaTQ.js";import"./index-DEN0ugiW.js";import"./clsx-CNgb8Gju.js";import"./portalContainer-Cr0I3QJP.js";const O=({align:P="center",sideOffset:b=4,content:C="Conteúdo do popover vai aqui."})=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"200px"},children:e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(j,{children:"Abrir Popover"})}),e.jsx(y,{align:P,sideOffset:b,children:e.jsx("p",{children:C})})]})}),Q={title:"Components/general/Popover",component:O,tags:["autodocs"],argTypes:{align:{options:["start","center","end"],control:{type:"select"},description:"Alinhamento do popover em relação ao gatilho"},sideOffset:{control:{type:"number"},description:"Distância em pixels entre o gatilho e o conteúdo do popover"},content:{control:"text",description:"Conteúdo exibido dentro do popover"}}},o={args:{align:"center",sideOffset:4,content:"Conteúdo do popover vai aqui."}},r={args:{align:"start",sideOffset:4,content:"Popover alinhado ao início do gatilho."}},n={args:{align:"end",sideOffset:4,content:"Popover alinhado ao final do gatilho."}},t={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"300px"},children:e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(j,{children:"Editar Nome"})}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(S,{variant:"label",htmlFor:"name",as:"label",children:"Nome"}),e.jsx(B,{id:"name",defaultValue:"Gaia Design System",style:{padding:"6px 8px",borderRadius:"6px",border:"1px solid var(--color-background-200)",fontSize:"0.875rem"}})]})})]})})};var i,a,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    align: "center",
    sideOffset: 4,
    content: "Conteúdo do popover vai aqui."
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    align: "start",
    sideOffset: 4,
    content: "Popover alinhado ao início do gatilho."
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    align: "end",
    sideOffset: 4,
    content: "Popover alinhado ao final do gatilho."
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <PopoverContent>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
            <Body variant="label" htmlFor="name" as="label">
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const U=["Default","AlignStart","AlignEnd","WithForm"];export{n as AlignEnd,r as AlignStart,o as Default,t as WithForm,U as __namedExportsOrder,Q as default};

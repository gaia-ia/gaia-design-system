import{j as e}from"./jsx-runtime-CDt2p4po.js";import{D as C,a as j,b,c as q,d as B,e as f,f as T,g as F}from"./index-ADmajwoc.js";import{B as o}from"./index-B6QF9bbj.js";import"./index-GiUgBvb1.js";import"./index-DBCqBOGF.js";import"./index-D5bCXf9E.js";import"./index-WUhAcQt0.js";import"./index-BolwHxDA.js";import"./index-C9v26AP-.js";import"./index-CROobee-.js";import"./index-BojL7TVx.js";import"./index-Dl0iWJCF.js";import"./index-DslUmEDu.js";import"./clsx-CNgb8Gju.js";import"./x-LE87PwJd.js";import"./createLucideIcon-CRoqMwob.js";const S=({title:v="Título do Dialog",description:E="Descrição do dialog vai aqui.",showCloseButton:y=!0,hasFooter:N=!0})=>e.jsxs(C,{children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{children:"Abrir Dialog"})}),e.jsxs(b,{showCloseButton:y,children:[e.jsxs(q,{children:[e.jsx(B,{children:v}),e.jsx(f,{children:E})]}),e.jsx("p",{children:"Conteúdo principal do dialog."}),N&&e.jsxs(T,{children:[e.jsx(o,{children:"Confirmar"}),e.jsx(F,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Cancelar"})})]})]})]}),P={title:"Components/general/Dialog",component:S,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título exibido no cabeçalho do dialog"},description:{control:"text",description:"Descrição exibida abaixo do título"},showCloseButton:{control:"boolean",description:"Se deve exibir o botão de fechar no canto superior direito"},hasFooter:{control:"boolean",description:"Se deve exibir o rodapé com botões de ação"}}},i={args:{title:"Título do Dialog",description:"Descrição do dialog vai aqui.",showCloseButton:!0,hasFooter:!0}},t={args:{title:"Dialog sem Botão de Fechar",description:"Este dialog não possui o ícone de fechar no canto.",showCloseButton:!1,hasFooter:!0}},s={args:{title:"Dialog sem Rodapé",description:"Este dialog não possui botões de ação no rodapé.",showCloseButton:!0,hasFooter:!1}},n={render:()=>e.jsxs(C,{children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{children:"Abrir Dialog"})}),e.jsxs(b,{children:[e.jsxs(q,{children:[e.jsx(B,{children:"Dialog com Conteúdo Longo"}),e.jsx(f,{children:"Este dialog demonstra como o componente se comporta com bastante conteúdo."})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl."}),e.jsx("p",{style:{marginTop:"12px"},children:"Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl."}),e.jsx("p",{style:{marginTop:"12px"},children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),e.jsxs(T,{children:[e.jsx(o,{children:"Confirmar"}),e.jsx(F,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Cancelar"})})]})]})]})};var r,l,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: "Título do Dialog",
    description: "Descrição do dialog vai aqui.",
    showCloseButton: true,
    hasFooter: true
  }
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Dialog sem Botão de Fechar",
    description: "Este dialog não possui o ícone de fechar no canto.",
    showCloseButton: false,
    hasFooter: true
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,m,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Dialog sem Rodapé",
    description: "Este dialog não possui botões de ação no rodapé.",
    showCloseButton: true,
    hasFooter: false
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,D,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog com Conteúdo Longo</DialogTitle>
          <DialogDescription>
            Este dialog demonstra como o componente se comporta com bastante
            conteúdo.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget
            ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
            ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget
            nisl.
          </p>
          <p style={{
          marginTop: "12px"
        }}>
            Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl,
            eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget
            ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl
            eget nisl.
          </p>
          <p style={{
          marginTop: "12px"
        }}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <DialogFooter>
          <Button>Confirmar</Button>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const Q=["Default","WithoutCloseButton","WithoutFooter","LongContent"];export{i as Default,n as LongContent,t as WithoutCloseButton,s as WithoutFooter,Q as __namedExportsOrder,P as default};

import{j as o}from"./jsx-runtime-DiklIkkE.js";import{D as C,a as j,b,c as q,d as B,e as f,f as T,g as F}from"./index-DSIw-q11.js";import{B as e}from"./index-DTYX8Gcn.js";import"./index-DRjF_FHU.js";import"./index-DH9gUxBT.js";import"./index-Bms3GI6n.js";import"./index-DRtXj63t.js";import"./index-X59MVnDc.js";import"./index-Bnhoviar.js";import"./index-C0xqUTPU.js";import"./index-CLlkV7gm.js";import"./index-DHHUZ-3A.js";import"./index-C7sk0Hs-.js";import"./index-BrKBBPft.js";import"./index-I4Re_PL0.js";import"./clsx-DegBVMCo.js";import"./portalContainer-jaNfC5BB.js";import"./x-BPa992hr.js";import"./createLucideIcon-Bl20gA7w.js";const S=({title:v="Título do Dialog",description:E="Descrição do dialog vai aqui.",showCloseButton:y=!0,hasFooter:N=!0})=>o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(e,{children:"Abrir Dialog"})}),o.jsxs(b,{showCloseButton:y,children:[o.jsxs(q,{children:[o.jsx(B,{children:v}),o.jsx(f,{children:E})]}),o.jsx("p",{children:"Conteúdo principal do dialog."}),N&&o.jsxs(T,{children:[o.jsx(e,{children:"Confirmar"}),o.jsx(F,{asChild:!0,children:o.jsx(e,{variant:"secondary",children:"Cancelar"})})]})]})]}),X={title:"Components/general/Dialog",component:S,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título exibido no cabeçalho do dialog"},description:{control:"text",description:"Descrição exibida abaixo do título"},showCloseButton:{control:"boolean",description:"Se deve exibir o botão de fechar no canto superior direito"},hasFooter:{control:"boolean",description:"Se deve exibir o rodapé com botões de ação"}}},i={args:{title:"Título do Dialog",description:"Descrição do dialog vai aqui.",showCloseButton:!0,hasFooter:!0}},t={args:{title:"Dialog sem Botão de Fechar",description:"Este dialog não possui o ícone de fechar no canto.",showCloseButton:!1,hasFooter:!0}},s={args:{title:"Dialog sem Rodapé",description:"Este dialog não possui botões de ação no rodapé.",showCloseButton:!0,hasFooter:!1}},n={render:()=>o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(e,{children:"Abrir Dialog"})}),o.jsxs(b,{children:[o.jsxs(q,{children:[o.jsx(B,{children:"Dialog com Conteúdo Longo"}),o.jsx(f,{children:"Este dialog demonstra como o componente se comporta com bastante conteúdo."})]}),o.jsxs("div",{children:[o.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl."}),o.jsx("p",{style:{marginTop:"12px"},children:"Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl."}),o.jsx("p",{style:{marginTop:"12px"},children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),o.jsxs(T,{children:[o.jsx(e,{children:"Confirmar"}),o.jsx(F,{asChild:!0,children:o.jsx(e,{variant:"secondary",children:"Cancelar"})})]})]})]})};var r,l,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const Y=["Default","WithoutCloseButton","WithoutFooter","LongContent"];export{i as Default,n as LongContent,t as WithoutCloseButton,s as WithoutFooter,Y as __namedExportsOrder,X as default};

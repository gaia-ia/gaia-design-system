import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as r}from"./clsx-CNgb8Gju.js";import{c as E}from"./createLucideIcon-CRoqMwob.js";import{B as V}from"./index-B6QF9bbj.js";import{P}from"./plus-F0_GpZUr.js";import"./index-GiUgBvb1.js";import"./index-BojL7TVx.js";import"./index-DBCqBOGF.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]],q=E("file-search",R);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],x=E("inbox",L);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]],X=E("package-open",J),A="_empty_yzu7r_1",B="_header_yzu7r_20",W="_media_yzu7r_28",O="_title_yzu7r_54",$="_description_yzu7r_62",F="_content_yzu7r_77",o={empty:A,header:B,media:W,title:O,description:$,content:F};function s({className:t,...a}){return e.jsx("div",{"data-slot":"empty",className:r(o.empty,t),...a})}function i({className:t,...a}){return e.jsx("div",{"data-slot":"empty-header",className:r(o.header,t),...a})}function n({className:t,variant:a="default",...I}){return e.jsx("div",{"data-slot":"empty-icon","data-variant":a,className:r(o.media,t),...I})}function p({className:t,...a}){return e.jsx("div",{"data-slot":"empty-title",className:r(o.title,t),...a})}function d({className:t,...a}){return e.jsx("div",{"data-slot":"empty-description",className:r(o.description,t),...a})}function H({className:t,...a}){return e.jsx("div",{"data-slot":"empty-content",className:r(o.content,t),...a})}s.__docgenInfo={description:`Root container for an empty state. Renders a centered, dashed-border block
intended to wrap a header, optional media, and call-to-action content.

@component
@param {React.ComponentProps<"div">} props - Native \`<div>\` props.
@returns {JSX.Element} The empty state container.

@example
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
    <EmptyTitle>No messages yet</EmptyTitle>
    <EmptyDescription>You'll see new messages here.</EmptyDescription>
  </EmptyHeader>
</Empty>`,methods:[],displayName:"Empty"};H.__docgenInfo={description:`Content section of the \`Empty\` state — use it to host action buttons or
supplementary controls below the header.

@component
@param {React.ComponentProps<"div">} props - Native \`<div>\` props.
@returns {JSX.Element} The empty state content.`,methods:[],displayName:"EmptyContent"};d.__docgenInfo={description:`Description for the \`Empty\` state. Renders muted secondary text and styles
any inline anchors with an underline and primary-colored hover.

@component
@param {React.ComponentProps<"div">} props - Native \`<div>\` props.
@returns {JSX.Element} The empty state description.`,methods:[],displayName:"EmptyDescription"};i.__docgenInfo={description:`Header section of an \`Empty\` state. Stacks the media, title, and description
vertically and constrains them to a readable max-width.

@component
@param {React.ComponentProps<"div">} props - Native \`<div>\` props.
@returns {JSX.Element} The empty state header.`,methods:[],displayName:"EmptyHeader"};n.__docgenInfo={description:`Media slot for the \`Empty\` header — typically an icon or illustration.

The \`icon\` variant renders a 2rem rounded square with a muted background,
matching shadcn's compact icon treatment. The \`default\` variant is a
transparent wrapper for larger custom artwork.

@component
@param {EmptyMediaProps} props - Component props.
@param {"default" | "icon"} [props.variant="default"] - Visual treatment.
@returns {JSX.Element} The media slot.`,methods:[],displayName:"EmptyMedia",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "icon"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};p.__docgenInfo={description:`Title for the \`Empty\` state. Renders as a small heading using the heading
font family.

@component
@param {React.ComponentProps<"div">} props - Native \`<div>\` props.
@returns {JSX.Element} The empty state title.`,methods:[],displayName:"EmptyTitle"};const Q="_wrapper_p5knj_1",Y="_dark_p5knj_6",G="_light_p5knj_7",h={wrapper:Q,dark:Y,light:G},K=t=>e.jsxs("div",{className:h.wrapper,children:[e.jsx("div",{className:h.dark,children:e.jsx(t,{})}),e.jsx("div",{className:h.light,children:e.jsx(t,{})})]}),se={title:"Components/general/Empty",component:n,tags:["autodocs"],decorators:[K],argTypes:{variant:{options:["default","icon"],control:{type:"radio"},description:"Tratamento visual do slot de mídia: `icon` para um quadrado arredondado com fundo suave, `default` para artes maiores sem fundo"}}},c={args:{variant:"icon"},render:t=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(n,{...t,children:e.jsx(x,{})}),e.jsx(p,{children:"Nenhuma mensagem por aqui"}),e.jsx(d,{children:"Quando você receber novas mensagens, elas aparecerão neste espaço."})]})})},m={args:{variant:"icon"},render:t=>e.jsxs(s,{children:[e.jsxs(i,{children:[e.jsx(n,{...t,children:e.jsx(X,{})}),e.jsx(p,{children:"Sem produtos cadastrados"}),e.jsx(d,{children:"Cadastre seu primeiro produto para começar a vender."})]}),e.jsx(H,{children:e.jsxs(V,{onClick:()=>window.alert("Criar produto"),children:[e.jsx(P,{size:16}),"Criar produto"]})})]})},l={args:{variant:"icon"},render:t=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(n,{...t,children:e.jsx(q,{})}),e.jsx(p,{children:"Nenhum resultado encontrado"}),e.jsx(d,{children:"Tente ajustar os filtros ou refazer sua busca."})]})})},u={args:{variant:"default"},render:t=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(n,{...t,children:e.jsx(x,{color:"var(--color-text-500)"})}),e.jsx(p,{children:"Tudo limpo por aqui"}),e.jsx(d,{children:"Você está em dia. Vamos descansar um pouco."})]})})},y={args:{variant:"icon"},render:t=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(n,{...t,children:e.jsx(x,{})}),e.jsx(p,{children:"Sua caixa de entrada está vazia"}),e.jsxs(d,{children:["Saiba mais em"," ",e.jsx("a",{href:"#configuracoes",children:"configurações de notificação"})," para começar a receber atualizações."]})]})})};var v,f,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "icon"
  },
  render: args => <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Nenhuma mensagem por aqui</EmptyTitle>
        <EmptyDescription>
          Quando você receber novas mensagens, elas aparecerão neste espaço.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var j,_,k;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "icon"
  },
  render: args => <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <PackageOpen />
        </EmptyMedia>
        <EmptyTitle>Sem produtos cadastrados</EmptyTitle>
        <EmptyDescription>
          Cadastre seu primeiro produto para começar a vender.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={() => window.alert("Criar produto")}>
          <Plus size={16} />
          Criar produto
        </Button>
      </EmptyContent>
    </Empty>
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var T,N,M;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "icon"
  },
  render: args => <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <FileSearch />
        </EmptyMedia>
        <EmptyTitle>Nenhum resultado encontrado</EmptyTitle>
        <EmptyDescription>
          Tente ajustar os filtros ou refazer sua busca.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
}`,...(M=(N=l.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var b,C,D;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "default"
  },
  render: args => <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox color="var(--color-text-500)" />
        </EmptyMedia>
        <EmptyTitle>Tudo limpo por aqui</EmptyTitle>
        <EmptyDescription>
          Você está em dia. Vamos descansar um pouco.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var w,z,S;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "icon"
  },
  render: args => <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Sua caixa de entrada está vazia</EmptyTitle>
        <EmptyDescription>
          Saiba mais em{" "}
          <a href="#configuracoes">configurações de notificação</a> para começar
          a receber atualizações.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
}`,...(S=(z=y.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const ie=["Default","WithAction","IconVariant","DefaultVariant","WithLink"];export{c as Default,u as DefaultVariant,l as IconVariant,m as WithAction,y as WithLink,ie as __namedExportsOrder,se as default};

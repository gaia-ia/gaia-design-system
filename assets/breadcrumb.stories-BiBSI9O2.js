import{j as r}from"./jsx-runtime-CDt2p4po.js";import{c as i}from"./clsx-CNgb8Gju.js";import{C as P}from"./chevron-right-DUgH9T71.js";import{E as A}from"./ellipsis-DSWkjN00.js";import{S as C}from"./index-BojL7TVx.js";import{B as S}from"./index-B6QF9bbj.js";import"./index-GiUgBvb1.js";import"./createLucideIcon-CRoqMwob.js";import"./index-DBCqBOGF.js";const v="_list_8t1o8_1",w="_item_8t1o8_17",E="_link_8t1o8_23",H="_page_8t1o8_38",D="_separator_8t1o8_43",O="_ellipsis_8t1o8_53",R="_ellipsisIcon_8t1o8_61",$="_srOnly_8t1o8_66",s={list:v,item:w,link:E,page:H,separator:D,ellipsis:O,ellipsisIcon:R,srOnly:$};function u({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function p({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:i(s.list,e),...a})}function n({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:i(s.item,e),...a})}function d({asChild:e,className:a,...h}){const N=e?C:"a";return r.jsx(N,{"data-slot":"breadcrumb-link",className:i(!e&&s.link,a),...h})}function b({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:i(s.page,e),...a})}function o({children:e,className:a,...h}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:i(s.separator,a),...h,children:e??r.jsx(P,{})})}function y({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:i(s.ellipsis,e),...a,children:[r.jsx(A,{className:s.ellipsisIcon}),r.jsx("span",{className:s.srOnly,children:"Mais"})]})}u.__docgenInfo={description:`Root navigation landmark for breadcrumb trails.

@component
@param props - Props passed to the underlying \`<nav>\` element.
@returns A \`<nav aria-label="breadcrumb">\` wrapper.

@example
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Atual</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,methods:[],displayName:"Breadcrumb"};y.__docgenInfo={description:`Collapsed breadcrumb indicator for truncated paths.

Renders a \`<MoreHorizontal>\` icon with a screen-reader-only label.

@component
@param className - Additional class names.
@param props - Props passed to the underlying \`<span>\` element.
@returns A 36×36 icon placeholder indicating hidden steps.

@example
<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>`,methods:[],displayName:"BreadcrumbEllipsis"};n.__docgenInfo={description:`A single breadcrumb entry wrapping a link or page label.

@component
@param className - Additional class names.
@param props - Props passed to the underlying \`<li>\` element.
@returns A styled \`<li>\` for one breadcrumb step.`,methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:`A navigable link within a breadcrumb trail.

Supports \`asChild\` to delegate rendering to a custom element (e.g. a router \`<Link>\`).

@component
@param asChild - When \`true\`, merges props onto the immediate child element via \`Slot\`.
@param className - Additional class names.
@param props - Props passed to the underlying \`<a>\` or slot element.
@returns A styled anchor with a hover color transition.

@example
<BreadcrumbLink href="/">Home</BreadcrumbLink>

@example
<BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>`,methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};p.__docgenInfo={description:`Ordered list that lays out breadcrumb items horizontally with wrapping.

@component
@param className - Additional class names.
@param props - Props passed to the underlying \`<ol>\` element.
@returns A styled \`<ol>\` for breadcrumb items.`,methods:[],displayName:"BreadcrumbList"};b.__docgenInfo={description:`Non-interactive label for the current page in the breadcrumb trail.

Marked with \`aria-current="page"\` and \`aria-disabled="true"\`.

@component
@param className - Additional class names.
@param props - Props passed to the underlying \`<span>\` element.
@returns A foreground-colored \`<span>\` for the active breadcrumb step.

@example
<BreadcrumbPage>Detalhes do produto</BreadcrumbPage>`,methods:[],displayName:"BreadcrumbPage"};o.__docgenInfo={description:`Visual separator between breadcrumb items.

Defaults to a \`<ChevronRight>\` icon; pass custom \`children\` to override.

@component
@param children - Custom separator content. Defaults to \`<ChevronRight />\`.
@param className - Additional class names.
@param props - Props passed to the underlying \`<li>\` element.
@returns A presentational \`<li>\` that renders a separator icon.

@example
<BreadcrumbSeparator />
<BreadcrumbSeparator>/</BreadcrumbSeparator>`,methods:[],displayName:"BreadcrumbSeparator"};const T="_wrapper_1hrnb_1",M="_panel_1hrnb_7",W="_label_1hrnb_17",z="_dark_1hrnb_23",q="_light_1hrnb_27",t={wrapper:T,panel:M,label:W,dark:z,light:q},V=e=>r.jsxs("div",{className:t.wrapper,children:[r.jsxs("div",{className:`${t.panel} ${t.dark}`,children:[r.jsx("span",{className:t.label,children:"Tema Escuro"}),r.jsx(e,{})]}),r.jsxs("div",{className:`${t.panel} ${t.light}`,children:[r.jsx("span",{className:t.label,children:"Tema Claro"}),r.jsx(e,{})]})]}),rr={title:"Components/general/Breadcrumb",tags:["autodocs"],decorators:[V]},m={render:()=>r.jsx(u,{children:r.jsxs(p,{children:[r.jsx(n,{children:r.jsx(d,{href:"/",children:"Home"})}),r.jsx(o,{}),r.jsx(n,{children:r.jsx(d,{href:"/produtos",children:"Produtos"})}),r.jsx(o,{}),r.jsx(n,{children:r.jsx(d,{href:"/produtos/categoria",children:"Categoria"})}),r.jsx(o,{}),r.jsx(n,{children:r.jsx(b,{children:"Página atual"})})]})})},c={render:()=>r.jsx(u,{children:r.jsxs(p,{children:[r.jsx(n,{children:r.jsx(d,{href:"/",children:"Home"})}),r.jsx(o,{}),r.jsx(n,{children:r.jsx(y,{})}),r.jsx(o,{}),r.jsx(n,{children:r.jsx(b,{children:"Página atual"})})]})})},l={render:()=>r.jsx(u,{children:r.jsxs(p,{children:[r.jsx(n,{children:r.jsx(d,{asChild:!0,children:r.jsx(S,{type:"button",children:"Home"})})}),r.jsx(o,{}),r.jsx(n,{children:r.jsx(b,{children:"Página atual"})})]})})};var B,g,x;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/produtos/categoria">Categoria</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Página atual</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var _,j,f;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Página atual</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var k,I,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Button type="button">Home</Button>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Página atual</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const er=["Default","WithEllipsis","AsChildLink"];export{l as AsChildLink,m as Default,c as WithEllipsis,er as __namedExportsOrder,rr as default};

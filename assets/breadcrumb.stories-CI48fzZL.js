import{j as r}from"./jsx-runtime-DiklIkkE.js";import{c as d}from"./clsx-DegBVMCo.js";import{C as P}from"./chevron-right-DB87OsJK.js";import{E as N}from"./ellipsis-j6D6ynno.js";import{S}from"./index-C7sk0Hs-.js";import{B as A}from"./index-DTYX8Gcn.js";import"./index-DRjF_FHU.js";import"./createLucideIcon-Bl20gA7w.js";import"./index-Bms3GI6n.js";const C="_list_8t1o8_1",v="_item_8t1o8_17",E="_link_8t1o8_23",H="_page_8t1o8_38",w="_separator_8t1o8_43",D="_ellipsis_8t1o8_53",O="_ellipsisIcon_8t1o8_61",R="_srOnly_8t1o8_66",s={list:C,item:v,link:E,page:H,separator:w,ellipsis:D,ellipsisIcon:O,srOnly:R};function l({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:d(s.list,e),...a})}function n({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:d(s.item,e),...a})}function o({asChild:e,className:a,...b}){const y=e?S:"a";return r.jsx(y,{"data-slot":"breadcrumb-link",className:d(!e&&s.link,a),...b})}function p({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:d(s.page,e),...a})}function t({children:e,className:a,...b}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:d(s.separator,a),...b,children:e??r.jsx(P,{})})}function L({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:d(s.ellipsis,e),...a,children:[r.jsx(N,{className:s.ellipsisIcon}),r.jsx("span",{className:s.srOnly,children:"Mais"})]})}l.__docgenInfo={description:`Root navigation landmark for breadcrumb trails.

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
</Breadcrumb>`,methods:[],displayName:"Breadcrumb"};L.__docgenInfo={description:`Collapsed breadcrumb indicator for truncated paths.

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
@returns A styled \`<li>\` for one breadcrumb step.`,methods:[],displayName:"BreadcrumbItem"};o.__docgenInfo={description:`A navigable link within a breadcrumb trail.

Supports \`asChild\` to delegate rendering to a custom element (e.g. a router \`<Link>\`).

@component
@param asChild - When \`true\`, merges props onto the immediate child element via \`Slot\`.
@param className - Additional class names.
@param props - Props passed to the underlying \`<a>\` or slot element.
@returns A styled anchor with a hover color transition.

@example
<BreadcrumbLink href="/">Home</BreadcrumbLink>

@example
<BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>`,methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:`Ordered list that lays out breadcrumb items horizontally with wrapping.

@component
@param className - Additional class names.
@param props - Props passed to the underlying \`<ol>\` element.
@returns A styled \`<ol>\` for breadcrumb items.`,methods:[],displayName:"BreadcrumbList"};p.__docgenInfo={description:`Non-interactive label for the current page in the breadcrumb trail.

Marked with \`aria-current="page"\` and \`aria-disabled="true"\`.

@component
@param className - Additional class names.
@param props - Props passed to the underlying \`<span>\` element.
@returns A foreground-colored \`<span>\` for the active breadcrumb step.

@example
<BreadcrumbPage>Detalhes do produto</BreadcrumbPage>`,methods:[],displayName:"BreadcrumbPage"};t.__docgenInfo={description:`Visual separator between breadcrumb items.

Defaults to a \`<ChevronRight>\` icon; pass custom \`children\` to override.

@component
@param children - Custom separator content. Defaults to \`<ChevronRight />\`.
@param className - Additional class names.
@param props - Props passed to the underlying \`<li>\` element.
@returns A presentational \`<li>\` that renders a separator icon.

@example
<BreadcrumbSeparator />
<BreadcrumbSeparator>/</BreadcrumbSeparator>`,methods:[],displayName:"BreadcrumbSeparator"};const M="_panel_10dvr_7",W={panel:M},z=e=>r.jsx("div",{className:W.panel,children:r.jsx(e,{})}),U={title:"Components/general/Breadcrumb",tags:["autodocs"],decorators:[z]},i={render:()=>r.jsx(l,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(t,{}),r.jsx(n,{children:r.jsx(o,{href:"/produtos",children:"Produtos"})}),r.jsx(t,{}),r.jsx(n,{children:r.jsx(o,{href:"/produtos/categoria",children:"Categoria"})}),r.jsx(t,{}),r.jsx(n,{children:r.jsx(p,{children:"Página atual"})})]})})},m={render:()=>r.jsx(l,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(t,{}),r.jsx(n,{children:r.jsx(L,{})}),r.jsx(t,{}),r.jsx(n,{children:r.jsx(p,{children:"Página atual"})})]})})},c={render:()=>r.jsx(l,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(o,{asChild:!0,children:r.jsx(A,{type:"button",children:"Home"})})}),r.jsx(t,{}),r.jsx(n,{children:r.jsx(p,{children:"Página atual"})})]})})};var B,h,g;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,j,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(j=m.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var _,I,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const X=["Default","WithEllipsis","AsChildLink"];export{c as AsChildLink,i as Default,m as WithEllipsis,X as __namedExportsOrder,U as default};

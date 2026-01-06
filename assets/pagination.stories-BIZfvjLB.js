import{j as t}from"./jsx-runtime-CDt2p4po.js";import{B as d}from"./index-Cxax7Vay.js";import{c as o}from"./clsx-CNgb8Gju.js";import{c as u}from"./createLucideIcon-CRoqMwob.js";import{r as E}from"./index-GiUgBvb1.js";import"./index-BlwL9mIg.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],L=u("chevron-left",I);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],w=u("chevron-right",T);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],J=u("ellipsis",q),X="_pagination_181u0_1",B="_paginationContent_181u0_8",D="_paginationLink_181u0_15",M="_prevNext_181u0_22",z="_ellipsis_181u0_39",s={pagination:X,paginationContent:B,paginationLink:D,prevNext:M,ellipsis:z};function P({className:n,...e}){return t.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o(s.pagination,n),...e})}function x({className:n,...e}){return t.jsx("ul",{"data-slot":"pagination-content",className:o(s.paginationContent,n),...e})}function r(n){return t.jsx("li",{"data-slot":"pagination-item",...n})}function v({className:n,isActive:e,children:a,...c}){return t.jsx(d,{variant:e?"outlined":"text","data-slot":"pagination-link","data-active":e,className:o(s.paginationLink,n),...c,children:a})}function _({className:n,onClick:e,...a}){return t.jsx(d,{"aria-label":"Go to previous page",size:"large",variant:"text",icon:L,iconPosition:"left",onClick:e,className:o(s.prevNext,n),...a})}function y({className:n,onClick:e,...a}){return t.jsx(d,{"aria-label":"Go to next page",size:"large",variant:"text",icon:w,iconPosition:"right",onClick:e,className:o(s.prevNext,n),...a})}function N({className:n="",...e}){return t.jsx("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o(s.ellipsis,n),...e,children:t.jsx("span",{className:"sr-only",children:t.jsx(J,{})})})}function b({page:n,totalPages:e,setPage:a,...c}){let m=!1;return t.jsx(P,{...c,children:t.jsxs(x,{children:[t.jsx(r,{children:t.jsx(_,{onClick:()=>a(p=>Math.max(p-1,1)),disabled:n===1})}),[...Array(e)].map((p,C)=>{const i=C+1,k=i===1,j=i===e,R=Math.abs(i-n)<=1,A=n<=2&&i<=3,S=n>=e-2&&i>=e-2;return k||j||R||A||S?(m=!1,t.jsx(r,{children:t.jsx(v,{isActive:n===i,onClick:()=>a(i),children:i})},i)):m?null:(m=!0,t.jsx(r,{children:t.jsx(N,{})},`ellipsis-${i}`))}),t.jsx(r,{children:t.jsx(y,{onClick:()=>a(p=>Math.min(p+1,e)),disabled:n===e})})]})})}P.__docgenInfo={description:`The root container for the pagination component.

Adds \`aria-label="pagination"\` for accessibility and applies layout styles.

@component
@param {React.ComponentProps<"nav">} props - Native \`nav\` element props.
@returns {JSX.Element}

@example
<Pagination>
  <PaginationContent>
    ...
  </PaginationContent>
</Pagination>`,methods:[],displayName:"Pagination"};x.__docgenInfo={description:`A flex container (\`ul\`) for pagination items.

Wraps pagination buttons, ellipsis, and controls in an accessible list.

@component
@param {React.ComponentProps<"ul">} props - Native \`ul\` props.
@returns {JSX.Element}`,methods:[],displayName:"PaginationContent"};r.__docgenInfo={description:`A wrapper for individual pagination elements like links or ellipsis.

@component
@param {React.ComponentProps<"li">} props - Native \`li\` props.
@returns {JSX.Element}`,methods:[],displayName:"PaginationItem"};v.__docgenInfo={description:`A button-like link for individual pages.

Visually indicates the active page via the \`isActive\` prop.

@component
@param {PaginationLinkProps} props - Props for the pagination link.
@param {boolean} [props.isActive] - Highlights the button as the current page.
@param {() => void} [props.onClick] - Click handler to update the page.
@param {React.ReactNode} [props.children] - Typically the page number.
@returns {JSX.Element}

@example
<PaginationLink isActive onClick={() => setPage(3)}>3</PaginationLink>`,methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};_.__docgenInfo={description:`A button to navigate to the previous page.

Automatically applies \`aria-label\` and left-chevron icon.

@component
@param {React.ComponentProps<typeof Button>} props - Button props.
@returns {JSX.Element}

@example
<PaginationPrevious onClick={() => setPage(page - 1)} />`,methods:[],displayName:"PaginationPrevious"};y.__docgenInfo={description:`A button to navigate to the next page.

Automatically applies \`aria-label\` and right-chevron icon.

@component
@param {React.ComponentProps<typeof Button>} props - Button props.
@returns {JSX.Element}

@example
<PaginationNext onClick={() => setPage(page + 1)} />`,methods:[],displayName:"PaginationNext"};N.__docgenInfo={description:`A non-interactive ellipsis element used when pagination range is truncated.

Visually rendered as "...", and hidden from screen readers.

@component
@param {React.ComponentProps<"span">} props - Native span props.
@returns {JSX.Element}

@example
<PaginationEllipsis />`,methods:[],displayName:"PaginationEllipsis",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};b.__docgenInfo={description:`A full-featured pagination component that renders numbered links, previous/next buttons,
and automatic ellipsis for large page sets.

Manages truncation logic and handles updating state via \`setPage\`.

@component
@param {Object} props
@param {number} props.page - The current active page (1-based).
@param {number} props.totalPages - Total number of pages to paginate.
@param {React.Dispatch<React.SetStateAction<number>>} props.setPage - State setter to update the current page.
@param {React.ComponentProps<"nav">} [props] - Additional props passed to the root \`<Pagination />\`.
@returns {JSX.Element}

@example
const [page, setPage] = useState(1);

<PaginationAll page={page} setPage={setPage} totalPages={10} />`,methods:[],displayName:"PaginationAll",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},setPage:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number>",elements:[{name:"number"}]}]},description:""}}};const V=({totalPages:n=20})=>{const[e,a]=E.useState(1);return t.jsx(b,{page:e,totalPages:n,setPage:a})},Q={title:"Components/general/Pagination",component:V,tags:["autodocs"],argTypes:{totalPages:{control:{type:"range",min:1,max:50,step:1}}}},l={args:{totalPages:20}};var g,h,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    totalPages: 20
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const U=["Default"];export{l as Default,U as __namedExportsOrder,Q as default};

import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as d}from"./index-B6QF9bbj.js";import{c as o}from"./clsx-CNgb8Gju.js";import{C as S,a as E}from"./chevron-right-0WuxLF7c.js";import{c as I}from"./createLucideIcon-CRoqMwob.js";import{r as L}from"./index-GiUgBvb1.js";import"./index-BojL7TVx.js";import"./index-DBCqBOGF.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],w=I("ellipsis",T),J="_pagination_181u0_1",X="_paginationContent_181u0_8",q="_paginationLink_181u0_15",B="_prevNext_181u0_22",z="_ellipsis_181u0_39",s={pagination:J,paginationContent:X,paginationLink:q,prevNext:B,ellipsis:z};function f({className:n,...a}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o(s.pagination,n),...a})}function P({className:n,...a}){return e.jsx("ul",{"data-slot":"pagination-content",className:o(s.paginationContent,n),...a})}function r(n){return e.jsx("li",{"data-slot":"pagination-item",...n})}function x({className:n,isActive:a,children:t,...c}){return e.jsx(d,{variant:a?"secondary":"ghost","data-slot":"pagination-link","data-active":a,className:o(s.paginationLink,n),...c,children:t})}function v({className:n,onClick:a,...t}){return e.jsx(d,{"aria-label":"Go to previous page",size:"lg",variant:"ghost",onClick:a,className:o(s.prevNext,n),...t,children:e.jsx(S,{size:16})})}function y({className:n,onClick:a,...t}){return e.jsx(d,{"aria-label":"Go to next page",size:"lg",variant:"ghost",onClick:a,className:o(s.prevNext,n),...t,children:e.jsx(E,{size:16})})}function _({className:n="",...a}){return e.jsx("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o(s.ellipsis,n),...a,children:e.jsx("span",{className:"sr-only",children:e.jsx(w,{})})})}function N({page:n,totalPages:a,setPage:t,...c}){let m=!1;return e.jsx(f,{...c,children:e.jsxs(P,{children:[e.jsx(r,{children:e.jsx(v,{onClick:()=>t(p=>Math.max(p-1,1)),disabled:n===1})}),[...Array(a)].map((p,b)=>{const i=b+1,C=i===1,k=i===a,j=Math.abs(i-n)<=1,R=n<=2&&i<=3,A=n>=a-2&&i>=a-2;return C||k||j||R||A?(m=!1,e.jsx(r,{children:e.jsx(x,{isActive:n===i,onClick:()=>t(i),children:i})},i)):m?null:(m=!0,e.jsx(r,{children:e.jsx(_,{})},`ellipsis-${i}`))}),e.jsx(r,{children:e.jsx(y,{onClick:()=>t(p=>Math.min(p+1,a)),disabled:n===a})})]})})}f.__docgenInfo={description:`The root container for the pagination component.

Adds \`aria-label="pagination"\` for accessibility and applies layout styles.

@component
@param {React.ComponentProps<"nav">} props - Native \`nav\` element props.
@returns {JSX.Element}

@example
<Pagination>
  <PaginationContent>
    ...
  </PaginationContent>
</Pagination>`,methods:[],displayName:"Pagination"};P.__docgenInfo={description:`A flex container (\`ul\`) for pagination items.

Wraps pagination buttons, ellipsis, and controls in an accessible list.

@component
@param {React.ComponentProps<"ul">} props - Native \`ul\` props.
@returns {JSX.Element}`,methods:[],displayName:"PaginationContent"};r.__docgenInfo={description:`A wrapper for individual pagination elements like links or ellipsis.

@component
@param {React.ComponentProps<"li">} props - Native \`li\` props.
@returns {JSX.Element}`,methods:[],displayName:"PaginationItem"};x.__docgenInfo={description:`A button-like link for individual pages.

Visually indicates the active page via the \`isActive\` prop.

@component
@param {PaginationLinkProps} props - Props for the pagination link.
@param {boolean} [props.isActive] - Highlights the button as the current page.
@param {() => void} [props.onClick] - Click handler to update the page.
@param {React.ReactNode} [props.children] - Typically the page number.
@returns {JSX.Element}

@example
<PaginationLink isActive onClick={() => setPage(3)}>3</PaginationLink>`,methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};v.__docgenInfo={description:`A button to navigate to the previous page.

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
<PaginationNext onClick={() => setPage(page + 1)} />`,methods:[],displayName:"PaginationNext"};_.__docgenInfo={description:`A non-interactive ellipsis element used when pagination range is truncated.

Visually rendered as "...", and hidden from screen readers.

@component
@param {React.ComponentProps<"span">} props - Native span props.
@returns {JSX.Element}

@example
<PaginationEllipsis />`,methods:[],displayName:"PaginationEllipsis",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};N.__docgenInfo={description:`A full-featured pagination component that renders numbered links, previous/next buttons,
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

<PaginationAll page={page} setPage={setPage} totalPages={10} />`,methods:[],displayName:"PaginationAll",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},setPage:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number>",elements:[{name:"number"}]}]},description:""}}};const D=({totalPages:n=20})=>{const[a,t]=L.useState(1);return e.jsx(N,{page:a,totalPages:n,setPage:t})},Q={title:"Components/general/Pagination",component:D,tags:["autodocs"],argTypes:{totalPages:{control:{type:"range",min:1,max:50,step:1}}}},l={args:{totalPages:20}};var u,g,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    totalPages: 20
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const U=["Default"];export{l as Default,U as __namedExportsOrder,Q as default};

import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as d}from"./index-B6QF9bbj.js";import{c as o}from"./clsx-CNgb8Gju.js";import{C as E}from"./chevron-left-bC-ph08T.js";import{E as S}from"./ellipsis-DSWkjN00.js";import{C as I}from"./chevron-right-DUgH9T71.js";import{r as L}from"./index-GiUgBvb1.js";import"./index-BojL7TVx.js";import"./index-DBCqBOGF.js";import"./createLucideIcon-CRoqMwob.js";const T="_pagination_181u0_1",J="_paginationContent_181u0_8",X="_paginationLink_181u0_15",q="_prevNext_181u0_22",w="_ellipsis_181u0_39",s={pagination:T,paginationContent:J,paginationLink:X,prevNext:q,ellipsis:w};function f({className:n,...t}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o(s.pagination,n),...t})}function P({className:n,...t}){return e.jsx("ul",{"data-slot":"pagination-content",className:o(s.paginationContent,n),...t})}function r(n){return e.jsx("li",{"data-slot":"pagination-item",...n})}function x({className:n,isActive:t,children:a,...c}){return e.jsx(d,{variant:t?"secondary":"ghost","data-slot":"pagination-link","data-active":t,className:o(s.paginationLink,n),...c,children:a})}function v({className:n,onClick:t,...a}){return e.jsx(d,{"aria-label":"Go to previous page",size:"lg",variant:"ghost",onClick:t,className:o(s.prevNext,n),...a,children:e.jsx(E,{size:16})})}function _({className:n,onClick:t,...a}){return e.jsx(d,{"aria-label":"Go to next page",size:"lg",variant:"ghost",onClick:t,className:o(s.prevNext,n),...a,children:e.jsx(I,{size:16})})}function b({className:n="",...t}){return e.jsx("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o(s.ellipsis,n),...t,children:e.jsx("span",{className:"sr-only",children:e.jsx(S,{})})})}function C({page:n,totalPages:t,setPage:a,...c}){let m=!1;return e.jsx(f,{...c,children:e.jsxs(P,{children:[e.jsx(r,{children:e.jsx(v,{onClick:()=>a(p=>Math.max(p-1,1)),disabled:n===1})}),[...Array(t)].map((p,N)=>{const i=N+1,y=i===1,j=i===t,k=Math.abs(i-n)<=1,R=n<=2&&i<=3,A=n>=t-2&&i>=t-2;return y||j||k||R||A?(m=!1,e.jsx(r,{children:e.jsx(x,{isActive:n===i,onClick:()=>a(i),children:i})},i)):m?null:(m=!0,e.jsx(r,{children:e.jsx(b,{})},`ellipsis-${i}`))}),e.jsx(r,{children:e.jsx(_,{onClick:()=>a(p=>Math.min(p+1,t)),disabled:n===t})})]})})}f.__docgenInfo={description:`The root container for the pagination component.

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
<PaginationPrevious onClick={() => setPage(page - 1)} />`,methods:[],displayName:"PaginationPrevious"};_.__docgenInfo={description:`A button to navigate to the next page.

Automatically applies \`aria-label\` and right-chevron icon.

@component
@param {React.ComponentProps<typeof Button>} props - Button props.
@returns {JSX.Element}

@example
<PaginationNext onClick={() => setPage(page + 1)} />`,methods:[],displayName:"PaginationNext"};b.__docgenInfo={description:`A non-interactive ellipsis element used when pagination range is truncated.

Visually rendered as "...", and hidden from screen readers.

@component
@param {React.ComponentProps<"span">} props - Native span props.
@returns {JSX.Element}

@example
<PaginationEllipsis />`,methods:[],displayName:"PaginationEllipsis",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};C.__docgenInfo={description:`A full-featured pagination component that renders numbered links, previous/next buttons,
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

<PaginationAll page={page} setPage={setPage} totalPages={10} />`,methods:[],displayName:"PaginationAll",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},setPage:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number>",elements:[{name:"number"}]}]},description:""}}};const B=({totalPages:n=20})=>{const[t,a]=L.useState(1);return e.jsx(C,{page:t,totalPages:n,setPage:a})},Q={title:"Components/general/Pagination",component:B,tags:["autodocs"],argTypes:{totalPages:{control:{type:"range",min:1,max:50,step:1}}}},l={args:{totalPages:20}};var g,u,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    totalPages: 20
  }
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const U=["Default"];export{l as Default,U as __namedExportsOrder,Q as default};

import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as S}from"./index-DRjF_FHU.js";import{B as g}from"./index-DTYX8Gcn.js";import{c as r}from"./clsx-DegBVMCo.js";import{C as I}from"./chevron-left-DZB6-_aE.js";import{E as L}from"./ellipsis-j6D6ynno.js";import{C as T}from"./chevron-right-DB87OsJK.js";import"./index-C7sk0Hs-.js";import"./index-Bms3GI6n.js";import"./createLucideIcon-Bl20gA7w.js";const J="_pagination_181u0_1",X="_paginationContent_181u0_8",q="_paginationLink_181u0_15",w="_prevNext_181u0_22",B="_ellipsis_181u0_39",M="_ellipsisIcon_181u0_48",o={pagination:J,paginationContent:X,paginationLink:q,prevNext:w,ellipsis:B,ellipsisIcon:M};function f({className:n,...a}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:r(o.pagination,n),...a})}function x({className:n,...a}){return e.jsx("ul",{"data-slot":"pagination-content",className:r(o.paginationContent,n),...a})}function p(n){return e.jsx("li",{"data-slot":"pagination-item",...n})}function v({className:n,isActive:a,children:t,...m}){return e.jsx(g,{variant:a?"secondary":"ghost","data-slot":"pagination-link","data-active":a,"aria-current":a?"page":void 0,className:r(o.paginationLink,n),...m,children:t})}function _({className:n,onClick:a,...t}){return e.jsx(g,{"aria-label":"Go to previous page",size:"lg",variant:"ghost",onClick:a,className:r(o.prevNext,n),...t,children:e.jsx(I,{size:16})})}function b({className:n,onClick:a,...t}){return e.jsx(g,{"aria-label":"Go to next page",size:"lg",variant:"ghost",onClick:a,className:r(o.prevNext,n),...t,children:e.jsx(T,{size:16})})}function C({className:n="",...a}){return e.jsx("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:r(o.ellipsis,n),...a,children:e.jsx(L,{className:o.ellipsisIcon,"aria-hidden":!0})})}function N({page:n,totalPages:a,setPage:t,...m}){const s=Math.max(1,Math.floor(a));let d=!1;return e.jsx(f,{...m,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(_,{onClick:()=>t(l=>Math.max(l-1,1)),disabled:n<=1})}),[...Array(s)].map((l,y)=>{const i=y+1,k=i===1,j=i===s,R=Math.abs(i-n)<=1,A=n<=2&&i<=3,E=n>=s-2&&i>=s-2;return k||j||R||A||E?(d=!1,e.jsx(p,{children:e.jsx(v,{isActive:n===i,onClick:()=>t(i),children:i})},i)):d?null:(d=!0,e.jsx(p,{children:e.jsx(C,{})},`ellipsis-${i}`))}),e.jsx(p,{children:e.jsx(b,{onClick:()=>t(l=>Math.min(l+1,s)),disabled:n>=s})})]})})}f.__docgenInfo={description:`The root container for the pagination component.

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
@returns {JSX.Element}`,methods:[],displayName:"PaginationContent"};p.__docgenInfo={description:`A wrapper for individual pagination elements like links or ellipsis.

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
<PaginationPrevious onClick={() => setPage(page - 1)} />`,methods:[],displayName:"PaginationPrevious"};b.__docgenInfo={description:`A button to navigate to the next page.

Automatically applies \`aria-label\` and right-chevron icon.

@component
@param {React.ComponentProps<typeof Button>} props - Button props.
@returns {JSX.Element}

@example
<PaginationNext onClick={() => setPage(page + 1)} />`,methods:[],displayName:"PaginationNext"};C.__docgenInfo={description:`A non-interactive ellipsis element used when pagination range is truncated.

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

<PaginationAll page={page} setPage={setPage} totalPages={10} />`,methods:[],displayName:"PaginationAll",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},setPage:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number>",elements:[{name:"number"}]}]},description:""}}};const D=({totalPages:n=20})=>{const[a,t]=S.useState(1);return e.jsx(N,{page:a,totalPages:n,setPage:t})},Y={title:"Components/general/Pagination",component:D,tags:["autodocs"],argTypes:{totalPages:{control:{type:"range",min:1,max:50,step:1}}}},c={args:{totalPages:20}};var u,h,P;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    totalPages: 20
  }
}`,...(P=(h=c.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};const Z=["Default"];export{c as Default,Z as __namedExportsOrder,Y as default};

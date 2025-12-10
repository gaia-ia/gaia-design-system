import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as o}from"./clsx-CNgb8Gju.js";import"./index-GiUgBvb1.js";const h="_tableContainer_1blrh_1",_="_table_1blrh_1",u="_tableHeader_1blrh_15",w="_tableBody_1blrh_19",C="_tableRow_1blrh_32",y="_tableHead_1blrh_15",x="_tableCell_1blrh_67",t={tableContainer:h,table:_,tableHeader:u,tableBody:w,tableRow:C,tableHead:y,tableCell:x};function d({className:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:o(t.tableContainer),children:e.jsx("table",{"data-slot":"table",className:`${t.table} ${a}`,...l})})}function T({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:o(t.tableHeader,a),...l})}function p({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:o(t.tableBody,a),...l})}function r({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:o(t.tableRow,a),...l})}function m({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:o(t.tableHead,a),...l})}function n({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:o(t.tableCell,a),...l})}d.__docgenInfo={description:`A responsive table wrapper component with consistent layout and styling.

Renders a native \`<table>\` element wrapped in a scrollable container. Designed to be used with
child components like \`TableHeader\`, \`TableBody\`, \`TableRow\`, etc.

@component
@param {TableProps} props - Props for the table element.
@param {string} [props.className] - Additional class name(s) for the \`<table>\`.
@returns {JSX.Element}

@example
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>alice@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`,methods:[],displayName:"Table"};T.__docgenInfo={description:"Renders a `<thead>` section with consistent styling.\n\nShould contain one or more `TableRow` elements with `TableHead` cells.\n\n@component\n@param {THeadProps} props - Props for the `<thead>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableHeader"};p.__docgenInfo={description:"Renders a `<tbody>` element to wrap the main table rows.\n\n@component\n@param {TBodyProps} props - Props for the `<tbody>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableBody"};r.__docgenInfo={description:"Renders a `<tr>` (table row) with optional styling hooks.\n\nShould be used inside `TableHeader`, `TableBody`, or `TableFooter`.\n\n@component\n@param {TRProps} props - Props for the `<tr>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableRow"};m.__docgenInfo={description:"Renders a `<th>` (header cell) inside a table row.\n\nUsually placed inside `TableHeader`.\n\n@component\n@param {THProps} props - Props for the `<th>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"Renders a `<td>` (data cell) inside a table row.\n\n@component\n@param {TDProps} props - Props for the `<td>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableCell"};const j={title:"Components/general/Table",component:d,tags:["autodocs"]},s=a=>e.jsxs(d,{...a,children:[e.jsx(T,{children:e.jsx(r,{children:e.jsxs(m,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Age"}),e.jsx(n,{children:"Location"})]})})}),e.jsxs(p,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"John Doe"}),e.jsx(n,{children:"30"}),e.jsx(n,{children:"New York"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Jane Doe"}),e.jsx(n,{children:"25"}),e.jsx(n,{children:"London"})]})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var b,c,i;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args: Meta<typeof Table>) => <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Location</TableCell>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>30</TableCell>
        <TableCell>New York</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Doe</TableCell>
        <TableCell>25</TableCell>
        <TableCell>London</TableCell>
      </TableRow>
    </TableBody>
  </Table>`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,j as default};

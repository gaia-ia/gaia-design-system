import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as s}from"./clsx-CNgb8Gju.js";import"./index-GiUgBvb1.js";const p="_tableContainer_1mwcm_1",h="_table_1mwcm_1",w="_tableBody_1mwcm_18",C="_tableRow_1mwcm_31",_="_tableHead_1mwcm_14",u="_tableCell_1mwcm_66",o={tableContainer:p,table:h,tableBody:w,tableRow:C,tableHead:_,tableCell:u};function b({className:l,...n}){return e.jsx("div",{"data-slot":"table-container",className:s(o.tableContainer),children:e.jsx("table",{"data-slot":"table",className:`${o.table} ${l}`,...n})})}function T({className:l,...n}){return e.jsx("tbody",{"data-slot":"table-body",className:s(o.tableBody,l),...n})}function r({className:l,...n}){return e.jsx("tr",{"data-slot":"table-row",className:s(o.tableRow,l),...n})}function d({className:l,...n}){return e.jsx("th",{"data-slot":"table-head",className:s(o.tableHead,l),...n})}function a({className:l,...n}){return e.jsx("td",{"data-slot":"table-cell",className:s(o.tableCell,l),...n})}b.__docgenInfo={description:`A responsive table wrapper component with consistent layout and styling.

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
</Table>`,methods:[],displayName:"Table"};T.__docgenInfo={description:"Renders a `<tbody>` element to wrap the main table rows.\n\n@component\n@param {TBodyProps} props - Props for the `<tbody>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableBody"};r.__docgenInfo={description:"Renders a `<tr>` (table row) with optional styling hooks.\n\nShould be used inside `TableHeader`, `TableBody`, or `TableFooter`.\n\n@component\n@param {TRProps} props - Props for the `<tr>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableRow"};d.__docgenInfo={description:"Renders a `<th>` (header cell) inside a table row.\n\nUsually placed inside `TableHeader`.\n\n@component\n@param {THProps} props - Props for the `<th>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableHead"};a.__docgenInfo={description:"Renders a `<td>` (data cell) inside a table row.\n\n@component\n@param {TDProps} props - Props for the `<td>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableCell"};const j={title:"Components/general/Table",component:b,tags:["autodocs"]},t=l=>e.jsxs(b,{...l,children:[e.jsx(d,{children:e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Age"}),e.jsx(a,{children:"Location"})]})})}),e.jsxs(T,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"30"}),e.jsx(a,{children:"New York"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"Jane Doe"}),e.jsx(a,{children:"25"}),e.jsx(a,{children:"London"})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args: Meta<typeof Table>) => <Table {...args}>
    <TableHead>
      <TableRow>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Location</TableCell>
        </TableHead>
      </TableRow>
    </TableHead>
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
  </Table>`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,j as default};

import{j as e}from"./jsx-runtime-DiklIkkE.js";import{c as t}from"./clsx-DegBVMCo.js";import"./index-DRjF_FHU.js";const w="_tableContainer_1l48w_1",u="_table_1l48w_1",f="_tableHeader_1l48w_21",y="_tableBody_1l48w_25",_="_tableRow_1l48w_38",x="_tableHead_1l48w_21",C="_tableCell_1l48w_78",o={tableContainer:w,table:u,tableHeader:f,tableBody:y,tableRow:_,tableHead:x,tableCell:C};function d({className:a,containerLabel:l="Tabela",...h}){return e.jsx("div",{"data-slot":"table-container",className:t(o.tableContainer),role:"region","aria-label":l,tabIndex:0,children:e.jsx("table",{"data-slot":"table",className:t(o.table,a),...h})})}function p({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:t(o.tableHeader,a),...l})}function T({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:t(o.tableBody,a),...l})}function r({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:t(o.tableRow,a),...l})}function m({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:t(o.tableHead,a),...l})}function n({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:t(o.tableCell,a),...l})}d.__docgenInfo={description:`A responsive table wrapper component with consistent layout and styling.

Renders a native \`<table>\` element wrapped in a scrollable container. Designed to be used with
child components like \`TableHeader\`, \`TableBody\`, \`TableRow\`, etc.

@component
@param {TableProps} props - Props for the table element.
@param {string} [props.className] - Additional class name(s) for the \`<table>\`.
@param {string} [props.containerLabel="Tabela"] - Accessible name of the scroll container. The container is a focusable \`role="region"\`, so a table wider than the screen can be scrolled from the keyboard.
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
</Table>`,methods:[],displayName:"Table",props:{containerLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the scroll container (`role="region"`). The container\nis keyboard-focusable so wide tables can be scrolled with the arrow keys.\nDefaults to `"Tabela"`; pass something specific when a page has more than\none table.',defaultValue:{value:'"Tabela"',computed:!1}}}};p.__docgenInfo={description:"Renders a `<thead>` section with consistent styling.\n\nShould contain one or more `TableRow` elements with `TableHead` cells.\n\n@component\n@param {THeadProps} props - Props for the `<thead>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableHeader"};T.__docgenInfo={description:"Renders a `<tbody>` element to wrap the main table rows.\n\n@component\n@param {TBodyProps} props - Props for the `<tbody>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableBody"};r.__docgenInfo={description:'Renders a `<tr>` (table row) with optional styling hooks.\n\nShould be used inside `TableHeader`, `TableBody`, or `TableFooter`. To mark a\nrow as selected, pass `data-state="selected"` (visual only) or\n`aria-selected` (also exposed to assistive tech, for tables with\n`role="grid"`); both get the selected style: a tinted background and a 3px\nbar in the action orange on the first cell.\n\n@component\n@param {TRProps} props - Props for the `<tr>` element.\n@returns {JSX.Element}',methods:[],displayName:"TableRow"};m.__docgenInfo={description:"Renders a `<th>` (header cell) inside a table row.\n\nUsually placed inside `TableHeader`.\n\n@component\n@param {THProps} props - Props for the `<th>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"Renders a `<td>` (data cell) inside a table row.\n\n@component\n@param {TDProps} props - Props for the `<td>` element.\n@returns {JSX.Element}",methods:[],displayName:"TableCell"};const j={title:"Components/general/Table",component:d,tags:["autodocs"]},s=a=>e.jsxs(d,{...a,children:[e.jsx(p,{children:e.jsx(r,{children:e.jsxs(m,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Age"}),e.jsx(n,{children:"Location"})]})})}),e.jsxs(T,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"John Doe"}),e.jsx(n,{children:"30"}),e.jsx(n,{children:"New York"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Jane Doe"}),e.jsx(n,{children:"25"}),e.jsx(n,{children:"London"})]})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var b,i,c;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args: Meta<typeof Table>) => <Table {...args}>
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
  </Table>`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,j as default};

import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const u="_tableContainer_1mwcm_1",T="_table_1mwcm_1",p="_tableBody_1mwcm_18",f="_tableRow_1mwcm_31",_="_tableHead_1mwcm_14",C="_tableCell_1mwcm_66",o={tableContainer:u,table:T,tableBody:p,tableRow:f,tableHead:_,tableCell:C};function r({className:l="",...t}){return e.jsx("div",{"data-slot":"table-container",className:o.tableContainer,children:e.jsx("table",{"data-slot":"table",className:`${o.table} ${l}`,...t})})}function m({className:l="",...t}){return e.jsx("tbody",{"data-slot":"table-body",className:`${o.tableBody} ${l}`,...t})}function n({className:l="",...t}){return e.jsx("tr",{"data-slot":"table-row",className:`${o.tableRow} ${l}`,...t})}function d({className:l="",...t}){return e.jsx("th",{"data-slot":"table-head",className:`${o.tableHead} ${l}`,...t})}function a({className:l="",...t}){return e.jsx("td",{"data-slot":"table-cell",className:`${o.tableCell} ${l}`,...t})}r.__docgenInfo={description:"",methods:[],displayName:"Table",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const j={title:"Components/general/Table",component:r,tags:["autodocs"]},s=l=>e.jsxs(r,{...l,children:[e.jsx(d,{children:e.jsx(n,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Age"}),e.jsx(a,{children:"Location"})]})})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"30"}),e.jsx(a,{children:"New York"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Jane Doe"}),e.jsx(a,{children:"25"}),e.jsx(a,{children:"London"})]})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,b,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: Meta<typeof Table>) => <Table {...args}>
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
  </Table>`,...(i=(b=s.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,j as default};

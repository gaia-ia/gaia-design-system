import{j as l}from"./jsx-runtime-CDt2p4po.js";import{r as L}from"./index-GiUgBvb1.js";import{S as T}from"./index-CXQuvIUU.js";import{B as W}from"./index-BlwL9mIg.js";import"./index-DW48STyt.js";import"./index-DBCqBOGF.js";import"./index-D5bCXf9E.js";import"./index-WUhAcQt0.js";import"./index-Dya9PstJ.js";import"./index-Bav0yaTQ.js";import"./index-C9v26AP-.js";import"./index-CROobee-.js";import"./index-BojL7TVx.js";import"./clsx-CNgb8Gju.js";const F=(m,e)=>{const[s,r]=L.useState(e.args.checked??!1);return l.jsx(m,{args:{...e.args,checked:s,onCheckedChange:r}})},Y={title:"Components/inputs/Switch",component:T,tags:["autodocs"],decorators:[F],argTypes:{size:{options:["default","sm"],control:{type:"select"},description:"Tamanho visual do switch"},checked:{control:"boolean",description:"Estado controlado do switch"},disabled:{control:"boolean",description:"Se o switch está desabilitado"}}},a={args:{size:"default",checked:!1,disabled:!1}},t={args:{size:"default",checked:!0}},o={args:{size:"sm",checked:!1}},c={args:{size:"sm",checked:!0}},n={args:{size:"default",checked:!1,disabled:!0}},d={args:{size:"default",checked:!0,disabled:!0}},i={decorators:[(m,e)=>{const[s,r]=L.useState(!1);return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(m,{args:{...e.args,checked:s,onCheckedChange:r}}),l.jsx(W,{as:"label",variant:"small_body",style:{cursor:"pointer"},onClick:()=>r(!s),children:"Ativar notificações"})]})}],args:{size:"default"}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "default",
    checked: false,
    disabled: false
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,k,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "default",
    checked: true
  }
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var S,C,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "sm",
    checked: false
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,x,z;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "sm",
    checked: true
  }
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var v,D,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "default",
    checked: false,
    disabled: true
  }
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var w,B,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "default",
    checked: true,
    disabled: true
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,A,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn, context: StoryContext) => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
          <Story args={{
        ...context.args,
        checked,
        onCheckedChange: setChecked
      }} />
          <Body as="label" variant="small_body" style={{
        cursor: "pointer"
      }} onClick={() => setChecked(!checked)}>
            Ativar notificações
          </Body>
        </div>;
  }],
  args: {
    size: "default"
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const Z=["Default","Checked","Small","SmallChecked","Disabled","DisabledChecked","WithLabel"];export{t as Checked,a as Default,n as Disabled,d as DisabledChecked,o as Small,c as SmallChecked,i as WithLabel,Z as __namedExportsOrder,Y as default};

import{j as a}from"./jsx-runtime-DiklIkkE.js";import{A as t,a as e,b as r,c as T,d as M,e as H}from"./index-B8X3wbo5.js";import"./index-DRjF_FHU.js";import"./index-BrKBBPft.js";import"./index-Bnhoviar.js";import"./index-DHHUZ-3A.js";import"./index-Bms3GI6n.js";import"./index-CRg7EHxj.js";import"./clsx-DegBVMCo.js";const J="_panel_qfj94_6",P={panel:J},s={woman:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",man:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",person:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"},Q=g=>a.jsx("div",{className:P.panel,children:a.jsx(g,{})}),sa={title:"Components/general/Avatar",component:t,tags:["autodocs"],decorators:[Q],argTypes:{size:{options:["default","sm","lg"],control:{type:"radio"},description:"Tamanho do avatar"},children:{control:!1,description:"Conteúdo interno do avatar"}}},n={args:{size:"default",children:a.jsxs(a.Fragment,{children:[a.jsx(e,{src:s.woman,alt:"Olivia Rhye"}),a.jsx(r,{children:"OR"})]})}},l={args:{size:"sm",children:a.jsxs(a.Fragment,{children:[a.jsx(e,{src:s.man,alt:"Noah Kim"}),a.jsx(r,{children:"NK"})]})}},o={args:{size:"lg",children:a.jsxs(a.Fragment,{children:[a.jsx(e,{src:s.person,alt:"Sophia Lee"}),a.jsx(r,{children:"SL"})]})}},c={args:{size:"default",children:a.jsx(r,{children:"ER"})}},i={args:{size:"default",children:a.jsxs(a.Fragment,{children:[a.jsx(e,{src:"https://invalid-url/avatar.png",alt:"Broken avatar"}),a.jsx(r,{children:"BR"})]})}},m={render:g=>a.jsxs("div",{style:{position:"relative",width:"fit-content"},children:[a.jsxs(t,{...g,children:[a.jsx(e,{src:s.woman,alt:"Emma Wilson"}),a.jsx(r,{children:"EW"})]}),a.jsx(T,{})]}),args:{size:"default"}},d={render:()=>a.jsxs(M,{children:[a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.woman,alt:"Olivia Rhye"}),a.jsx(r,{children:"OR"})]}),a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.man,alt:"Noah Kim"}),a.jsx(r,{children:"NK"})]}),a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.person,alt:"Sophia Lee"}),a.jsx(r,{children:"SL"})]})]})},v={render:()=>a.jsxs(M,{children:[a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.woman,alt:"Olivia Rhye"}),a.jsx(r,{children:"OR"})]}),a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.man,alt:"Noah Kim"}),a.jsx(r,{children:"NK"})]}),a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.person,alt:"Sophia Lee"}),a.jsx(r,{children:"SL"})]}),a.jsx(H,{children:"+4"})]})},p={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsxs(t,{size:"sm",children:[a.jsx(e,{src:s.woman,alt:"Small avatar"}),a.jsx(r,{children:"SM"})]}),a.jsxs(t,{size:"default",children:[a.jsx(e,{src:s.man,alt:"Default avatar"}),a.jsx(r,{children:"DF"})]}),a.jsxs(t,{size:"lg",children:[a.jsx(e,{src:s.person,alt:"Large avatar"}),a.jsx(r,{children:"LG"})]})]})};var u,h,A;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "default",
    children: <>
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </>
  }
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var x,j,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: <>
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </>
  }
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var F,k,b;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: <>
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </>
  }
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var z,I,S;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "default",
    children: <AvatarFallback>ER</AvatarFallback>
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,R,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "default",
    children: <>
        <AvatarImage src="https://invalid-url/avatar.png" alt="Broken avatar" />
        <AvatarFallback>BR</AvatarFallback>
      </>
  }
}`,...(w=(R=i.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var y,G,N;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    position: "relative",
    width: "fit-content"
  }}>
      <Avatar {...args}>
        <AvatarImage src={avatarImages.woman} alt="Emma Wilson" />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <AvatarBadge />
    </div>,
  args: {
    size: "default"
  }
}`,...(N=(G=m.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var O,K,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
}`,...(B=(K=d.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var C,E,W;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>

      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
}`,...(W=(E=v.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var D,_,q;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      <Avatar size="sm">
        <AvatarImage src={avatarImages.woman} alt="Small avatar" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Default avatar" />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>

      <Avatar size="lg">
        <AvatarImage src={avatarImages.person} alt="Large avatar" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const ta=["Default","Small","Large","Fallback","BrokenImage","WithBadge","Group","GroupWithCount","SizesComparison"];export{i as BrokenImage,n as Default,c as Fallback,d as Group,v as GroupWithCount,o as Large,p as SizesComparison,l as Small,m as WithBadge,ta as __namedExportsOrder,sa as default};

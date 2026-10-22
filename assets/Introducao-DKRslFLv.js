import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as r}from"./index-ChEI-nsM.js";import{M as i}from"./index-DEPf9Dd5.js";import"./index-DRjF_FHU.js";import"./iframe-DBTyuhD0.js";import"./index-DHHUZ-3A.js";import"./index-FTTXbSiM.js";import"./index-DrFu-skq.js";function n(o){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introdução"}),`
`,e.jsx(s.h1,{id:"gaia-design-system",children:"GAIA Design System"}),`
`,e.jsx(s.p,{children:"Componentes e tokens usados por todos os produtos da GAIA: gaia-app, BrandSync, CR.IA Studio e Confere."}),`
`,e.jsx(s.h2,{id:"pacotes",children:"Pacotes"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"@gaia-dev/theme"})}),": cores, fontes e superfícies, em claro e escuro, como variáveis CSS."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"@gaia-dev/ui"})}),": componentes React (botões, campos, tabela, diálogos…) que usam o tema."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`yarn add @gaia-dev/theme @gaia-dev/ui
`})}),`
`,e.jsx(s.p,{children:"Importe o tema uma vez, na entrada do app, antes de qualquer componente:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import "@gaia-dev/theme/index.css";
`})}),`
`,e.jsx(s.h2,{id:"como-ver-os-componentes",children:"Como ver os componentes"}),`
`,e.jsxs(s.p,{children:["Use o seletor ",e.jsx(s.strong,{children:"Tema"})," na barra superior:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Claro"})," e ",e.jsx(s.strong,{children:"Escuro"})," trocam o Storybook inteiro: a interface, as Docs e as histórias."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Lado a lado"})," mostra a mesma história nos dois temas, para comparar."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Na aba ",e.jsx(s.strong,{children:"Controls"}),", embaixo da história, dá para mudar as props e ver o resultado na hora."]}),`
`,e.jsx(s.h2,{id:"tokens-principais",children:"Tokens principais"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--color-primary-fill"})," e ",e.jsx(s.code,{children:"--color-on-primary"}),": botão principal e item ativo (passa no AA com o texto branco)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--color-surface-canvas"}),", ",e.jsx(s.code,{children:"-raised"})," e ",e.jsx(s.code,{children:"-muted"}),": fundo da página, cards e painéis."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--color-border-subtle"})," e ",e.jsx(s.code,{children:"--color-border-field"}),": divisórias e borda dos campos."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--color-control"}),", ",e.jsx(s.code,{children:"-hover"})," e ",e.jsx(s.code,{children:"-active"}),": trilhos, botões neutros e seletores segmentados."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--color-danger-soft"})," e ",e.jsx(s.code,{children:"--color-danger-soft-text"}),": ações destrutivas."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--font-heading"})," e ",e.jsx(s.code,{children:"--font-body"}),": Geist nos títulos, DM Sans no corpo."]}),`
`]}),`
`,e.jsxs(s.p,{children:["A escala completa está em ",e.jsx(s.strong,{children:"Tokens → Cores"}),"."]})]})}function p(o={}){const{wrapper:s}={...r(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(n,{...o})}):n(o)}export{p as default};

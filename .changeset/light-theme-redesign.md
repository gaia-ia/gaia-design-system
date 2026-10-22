---
"@gaia-dev/theme": minor
"@gaia-dev/ui": minor
---

Modo claro mais confortável e títulos sem a fonte mono, validados como protótipo no gaia-app, BrandSync e CR.IA Studio (mesmo padrão do Confere). Nenhum token foi removido; o modo escuro mantém os valores atuais, exceto `text-500` (abaixo).

**`@gaia-dev/theme`**

- Fundos do claro passam de "stone" (quentes) para neutros quase puros: `background-100` `#fafafa`, `200` `#f3f3f3`, `300` `#ebebeb`, `400` `#d6d6d6`, `500` `#b8b8b8`, e o resto da escala no mesmo tom.
- Texto do claro mais macio: `text-950` sai de `#0d0d0d` (~19:1 sobre o branco) para `#141414`; os degraus de apoio (`400`–`900`) ficam neutros.
- `text-500` escurece para passar no AA como texto: `#6e6e6e` no claro (antes `#808080`; 5,1:1 no branco, 4,9:1 no `#fafafa`) e `#8a8a8a` no escuro (antes `#808080`, 4,4:1 no `#1a1a1a`; agora 5,0:1).
- Tokens novos por papel, com valor próprio em cada modo (os degraus `background-300`/`400` acendiam demais no escuro): `--color-surface-canvas`, `--color-surface-raised`, `--color-surface-muted`, `--color-border-subtle`, `--color-border-field`, `--color-border-field-hover`, `--color-control`, `--color-control-hover`, `--color-control-active`, `--color-row-hover`.
- Escala `primary`: 50 a 500 não mudam (o 500, `#ff7b00`, continua a cor da marca). Do 600 para baixo ela puxa para o vermelho e vira a escala do laranja de ação: `600` `#d74100`, `700` `#bf3a00`, `800` `#8a2a00`, `900` `#521900`, `950` `#2e0e00`, espelhada no escuro.
- Laranja de ação: `--color-primary-fill` (`#d74100`, o `primary-600` do claro, 4,52:1 com branco), `--color-primary-fill-hover` (`#bf3a00`) e `--color-on-primary`. É o mesmo laranja do botão principal, do item ativo, de todos os focos e dos estados marcado/ligado.
- Destrutivo suave: `--color-danger-soft`, `--color-danger-soft-hover`, `--color-danger-soft-text` e `--color-danger-soft-border` (texto 5,8:1 no claro, 7,5:1 no escuro).
- Fontes como tokens: `--font-body` (DM Sans), `--font-heading` (Geist, carregada junto com o tema) e `--font-mono` (Source Code Pro).

**`@gaia-dev/ui`**

- **Novo `Sidebar`**: a navegação lateral dos produtos (gaia-app, BrandSync, CR.IA Studio), igual à que foi validada nos apps. Painel flutuante com logo, grupos de links separados por divisória (o ativo no laranja de ação), e no rodapé tema, idioma e conta no mesmo formato de linha. Recolhe para só ícones, com dica no hover, e pode lembrar a escolha (`storageKey`). Abaixo de `mobileBreakpoint` (padrão 700px) vira barra no topo com menu. Não depende de router: `linkAs={NavLink}` integra com o react-router, e o item ativo vem do `aria-current`. Textos em português por padrão, trocáveis por `labels`.
- `Title`: usa `--font-heading` (Geist) no lugar da Source Code Pro; a variante `title` fica em peso 600.
- `Input`, `Textarea`, `Select` e `Combobox`/`ComboboxMulti`: borda visível em repouso (`--color-border-field`) e no hover (`--color-border-field-hover`); o foco usa `--color-primary-fill`, o mesmo laranja do botão. Sobre o branco, só o fundo cinza-claro não deixava claro que era um campo.
- `Table`: sem zebra (linha sim, linha não com cor). As divisórias usam `--color-border-subtle` e o hover da linha usa `--color-row-hover`.
- `Button`, no mesmo padrão da sidebar dos produtos:
  - `default`: `--color-primary-fill` com texto branco em peso 600 (antes `primary-400` com texto escuro); hover em `--color-primary-fill-hover`.
  - `outline`: borda dos campos (`--color-border-field`) sobre `--color-surface-raised`, sem o contorno preto nem o sublinhado no hover.
  - `secondary`: `--color-control` / `--color-control-hover`, que não acendem no escuro.
  - `ghost`: texto `text-700`, hover em `background-200`, como os links da sidebar.
  - `destructive`: suave, com fundo `--color-danger-soft`, texto `--color-danger-soft-text` em peso 600 e borda leve. Antes era um rosa-salmão (`#eb9e9e`) com texto escuro.
  - `link`: `primary-700` (claro 5,5:1, escuro 10,4:1); o `400` quase sumia sobre o branco.
  - Foco: contorno de 2px em `--color-primary-fill` com 1px de afastamento (o `400`/`500` ficavam abaixo dos 3:1 pedidos para indicador de foco).
- `ButtonGroup`: cada opção segue o `Button`, neutra (`--color-control`) e com o preenchimento do principal quando escolhida; raio de 8px e 32px de altura no lugar da pílula, que ficava laranja no hover com texto branco a 2,6:1.
- `Tabs` (variante `default`): seletor segmentado, com trilho `--color-control` e aba ativa em `--color-control-active` com sombra leve; abas inativas em `text-600` (antes `text-400`, 1,9:1). Foco no laranja de ação.
- `AvatarGroup`: o anel entre os avatares (e o do selo) usa `--color-surface-canvas`; o `background-800` virava um contorno cinza-escuro no claro.
- `Checkbox` e `RadioInput`: marcados com `--color-primary-fill`; contorno em `text-500` (5,1:1).
- `Switch` e `Slider`: ligado/preenchido com `--color-primary-fill`; trilho em `--color-control`/`--color-control-hover` (o `background-400` acendia no escuro). Foco do `Switch` com contorno no laranja de ação.
- `DatePicker` e `Multicheck`: o gatilho ganha a mesma borda dos outros campos.
- `ColorPicker` e `FileUpload`: bordas em `--color-border-field` e foco no laranja de ação.
- Todos os focos e indicadores (`Accordion`, `Badge`, `Calendar`, `Resizable`, `Tabs`, `Switch`, campos) usam `--color-primary-fill`; o dia selecionado do `Calendar` também, com texto branco. A opção escolhida do `Select`/`Combobox` usa texto `primary-700` sobre `primary-50`.
- `Badge`: raio de 6px e peso 600. As variantes passam para os tokens do tema e valem nos dois modos sem `prefers-color-scheme`. `default` usa `--color-control`; `secondary`, texto `primary-700` sobre `primary-50`; `destructive`, o vermelho suave do botão (antes vermelho sólido com branco a 4,2:1); `outline`, a borda dos campos; `link`, `primary-700` (antes era `background-300`, a 1,2:1).
- `ButtonLink`: `primary`, `secondary` e `outlined` seguem o `Button`; o raio passa a 8px.

# @gaia-dev/ui

## 5.0.0

### Major Changes

- f5acc6b: Modo claro mais confortável e títulos sem a fonte mono, validados como protótipo no gaia-app, BrandSync e CR.IA Studio (mesmo padrão do Confere). Nenhum token foi removido; o modo escuro mantém os valores atuais, exceto `text-500` (abaixo).

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

  **Mudanças que quebram (por isso a versão major)**

  - `Select` passa a ser só export nomeado: `import Select from ".../Select"` deixa de funcionar; use `import { Select } from "@gaia-dev/ui"`.
  - `Select`: `onChange` devolve o valor no tipo original da opção (número continua número), não mais sempre string.
  - `Modal`: agora é um diálogo do Radix, com foco preso, Escape para fechar e bloqueio de rolagem e de clique fora enquanto aberto.
  - `Drawer`: passa a respeitar `open`/`onOpenChange` do consumidor (antes eram ignorados).
  - `RadioInput`: o rótulo do grupo é um `span` com `role="radiogroup"`, não mais um `<label>`; o `label` das opções não vai mais para o DOM.
  - `Slider`: sem `value`/`defaultValue`, renderiza um thumb só (antes dois); com um thumb, o `aria-label` vai para o thumb, não para a raiz.
  - `Table`: o contêiner de rolagem vira uma região focável (`role="region"`, `tabIndex=0`, nome por `containerLabel`).
  - Tokens com valor novo que mudam a aparência dos apps: `--color-border-field` (`#8a8a8a`/`#6b6b6b`, 3:1 para contorno de controle) e `--color-text-500`.

## 4.3.0

### Minor Changes

- Correções de acessibilidade e de estilo encontradas ao montar o Confere sobre a lib. Nada muda para quem já usa os componentes; há três props opcionais novas.

  **Acessibilidade**

  - `Select`: o `id` agora vai para o gatilho, então o `<label htmlFor>` nomeia o controle (antes o leitor de tela não anunciava o campo e `getByLabelText` não achava). O gatilho ganha `aria-invalid` e `aria-describedby` apontando para o `hint`/`error`.
  - `DatePicker`: o `id` vai para o botão gatilho, ligando o rótulo ao controle; `aria-invalid` quando há `error`.
  - `ProgressBar`: `role="progressbar"` com `aria-valuemin`/`aria-valuemax`/`aria-valuenow`, e repassa props nativas de `<div>` (ex.: `aria-label`).
  - `Combobox` e `ComboboxMulti`: nova prop opcional `aria-label`, para quando não há `label` visível.
  - `EmptyTitle`: nova prop opcional `asChild`, para renderizar um título de verdade (`<h2>`…) com o mesmo estilo.

  **Comportamento e estilo**

  - `Input` e `Textarea`: aceitam `ref` (via `forwardRef`), repassado ao `<input>`/`<textarea>`.
  - `Textarea`: sem altura fixa de 100px — `rows` volta a valer (padrão 4, mesma altura de antes) e o redimensionamento é vertical. O foco agora aplica a borda (o seletor procurava um `input` dentro do textarea).
  - `Table`: sem classe `undefined` quando não há `className`; hover e zebra sem `!important`, então dá para sobrescrever por CSS.
  - `Combobox`/`ComboboxMulti`: não filtram a lista inteira enquanto fechados (listas grandes deixam de pesar a cada render).

## 4.2.0

### Minor Changes

- A new `Empty` component was added to the `general/` category for rendering empty-state placeholders. It follows the existing conventions (CSS Modules with design tokens, JSDoc, and the shared `clsx` util) and is re-exported from `packages/ui/src/index.ts`.

  ***

  **General**

  - `Empty` — composable empty-state container with:
    - `Empty` — root container with a centered, dashed-border block
    - `EmptyHeader` — vertical stack for media, title, and description
    - `EmptyMedia` — media slot for icons or illustrations, with `default` and `icon` variants
    - `EmptyTitle` — heading text using the heading font family
    - `EmptyDescription` — muted secondary text with styled inline links
    - `EmptyContent` — content slot for action buttons or supplementary controls

## 4.1.0

### Minor Changes

- Nine new components were added to expand coverage of layout primitives and form inputs. All components follow the existing conventions (Radix UI primitives where applicable, CSS Modules with design tokens, JSDoc, and `ComponentNameProps` types) and are re-exported from `packages/ui/src/index.ts`.

  ***

  **General**

  - `Breadcrumb` — navigation trail with separator and ellipsis support
  - `ContextMenu` — right-click menu built on Radix `ContextMenu`
  - `Resizable` — resizable panel groups with drag handles
  - `ScrollArea` — styled scroll container with custom scrollbars
  - `Sheet` — side-anchored drawer/overlay

  **Inputs**

  - `ColorPicker` — color selection input with hex/rgb utilities (`colorUtils.ts`)
  - `Combobox` — searchable select built on `cmdk`
  - `FileUpload` — file picker with drag-and-drop and shared context
  - `Slider` — range input built on Radix `Slider`

  ***

  **Fixes**

  - Adjusted `Breadcrumb` separator alignment
  - Tightened `ColorPicker` internal spacing

## 4.0.0

### Major Changes

- The `Button` component was significantly refactored to be simpler, more composable, and aligned with the Radix UI pattern used across the design system. The new implementation delegates render control to the consumer via the `asChild` prop and removes built-in complexity (loading states, icon management, typography coupling).

  ***

  - Extracted variant/size class mappings into a separate `constants.ts` file (`buttonVariantClasses`, `buttonSizeClasses`)
  - Replaced manual class mapping logic with a DRY, map-based approach
  - Added `React.forwardRef` for proper ref forwarding
  - Integrated Radix UI `Slot` to support `asChild` composition
  - Complete CSS rewrite: better organized variant/size sections
  - Added icon-aware padding via the CSS `:has()` selector — no more explicit icon props needed
  - Expanded size options: `xs`, `icon-xs`, `icon-sm`, `icon-lg`
  - Added `focus-visible`, `disabled`, and `:invalid` state styles
  - `ButtonVariant` and `ButtonSize` are now derived from `buttonVariantClasses` / `buttonSizeClasses` keys — single source of truth
  - `ButtonProps` now cleanly extends `React.ComponentPropsWithoutRef<"button">`

  ***

  > **Severity: Major** — These changes require updates in all consuming apps (`gaia-app-front`, `brandsync-app-front`, `cria-app-front`, etc.)

  | Prop           | Reason Removed                                 | Migration                                                       |
  | -------------- | ---------------------------------------------- | --------------------------------------------------------------- |
  | `icon`         | Icons are now passed as children               | Pass `<Icon />` directly as a child                             |
  | `iconPosition` | Controlled by children order                   | Order children as needed (`<Icon /> Label` or `Label <Icon />`) |
  | `loading`      | Removed built-in loading state                 | Implement loading logic in the consumer component               |
  | `iconSize`     | CSS `:has()` handles icon sizing automatically | Remove the prop                                                 |
  | `iconColor`    | CSS handles icon color via variant tokens      | Remove the prop                                                 |

  **Before:**

  ```tsx
  <Button
    icon={<Spinner />}
    iconPosition="left"
    loading={isLoading}
    iconSize={16}
    iconColor="white"
    variant="default"
  >
    Save
  </Button>
  ```

  **After:**

  ```tsx
  // Loading state is handled by the consumer
  <Button variant="default" disabled={isLoading}>
    {isLoading ? <Spinner /> : null}
    Save
  </Button>
  ```

  **Using `asChild` to render as a link:**

  ```tsx
  // New — render as <a> without wrapping element
  <Button asChild variant="link">
    <a href="/dashboard">Go to Dashboard</a>
  </Button>
  ```

  ***

  ```ts
  type ButtonProps = {
    variant?:
      | "default"
      | "outline"
      | "secondary"
      | "ghost"
      | "destructive"
      | "link";
    size?:
      | "default"
      | "xs"
      | "sm"
      | "lg"
      | "icon"
      | "icon-xs"
      | "icon-sm"
      | "icon-lg";
    asChild?: boolean; // Renders as child element using Radix Slot
  } & React.ComponentPropsWithoutRef<"button">;
  ```

## 3.3.0

### Minor Changes

- feat(ui): add Calendar, DatePicker, Switch and Multicheck input components

  Added four new UI input components to the design system and exported them from the `ui` package:

  - `Calendar`: a styled wrapper around `react-day-picker` with project-specific class mappings, custom navigation controls/icons, support for caption layout variants, outside days, locale-aware formatting, and extensible `classNames`, `formatters`, and `components` overrides.
  - `DatePicker`: a popover-based date picker built on top of the new `Calendar` component, supporting both `single` and `range` selection modes, localized calendar display (`en`/`es`/`pt`), placeholders, label/hint/error states, and controlled value handling.
  - `Switch`: a styled wrapper around Radix UI `Switch` with `default` and `sm` size variants, forwarding Radix root props and preserving controlled/uncontrolled usage patterns.
  - `Multicheck`: a searchable multi-select combobox with badge-based selected item display, removable selections, customizable texts/placeholders, export from the package entrypoint, and support for limiting the number of selected items (`maxSelectedItems`) plus collapsed badge display (`maxShownItems`).

  Also includes documentation updates/examples for `Calendar` day button behavior and `Multicheck` usage/customization.

## 3.2.0

### Minor Changes

- adding avatar and drawer components

## 3.1.0

### Minor Changes

- adding accordion component

## 3.0.0

### Major Changes

- fixing buttonlink hover

## 2.3.0

### Minor Changes

- button colors change

## 2.2.0

### Minor Changes

- adding skeleton component and button color change

## 2.1.0

### Minor Changes

- change colors

## 2.0.0

### Major Changes

- New colors theme

## 1.1.0

### Minor Changes

- • Implemented a shared clsx helper (packages/ui/src/utils/clsx.ts:1) so every component now composes its className prop the same way.
  Buttons, inputs, tables, dialog primitives, typography elements, and other surfaces import the util and wrap their structural classes
  with any consumer-supplied overrides (e.g., clsx(styles.container, className)), giving us cleaner conditional styling and eliminating
  brittle string concatenation. While touching each component, I also added JSDoc blocks to the exported functions and React components
  to spell out their intent, expected props, and return values, which means editors now surface much better inline documentation
  alongside the existing TypeScript types.

## 1.0.0

### Major Changes

- Major shifts in packages/ui/src/index.ts replace the old namespace re‐exports (export \* as Foo) with direct named re‐exports (export
  { Foo }). For the affected modules:

  - ButtonGroup (packages/ui/src/index.ts:5): ButtonGroupItem and ButtonGroupRoot now re-export individual components, removing the
    intermediate namespace.
  - Command (packages/ui/src/index.ts:24): All command subcomponents (dialog, input, list, etc.) are exported directly, so consumers
    import exactly what they need rather than a bundled command object.
  - Dialog (packages/ui/src/index.ts:33) and Modal (packages/ui/src/index.ts:43): Each element—trigger, content, overlay, buttons—has
    explicit exports, which improves tree-shaking and avoids shipping unused helpers.
  - Pagination (packages/ui/src/index.ts:53): The pagination set now lists every exported piece (content, ellipsis, prev/next) explicitly
    to prevent implicit namespace imports.
  - Popover (packages/ui/src/index.ts:60): Anchor, content, and trigger are exported separately to keep bundle sizes minimal and typings
    clearer.

  Overall, the package shifts from namespace exports to direct named exports for these key component groups, leading to leaner imports
  and clearer typing.

## 0.13.0

### Minor Changes

- fix styles

## 0.12.0

### Minor Changes

- refactor(divider): migrate to Radix UI Separator

## 0.11.0

### Minor Changes

- add customization props to Divider and ProgressBar components

## 0.10.0

### Minor Changes

- added styles for color input

## 0.9.0

### Minor Changes

- pagination mobile change

## 0.8.0

### Minor Changes

- fix exports

## 0.7.0

### Minor Changes

- Adding changes to badge, and new components: Command, Dialog, Pagination and Popover

## 0.6.0

### Minor Changes

- adding select component

## 0.5.0

### Minor Changes

- adding icon variant to button link

## 0.4.0

### Minor Changes

- adding table

## 0.3.0

### Minor Changes

- adding table component

## 0.2.0

### Minor Changes

- 0707c4a: update to react 19

## 0.1.0

### Minor Changes

- 8f2a6ba: add styles
- add new components

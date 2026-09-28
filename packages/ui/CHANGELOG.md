# @gaia-dev/ui

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

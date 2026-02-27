# @gaia-dev/ui

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

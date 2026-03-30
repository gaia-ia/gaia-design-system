# CLAUDE.md — gaia-design-system

## Workflow

- Plan mode only for architectural decisions or tasks with unclear scope
- Use subagents only when genuinely needed (multi-area exploration, parallel research)
- For straightforward tasks: read what's needed, make the change, verify
- If something goes sideways, stop and re-plan
- When given a bug: just fix it autonomously
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Overview

Turborepo monorepo (Yarn workspaces) that publishes shared React components and design tokens for the Gaia product suite.

**Published packages:**

- `@gaia-dev/ui` (v3.3.0) — React component library
- `@gaia-dev/theme` (v1.0.0) — Design tokens as CSS custom properties

## Commands

```bash
yarn dev              # Dev mode for all packages (Turbo, watch)
yarn build            # Build all packages
yarn lint             # Lint all packages (--max-warnings 0)
yarn format           # Prettier (ts, tsx, md)
yarn changeset        # Create a version changeset
yarn version-packages # Apply changeset versions
yarn release          # Build + publish to npm
yarn preview-storybook # Serve built Storybook
```

Storybook runs on port **6006** via the `docs` app.

## Project Structure

```
apps/
  docs/                  # Storybook docs (private, not published)
    .storybook/          # Storybook config (main.js, preview.jsx)
    stories/             # Story files organized by category
packages/
  ui/                    # @gaia-dev/ui — React components (tsup → ESM + CJS)
  theme/                 # @gaia-dev/theme — CSS tokens (index.css, no build)
  eslint-config/         # Shared ESLint config (private)
  typescript-config/     # Shared TypeScript configs (private)
```

## Component Conventions

Each component lives in its own folder under a category:

```
packages/ui/src/<category>/ComponentName/
  index.tsx            # Component implementation
  types.ts             # Props interface (ComponentNameProps)
  styles.module.css    # Scoped CSS Modules
```

**Categories:** `buttons/`, `general/`, `inputs/`, `typography/`, `utils/`

### Patterns

- Props interfaces named `ComponentNameProps`, extending native HTML attributes when applicable
- `React.FC<ComponentNameProps>` for component definitions
- Radix UI `Slot` + `asChild` prop for render delegation
- `clsx` utility (local, at `src/utils/clsx.ts`) for conditional class names
- CSS Modules with design tokens: `var(--color-primary-400)`, `var(--color-background-100)`, etc.
- JSDoc on every component with `@component`, `@param`, `@returns`, `@example`
- All components and types re-exported from `packages/ui/src/index.ts`

### Naming

| What                    | Convention                  | Example                          |
| ----------------------- | --------------------------- | -------------------------------- |
| Component folders/files | PascalCase                  | `Button/index.tsx`               |
| Props interfaces        | PascalCase + `Props` suffix | `ButtonProps`                    |
| CSS Module classes      | camelCase                   | `.badgeRemoveBtn`                |
| Variant type values     | snake_case                  | `extra_large`, `small_body_bold` |
| Data attributes         | kebab-case                  | `data-slot="badge"`              |

## Storybook Conventions

Stories live in `apps/docs/stories/<category>/` (mirrors component categories).

```tsx
import { Component } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  title: "Components/<category>/ComponentName",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    propName: {
      control: { type: "text" },
      description: "Descrição em português", // Portuguese descriptions
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    /* ... */
  },
};
```

For **controlled/interactive components**, use a decorator with `useState`:

```tsx
const ComponentDecorator = (Story: StoryFn, context: StoryContext) => {
  const [value, setValue] = useState(context.args.value);
  return <Story args={{ ...context.args, value, onChange: setValue }} />;
};
```

## CSS & Theming

- **Design tokens** defined in `packages/theme/index.css` as CSS custom properties
- Token categories: `--color-accent-*`, `--color-primary-*`, `--color-background-*`, `--color-text-*`, `--color-alert-*`, `--color-fixed-*`
- Light/dark theme support via CSS `light-dark()` function
- Fonts: DM Sans, Source Code Pro (Google Fonts)

## Versioning & Release

Uses [Changesets](https://github.com/changesets/changesets):

1. `yarn changeset` — describe the change and bump type (patch/minor/major)
2. `yarn version-packages` — apply versions and generate changelogs
3. `yarn release` — build and publish to npm

## Key Dependencies

- **React 19**, **Radix UI** (headless primitives), **Lucide React** (icons)
- **cmdk** (command menu), **Embla Carousel**, **React Day Picker**, **Recharts**, **Vaul** (drawer)
- **Tsup** (bundler), **Storybook 8**, **Vite 5**, **TypeScript 5.5**

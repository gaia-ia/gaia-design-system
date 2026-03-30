# CLAUDE.md — gaia-design-system

## Workflow Orchestration

### 1. Plan Mode Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
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

/** @type { import('@storybook/react').Preview } */
import React, { useEffect, useState } from "react";
import { DocsContainer } from "@storybook/blocks";
import { addons } from "@storybook/preview-api";
import { MemoryRouter } from "react-router-dom";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";
import "@gaia-dev/theme";

import { themeFor } from "./gaiaTheme";

const panelStyle = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 24,
  borderRadius: 8,
  border: "1px solid var(--color-border-subtle)",
  background: "var(--color-surface-canvas)",
  color: "var(--color-text-900)",
};

const labelStyle = {
  fontSize: 12,
  color: "var(--color-text-600)",
};

/**
 * Aplica o tema escolhido na barra do Storybook. O `color-scheme` vai no
 * `<html>`, então diálogos, popovers e menus (que abrem fora da história)
 * seguem o mesmo modo. "Lado a lado" mostra a história nos dois temas.
 */
const ThemeFrame = ({ mode, children }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = mode === "side" ? "light" : mode;
    document.body.style.background = "var(--color-surface-canvas)";
    document.body.style.color = "var(--color-text-900)";
  }, [mode]);

  if (mode !== "side") return children;

  return (
    <div style={{ display: "flex", gap: 16, width: "100%" }}>
      <div className="light" style={panelStyle}>
        <span style={labelStyle}>Claro</span>
        {children}
      </div>
      <div className="dark" style={panelStyle}>
        <span style={labelStyle}>Escuro</span>
        {children}
      </div>
    </div>
  );
};

/**
 * As páginas de Docs acompanham o seletor "Tema" (antes eram sempre escuras).
 */
const ThemedDocsContainer = ({ children, context }) => {
  const [mode, setMode] = useState(
    () => context?.store?.userGlobals?.get?.()?.theme ?? "light"
  );

  useEffect(() => {
    const channel = addons.getChannel();
    const apply = ({ globals }) => setMode(globals?.theme ?? "light");
    channel.on(SET_GLOBALS, apply);
    channel.on(GLOBALS_UPDATED, apply);
    return () => {
      channel.off(SET_GLOBALS, apply);
      channel.off(GLOBALS_UPDATED, apply);
    };
  }, []);

  return (
    <DocsContainer context={context} theme={themeFor(mode)}>
      {children}
    </DocsContainer>
  );
};

const preview = {
  globalTypes: {
    theme: {
      description: "Tema das histórias",
      toolbar: {
        title: "Tema",
        icon: "mirror",
        items: [
          { value: "light", title: "Claro", icon: "sun" },
          { value: "dark", title: "Escuro", icon: "moon" },
          { value: "side", title: "Lado a lado", icon: "sidebyside" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    options: {
      storySort: {
        order: ["Introdução", "Components", "Tokens"],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      container: ThemedDocsContainer,
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeFrame mode={context.globals.theme ?? "light"}>
        <Story />
      </ThemeFrame>
    ),
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;

import { create } from "@storybook/theming";

/*
 * Tema da marca GAIA para a interface do Storybook (sidebar, barra) e para as
 * Docs. Usa os mesmos valores do @gaia-dev/theme; os dois modos acompanham o
 * seletor "Tema" da barra.
 */

const shared = {
  brandTitle: "GAIA Design System",
  brandUrl: "./",
  brandTarget: "_self",

  colorPrimary: "#d74100",
  colorSecondary: "#d74100",

  fontBase: '"DM Sans", sans-serif',
  fontCode: '"Source Code Pro", monospace',

  appBorderRadius: 8,
  inputBorderRadius: 4,
};

export const gaiaLight = create({
  ...shared,
  base: "light",
  brandImage: "./gaia-logo-dark.svg",

  appBg: "#fafafa",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#ebebeb",

  textColor: "#1a1a1a",
  textInverseColor: "#ffffff",
  textMutedColor: "#666666",

  barBg: "#ffffff",
  barTextColor: "#474747",
  barSelectedColor: "#d74100",
  barHoverColor: "#d74100",

  inputBg: "#ffffff",
  inputBorder: "#d6d6d6",
  inputTextColor: "#1a1a1a",
});

export const gaiaDark = create({
  ...shared,
  base: "dark",
  brandImage: "./gaia-logo-light.svg",

  appBg: "#1a1a1a",
  appContentBg: "#121212",
  appPreviewBg: "#121212",
  appBorderColor: "#262626",

  textColor: "#e6e6e6",
  textInverseColor: "#121212",
  textMutedColor: "#999999",

  barBg: "#1a1a1a",
  barTextColor: "#b3b3b3",
  barSelectedColor: "#ff9633",
  barHoverColor: "#ff9633",

  inputBg: "#1a1a1a",
  inputBorder: "#2e2e2e",
  inputTextColor: "#e6e6e6",
});

/** "Lado a lado" mostra os dois temas; a moldura fica no claro. */
export const themeFor = (mode) => (mode === "dark" ? gaiaDark : gaiaLight);

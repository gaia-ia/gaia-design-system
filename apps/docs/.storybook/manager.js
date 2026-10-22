import { addons } from "@storybook/manager-api";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";

import { gaiaLight, themeFor } from "./gaiaTheme";

addons.setConfig({
  theme: gaiaLight,
  sidebar: { showRoots: true },
});

/*
 * A interface (sidebar, barra) acompanha o seletor "Tema" da barra, assim
 * interface, Docs e histórias ficam sempre no mesmo modo.
 */
addons.register("gaia/theme-sync", (api) => {
  const apply = ({ globals }) => {
    api.setOptions({ theme: themeFor(globals?.theme) });
  };

  api.on(SET_GLOBALS, apply);
  api.on(GLOBALS_UPDATED, apply);
});

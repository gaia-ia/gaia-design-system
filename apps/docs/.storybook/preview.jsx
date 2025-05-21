/** @type { import('@storybook/react').Preview } */
import React from "react";
import { themes } from "@storybook/theming";
import { MemoryRouter } from "react-router-dom";
import "@gaia-dev/theme";

const preview = {
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
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: themes.dark, // The replacement theme to use
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;

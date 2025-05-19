/** @type { import('@storybook/react').Preview } */
import "@acme/theme";
import { themes } from "@storybook/theming";

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
};

export default preview;

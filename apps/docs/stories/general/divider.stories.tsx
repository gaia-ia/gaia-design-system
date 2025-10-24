import { Divider } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "Components/general/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "color",
      },
      description: "The color of the divider",
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
      description: "The orientation of the divider",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    color: "var(--color-background-300)",
    orientation: "vertical",
  },
};

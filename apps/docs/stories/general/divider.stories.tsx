import { Divider } from "@gaia_dev_test/ui";
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
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    color: "var(--color-background-300)",
  },
};

import { Card } from "@gaia_dev_test/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/general/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "The content of the card",
      defaultValue: "Card",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card",
  },
};

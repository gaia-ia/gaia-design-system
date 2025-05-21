import { Input } from "@gaia_dev_test/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/inputs/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    hint: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    id: "input-id",
    required: true,
  },
};

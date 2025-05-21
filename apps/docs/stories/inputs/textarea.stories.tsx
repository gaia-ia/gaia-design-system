import { Textarea } from "@gaia_dev_test/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
  title: "Components/inputs/Textarea",
  component: Textarea,
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Label",
    id: "input-id",
    required: true,
  },
};

export const WithHint: Story = {
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    hint: "Hint message",
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    id: "input-id",
    required: true,
    error: "Error message",
  },
};

import { Select } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Components/inputs/Select",
  component: Select,
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
    placeholder: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const mockOptions = [
  { value: "option1", label: "Primeira Opção" },
  { value: "option2", label: "Segunda Opção" },
  { value: "option3", label: "Terceira Opção" },
  { value: "option4", label: "Quarta Opção", disabled: true },
];

export const Default: Story = {
  args: {
    label: "Selecione uma opção",
    id: "select-default",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
  },
};

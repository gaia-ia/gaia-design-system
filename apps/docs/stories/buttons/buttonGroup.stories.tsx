import { ButtonGroup } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

// O componente correto a ser usado como referência é o Root
const meta = {
  title: "Components/buttons/ButtonGroup",
  component: ButtonGroup.Root,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "O valor padrão selecionado",
    },
    onValueChange: {
      action: "changed",
      description: "Função chamada quando o valor muda",
    },
  },
} as Meta<typeof ButtonGroup.Root>;

export default meta;

type Story = StoryObj<typeof ButtonGroup.Root>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup.Root {...args}>
      <ButtonGroup.Item value="option1">Opção 1</ButtonGroup.Item>
      <ButtonGroup.Item value="option2">Opção 2</ButtonGroup.Item>
      <ButtonGroup.Item value="option3">Opção 3</ButtonGroup.Item>
    </ButtonGroup.Root>
  ),
  args: {
    defaultValue: "option1",
  },
};

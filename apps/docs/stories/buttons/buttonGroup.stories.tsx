import { ButtonGroupItem, ButtonGroupRoot } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

// O componente correto a ser usado como referência é o Root
const meta = {
  title: "Components/buttons/ButtonGroup",
  component: ButtonGroupRoot,
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
} as Meta<typeof ButtonGroupRoot>;

export default meta;

type Story = StoryObj<typeof ButtonGroupRoot>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroupRoot {...args}>
      <ButtonGroupItem value="option1">Opção 1</ButtonGroupItem>
      <ButtonGroupItem value="option2">Opção 2</ButtonGroupItem>
      <ButtonGroupItem value="option3">Opção 3</ButtonGroupItem>
    </ButtonGroupRoot>
  ),
  args: {
    defaultValue: "option1",
  },
};

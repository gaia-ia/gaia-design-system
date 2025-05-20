import { Checkbox } from "@gaia_dev_test/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryContext, StoryFn } from "@storybook/react";
import { useState } from "react";

// Decorator to make the checkbox interactive
const CheckboxDecorator = (Story: StoryFn, context: StoryContext) => {
  const [isChecked, setIsChecked] = useState(context.args.checked || false);

  return (
    <Story
      args={{
        ...context.args,
        checked: isChecked,
        onChange: () => setIsChecked(!isChecked),
      }}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: "Components/inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [CheckboxDecorator],
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "O texto a ser exibido ao lado do checkbox",
      defaultValue: "Eu concordo com os termos",
    },
    id: {
      control: {
        type: "text",
      },
      description: "ID único para o elemento input",
      defaultValue: "checkbox-example",
    },
    value: {
      control: {
        type: "text",
      },
      description: "Valor do checkbox quando selecionado",
      defaultValue: "checked",
    },
    checked: {
      control: {
        type: "boolean",
      },
      description: "Estado de marcação do checkbox",
      defaultValue: false,
    },
    onChange: {
      action: "changed",
      description: "Função chamada quando o checkbox é alterado",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Desabilita o checkbox",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Eu concordo com os termos",
    id: "checkbox-example",
    value: "checked",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Opção selecionada",
    id: "checkbox-checked",
    value: "checked",
    checked: true,
  },
};

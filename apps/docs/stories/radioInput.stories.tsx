import { RadioInput } from "@gaia_dev_test/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryContext, StoryFn } from "@storybook/react";
import { useState } from "react";

// Definição da interface Option para uso interno

// Decorator para tornar o RadioInput interativo
const RadioInputDecorator = (Story: StoryFn, context: StoryContext) => {
  const [selectedValue, setSelectedValue] = useState("");

  // Garantir que options é um array antes de mapear
  const options = Array.isArray(context.args.options)
    ? context.args.options
    : [];

  // Mapear as opções com tipagem mais segura
  const optionsWithHandler = options.map((option: { value: string }) => ({
    ...option,
    checked: option.value === selectedValue,
    onChange: () => setSelectedValue(option.value),
  }));

  return (
    <Story
      args={{
        ...context.args,
        options: optionsWithHandler,
      }}
    />
  );
};

const meta: Meta<typeof RadioInput> = {
  title: "Components/inputs/RadioInput",
  component: RadioInput,
  tags: ["autodocs"],
  decorators: [RadioInputDecorator],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Rótulo principal do grupo de opções",
      defaultValue: "Selecione uma opção",
    },
    name: {
      control: { type: "text" },
      description:
        "Nome do grupo de botões radio (importante para agrupamento)",
      defaultValue: "radio-group",
    },
    required: {
      control: { type: "boolean" },
      description: "Indica se o campo é obrigatório",
      defaultValue: false,
    },
    error: {
      control: { type: "text" },
      description: "Mensagem de erro a ser exibida abaixo do label",
    },
    hint: {
      control: { type: "text" },
      description: "Texto de dica/ajuda exibido abaixo das opções",
    },
    options: {
      control: "object",
      description: "Array de opções com propriedades label e value",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioInput>;

export const Default: Story = {
  args: {
    label: "Selecione uma opção",
    name: "radio-group",
    required: true,
    options: [
      { label: "Opção 1", value: "option1" },
      { label: "Opção 2", value: "option2" },
      { label: "Opção 3", value: "option3" },
    ],
  },
};

export const WithHint: Story = {
  args: {
    label: "Método de pagamento",
    name: "payment-method",
    hint: "Você poderá alterar essa opção mais tarde",
    options: [
      { label: "Cartão de crédito", value: "credit-card" },
      { label: "Boleto bancário", value: "bank-slip" },
      { label: "Pix", value: "pix" },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: "Período de entrega",
    name: "delivery-time",
    error: "Selecione pelo menos uma opção",
    required: true,
    options: [
      { label: "Manhã", value: "morning" },
      { label: "Tarde", value: "afternoon" },
      { label: "Noite", value: "night" },
    ],
  },
};

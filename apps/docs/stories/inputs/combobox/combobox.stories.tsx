import { Combobox, ComboboxMulti } from "@gaia-dev/ui";
import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Combobox> = {
  title: "Components/inputs/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Rótulo exibido acima do campo",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único do campo (usado para acessibilidade)",
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto exibido quando nenhuma opção está selecionada",
    },
    searchPlaceholder: {
      control: { type: "text" },
      description: "Placeholder do campo de busca interno",
    },
    emptyText: {
      control: { type: "text" },
      description: "Mensagem exibida quando nenhuma opção corresponde à busca",
    },
    hint: {
      control: { type: "text" },
      description: "Texto de ajuda exibido abaixo do campo",
    },
    error: {
      control: { type: "text" },
      description: "Mensagem de erro exibida abaixo do campo",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita o campo impedindo interação",
    },
    required: {
      control: { type: "boolean" },
      description: "Marca o campo como obrigatório com asterisco no rótulo",
    },
    clearable: {
      control: { type: "boolean" },
      description: "Exibe botão para limpar a seleção atual",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const ComboboxDecorator = (Story: StoryFn, context: StoryContext) => {
  const [value, setValue] = useState<string | number | undefined>(
    context.args.value as string | number | undefined,
  );
  return (
    <Story
      args={{
        ...context.args,
        value,
        onChange: (v: string | number | null) => setValue(v ?? undefined),
      }}
    />
  );
};

const mockOptions = [
  { value: "option1", label: "Primeira Opção" },
  { value: "option2", label: "Segunda Opção" },
  { value: "option3", label: "Terceira Opção" },
  { value: "option4", label: "Quarta Opção" },
  { value: "option5", label: "Quinta Opção", disabled: true },
];

const groupedOptions = [
  {
    group: "Frutas",
    options: [
      { value: "apple", label: "Maçã" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cereja" },
    ],
  },
  {
    group: "Legumes",
    options: [
      { value: "carrot", label: "Cenoura" },
      { value: "broccoli", label: "Brócolis" },
      { value: "spinach", label: "Espinafre", disabled: true },
    ],
  },
];

export const Default: Story = {
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-default",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
  },
};

export const WithGroups: Story = {
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-groups",
    label: "Selecione um alimento",
    options: groupedOptions,
    placeholder: "Escolha um alimento...",
  },
};

export const Clearable: Story = {
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-clearable",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
    value: "option1",
    clearable: true,
    hint: "Clique no × para limpar a seleção",
  },
};

export const WithError: Story = {
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-error",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
    error: "Este campo é obrigatório",
    required: true,
  },
};

export const WithHint: Story = {
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-hint",
    label: "Selecione uma opção",
    options: mockOptions,
    placeholder: "Escolha uma opção...",
    hint: "Você pode digitar para filtrar as opções",
  },
};

export const Disabled: Story = {
  decorators: [ComboboxDecorator],
  args: {
    id: "combobox-disabled",
    label: "Campo desabilitado",
    options: mockOptions,
    placeholder: "Não disponível",
    value: "option2",
    disabled: true,
  },
};

// Multi-select story uses ComboboxMulti directly
export const MultiSelect: Story = {
  render: () => {
    const MultiWrapper = () => {
      const [value, setValue] = useState<(string | number)[]>([]);
      return (
        <ComboboxMulti
          id="combobox-multi"
          label="Selecione múltiplas opções"
          options={mockOptions}
          placeholder="Adicionar opções..."
          value={value}
          onChange={setValue}
          hint="Pressione Backspace para remover a última opção"
        />
      );
    };
    return <MultiWrapper />;
  },
};

export const MultiSelectWithGroups: Story = {
  render: () => {
    const MultiGroupWrapper = () => {
      const [value, setValue] = useState<(string | number)[]>([]);
      return (
        <ComboboxMulti
          id="combobox-multi-groups"
          label="Selecione alimentos"
          options={groupedOptions}
          placeholder="Adicionar alimentos..."
          value={value}
          onChange={setValue}
        />
      );
    };
    return <MultiGroupWrapper />;
  },
};

export const MultiSelectDisabled: Story = {
  render: () => {
    return (
      <ComboboxMulti
        id="combobox-multi-disabled"
        label="Campo desabilitado"
        options={mockOptions}
        placeholder="Não disponível"
        value={["option1", "option3"]}
        onChange={() => {}}
        disabled
      />
    );
  },
};

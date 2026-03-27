import { Body, Multicheck, Switch } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryContext, StoryFn } from "@storybook/react";
import { useState } from "react";

const frameworkOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const MulticheckDecorator = (Story: StoryFn, context: StoryContext) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    (context.args.selectedValues as string[]) || [],
  );
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "var(--color-background-200)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-end",
      }}
    >
      <Story
        args={{
          ...context.args,
          selectedValues,
          setSelectedValues,
          show,
          setShow,
        }}
      />

      <div
        style={{
          width: "100%",
        }}
      >
        <Body
          variant="label"
          as="label"
          htmlFor="selected-values"
          onClick={() => setShow((prev) => !prev)}
          style={{
            cursor: "pointer",

            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Switch
            id="selected-values"
            checked={show}
            onCheckedChange={() => setShow(!show)}
          />
          Show selected values
        </Body>
      </div>

      {show && (
        <div
          style={{
            backgroundColor: "var(--color-background-100)",
            padding: "1rem",
            width: "100%",
          }}
        >
          <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof Multicheck> = {
  title: "Components/inputs/Multicheck",
  component: Multicheck,
  tags: ["autodocs"],
  decorators: [MulticheckDecorator],
  argTypes: {
    id: {
      control: { type: "text" },
      description: "ID base usado para gerar o id do elemento trigger",
    },
    label: {
      control: { type: "text" },
      description: "Texto do label exibido acima do combobox",
    },
    options: {
      control: { type: "object" },
      description: "Lista de opções disponíveis para seleção",
    },
    selectedValues: {
      control: { type: "object" },
      description: "Valores atualmente selecionados (controlado)",
    },
    setSelectedValues: {
      description: "Função para atualizar os valores selecionados",
    },
    maxShownItems: {
      control: { type: "number" },
      description:
        "Número máximo de badges exibidos antes de mostrar o botão '+N more'",
    },
    maxSelectedItems: {
      control: { type: "number" },
      description: "Número máximo de itens que podem ser selecionados",
    },
    searchPlaceholder: {
      control: { type: "text" },
      description: "Placeholder do campo de busca dentro do dropdown",
    },
    selectPlaceholder: {
      control: { type: "text" },
      description: "Placeholder exibido no trigger quando não há seleções",
    },
    showLessText: {
      control: { type: "text" },
      description: "Texto do badge para colapsar a lista expandida",
    },
    moreText: {
      control: { type: "text" },
      description: 'Sufixo do badge colapsado (ex: "+3 more")',
    },
    noOptionFoundText: {
      control: { type: "text" },
      description: "Texto exibido quando a busca não retorna resultados",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Multicheck>;

export const Default: Story = {
  args: {
    id: "multicheck-default",
    options: frameworkOptions,
    selectedValues: [],
  },
};

export const WithLabel: Story = {
  args: {
    id: "multicheck-label",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: [],
  },
};

export const WithPreselectedValues: Story = {
  args: {
    id: "multicheck-preselected",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: ["react", "vue", "svelte"],
  },
};

export const WithMaxSelectedItems: Story = {
  args: {
    id: "multicheck-max-selected",
    label: "Selecione até 3 frameworks",
    options: frameworkOptions,
    selectedValues: [],
    maxSelectedItems: 3,
  },
};

export const WithMaxShownItems: Story = {
  args: {
    id: "multicheck-max-shown",
    label: "Frameworks",
    options: frameworkOptions,
    selectedValues: ["react", "vue", "angular", "svelte", "nextjs"],
    maxShownItems: 2,
  },
};

export const CustomPlaceholders: Story = {
  args: {
    id: "multicheck-custom",
    label: "Tags",
    options: frameworkOptions,
    selectedValues: [],
    selectPlaceholder: "Selecione as tags",
    searchPlaceholder: "Digite para buscar...",
    moreText: "selecionados",
    showLessText: "Mostrar menos",
    noOptionFoundText: "Nenhuma opção encontrada",
  },
};

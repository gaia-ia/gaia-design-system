import { DatePicker } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryContext, StoryFn } from "@storybook/react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

// Decorator for single mode
const SingleDateDecorator = (Story: StoryFn, context: StoryContext) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return <Story args={{ ...context.args, date, setDate }} />;
};

// Decorator for range mode
const RangeDateDecorator = (Story: StoryFn, context: StoryContext) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  return <Story args={{ ...context.args, date, setDate }} />;
};

const meta: Meta<typeof DatePicker> = {
  title: "Components/inputs/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  decorators: [SingleDateDecorator],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["single", "range"],
      description: "Modo de seleção de data",
    },
    language: {
      control: { type: "select" },
      options: ["en", "pt", "es"],
      description: "Idioma do calendário",
    },
    label: {
      control: { type: "text" },
      description: "Texto do rótulo acima do campo",
    },
    hint: {
      control: { type: "text" },
      description: "Texto de dica abaixo do campo",
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto exibido quando nenhuma data está selecionada",
    },
    error: {
      control: { type: "text" },
      description: "Mensagem de erro abaixo do campo",
    },
    required: {
      control: { type: "boolean" },
      description: "Exibe indicador de campo obrigatório",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita a seleção de datas",
    },
    id: {
      control: { type: "text" },
      description: "ID único para o elemento",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    mode: "single",
    language: "en",
    label: "Date",
    id: "datepicker-default",
    placeholder: "Select date",
  },
};

export const Range: Story = {
  decorators: [RangeDateDecorator],
  args: {
    mode: "range",
    language: "en",
    label: "Date range",
    id: "datepicker-range",
    placeholder: "Select range",
  },
};

export const WithHintAndError: Story = {
  args: {
    mode: "single",
    language: "en",
    label: "Birthday",
    id: "datepicker-hint-error",
    hint: "Selecione sua data de nascimento",
    error: "Campo obrigatório",
  },
};

export const Required: Story = {
  args: {
    mode: "single",
    language: "en",
    label: "Required date",
    id: "datepicker-required",
    required: true,
  },
};

export const Portuguese: Story = {
  args: {
    mode: "single",
    language: "pt",
    label: "Data",
    id: "datepicker-pt",
    placeholder: "Selecione uma data",
  },
};

export const Spanish: Story = {
  args: {
    mode: "single",
    language: "es",
    label: "Fecha",
    id: "datepicker-es",
    placeholder: "Seleccione una fecha",
  },
};

import { ProgressBar } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/general/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 1, max: 10 },
      description: "Número total de etapas da barra de progresso",
    },
    currentStep: {
      control: { type: "number", min: 0, max: 10 },
      description: "Etapa atual da barra de progresso",
    },
    color: {
      control: {
        type: "color",
      },
      description:
        "Cor do preenchimento. Padrão: `var(--color-primary-fill)`, ≥3:1 sobre o trilho. Uma cor própria precisa manter 3:1 sobre o trilho (`--color-control`).",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    size: 5,
    currentStep: 2,
  },
};

export const Empty: Story = {
  args: {
    size: 5,
    currentStep: 0,
  },
};

export const Halfway: Story = {
  args: {
    size: 10,
    currentStep: 5,
  },
};

export const Complete: Story = {
  args: {
    size: 5,
    currentStep: 5,
  },
};

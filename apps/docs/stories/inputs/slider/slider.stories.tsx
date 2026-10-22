import { Slider } from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { StoryContext } from "@storybook/react";
import { useState } from "react";

import styles from "./styles.module.css";

const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const [value, setValue] = useState<number[]>(
    (context.args.value as number[]) ?? [50],
  );
  const sharedArgs = { ...context.args, value, onValueChange: setValue };

  return (
    <div className={styles.panel}>
      <Story args={sharedArgs} />
    </div>
  );
};

const meta: Meta<typeof Slider> = {
  title: "Components/inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
  decorators: [ThemeDecorator],
  argTypes: {
    value: {
      control: false,
      description: "Valor(es) controlado(s) do slider",
    },
    defaultValue: {
      control: false,
      description: "Valor(es) inicial(is) não controlado(s)",
    },
    min: {
      control: { type: "number" },
      description: "Valor mínimo do slider",
    },
    max: {
      control: { type: "number" },
      description: "Valor máximo do slider",
    },
    step: {
      control: { type: "number" },
      description: "Incremento entre valores",
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
      description: "Orientação do slider",
    },
    disabled: {
      control: "boolean",
      description: "Se o slider está desabilitado",
    },
    "aria-label": {
      control: "text",
      description:
        "Nome acessível. Um thumb: vai no thumb. Range: nomeia o grupo; cada thumb usa thumbLabels ou o padrão do Radix.",
    },
    thumbLabels: {
      control: "object",
      description: "Nome acessível de cada thumb, por índice",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    "aria-label": "Volume",
    value: [50],
    min: 0,
    max: 100,
  },
};

export const Range: Story = {
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const [value, setValue] = useState<number[]>([25, 75]);
      const sharedArgs = { ...context.args, value, onValueChange: setValue };
      return <Story args={sharedArgs} />;
    },
  ],
  args: {
    "aria-label": "Faixa de preço",
    thumbLabels: ["Preço mínimo", "Preço máximo"],
    value: [25, 75],
    min: 0,
    max: 100,
  },
};

export const Vertical: Story = {
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const [value, setValue] = useState<number[]>([40]);
      const sharedArgs = {
        ...context.args,
        value,
        onValueChange: setValue,
        orientation: "vertical" as const,
      };
      return <Story args={sharedArgs} />;
    },
  ],
  args: {
    "aria-label": "Volume",
    value: [40],
    orientation: "vertical",
    min: 0,
    max: 100,
  },
};

export const WithStep: Story = {
  args: {
    "aria-label": "Volume",
    value: [50],
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Volume",
    value: [60],
    disabled: true,
  },
};

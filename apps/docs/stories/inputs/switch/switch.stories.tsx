import { Body, Switch } from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { StoryContext } from "@storybook/react";
import { useState } from "react";

const SwitchDecorator = (Story: StoryFn, context: StoryContext) => {
  const [checked, setChecked] = useState(context.args.checked ?? false);
  return (
    <Story args={{ ...context.args, checked, onCheckedChange: setChecked }} />
  );
};

const meta: Meta<typeof Switch> = {
  title: "Components/inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  decorators: [SwitchDecorator],
  argTypes: {
    size: {
      options: ["default", "sm"],
      control: { type: "select" },
      description: "Tamanho visual do switch",
    },
    checked: {
      control: "boolean",
      description: "Estado controlado do switch",
    },
    disabled: {
      control: "boolean",
      description: "Se o switch está desabilitado",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    size: "default",
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    size: "default",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    checked: false,
  },
};

export const SmallChecked: Story = {
  args: {
    size: "sm",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    size: "default",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    size: "default",
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const [checked, setChecked] = useState(false);
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Story
            args={{ ...context.args, checked, onCheckedChange: setChecked }}
          />
          <Body
            as="label"
            variant="small_body"
            style={{ cursor: "pointer" }}
            onClick={() => setChecked(!checked)}
          >
            Ativar notificações
          </Body>
        </div>
      );
    },
  ],
  args: {
    size: "default",
  },
};

import { Badge } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components/general/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "The text to display inside the badge",
      defaultValue: "Badge",
    },
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      control: { type: "radio" },
      defaultValue: "default",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    children: "Badge",
    variant: "secondary",
  },
};

const VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const;

/** Todas as variantes lado a lado, para comparar. */
export const Variantes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
};

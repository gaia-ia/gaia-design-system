import { Skeleton } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  title: "Components/general/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: { type: "object" },
      description: "Estilo customizado para o Skeleton",
      defaultValue: {
        width: "200px",
        height: "200px",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    style: {
      width: "200px",
      height: "200px",
    },
  },
};

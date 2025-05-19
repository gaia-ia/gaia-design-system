import { Button } from "@acme/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Cookie, Croissant, Pizza } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outlined", "text"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    size: {
      options: ["extra_large", "large", "small"],
      control: { type: "radio" },
      defaultValue: "large",
    },
    children: {
      control: {
        type: "text",
      },
    },
    icon: {
      options: ["Sem Ícone", "Pizza", "Cookie", "Croissant"],
      mapping: {
        "Sem Ícone": undefined,
        Pizza: Pizza,
        Cookie: Cookie,
        Croissant: Croissant,
      },
      control: { type: "radio" },
      defaultValue: undefined,
      description:
        "Icon to be displayed on the left or right side of the button, the icon can be any Lucide icon",
    },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
      defaultValue: "left",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
  },
};

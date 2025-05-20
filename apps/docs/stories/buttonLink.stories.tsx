import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "@gaia_dev_test/ui";
import { Cookie, Croissant, Pizza } from "lucide-react";

const meta: Meta<typeof ButtonLink> = {
  title: "Components/buttons/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "The text to display inside the button",
      defaultValue: "Click me",
    },
    to: {
      control: {
        type: "text",
      },
      defaultValue: "https://gaia.dev",
      description: "The link to navigate to",
    },
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
    icon: {
      options: ["Sem Ícone", "Pizza", "Cookie", "Croissant"],
      mapping: {
        "Sem Ícone": undefined,
        Pizza,
        Cookie,
        Croissant,
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
type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    to: "https://gaia.dev",
    target: "_blank",
  },
};

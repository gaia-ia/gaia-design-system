import { Title } from "@gaia_dev_test/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
  title: "Components/typography/Title",
  tags: ["autodocs"],
  component: Title,
  argTypes: {
    variant: {
      options: [
        "display",
        "headline",
        "title",
        "subheading-bold",
        "subheading",
        "subtitle",
        "subtitle-small",
      ],
      control: { type: "radio" },
      defaultValue: "title",
    },
    as: {
      options: ["span", "h1", "h2", "h3", "h4", "h5", "h6", "p", "label"],
      control: { type: "radio" },
      defaultValue: "span",
    },
    children: {
      defaultValue: "Some text here",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "Some text here",
    variant: "title",
    as: "span",
  },
};

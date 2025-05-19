import { Body } from "@acme/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Body> = {
  title: "Components/typography/Body",
  tags: ["autodocs"],
  component: Body,
  argTypes: {
    variant: {
      options: [
        "body",
        "body_medium",
        "body_bold",
        "small_body",
        "small_body_medium",
        "small_body_bold",
        "caption",
        "caption_bold",
        "button",
        "link",
      ],
      control: { type: "radio" },
      defaultValue: "body",
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
type Story = StoryObj<typeof Body>;

export const Default: Story = {
  args: {
    children: "Some text here",
    variant: "body",
    as: "span",
  },
};

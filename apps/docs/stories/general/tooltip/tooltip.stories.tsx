import { Badge, Tooltip } from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/general/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      description: "The text of the tooltip",
      defaultValue: "Tooltip",
    },
    place: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
      defaultValue: "top",
    },
    color: {
      control: {
        type: "color",
      },
      description: "The color of the tooltip",
      defaultValue: "var(--color-background-100)",
    },
  },
};

export default meta;

export const Default = (args: Meta<typeof Tooltip>) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "48px",
    }}
  >
    <Badge id="clickable">◕‿‿◕</Badge>
    <Tooltip anchorSelect="#clickable" text="You can click me!" {...args} />
  </div>
);

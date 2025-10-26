import { Divider } from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "Components/general/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "color",
      },
      description: "The color of the divider",
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
      description: "The orientation of the divider",
    },
  },
};

export default meta;

export const Default = (arg: Meta<typeof Divider>) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "48px",
    }}
  >
    <Divider {...arg} />
  </div>
);

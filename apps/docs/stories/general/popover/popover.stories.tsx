import {
  Body,
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const PopoverExample = ({
  align = "center",
  sideOffset = 4,
  content = "Conteúdo do popover vai aqui.",
}: {
  align?: "start" | "center" | "end";
  sideOffset?: number;
  content?: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
      }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button>Abrir Popover</Button>
        </PopoverTrigger>
        <PopoverContent align={align} sideOffset={sideOffset}>
          <p>{content}</p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const meta: Meta<typeof PopoverExample> = {
  title: "Components/general/Popover",
  component: PopoverExample,
  tags: ["autodocs"],
  argTypes: {
    align: {
      options: ["start", "center", "end"],
      control: { type: "select" },
      description: "Alinhamento do popover em relação ao gatilho",
    },
    sideOffset: {
      control: { type: "number" },
      description:
        "Distância em pixels entre o gatilho e o conteúdo do popover",
    },
    content: {
      control: "text",
      description: "Conteúdo exibido dentro do popover",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopoverExample>;

export const Default: Story = {
  args: {
    align: "center",
    sideOffset: 4,
    content: "Conteúdo do popover vai aqui.",
  },
};

export const AlignStart: Story = {
  args: {
    align: "start",
    sideOffset: 4,
    content: "Popover alinhado ao início do gatilho.",
  },
};

export const AlignEnd: Story = {
  args: {
    align: "end",
    sideOffset: 4,
    content: "Popover alinhado ao final do gatilho.",
  },
};

export const WithForm: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
      }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button>Editar Nome</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Body variant="label" htmlFor="name" as="label">
              Nome
            </Body>
            <Input
              id="name"
              defaultValue="Gaia Design System"
              style={{
                padding: "6px 8px",
                borderRadius: "6px",
                border: "1px solid var(--color-background-200)",
                fontSize: "0.875rem",
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

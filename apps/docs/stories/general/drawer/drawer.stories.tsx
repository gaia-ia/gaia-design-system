import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const DrawerExample = ({
  title = "Título do Drawer",
  description = "Descrição do drawer vai aqui.",
  direction = "bottom",
  hasFooter = true,
}: {
  title?: string;
  description?: string;
  direction?: "bottom" | "top" | "left" | "right";
  hasFooter?: boolean;
}) => {
  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <Button>Abrir Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div style={{ padding: "0 1rem" }}>
          <p>Conteúdo principal do drawer.</p>
        </div>
        {hasFooter && (
          <DrawerFooter>
            <Button>Confirmar</Button>
            <DrawerClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

const meta: Meta<typeof DrawerExample> = {
  title: "Components/general/Drawer",
  component: DrawerExample,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título exibido no cabeçalho do drawer",
    },
    description: {
      control: "text",
      description: "Descrição exibida abaixo do título",
    },
    direction: {
      options: ["bottom", "top", "left", "right"],
      control: { type: "select" },
      description: "Direção de abertura do drawer",
    },
    hasFooter: {
      control: "boolean",
      description: "Se deve exibir o rodapé com botões de ação",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DrawerExample>;

export const Default: Story = {
  args: {
    title: "Título do Drawer",
    description: "Descrição do drawer vai aqui.",
    direction: "bottom",
    hasFooter: true,
  },
};

export const Top: Story = {
  args: {
    title: "Drawer pelo Topo",
    description: "Este drawer abre a partir do topo da tela.",
    direction: "top",
    hasFooter: true,
  },
};

export const Left: Story = {
  args: {
    title: "Drawer pela Esquerda",
    description: "Este drawer abre a partir da esquerda.",
    direction: "left",
    hasFooter: true,
  },
};

export const Right: Story = {
  args: {
    title: "Drawer pela Direita",
    description: "Este drawer abre a partir da direita.",
    direction: "right",
    hasFooter: true,
  },
};

export const WithoutFooter: Story = {
  args: {
    title: "Drawer sem Rodapé",
    description: "Este drawer não possui botões de ação no rodapé.",
    direction: "bottom",
    hasFooter: false,
  },
};

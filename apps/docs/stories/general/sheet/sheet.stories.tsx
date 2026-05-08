import {
  Button,
  PortalContainerProvider,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import * as React from "react";

import styles from "./styles.module.css";

const ThemePanel = ({
  theme,
  children,
}: {
  theme: "dark" | "light";
  children: React.ReactNode;
}) => {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  return (
    <PortalContainerProvider value={container}>
      <div ref={setContainer} className={styles[theme]}>
        {children}
      </div>
    </PortalContainerProvider>
  );
};

const SheetDecorator = (Story: StoryFn) => (
  <div className={styles.wrapper}>
    <ThemePanel theme="dark">
      <Story />
    </ThemePanel>
    <ThemePanel theme="light">
      <Story />
    </ThemePanel>
  </div>
);

const SheetExample = ({
  title = "Título do Sheet",
  description = "Descrição do sheet vai aqui.",
  side = "right",
  showCloseButton = true,
  hasFooter = true,
}: {
  title?: string;
  description?: string;
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
  hasFooter?: boolean;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Abrir Sheet</Button>
      </SheetTrigger>
      <SheetContent side={side} showCloseButton={showCloseButton}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div style={{ padding: "0 1rem" }}>
          <p>Conteúdo principal do sheet.</p>
        </div>
        {hasFooter && (
          <SheetFooter>
            <Button>Confirmar</Button>
            <SheetClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

const meta: Meta<typeof SheetExample> = {
  title: "Components/general/Sheet",
  component: SheetExample,
  tags: ["autodocs"],
  decorators: [SheetDecorator],
  argTypes: {
    title: {
      control: "text",
      description: "Título exibido no cabeçalho do sheet",
    },
    description: {
      control: "text",
      description: "Descrição exibida abaixo do título",
    },
    side: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "select" },
      description: "Borda da tela pela qual o sheet desliza para dentro",
    },
    showCloseButton: {
      control: "boolean",
      description: "Se deve exibir o botão de fechar no canto superior direito",
    },
    hasFooter: {
      control: "boolean",
      description: "Se deve exibir o rodapé com botões de ação",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SheetExample>;

export const Default: Story = {
  args: {
    title: "Título do Sheet",
    description: "Descrição do sheet vai aqui.",
    side: "right",
    showCloseButton: true,
    hasFooter: true,
  },
};

export const Left: Story = {
  args: {
    title: "Sheet pela Esquerda",
    description: "Este sheet abre a partir da esquerda.",
    side: "left",
    showCloseButton: true,
    hasFooter: true,
  },
};

export const Bottom: Story = {
  args: {
    title: "Sheet pelo Rodapé",
    description: "Este sheet abre a partir do rodapé da tela.",
    side: "bottom",
    showCloseButton: true,
    hasFooter: true,
  },
};

export const Top: Story = {
  args: {
    title: "Sheet pelo Topo",
    description: "Este sheet abre a partir do topo da tela.",
    side: "top",
    showCloseButton: true,
    hasFooter: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    title: "Sheet sem Botão de Fechar",
    description: "Este sheet não possui o ícone de fechar no canto.",
    side: "right",
    showCloseButton: false,
    hasFooter: true,
  },
};

export const WithoutFooter: Story = {
  args: {
    title: "Sheet sem Rodapé",
    description: "Este sheet não possui botões de ação no rodapé.",
    side: "right",
    showCloseButton: true,
    hasFooter: false,
  },
};

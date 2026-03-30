import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const DialogExample = ({
  title = "Título do Dialog",
  description = "Descrição do dialog vai aqui.",
  showCloseButton = true,
  hasFooter = true,
}: {
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  hasFooter?: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <p>Conteúdo principal do dialog.</p>
        {hasFooter && (
          <DialogFooter>
            <Button>Confirmar</Button>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

const meta: Meta<typeof DialogExample> = {
  title: "Components/general/Dialog",
  component: DialogExample,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título exibido no cabeçalho do dialog",
    },
    description: {
      control: "text",
      description: "Descrição exibida abaixo do título",
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

type Story = StoryObj<typeof DialogExample>;

export const Default: Story = {
  args: {
    title: "Título do Dialog",
    description: "Descrição do dialog vai aqui.",
    showCloseButton: true,
    hasFooter: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    title: "Dialog sem Botão de Fechar",
    description: "Este dialog não possui o ícone de fechar no canto.",
    showCloseButton: false,
    hasFooter: true,
  },
};

export const WithoutFooter: Story = {
  args: {
    title: "Dialog sem Rodapé",
    description: "Este dialog não possui botões de ação no rodapé.",
    showCloseButton: true,
    hasFooter: false,
  },
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog com Conteúdo Longo</DialogTitle>
          <DialogDescription>
            Este dialog demonstra como o componente se comporta com bastante
            conteúdo.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, eget
            ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
            ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget
            nisl.
          </p>
          <p style={{ marginTop: "12px" }}>
            Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl,
            eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget
            ultricies ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl
            eget nisl.
          </p>
          <p style={{ marginTop: "12px" }}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <DialogFooter>
          <Button>Confirmar</Button>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

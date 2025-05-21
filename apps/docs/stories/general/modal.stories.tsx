import { Button, Modal } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Componente de exemplo para demonstrar o uso do Modal
const ModalExample = ({
  title = "Título do Modal",
  content = "Conteúdo do modal vai aqui.",
  hasButtons = true,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: "200px" }}>
      <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
      {open && (
        <Modal.Content title={title} setOpen={setOpen}>
          <div>{content}</div>
          {hasButtons && (
            <Modal.Buttons>
              <Button
                variant="secondary"
                onClick={() => setOpen(false)}
                style={{ marginRight: "8px" }}
              >
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Confirmar
              </Button>
            </Modal.Buttons>
          )}
        </Modal.Content>
      )}
    </div>
  );
};

const meta: Meta<typeof ModalExample> = {
  title: "Components/general/Modal",
  component: ModalExample,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título exibido no topo do modal",
    },
    content: {
      control: "text",
      description: "Conteúdo exibido no corpo do modal",
    },
    hasButtons: {
      control: "boolean",
      description: "Se deve exibir botões de ação no modal",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalExample>;

export const Default: Story = {
  args: {
    title: "Título do Modal",
    content: "Conteúdo do modal vai aqui.",
    hasButtons: true,
  },
};

export const WithoutButtons: Story = {
  args: {
    title: "Modal sem Botões",
    content: "Este modal não possui botões de ação.",
    hasButtons: false,
  },
};

export const LongContent: Story = {
  args: {
    title: "Modal com Conteúdo Longo",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.
    Nullam auctor, nisl eget ultricies ultrices, nisl nisl aliquet nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    ultrices, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.`,
    hasButtons: true,
  },
};

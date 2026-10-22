import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { FileSearch, Inbox, PackageOpen, Plus } from "lucide-react";

import styles from "./styles.module.css";

const EmptyDecorator = (Story: StoryFn) => {
  return (
    <div className={styles.panel}>
      <Story />
    </div>
  );
};

const meta: Meta<typeof EmptyMedia> & { argTypes: Record<string, unknown> } = {
  title: "Components/general/Empty",
  component: EmptyMedia,
  tags: ["autodocs"],
  decorators: [EmptyDecorator],
  argTypes: {
    variant: {
      options: ["default", "icon"],
      control: { type: "radio" },
      description:
        "Tratamento visual do slot de mídia: `icon` para um quadrado arredondado com fundo suave, `default` para artes maiores sem fundo",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyMedia>;

export const Default: Story = {
  args: {
    variant: "icon",
  },
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Nenhuma mensagem por aqui</EmptyTitle>
        <EmptyDescription>
          Quando você receber novas mensagens, elas aparecerão neste espaço.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithAction: Story = {
  args: {
    variant: "icon",
  },
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <PackageOpen />
        </EmptyMedia>
        <EmptyTitle>Sem produtos cadastrados</EmptyTitle>
        <EmptyDescription>
          Cadastre seu primeiro produto para começar a vender.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={() => window.alert("Criar produto")}>
          <Plus size={16} />
          Criar produto
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const IconVariant: Story = {
  args: {
    variant: "icon",
  },
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <FileSearch />
        </EmptyMedia>
        <EmptyTitle>Nenhum resultado encontrado</EmptyTitle>
        <EmptyDescription>
          Tente ajustar os filtros ou refazer sua busca.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const DefaultVariant: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox color="var(--color-text-500)" />
        </EmptyMedia>
        <EmptyTitle>Tudo limpo por aqui</EmptyTitle>
        <EmptyDescription>
          Você está em dia. Vamos descansar um pouco.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithLink: Story = {
  args: {
    variant: "icon",
  },
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Sua caixa de entrada está vazia</EmptyTitle>
        <EmptyDescription>
          Saiba mais em{" "}
          <a href="#configuracoes">configurações de notificação</a> para começar
          a receber atualizações.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

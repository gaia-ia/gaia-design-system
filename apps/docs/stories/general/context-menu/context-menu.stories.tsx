import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  PortalContainerProvider,
} from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  Settings2Icon,
  TrashIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
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

const ContextMenuDecorator = (Story: StoryFn) => (
  <div className={styles.wrapper}>
    <ThemePanel theme="dark">
      <Story />
    </ThemePanel>
    <ThemePanel theme="light">
      <Story />
    </ThemePanel>
  </div>
);

const ContextMenuExample = () => (
  <ContextMenu>
    <ContextMenuTrigger className={styles.trigger}>
      Clique com o botão direito
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Minha Conta</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuGroup>
        <ContextMenuItem>
          <UserIcon />
          Perfil
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCardIcon />
          Faturamento
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings2Icon />
          Configurações
        </ContextMenuItem>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <LogOutIcon />
        Sair
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

const meta: Meta<typeof ContextMenuExample> = {
  title: "Components/general/ContextMenu",
  component: ContextMenuExample,
  tags: ["autodocs"],
  decorators: [ContextMenuDecorator],
};

export default meta;

type Story = StoryObj<typeof ContextMenuExample>;

export const Default: Story = {};

export const WithInset: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>Minha Conta</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Perfil</ContextMenuItem>
        <ContextMenuItem inset>Faturamento</ContextMenuItem>
        <ContextMenuItem inset>Configurações</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Sair</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <UserIcon />
            Perfil
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <UserPlusIcon />
              Convidar usuários
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>
                <MailIcon />
                Por e-mail
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageSquareIcon />
                Por mensagem
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <PlusCircleIcon />
                Mais opções
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOutIcon />
          Sair
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <UserIcon />
          Perfil
          <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCardIcon />
          Faturamento
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings2Icon />
          Configurações
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOutIcon />
          Sair
          <ContextMenuShortcut>⇧⌘Q</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

const CheckboxExample = () => {
  const [showStatus, setShowStatus] = React.useState(true);
  const [showPanel, setShowPanel] = React.useState(false);
  const [showActivity, setShowActivity] = React.useState(true);

  return (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Visibilidade</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showStatus}
          onCheckedChange={setShowStatus}
        >
          Exibir status
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Exibir painel lateral
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showActivity}
          onCheckedChange={setShowActivity}
        >
          Exibir atividade recente
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const WithCheckboxItems: Story = {
  render: () => <CheckboxExample />,
};

const RadioExample = () => {
  const [theme, setTheme] = React.useState("system");

  return (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Tema</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
          <ContextMenuRadioItem value="light">Claro</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Escuro</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">Sistema</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const WithRadioItems: Story = {
  render: () => <RadioExample />,
};

export const WithDestructive: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Conta</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <UserIcon />
          Perfil
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings2Icon />
          Configurações
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          Excluir conta
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={styles.trigger}>
        Clique com o botão direito
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Conta</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <UserIcon />
          Perfil
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <CreditCardIcon />
          Faturamento
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <Settings2Icon />
          Configurações
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOutIcon />
          Sair
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

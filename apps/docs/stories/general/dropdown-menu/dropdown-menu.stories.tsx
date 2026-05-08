import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
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

const DropdownMenuDecorator = (Story: StoryFn) => (
  <div className={styles.wrapper}>
    <ThemePanel theme="dark">
      <Story />
    </ThemePanel>
    <ThemePanel theme="light">
      <Story />
    </ThemePanel>
  </div>
);

const DropdownMenuExample = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Abrir Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <UserIcon />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Faturamento
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings2Icon />
          Configurações
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOutIcon />
        Sair
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const meta: Meta<typeof DropdownMenuExample> = {
  title: "Components/general/DropdownMenu",
  component: DropdownMenuExample,
  tags: ["autodocs"],
  decorators: [DropdownMenuDecorator],
};

export default meta;

type Story = StoryObj<typeof DropdownMenuExample>;

export const Default: Story = {};

export const WithInset: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Inset</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel inset>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Perfil</DropdownMenuItem>
        <DropdownMenuItem inset>Faturamento</DropdownMenuItem>
        <DropdownMenuItem inset>Configurações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithDestructive: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Destrutivo</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings2Icon />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Excluir conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

const CheckboxExample = () => {
  const [showStatus, setShowStatus] = React.useState(true);
  const [showPanel, setShowPanel] = React.useState(false);
  const [showActivity, setShowActivity] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Checkboxes</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Visibilidade</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatus}
          onCheckedChange={setShowStatus}
        >
          Exibir status
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Exibir painel lateral
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivity}
          onCheckedChange={setShowActivity}
        >
          Exibir atividade recente
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const WithCheckboxItems: Story = {
  render: () => <CheckboxExample />,
};

const RadioExample = () => {
  const [theme, setTheme] = React.useState("system");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Rádio</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Claro</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Escuro</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">Sistema</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const WithRadioItems: Story = {
  render: () => <RadioExample />,
};

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Sub-menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Perfil
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlusIcon />
              Convidar usuários
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <MailIcon />
                Por e-mail
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquareIcon />
                Por mensagem
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircleIcon />
                Mais opções
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Atalhos</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Perfil
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Faturamento
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings2Icon />
          Configurações
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sair
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Com Itens Desabilitados</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <CreditCardIcon />
          Faturamento
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings2Icon />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

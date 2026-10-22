import { Sidebar, type SidebarProps } from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Briefcase, Folder, LifeBuoy, ListChecks, Users } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

const Logo = () => <span className={styles.logo}>GAIA</span>;
const LogoCompact = () => <span className={styles.logo}>G</span>;

const sections: SidebarProps["sections"] = [
  [
    { title: "Produtos", href: "/", icon: Folder },
    { title: "Central de ajuda", href: "/ajuda", icon: LifeBuoy },
    { title: "Tarefas", href: "/tarefas", icon: ListChecks, badge: "3" },
  ],
  [
    { title: "Usuários", href: "/usuarios", icon: Users },
    { title: "Organizações", href: "/organizacoes", icon: Briefcase },
  ],
];

const languages = [
  { value: "pt", label: "Português", flag: "🇧🇷" },
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "es", label: "Español", flag: "🇪🇸" },
];

/** Sidebar com um conteúdo ao lado, como num app. */
const Shell = (props: Partial<SidebarProps>) => {
  const [lang, setLang] = useState("pt");

  return (
    <div className={styles.shell}>
      <Sidebar
        logo={<Logo />}
        logoCompact={<LogoCompact />}
        sections={sections}
        linkAs={NavLink}
        user={{ name: "Ana Souza", email: "ana.souza@gaia.dev" }}
        onLogout={() => window.alert("Sair")}
        onToggleTheme={() => window.alert("Trocar tema")}
        language={{ value: lang, options: languages, onChange: setLang }}
        {...props}
      />
      <main className={styles.content}>
        <h1 className={styles.title}>Produtos</h1>
        <p className={styles.text}>
          O conteúdo da página fica aqui. Use o botão no topo da sidebar para
          recolher e expandir.
        </p>
      </main>
    </div>
  );
};

const meta: Meta<typeof Sidebar> = {
  title: "Components/general/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Navegação lateral dos produtos GAIA. Não depende de router: passe `linkAs={NavLink}` para integrar com o react-router (o item ativo vem do `aria-current` que o NavLink já põe), ou `active` em cada link.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

/** Expandida, com links de admin, tema, idioma e conta. */
export const Padrao: Story = {
  name: "Padrão",
  render: () => <Shell />,
};

/** Só os ícones; o nome aparece na dica ao passar o mouse. */
export const Recolhida: Story = {
  render: () => <Shell defaultCollapsed />,
};

/** O mínimo: logo e links, sem rodapé. */
export const SoLinks: Story = {
  name: "Só links",
  render: () => (
    <Shell
      user={undefined}
      onLogout={undefined}
      onToggleTheme={undefined}
      language={undefined}
    />
  ),
};

/** Abaixo de `mobileBreakpoint` vira barra no topo com menu. */
export const Celular: Story = {
  render: () => <Shell mobileBreakpoint={100000} />,
};

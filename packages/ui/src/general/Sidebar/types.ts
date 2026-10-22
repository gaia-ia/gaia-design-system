import type { ComponentType, ElementType, ReactNode } from "react";

/** Um item de navegação da sidebar. */
export type SidebarLink = {
  /** Texto do link (e da dica quando a sidebar está recolhida). */
  title: string;
  /** Destino. Vai como `href` e, quando `linkAs` é um componente, também como `to`. */
  href: string;
  /** Ícone do lucide-react (ou qualquer componente que aceite `size`). */
  icon: ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  /** Marca o item como página atual. Com `NavLink` não precisa: ele já põe `aria-current`. */
  active?: boolean;
  /** Etiqueta curta à direita do título (ex.: "Novo", um contador). */
  badge?: ReactNode;
};

export type SidebarLanguage = {
  value: string;
  options: { value: string; label: string; flag?: string }[];
  onChange: (value: string) => void;
};

export type SidebarUser = {
  name: string;
  email?: string;
  avatarUrl?: string;
};

/** Textos da interface; o padrão é em português. */
export type SidebarLabels = {
  navigation: string;
  collapse: string;
  expand: string;
  openMenu: string;
  closeMenu: string;
  theme: string;
  logout: string;
};

export type SidebarProps = {
  /** Logo da sidebar expandida. */
  logo: ReactNode;
  /** Logo da sidebar recolhida. Se faltar, usa `logo`. */
  logoCompact?: ReactNode;
  /**
   * Grupos de links. Cada grupo é separado por uma divisória (ex.: links de
   * todos e links de admin).
   */
  sections: SidebarLink[][];
  /**
   * Componente usado nos links, para integrar com o router do app sem o design
   * system depender dele. Ex.: `linkAs={NavLink}`. Padrão: `"a"`.
   */
  linkAs?: ElementType;
  /** Chamado ao clicar num link (ex.: fechar o menu no celular é automático). */
  onNavigate?: (link: SidebarLink) => void;

  user?: SidebarUser;
  onLogout?: () => void;
  /** Mostra o botão "Tema" quando informado. */
  onToggleTheme?: () => void;
  /** Mostra o seletor de idioma quando informado. */
  language?: SidebarLanguage;

  /** Estado controlado de recolhida. */
  collapsed?: boolean;
  /** Estado inicial quando não controlado. Padrão: expandida. */
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Guarda a escolha de recolher no `localStorage` com esta chave. */
  storageKey?: string;

  /** Largura (px) abaixo da qual vira barra no topo com menu. Padrão: 700. */
  mobileBreakpoint?: number;
  labels?: Partial<SidebarLabels>;
  className?: string;
};

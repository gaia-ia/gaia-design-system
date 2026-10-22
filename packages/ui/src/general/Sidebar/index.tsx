import {
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  Menu,
  SunMoon,
  X,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Select } from "../../inputs/Select";
import clsx from "../../utils/clsx";
import { useWindowSize } from "../../utils/useWindowSize";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { Tooltip } from "../Tooltip";
import styles from "./styles.module.css";
import type { SidebarLabels, SidebarLink, SidebarProps } from "./types";

const DEFAULT_LABELS: SidebarLabels = {
  navigation: "Navegação principal",
  collapse: "Recolher menu",
  expand: "Expandir menu",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  theme: "Tema",
  language: "Idioma",
  logout: "Sair",
};

// O que recebe foco por Tab dentro do menu aberto no celular.
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

const initialsOf = (name: string) =>
  name
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const readStored = (key?: string) => {
  if (!key) return undefined;
  try {
    const value = localStorage.getItem(key);
    return value === null ? undefined : value === "1";
  } catch {
    return undefined;
  }
};

/**
 * Barra lateral de navegação dos produtos GAIA: painel flutuante com logo,
 * links (com o item ativo no laranja de ação), e no rodapé tema, idioma e a
 * conta do usuário, todos no mesmo formato de linha. Recolhe para só ícones
 * (com dica no hover) e, abaixo de `mobileBreakpoint`, vira uma barra no topo
 * com menu que abre por cima da página.
 *
 * Não depende de router: passe `linkAs={NavLink}` para integrar com o
 * react-router (o item ativo vem do `aria-current` que o NavLink já põe).
 *
 * @component
 * @param {SidebarProps} props - Ver `SidebarProps`.
 * @returns {JSX.Element} A sidebar.
 *
 * @example
 * <Sidebar
 *   logo={<LongLogo />}
 *   logoCompact={<ShortLogo />}
 *   linkAs={NavLink}
 *   sections={[
 *     [{ title: "Produtos", href: "/products", icon: Folder }],
 *     [{ title: "Usuários", href: "/users", icon: Users }],
 *   ]}
 *   user={{ name: "Ana Souza" }}
 *   onLogout={logout}
 *   onToggleTheme={toggleTheme}
 *   storageKey="gaia:sidebar-collapsed"
 * />
 */
export function Sidebar({
  logo,
  logoCompact,
  sections,
  linkAs: LinkAs = "a",
  onNavigate,
  user,
  onLogout,
  onToggleTheme,
  language,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  storageKey,
  mobileBreakpoint = 700,
  labels: labelsProp,
  className,
}: SidebarProps) {
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  // Ids das dicas: o `useId` traz ":", que não vale num seletor CSS.
  const uid = useId().replace(/:/g, "");
  const { width } = useWindowSize();
  const isMobile = Boolean(width && width < mobileBreakpoint);

  const [collapsedState, setCollapsedState] = useState(
    () => readStored(storageKey) ?? defaultCollapsed,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const asideRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const bodyId = `sb-${uid}-body`;

  const isControlled = collapsedProp !== undefined;
  const collapsed = isControlled ? collapsedProp : collapsedState;
  // No celular a sidebar nunca fica "recolhida": é a barra do topo e o menu.
  const compact = !isMobile && collapsed;

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Menu aberto no celular cobre a página: Esc fecha e devolve o foco ao
  // botão, e o Tab circula só dentro da sidebar.
  const overlayOpen = isMobile && menuOpen;
  useEffect(() => {
    if (!overlayOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      // Esc/Tab já tratados por algo aberto dentro (ex.: o Select de idioma).
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      const aside = asideRef.current;
      if (event.key !== "Tab" || !aside) return;
      const focusables = Array.from(
        aside.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.getClientRects().length > 0);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (!aside.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [overlayOpen]);

  const toggle = () => {
    if (isMobile) {
      setMenuOpen((open) => !open);
      return;
    }
    const next = !collapsed;
    if (!isControlled) setCollapsedState(next);
    if (storageKey) {
      try {
        localStorage.setItem(storageKey, next ? "1" : "0");
      } catch {
        // Sem storage: vale só nesta visita.
      }
    }
    onCollapsedChange?.(next);
  };

  const ToggleIcon = isMobile
    ? menuOpen
      ? X
      : Menu
    : compact
      ? ChevronsRight
      : ChevronsLeft;
  const toggleLabel = isMobile
    ? menuOpen
      ? labels.closeMenu
      : labels.openMenu
    : compact
      ? labels.expand
      : labels.collapse;

  // Só anuncia "sair" quando a ação existe de fato.
  const accountLabel =
    user && onLogout ? `${user.name} · ${labels.logout}` : (user?.name ?? "");

  const showBody = !isMobile || menuOpen;

  const renderLink = (link: SidebarLink, index: string) => {
    const Icon = link.icon;
    const id = `sb-${uid}-${index}`;
    const linkProps =
      LinkAs === "a" ? { href: link.href } : { to: link.href, href: link.href };

    return (
      <div key={id}>
        <LinkAs
          {...linkProps}
          id={id}
          className={styles.link}
          aria-current={link.active ? "page" : undefined}
          aria-label={compact ? link.title : undefined}
          onClick={() => {
            if (isMobile) setMenuOpen(false);
            onNavigate?.(link);
          }}
        >
          <Icon size={20} aria-hidden />
          {!compact && <span className={styles.linkTitle}>{link.title}</span>}
          {!compact && link.badge !== undefined && (
            <span className={styles.badge}>{link.badge}</span>
          )}
        </LinkAs>
        {compact && (
          <Tooltip text={link.title} anchorSelect={`#${id}`} place="right" />
        )}
      </div>
    );
  };

  return (
    <aside
      ref={asideRef}
      data-slot="sidebar"
      className={clsx(
        styles.sidebar,
        compact && styles.compact,
        isMobile && styles.mobile,
        isMobile && menuOpen && styles.open,
        className,
      )}
    >
      <div className={styles.panel}>
        <div className={styles.head}>
          <div className={styles.logo}>
            {compact ? (logoCompact ?? logo) : logo}
          </div>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-label={toggleLabel}
            aria-expanded={isMobile ? menuOpen : !compact}
            aria-controls={showBody ? bodyId : undefined}
          >
            <ToggleIcon size={16} aria-hidden />
          </button>
        </div>

        {showBody && (
          <div id={bodyId} className={styles.body}>
            <nav className={styles.nav} aria-label={labels.navigation}>
              {sections.map((links, s) => (
                <div key={s} className={styles.section}>
                  {s > 0 && <hr className={styles.divider} />}
                  {links.map((link, l) => renderLink(link, `${s}-${l}`))}
                </div>
              ))}
            </nav>

            <footer className={styles.footer}>
              {onToggleTheme && (
                <>
                  <button
                    type="button"
                    id={`sb-${uid}-theme`}
                    className={styles.row}
                    onClick={onToggleTheme}
                    aria-label={compact ? labels.theme : undefined}
                  >
                    <SunMoon size={18} aria-hidden />
                    {!compact && <span>{labels.theme}</span>}
                  </button>
                  {compact && (
                    <Tooltip
                      text={labels.theme}
                      anchorSelect={`#sb-${uid}-theme`}
                      place="right"
                    />
                  )}
                </>
              )}

              {language && (
                <div className={styles.language}>
                  {/* O Select não aceita aria-label: nomeia o combobox por um label oculto. */}
                  <label
                    htmlFor={`sb-${uid}-language`}
                    className={styles.srOnly}
                  >
                    {labels.language}
                  </label>
                  <Select
                    id={`sb-${uid}-language`}
                    options={language.options.map(({ value, label, flag }) => ({
                      value,
                      // Recolhida, só cabe a bandeira.
                      label:
                        compact && flag
                          ? flag
                          : [flag, label].filter(Boolean).join(" "),
                    }))}
                    value={language.value}
                    onChange={(value) => language.onChange(String(value))}
                  />
                </div>
              )}

              {user && (
                <>
                  <hr className={styles.divider} />
                  <button
                    type="button"
                    id={`sb-${uid}-account`}
                    className={clsx(styles.row, styles.account)}
                    onClick={onLogout}
                    disabled={!onLogout}
                    aria-label={accountLabel}
                    title={user.email}
                  >
                    <Avatar className={styles.avatar} aria-hidden>
                      {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
                      <AvatarFallback className={styles.avatarFallback}>
                        {initialsOf(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    {!compact && (
                      <span className={styles.name}>{user.name}</span>
                    )}
                    {!compact && onLogout && (
                      <LogOut size={16} aria-hidden className={styles.logout} />
                    )}
                  </button>
                  {compact && (
                    <Tooltip
                      text={accountLabel}
                      anchorSelect={`#sb-${uid}-account`}
                      place="right"
                    />
                  )}
                </>
              )}
            </footer>
          </div>
        )}
      </div>
    </aside>
  );
}

export type {
  SidebarLabels,
  SidebarLanguage,
  SidebarLink,
  SidebarProps,
  SidebarUser,
} from "./types";

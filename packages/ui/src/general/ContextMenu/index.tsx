import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import * as React from "react";

import clsx from "../../utils/clsx";
import { usePortalContainer } from "../../utils/portalContainer";
import styles from "./styles.module.css";

/**
 * Root component for the context menu system.
 *
 * Provides context and accessibility bindings for the menu. Must wrap
 * `ContextMenuTrigger` and `ContextMenuContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Root>} props - Props passed to Radix's `ContextMenu.Root`.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenu>
 *   <ContextMenuTrigger>Clique com o botão direito</ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Item</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 */
function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

/**
 * Renders context menu content outside the normal DOM hierarchy.
 *
 * Used internally by `ContextMenuContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Portal>} props - Portal props.
 * @returns {JSX.Element}
 */
function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

/**
 * The area that listens for right-click events to open the context menu.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Trigger>} props - Trigger props.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuTrigger>
 *   <div>Clique com o botão direito aqui</div>
 * </ContextMenuTrigger>
 */
function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

/**
 * The floating menu panel rendered in a portal at the cursor position.
 *
 * Automatically handles positioning and plays open/close animations.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Content>} props - Content props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuContent>
 *   <ContextMenuItem>Item</ContextMenuItem>
 * </ContextMenuContent>
 */
function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  const container = usePortalContainer();
  return (
    <ContextMenuPrimitive.Portal container={container ?? undefined}>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={clsx(styles.content, className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

/**
 * Groups related menu items together.
 *
 * Has no visual styling by default — use `ContextMenuLabel` to add a heading.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Group>} props - Group props.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuGroup>
 *   <ContextMenuLabel>Conta</ContextMenuLabel>
 *   <ContextMenuItem>Perfil</ContextMenuItem>
 * </ContextMenuGroup>
 */
function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

/**
 * An interactive item within the context menu.
 *
 * Supports an optional `inset` layout and a `destructive` variant for dangerous actions.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Item>} props - Item props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with indented items.
 * @param {"default" | "destructive"} [props.variant="default"] - Visual variant.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuItem>
 *   <UserIcon />
 *   Perfil
 * </ContextMenuItem>
 *
 * @example
 * <ContextMenuItem variant="destructive">
 *   <TrashIcon />
 *   Excluir
 * </ContextMenuItem>
 */
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={clsx(styles.item, className)}
      {...props}
    />
  );
}

/**
 * A checkable menu item that toggles between checked and unchecked states.
 *
 * Displays a `CheckIcon` indicator when checked.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>} props - CheckboxItem props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.checked] - The controlled checked state.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
 *   Exibir status
 * </ContextMenuCheckboxItem>
 */
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={clsx(styles.checkboxItem, className)}
      checked={checked}
      {...props}
    >
      <span
        className={styles.indicatorWrapper}
        data-slot="context-menu-checkbox-item-indicator"
      >
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

/**
 * Groups radio items to allow single selection within the context menu.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>} props - RadioGroup props.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuRadioGroup value={position} onValueChange={setPosition}>
 *   <ContextMenuRadioItem value="top">Topo</ContextMenuRadioItem>
 *   <ContextMenuRadioItem value="bottom">Base</ContextMenuRadioItem>
 * </ContextMenuRadioGroup>
 */
function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

/**
 * A radio-style menu item that belongs to a `ContextMenuRadioGroup`.
 *
 * Displays a `CheckIcon` indicator when selected.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>} props - RadioItem props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuRadioItem value="light">Claro</ContextMenuRadioItem>
 */
function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={clsx(styles.radioItem, className)}
      {...props}
    >
      <span
        className={styles.indicatorWrapper}
        data-slot="context-menu-radio-item-indicator"
      >
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

/**
 * A non-interactive label for a group of menu items.
 *
 * Supports the same `inset` layout as `ContextMenuItem`.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Label>} props - Label props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuLabel>Minha Conta</ContextMenuLabel>
 */
function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={clsx(styles.label, className)}
      {...props}
    />
  );
}

/**
 * A visual separator line between groups of menu items.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Separator>} props - Separator props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuSeparator />
 */
function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={clsx(styles.separator, className)}
      {...props}
    />
  );
}

/**
 * Displays a keyboard shortcut hint aligned to the right of a menu item.
 *
 * Must be placed inside a `ContextMenuItem`.
 *
 * @component
 * @param {React.ComponentProps<"span">} props - Standard span props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuItem>
 *   Perfil
 *   <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
 * </ContextMenuItem>
 */
function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={clsx(styles.shortcut, className)}
      {...props}
    />
  );
}

/**
 * Root component for a nested sub-menu within the context menu.
 *
 * Must wrap `ContextMenuSubTrigger` and `ContextMenuSubContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.Sub>} props - Sub props.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuSub>
 *   <ContextMenuSubTrigger>Mais opções</ContextMenuSubTrigger>
 *   <ContextMenuSubContent>
 *     <ContextMenuItem>Opção A</ContextMenuItem>
 *   </ContextMenuSubContent>
 * </ContextMenuSub>
 */
function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

/**
 * The trigger item that opens a sub-menu when focused or hovered.
 *
 * Renders a `ChevronRightIcon` on the right side to indicate the sub-menu.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>} props - SubTrigger props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuSubTrigger>Mais opções</ContextMenuSubTrigger>
 */
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={clsx(styles.subTrigger, className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className={styles.chevron} />
    </ContextMenuPrimitive.SubTrigger>
  );
}

/**
 * The content panel for a nested sub-menu.
 *
 * @component
 * @param {React.ComponentProps<typeof ContextMenuPrimitive.SubContent>} props - SubContent props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <ContextMenuSubContent>
 *   <ContextMenuItem>Opção A</ContextMenuItem>
 * </ContextMenuSubContent>
 */
function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={clsx(styles.subContent, className)}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};

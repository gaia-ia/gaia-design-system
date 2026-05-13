import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import * as React from "react";

import clsx from "../../utils/clsx";
import { usePortalContainer } from "../../utils/portalContainer";
import styles from "./styles.module.css";

/**
 * Root component for the dropdown menu system.
 *
 * Provides context and accessibility bindings for the menu. Must wrap
 * `DropdownMenuTrigger` and `DropdownMenuContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Root>} props - Props passed to Radix's `DropdownMenu.Root`.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenu>
 *   <DropdownMenuTrigger>Abrir</DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>Item</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 */
function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

/**
 * Renders dropdown menu content outside the normal DOM hierarchy.
 *
 * Useful for correct stacking above the page content. Used internally
 * by `DropdownMenuContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Portal>} props - Portal props.
 * @returns {JSX.Element}
 */
function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

/**
 * Element that triggers the dropdown menu to open when interacted with.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>} props - Trigger props.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuTrigger asChild>
 *   <button>Abrir Menu</button>
 * </DropdownMenuTrigger>
 */
function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

/**
 * The floating menu panel rendered in a portal.
 *
 * Automatically handles positioning relative to the trigger and plays
 * open/close animations.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Content>} props - Content props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {"start" | "center" | "end"} [props.align="start"] - Alignment relative to the trigger.
 * @param {number} [props.sideOffset=4] - Distance in pixels from the trigger.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuContent align="end">
 *   <DropdownMenuItem>Item</DropdownMenuItem>
 * </DropdownMenuContent>
 */
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  const container = usePortalContainer();
  return (
    <DropdownMenuPrimitive.Portal container={container ?? undefined}>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={clsx(styles.content, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

/**
 * Groups related menu items together.
 *
 * Has no visual styling by default — use `DropdownMenuLabel` to add a heading.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Group>} props - Group props.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuGroup>
 *   <DropdownMenuLabel>Conta</DropdownMenuLabel>
 *   <DropdownMenuItem>Perfil</DropdownMenuItem>
 * </DropdownMenuGroup>
 */
function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

/**
 * An interactive item within the dropdown menu.
 *
 * Supports an optional `inset` layout (left-padded to align with checkbox/radio items)
 * and a `destructive` variant for dangerous actions.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Item>} props - Item props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with indented items.
 * @param {"default" | "destructive"} [props.variant="default"] - Visual variant.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuItem>
 *   <UserIcon />
 *   Perfil
 * </DropdownMenuItem>
 *
 * @example
 * <DropdownMenuItem variant="destructive">
 *   <TrashIcon />
 *   Excluir conta
 * </DropdownMenuItem>
 */
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
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
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>} props - CheckboxItem props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.checked] - The controlled checked state.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
 *   Exibir status
 * </DropdownMenuCheckboxItem>
 */
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={clsx(styles.checkboxItem, className)}
      checked={checked}
      {...props}
    >
      <span
        className={styles.indicatorWrapper}
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

/**
 * Groups radio items to allow single selection within the dropdown menu.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>} props - RadioGroup props.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
 *   <DropdownMenuRadioItem value="top">Topo</DropdownMenuRadioItem>
 *   <DropdownMenuRadioItem value="bottom">Base</DropdownMenuRadioItem>
 * </DropdownMenuRadioGroup>
 */
function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

/**
 * A radio-style menu item that belongs to a `DropdownMenuRadioGroup`.
 *
 * Displays a `CheckIcon` indicator when selected.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>} props - RadioItem props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuRadioItem value="light">Claro</DropdownMenuRadioItem>
 */
function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={clsx(styles.radioItem, className)}
      {...props}
    >
      <span
        className={styles.indicatorWrapper}
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

/**
 * A non-interactive label for a group of menu items.
 *
 * Supports the same `inset` layout as `DropdownMenuItem`.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Label>} props - Label props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
 */
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
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
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Separator>} props - Separator props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuSeparator />
 */
function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={clsx(styles.separator, className)}
      {...props}
    />
  );
}

/**
 * Displays a keyboard shortcut hint aligned to the right of a menu item.
 *
 * Must be placed inside a `DropdownMenuItem`. Changes color when the parent
 * item is focused.
 *
 * @component
 * @param {React.ComponentProps<"span">} props - Standard span props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuItem>
 *   Perfil
 *   <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
 * </DropdownMenuItem>
 */
function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={clsx(styles.shortcut, className)}
      {...props}
    />
  );
}

/**
 * Root component for a nested sub-menu within the dropdown menu.
 *
 * Must wrap `DropdownMenuSubTrigger` and `DropdownMenuSubContent`.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.Sub>} props - Sub props.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuSub>
 *   <DropdownMenuSubTrigger>Mais opções</DropdownMenuSubTrigger>
 *   <DropdownMenuSubContent>
 *     <DropdownMenuItem>Opção A</DropdownMenuItem>
 *   </DropdownMenuSubContent>
 * </DropdownMenuSub>
 */
function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

/**
 * The trigger item that opens a sub-menu when focused or hovered.
 *
 * Renders a `ChevronRightIcon` on the right side to indicate the sub-menu.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>} props - SubTrigger props.
 * @param {string} [props.className] - Optional additional class names.
 * @param {boolean} [props.inset] - When true, adds left padding to align with inset items.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuSubTrigger>Mais opções</DropdownMenuSubTrigger>
 */
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={clsx(styles.subTrigger, className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className={styles.chevron} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

/**
 * The content panel for a nested sub-menu.
 *
 * @component
 * @param {React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>} props - SubContent props.
 * @param {string} [props.className] - Optional additional class names.
 * @returns {JSX.Element}
 *
 * @example
 * <DropdownMenuSubContent>
 *   <DropdownMenuItem>Opção A</DropdownMenuItem>
 * </DropdownMenuSubContent>
 */
function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={clsx(styles.subContent, className)}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};

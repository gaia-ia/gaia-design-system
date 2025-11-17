import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import * as React from "react";

import clsx from "../../utils/clsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../Dialog";
import styles from "./styles.module.css";

/**
 * A styled wrapper around `cmdk.Command`, providing base styling and a data attribute for targeting.
 *
 * Typically used as the root of a non-dialog command interface, or internally by `CommandDialog`.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive>} props - Props passed to the underlying `cmdk.Command` component.
 * @returns {JSX.Element} A styled command container.
 *
 * @example
 * <Command>
 *   <CommandInput />
 *   <CommandList>
 *     <CommandItem>Profile</CommandItem>
 *   </CommandList>
 * </Command>
 */
function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={clsx(styles.command, className)}
      {...props}
    />
  );
}

/**
 * A modal-style command palette using `Dialog` and `cmdk.Command` internally.
 *
 * Provides screen-reader-friendly titles and descriptions,
 * as well as optional close button and customizable dialog content.
 *
 * @component
 * @param {React.ComponentProps<typeof Dialog> & {
 *   title?: string;
 *   description?: string;
 *   className?: string;
 *   showCloseButton?: boolean;
 * }} props - Dialog and content configuration props.
 * @returns {JSX.Element} A full-screen accessible command palette dialog.
 *
 * @example
 * <CommandDialog open={open} onOpenChange={setOpen}>
 *   <CommandInput />
 *   <CommandList>
 *     <CommandItem>Log out</CommandItem>
 *   </CommandList>
 * </CommandDialog>
 */
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={clsx(styles.dialogContent, className)}
        showCloseButton={showCloseButton}
      >
        <Command className={styles.commandScoped}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

/**
 * A styled command input field with a leading search icon.
 *
 * Wraps `cmdk.Command.Input` and provides layout, accessibility, and visual consistency.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive.Input>} props - Props passed to the input.
 * @returns {JSX.Element} Input field for command search.
 *
 * @example
 * <CommandInput placeholder="Search..." />
 */
function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className={styles.commandInputWrapper}
    >
      <SearchIcon className={styles.searchIcon} />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={clsx(styles.commandInput, className)}
        {...props}
      />
    </div>
  );
}

/**
 * A styled wrapper around `cmdk.Command.List`, used to render command results.
 *
 * Typically includes `CommandItem`, `CommandGroup`, `CommandSeparator`, and `CommandEmpty`.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive.List>} props - Props passed to the list container.
 * @returns {JSX.Element} List container for command results.
 */
function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={`${styles.commandList} ${className ?? ""}`}
      {...props}
    />
  );
}

/**
 * Fallback UI shown when no command results match the current input.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive.Empty>} props - Props passed to the empty state.
 * @returns {JSX.Element} Message shown when no matches are found.
 *
 * @example
 * <CommandEmpty>No results found</CommandEmpty>
 */
function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={clsx(styles.commandEmpty, className)}
      {...props}
    />
  );
}

/**
 * Groups related command items under a common heading.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive.Group>} props - Props for the group.
 * @returns {JSX.Element} Grouped items with label.
 *
 * @example
 * <CommandGroup heading="Settings">
 *   <CommandItem>Preferences</CommandItem>
 * </CommandGroup>
 */
function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={clsx(styles.commandGroup, className)}
      {...props}
    />
  );
}

/**
 * Visual separator between command groups or sections.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive.Separator>} props - Separator props.
 * @returns {JSX.Element} A horizontal separator line.
 */
function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={clsx(styles.commandSeparator, className)}
      {...props}
    />
  );
}

/**
 * A styled command item representing an individual result or action.
 *
 * Often used within a `CommandList`, optionally with `CommandShortcut`.
 *
 * @component
 * @param {React.ComponentProps<typeof CommandPrimitive.Item>} props - Props for the item.
 * @returns {JSX.Element} A clickable/selectable command item.
 *
 * @example
 * <CommandItem onSelect={() => alert("Open profile")}>
 *   Profile
 *   <CommandShortcut>⌘P</CommandShortcut>
 * </CommandItem>
 */
function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={clsx(styles.commandItem, className)}
      {...props}
    />
  );
}

/**
 * Displays a keyboard shortcut hint aligned within a `CommandItem`.
 *
 * @component
 * @param {React.ComponentProps<"span">} props - Span element props.
 * @returns {JSX.Element} A styled keyboard shortcut label.
 *
 * @example
 * <CommandShortcut>⌘K</CommandShortcut>
 */
function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={clsx(styles.commandShortcut, className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};

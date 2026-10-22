import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "../../buttons/Button";
import { Title } from "../../typography/Title";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { ModalButtonsProps, ModalContentProps } from "./types";

/**
 * A modal dialog container component with a title, close button, and backdrop.
 *
 * Built on the Radix Dialog primitive, so it is an accessible modal dialog: `role="dialog"`,
 * `aria-modal`, named by its title, closes on Escape, backdrop click or the top-right icon button,
 * keeps Tab focus inside, and returns focus to the element that was focused before it opened.
 * The title is rendered using the `Title` component with a `subtitle` variant.
 *
 * Render it only while open (e.g. `{open && <ModalContent ... />}`); closing calls `setOpen(false)`.
 *
 * @component
 * @param {ModalContentProps} props - Props for configuring the modal content.
 * @param {React.ReactNode} props.children - Content to render inside the modal body.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setOpen - State setter to control open/close behavior.
 * @param {string} props.title - Title text displayed in the modal header.
 * @param {string} [props.className] - Optional custom class name for the modal container.
 * @param {string} [props.closeLabel="Fechar"] - Accessible name of the close icon button.
 * @returns {JSX.Element} A modal structure with header, content area, and backdrop.
 *
 * @example
 * <ModalContent title="Confirm Delete" setOpen={setOpen}>
 *   <p>Are you sure you want to delete this item?</p>
 *   <ModalButtons>
 *     <Button onClick={() => setOpen(false)}>Cancel</Button>
 *     <Button variant="danger" onClick={handleDelete}>Delete</Button>
 *   </ModalButtons>
 * </ModalContent>
 */
export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  setOpen,
  title,
  className,
  closeLabel = "Fechar",
}) => {
  // O modal monta já aberto e sem Trigger do Radix: guarda quem tinha o foco
  // antes de abrir para devolver ao fechar.
  const [returnFocusTo] = useState(() =>
    typeof document === "undefined"
      ? null
      : (document.activeElement as HTMLElement | null),
  );

  return (
    <DialogPrimitive.Root
      open
      onOpenChange={(open) => {
        if (!open) setOpen(false);
      }}
    >
      <DialogPrimitive.Overlay className={styles.background} />
      <DialogPrimitive.Content
        className={clsx(styles.modal, className)}
        aria-modal="true"
        aria-describedby={undefined}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          returnFocusTo?.focus();
        }}
      >
        <div className={styles.header}>
          <DialogPrimitive.Title asChild>
            <Title variant="subtitle">{title}</Title>
          </DialogPrimitive.Title>
          <DialogPrimitive.Close asChild>
            <Button
              size="icon"
              variant="ghost"
              className={styles.close_button}
              aria-label={closeLabel}
            >
              <X size={16} />
            </Button>
          </DialogPrimitive.Close>
        </div>
        <div className={styles.content}>{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
};

/**
 * A layout component for rendering modal action buttons in a consistent style.
 *
 * Typically used inside `ModalContent` to wrap primary and secondary actions.
 *
 * @component
 * @param {ModalButtonsProps} props - Props for the button container.
 * @param {React.ReactNode} props.children - Buttons or other interactive elements.
 * @param {string} [props.className] - Optional additional class name(s).
 * @returns {JSX.Element} A styled container for modal buttons.
 *
 * @example
 * <ModalButtons>
 *   <Button>Cancel</Button>
 *   <Button variant="primary">Confirm</Button>
 * </ModalButtons>
 */
export const ModalButtons: React.FC<ModalButtonsProps> = ({
  children,
  className,
}) => {
  return <div className={clsx(styles.buttons, className)}>{children}</div>;
};

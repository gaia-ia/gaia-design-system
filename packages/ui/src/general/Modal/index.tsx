import { X } from "lucide-react";

import { Button } from "../../buttons/Button";
import { Title } from "../../typography/Title";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { ModalButtonsProps, ModalContentProps } from "./types";

/**
 * A modal dialog container component with a title, close button, and backdrop.
 *
 * Handles closing the modal via backdrop click or top-right icon button.
 * The title is rendered using the `Title` component with a `subtitle` variant.
 *
 * @component
 * @param {ModalContentProps} props - Props for configuring the modal content.
 * @param {React.ReactNode} props.children - Content to render inside the modal body.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setOpen - State setter to control open/close behavior.
 * @param {string} props.title - Title text displayed in the modal header.
 * @param {string} [props.className] - Optional custom class name for the modal container.
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
}) => {
  return (
    <>
      <div className={styles.background} onClick={() => setOpen(false)} />
      <div className={clsx(styles.modal, className)}>
        <div className={styles.header}>
          <Title variant="subtitle">{title}</Title>
          <Button
            variant="icon"
            icon={X}
            onClick={() => setOpen(false)}
            className={styles.close_button}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
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

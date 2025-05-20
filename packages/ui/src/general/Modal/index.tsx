import { X } from "lucide-react";

import { Button } from "../../buttons/Button";
import { Title } from "../../typography/Title";
import styles from "./styles.module.css";
import { ModalButtonsProps, ModalContentProps } from "./types";

export const Content: React.FC<ModalContentProps> = ({
  children,
  setOpen,
  title,
  className,
}) => {
  return (
    <>
      <div className={styles.background} onClick={() => setOpen(false)} />
      <div className={`${styles.modal} ${className}`}>
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

export const Buttons: React.FC<ModalButtonsProps> = ({
  children,
  className,
}) => {
  return <div className={`${styles.buttons} ${className}`}>{children}</div>;
};

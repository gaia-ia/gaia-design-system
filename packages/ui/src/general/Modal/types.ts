import { Dispatch, SetStateAction } from "react";

export type ModalContentProps = {
  children: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  className?: string;
  /** Accessible name of the close icon button. Defaults to `"Fechar"`. */
  closeLabel?: string;
};

export type ModalButtonsProps = {
  children: React.ReactNode;
  className?: string;
};

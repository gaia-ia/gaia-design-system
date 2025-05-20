import { Dispatch, SetStateAction } from "react";

export type ModalContentProps = {
  children: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  className?: string;
};

export type ModalButtonsProps = {
  children: React.ReactNode;
  className?: string;
};

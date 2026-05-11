import { createContext, useContext } from "react";

import type { FileWithState } from "./types";

export interface FileUploadContextValue {
  files: FileWithState[];
  inputId: string;
  multiple: boolean;
  disabled: boolean;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  invalid: boolean;
  openFileDialog: () => void;
  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
}

export const FileUploadContext = createContext<FileUploadContextValue | null>(
  null,
);

/**
 * Reads the FileUpload compound context.
 *
 * Throws when used outside of a `<FileUpload>` root — every sub-component depends
 * on the shared state for files, validation config, and dialog control.
 *
 * @returns The active FileUpload context value.
 */
export function useFileUpload(): FileUploadContextValue {
  const ctx = useContext(FileUploadContext);
  if (!ctx) {
    throw new Error(
      "FileUpload sub-components must be used inside <FileUpload>",
    );
  }
  return ctx;
}

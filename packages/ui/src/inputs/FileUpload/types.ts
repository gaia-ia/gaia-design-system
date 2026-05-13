import type * as React from "react";

export type FileUploadStatus = "idle" | "uploading" | "success" | "error";

export interface FileWithState {
  id: string;
  file: File;
  progress: number;
  status: FileUploadStatus;
  error?: string;
}

export interface FileUploadUploadHelpers {
  onProgress: (file: File, progress: number) => void;
  onSuccess: (file: File) => void;
  onError: (file: File, message: string) => void;
}

export interface FileUploadProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange" | "onError" | "defaultValue"
  > {
  id?: string;
  value?: File[];
  defaultValue?: File[];
  onValueChange?: (files: File[]) => void;
  onUpload?: (
    files: File[],
    helpers: FileUploadUploadHelpers,
  ) => Promise<void> | void;
  onFileValidate?: (file: File) => string | null;
  onFileReject?: (file: File, message: string) => void;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface FileUploadDropzoneProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export interface FileUploadTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface FileUploadListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

export interface FileUploadItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: File;
  children?: React.ReactNode;
}

export interface FileUploadItemPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface FileUploadItemMetadataProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface FileUploadItemProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface FileUploadItemDeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface FileUploadClearProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

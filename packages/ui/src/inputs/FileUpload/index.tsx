import { File as FileIcon, FileText, Upload, X } from "lucide-react";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import { convertBytesToReadable } from "../../utils/convertBytesToReadable";
import { isImageOrVideo } from "../../utils/isImageOrVideo";
import {
  FileUploadContext,
  type FileUploadContextValue,
  useFileUpload,
} from "./context";
import styles from "./styles.module.css";
import type {
  FileUploadClearProps,
  FileUploadDropzoneProps,
  FileUploadItemDeleteProps,
  FileUploadItemMetadataProps,
  FileUploadItemPreviewProps,
  FileUploadItemProgressProps,
  FileUploadItemProps,
  FileUploadListProps,
  FileUploadProps,
  FileUploadTriggerProps,
  FileWithState,
} from "./types";

function generateId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function fileMatchesAccept(file: File, accept?: string): boolean {
  if (!accept) return true;
  const patterns = accept.split(",").map((s) => s.trim().toLowerCase());
  const fileName = file.name.toLowerCase();
  const fileType = file.type.toLowerCase();

  return patterns.some((pattern) => {
    if (!pattern) return false;
    if (pattern.startsWith(".")) {
      return fileName.endsWith(pattern);
    }
    if (pattern.endsWith("/*")) {
      const prefix = pattern.slice(0, -1);
      return fileType.startsWith(prefix);
    }
    return fileType === pattern;
  });
}

/**
 * Root of the FileUpload compound component.
 *
 * Owns the file list state (controlled via `value`/`onValueChange` or uncontrolled via
 * `defaultValue`), runs the validation pipeline (`accept`, `maxSize`, `maxFiles`,
 * `onFileValidate`), and provides context to all sub-components.
 *
 * When `onUpload` is supplied, accepted files trigger an upload pass with progress,
 * success, and error callbacks that update item state in place.
 *
 * @component
 * @param {FileUploadProps} props - Props for the root.
 * @returns {JSX.Element} The compound provider plus a hidden native `<input type="file">`.
 *
 * @example
 * <FileUpload accept="image/*" maxSize={5 * 1024 * 1024} multiple>
 *   <FileUploadDropzone>Drop files here</FileUploadDropzone>
 *   <FileUploadTrigger>Browse</FileUploadTrigger>
 *   <FileUploadList />
 * </FileUpload>
 */
export const FileUpload: React.FC<FileUploadProps> = ({
  id,
  value,
  defaultValue,
  onValueChange,
  onUpload,
  onFileValidate,
  onFileReject,
  accept,
  maxSize,
  maxFiles,
  multiple = false,
  disabled = false,
  className,
  children,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id ?? `file-upload-${generatedId}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;

  const [internalFiles, setInternalFiles] = useState<FileWithState[]>(() =>
    (defaultValue ?? []).map((file) => ({
      id: generateId(),
      file,
      progress: 0,
      status: "idle" as const,
    })),
  );

  useEffect(() => {
    if (!isControlled) return;
    setInternalFiles((prev) => {
      const next: FileWithState[] = [];
      for (const file of value as File[]) {
        const existing = prev.find((item) => item.file === file);
        if (existing) {
          next.push(existing);
        } else {
          next.push({
            id: generateId(),
            file,
            progress: 0,
            status: "idle",
          });
        }
      }
      return next;
    });
  }, [isControlled, value]);

  const notifyChange = useCallback(
    (nextFiles: FileWithState[]) => {
      onValueChange?.(nextFiles.map((f) => f.file));
    },
    [onValueChange],
  );

  const validateFile = useCallback(
    (file: File, currentCount: number): string | null => {
      if (!fileMatchesAccept(file, accept)) {
        return `File type not accepted. Allowed: ${accept}`;
      }
      if (maxSize !== undefined && file.size > maxSize) {
        return `File exceeds max size of ${convertBytesToReadable(maxSize)}`;
      }
      if (maxFiles !== undefined && currentCount >= maxFiles) {
        return `Maximum of ${maxFiles} file${maxFiles === 1 ? "" : "s"} allowed`;
      }
      if (onFileValidate) {
        const custom = onFileValidate(file);
        if (custom) return custom;
      }
      return null;
    },
    [accept, maxSize, maxFiles, onFileValidate],
  );

  const updateFileState = useCallback(
    (id: string, partial: Partial<FileWithState>) => {
      setInternalFiles((prev) =>
        prev.map((f) => (f.id === id ? { ...f, ...partial } : f)),
      );
    },
    [],
  );

  const addFiles = useCallback(
    (incoming: File[]) => {
      if (disabled) return;

      const accepted: FileWithState[] = [];
      let currentCount = internalFiles.length;

      for (const file of incoming) {
        const error = validateFile(file, currentCount);
        if (error) {
          onFileReject?.(file, error);
          continue;
        }
        accepted.push({
          id: generateId(),
          file,
          progress: 0,
          status: "idle",
        });
        currentCount += 1;
        if (!multiple) break;
      }

      if (accepted.length === 0) return;

      const nextFiles = multiple
        ? [...internalFiles, ...accepted]
        : accepted.slice(0, 1);

      setInternalFiles(nextFiles);
      notifyChange(nextFiles);

      if (onUpload) {
        const acceptedRawFiles = accepted.map((f) => f.file);
        accepted.forEach((f) =>
          updateFileState(f.id, { status: "uploading", progress: 0 }),
        );

        const findIdByFile = (file: File): string | undefined =>
          accepted.find((f) => f.file === file)?.id;

        Promise.resolve(
          onUpload(acceptedRawFiles, {
            onProgress: (file, progress) => {
              const targetId = findIdByFile(file);
              if (targetId) {
                updateFileState(targetId, {
                  progress: Math.max(0, Math.min(100, progress)),
                });
              }
            },
            onSuccess: (file) => {
              const targetId = findIdByFile(file);
              if (targetId) {
                updateFileState(targetId, {
                  status: "success",
                  progress: 100,
                });
              }
            },
            onError: (file, message) => {
              const targetId = findIdByFile(file);
              if (targetId) {
                updateFileState(targetId, { status: "error", error: message });
              }
            },
          }),
        ).catch((err: unknown) => {
          const message = err instanceof Error ? err.message : "Upload failed";
          accepted.forEach((f) =>
            updateFileState(f.id, { status: "error", error: message }),
          );
        });
      }
    },
    [
      disabled,
      internalFiles,
      validateFile,
      onFileReject,
      multiple,
      onUpload,
      notifyChange,
      updateFileState,
    ],
  );

  const removeFile = useCallback(
    (fileId: string) => {
      const next = internalFiles.filter((f) => f.id !== fileId);
      setInternalFiles(next);
      notifyChange(next);
    },
    [internalFiles, notifyChange],
  );

  const clearFiles = useCallback(() => {
    setInternalFiles([]);
    notifyChange([]);
  }, [notifyChange]);

  const openFileDialog = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  const invalid = internalFiles.some((f) => f.status === "error");

  const contextValue = useMemo<FileUploadContextValue>(
    () => ({
      files: internalFiles,
      inputId,
      multiple,
      disabled,
      accept,
      maxSize,
      maxFiles,
      invalid,
      openFileDialog,
      addFiles,
      removeFile,
      clearFiles,
    }),
    [
      internalFiles,
      inputId,
      multiple,
      disabled,
      accept,
      maxSize,
      maxFiles,
      invalid,
      openFileDialog,
      addFiles,
      removeFile,
      clearFiles,
    ],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files;
    if (!selected || selected.length === 0) return;
    addFiles(Array.from(selected));
    event.target.value = "";
  };

  return (
    <FileUploadContext.Provider value={contextValue}>
      <div
        className={clsx(styles.root, className)}
        data-slot="file-upload"
        data-disabled={disabled ? "" : undefined}
        {...props}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          className={styles.hiddenInput}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          tabIndex={-1}
          aria-hidden="true"
        />
        {children}
      </div>
    </FileUploadContext.Provider>
  );
};

FileUpload.displayName = "FileUpload";

/**
 * Drag-and-drop surface for the FileUpload.
 *
 * Listens to native HTML5 drag events and forwards valid drops to the root.
 * Acts as a focusable button: pressing `Enter` or `Space` opens the native picker.
 * Exposes `data-disabled`, `data-dragging`, and `data-invalid` for styling.
 *
 * @component
 * @param {FileUploadDropzoneProps} props - Props for the dropzone.
 * @returns {JSX.Element} The drop surface.
 *
 * @example
 * <FileUploadDropzone>Drag files here or click to browse</FileUploadDropzone>
 */
export const FileUploadDropzone: React.FC<FileUploadDropzoneProps> = ({
  className,
  children,
  onClick,
  onKeyDown,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  ...props
}) => {
  const { addFiles, openFileDialog, disabled, invalid, multiple } =
    useFileUpload();
  const [isDragging, setIsDragging] = useState(false);
  const dragCounterRef = useRef(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    openFileDialog();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (disabled) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFileDialog();
    }
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    onDragEnter?.(event);
    if (disabled) return;
    event.preventDefault();
    dragCounterRef.current += 1;
    if (event.dataTransfer.types.includes("Files")) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    onDragLeave?.(event);
    if (disabled) return;
    dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
    if (dragCounterRef.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    onDragOver?.(event);
    if (disabled) return;
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    onDrop?.(event);
    if (disabled) return;
    event.preventDefault();
    dragCounterRef.current = 0;
    setIsDragging(false);
    const dropped = Array.from(event.dataTransfer.files);
    if (dropped.length === 0) return;
    addFiles(multiple ? dropped : dropped.slice(0, 1));
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      data-slot="file-upload-dropzone"
      data-disabled={disabled ? "" : undefined}
      data-dragging={isDragging ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      aria-disabled={disabled || undefined}
      className={clsx(styles.dropzone, className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      {...props}
    >
      {children ?? (
        <div className={styles.dropzoneContent}>
          <Upload className={styles.dropzoneIcon} aria-hidden="true" />
          <Body variant="small_body_medium" className={styles.dropzoneTitle}>
            Drag files here or click to browse
          </Body>
        </div>
      )}
    </div>
  );
};

FileUploadDropzone.displayName = "FileUploadDropzone";

/**
 * Button that opens the native file picker.
 *
 * Inherits `disabled` from the root. Forwards arbitrary button props so consumers
 * can swap in their own styling via `className` while keeping behavior.
 *
 * @component
 * @param {FileUploadTriggerProps} props - Props for the trigger button.
 * @returns {JSX.Element} A `<button>` element.
 *
 * @example
 * <FileUploadTrigger>Choose files</FileUploadTrigger>
 */
export const FileUploadTrigger: React.FC<FileUploadTriggerProps> = ({
  children,
  className,
  onClick,
  disabled,
  ...props
}) => {
  const { openFileDialog, disabled: ctxDisabled } = useFileUpload();
  const isDisabled = disabled || ctxDisabled;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    openFileDialog();
  };

  return (
    <button
      type="button"
      data-slot="file-upload-trigger"
      data-disabled={isDisabled ? "" : undefined}
      disabled={isDisabled}
      className={clsx(styles.trigger, className)}
      onClick={handleClick}
      {...props}
    >
      {children ?? "Browse files"}
    </button>
  );
};

FileUploadTrigger.displayName = "FileUploadTrigger";

/**
 * Container for selected file items.
 *
 * If no `children` are provided, automatically renders a default `FileUploadItem`
 * (with preview, metadata, progress, and delete) for each file in context. Pass
 * children to fully control the rendering.
 *
 * @component
 * @param {FileUploadListProps} props - Props for the list container.
 * @returns {JSX.Element | null} The list, or `null` when no files are present and no children are passed.
 *
 * @example
 * <FileUploadList />
 *
 * @example
 * <FileUploadList>
 *   {files.map((file) => (
 *     <FileUploadItem key={file.name} value={file}>
 *       <FileUploadItemPreview />
 *       <FileUploadItemMetadata />
 *       <FileUploadItemProgress />
 *       <FileUploadItemDelete />
 *     </FileUploadItem>
 *   ))}
 * </FileUploadList>
 */
export const FileUploadList: React.FC<FileUploadListProps> = ({
  className,
  orientation = "vertical",
  children,
  ...props
}) => {
  const { files } = useFileUpload();
  const hasFiles = files.length > 0;

  if (!hasFiles && !children) return null;

  return (
    <div
      data-slot="file-upload-list"
      data-orientation={orientation}
      data-state={hasFiles ? "active" : "inactive"}
      className={clsx(styles.list, className)}
      {...props}
    >
      {children ??
        files.map((item) => (
          <FileUploadItem key={item.id} value={item.file}>
            <FileUploadItemPreview />
            <FileUploadItemMetadata />
            <FileUploadItemProgress />
            <FileUploadItemDelete />
          </FileUploadItem>
        ))}
    </div>
  );
};

FileUploadList.displayName = "FileUploadList";

interface ItemContextValue {
  item: FileWithState;
}

const ItemContext = createContext<ItemContextValue | null>(null);

function useItem(): ItemContextValue {
  const ctx = useContext(ItemContext);
  if (!ctx) {
    throw new Error(
      "FileUploadItem sub-components must be used inside <FileUploadItem>",
    );
  }
  return ctx;
}

/**
 * Single file row.
 *
 * Looks up the matching `FileWithState` from context by reference equality and
 * provides it to its descendants (preview, metadata, progress, delete).
 *
 * @component
 * @param {FileUploadItemProps} props - Props; `value` must reference a `File` currently in the list.
 * @returns {JSX.Element | null} The item row, or `null` if the file is no longer present.
 *
 * @example
 * <FileUploadItem value={file}>
 *   <FileUploadItemPreview />
 *   <FileUploadItemMetadata />
 *   <FileUploadItemDelete />
 * </FileUploadItem>
 */
export const FileUploadItem = forwardRef<HTMLDivElement, FileUploadItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const { files } = useFileUpload();
    const item = files.find((f) => f.file === value);

    if (!item) return null;

    return (
      <ItemContext.Provider value={{ item }}>
        <div
          ref={ref}
          data-slot="file-upload-item"
          data-status={item.status}
          className={clsx(styles.item, className)}
          {...props}
        >
          {children}
        </div>
      </ItemContext.Provider>
    );
  },
);

FileUploadItem.displayName = "FileUploadItem";

/**
 * Renders an image thumbnail for image files or a file-type icon otherwise.
 *
 * Image previews use `URL.createObjectURL` and revoke the URL on unmount to avoid leaks.
 *
 * @component
 * @returns {JSX.Element} A thumbnail or icon for the current item's file.
 */
export const FileUploadItemPreview: React.FC<FileUploadItemPreviewProps> = ({
  className,
  ...props
}) => {
  const { item } = useItem();
  const kind = isImageOrVideo(item.file.name);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    if (kind !== "IMAGE") {
      setObjectUrl(null);
      return;
    }
    const url = URL.createObjectURL(item.file);
    setObjectUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [item.file, kind]);

  return (
    <div
      data-slot="file-upload-item-preview"
      className={clsx(styles.itemPreview, className)}
      {...props}
    >
      {kind === "IMAGE" && objectUrl ? (
        <img
          src={objectUrl}
          alt={item.file.name}
          className={styles.itemPreviewImage}
        />
      ) : kind === "VIDEO" ? (
        <FileIcon className={styles.itemPreviewIcon} aria-hidden="true" />
      ) : (
        <FileText className={styles.itemPreviewIcon} aria-hidden="true" />
      )}
    </div>
  );
};

FileUploadItemPreview.displayName = "FileUploadItemPreview";

/**
 * Displays the file name, human-readable size, and any per-item error.
 *
 * Uses `convertBytesToReadable` for the size string and the `Body` typography
 * component for consistent styling.
 *
 * @component
 * @returns {JSX.Element} The metadata block for the current item.
 */
export const FileUploadItemMetadata: React.FC<FileUploadItemMetadataProps> = ({
  className,
  ...props
}) => {
  const { item } = useItem();
  return (
    <div
      data-slot="file-upload-item-metadata"
      className={clsx(styles.itemMetadata, className)}
      {...props}
    >
      <Body variant="small_body_medium" className={styles.itemName}>
        {item.file.name}
      </Body>
      <Body variant="caption" className={styles.itemSize}>
        {convertBytesToReadable(item.file.size)}
      </Body>
      {item.error && (
        <Body variant="caption" className={styles.itemError}>
          {item.error}
        </Body>
      )}
    </div>
  );
};

FileUploadItemMetadata.displayName = "FileUploadItemMetadata";

/**
 * Linear progress bar for the current item.
 *
 * Renders only while `status === "uploading"` (or `status === "success"` with
 * `progress === 100`), driven by the values reported through the root's
 * `onUpload` helpers.
 *
 * @component
 * @returns {JSX.Element | null} The progress bar, or `null` when the item is idle or errored.
 */
export const FileUploadItemProgress: React.FC<FileUploadItemProgressProps> = ({
  className,
  ...props
}) => {
  const { item } = useItem();
  if (item.status === "idle" || item.status === "error") return null;

  return (
    <div
      data-slot="file-upload-item-progress"
      data-state={item.status}
      className={clsx(styles.itemProgress, className)}
      role="progressbar"
      aria-valuenow={item.progress}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className={styles.itemProgressFill}
        style={{ width: `${item.progress}%` }}
      />
    </div>
  );
};

FileUploadItemProgress.displayName = "FileUploadItemProgress";

/**
 * Button that removes the current item from the list.
 *
 * @component
 * @param {FileUploadItemDeleteProps} props - Props for the delete button.
 * @returns {JSX.Element} A `<button>` element with an `X` icon by default.
 *
 * @example
 * <FileUploadItemDelete aria-label="Remove file" />
 */
export const FileUploadItemDelete: React.FC<FileUploadItemDeleteProps> = ({
  children,
  className,
  onClick,
  disabled,
  ...props
}) => {
  const { item } = useItem();
  const { removeFile, disabled: ctxDisabled } = useFileUpload();
  const isDisabled = disabled || ctxDisabled;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    removeFile(item.id);
  };

  return (
    <button
      type="button"
      data-slot="file-upload-item-delete"
      data-disabled={isDisabled ? "" : undefined}
      disabled={isDisabled}
      aria-label={`Remove ${item.file.name}`}
      className={clsx(styles.itemDelete, className)}
      onClick={handleClick}
      {...props}
    >
      {children ?? <X className={styles.itemDeleteIcon} aria-hidden="true" />}
    </button>
  );
};

FileUploadItemDelete.displayName = "FileUploadItemDelete";

/**
 * Button that clears every file from the list.
 *
 * Disabled automatically when the list is empty or the root is disabled.
 *
 * @component
 * @param {FileUploadClearProps} props - Props for the clear button.
 * @returns {JSX.Element} A `<button>` element.
 *
 * @example
 * <FileUploadClear>Remove all</FileUploadClear>
 */
export const FileUploadClear: React.FC<FileUploadClearProps> = ({
  children,
  className,
  onClick,
  disabled,
  ...props
}) => {
  const { clearFiles, disabled: ctxDisabled, files } = useFileUpload();
  const isDisabled = disabled || ctxDisabled || files.length === 0;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    clearFiles();
  };

  return (
    <button
      type="button"
      data-slot="file-upload-clear"
      data-disabled={isDisabled ? "" : undefined}
      disabled={isDisabled}
      className={clsx(styles.clear, className)}
      onClick={handleClick}
      {...props}
    >
      {children ?? "Clear all"}
    </button>
  );
};

FileUploadClear.displayName = "FileUploadClear";

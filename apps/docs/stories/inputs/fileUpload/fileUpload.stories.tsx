import {
  FileUpload,
  FileUploadClear,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadItemProgress,
  FileUploadList,
  FileUploadTrigger,
} from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof FileUpload> = {
  title: "Components/inputs/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "text" },
      description: "Identificador único do input de arquivo",
    },
    accept: {
      control: { type: "text" },
      description: "Tipos de arquivo aceitos (formato HTML `accept`)",
    },
    maxSize: {
      control: { type: "number" },
      description: "Tamanho máximo por arquivo em bytes",
    },
    maxFiles: {
      control: { type: "number" },
      description: "Número máximo de arquivos permitidos na lista",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Permite seleção de múltiplos arquivos",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita a interação com o componente",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    multiple: true,
  },
  render: (args) => (
    <FileUpload {...args}>
      <FileUploadDropzone />
      <FileUploadTrigger />
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
  ),
};

export const Multiple: Story = {
  args: {
    multiple: true,
    maxFiles: 5,
  },
  render: (args) => (
    <FileUpload {...args}>
      <FileUploadDropzone>
        <div style={{ textAlign: "center" }}>
          <strong>Drop up to 5 files here</strong>
          <p style={{ color: "var(--color-text-600)", marginTop: 4 }}>
            or click to browse
          </p>
        </div>
      </FileUploadDropzone>
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const ValidationDemo = () => {
      const [rejections, setRejections] = useState<string[]>([]);

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <FileUpload
            multiple
            accept="image/*"
            maxSize={2 * 1024 * 1024}
            onFileValidate={(file) =>
              file.name.toLowerCase().includes("test")
                ? "Filenames containing 'test' are not allowed"
                : null
            }
            onFileReject={(file, message) =>
              setRejections((prev) => [...prev, `${file.name}: ${message}`])
            }
          >
            <FileUploadDropzone>
              <div style={{ textAlign: "center" }}>
                <strong>Images only, max 2 MB each</strong>
                <p style={{ color: "var(--color-text-600)", marginTop: 4 }}>
                  Filenames with &quot;test&quot; will be rejected
                </p>
              </div>
            </FileUploadDropzone>
            <FileUploadList />
            <FileUploadClear />
          </FileUpload>

          {rejections.length > 0 && (
            <div
              style={{
                padding: 12,
                borderRadius: 6,
                border: "1px solid var(--color-alert-error-500)",
                background: "var(--color-background-100)",
              }}
            >
              <strong style={{ color: "var(--color-alert-error-500)" }}>
                Rejected files
              </strong>
              <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
                {rejections.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };
    return <ValidationDemo />;
  },
};

export const WithDirectUpload: Story = {
  render: () => (
    <FileUpload
      multiple
      onUpload={async (files, { onProgress, onSuccess }) => {
        await Promise.all(
          files.map(
            (file) =>
              new Promise<void>((resolve) => {
                let progress = 0;
                const interval = setInterval(() => {
                  progress += 10;
                  onProgress(file, progress);
                  if (progress >= 100) {
                    clearInterval(interval);
                    onSuccess(file);
                    resolve();
                  }
                }, 200);
              }),
          ),
        );
      }}
    >
      <FileUploadDropzone>
        <div style={{ textAlign: "center" }}>
          <strong>Drop files to simulate upload</strong>
          <p style={{ color: "var(--color-text-600)", marginTop: 4 }}>
            Each file fills 0–100% over ~2s
          </p>
        </div>
      </FileUploadDropzone>
      <FileUploadList />
      <FileUploadClear />
    </FileUpload>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    multiple: true,
  },
  render: (args) => (
    <FileUpload {...args}>
      <FileUploadDropzone />
      <FileUploadTrigger />
      <FileUploadList />
    </FileUpload>
  ),
};

export const Controlled: Story = {
  render: () => {
    const ControlledDemo = () => {
      const [files, setFiles] = useState<File[]>([]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <FileUpload multiple value={files} onValueChange={setFiles}>
            <FileUploadDropzone />
            <FileUploadTrigger />
            <FileUploadList>
              {files.map((file) => (
                <FileUploadItem key={`${file.name}-${file.size}`} value={file}>
                  <FileUploadItemPreview />
                  <FileUploadItemMetadata />
                  <FileUploadItemProgress />
                  <FileUploadItemDelete />
                </FileUploadItem>
              ))}
            </FileUploadList>
            <FileUploadClear />
          </FileUpload>
          <p style={{ color: "var(--color-text-600)" }}>
            Current value: {files.length} file{files.length === 1 ? "" : "s"}
          </p>
        </div>
      );
    };
    return <ControlledDemo />;
  },
};

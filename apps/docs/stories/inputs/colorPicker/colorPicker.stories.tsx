import { ColorPicker, ColorPickerSwatch } from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { StoryContext } from "@storybook/react";
import { useState } from "react";

import styles from "./styles.module.css";

const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const [value, setValue] = useState<string>(
    (context.args.value as string) ?? "#ff7b00",
  );
  const sharedArgs = { ...context.args, value, onChange: setValue };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.panel} ${styles.light}`}>
        <span className={styles.label}>Tema Claro</span>
        <Story args={sharedArgs} />
        <span className={styles.preview} style={{ background: value }} />
        <code className={styles.code}>{value}</code>
      </div>
      <div className={`${styles.panel} ${styles.dark}`}>
        <span className={styles.label}>Tema Escuro</span>
        <Story args={sharedArgs} />
        <span className={styles.preview} style={{ background: value }} />
        <code className={styles.code}>{value}</code>
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorPicker> = {
  title: "Components/inputs/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  decorators: [ThemeDecorator],
  argTypes: {
    value: {
      control: false,
      description: "Valor controlado da cor como string CSS",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Valor inicial não controlado",
    },
    onChange: {
      action: "changed",
      description: "Callback chamado quando a cor muda",
    },
    inline: {
      control: { type: "boolean" },
      description: "Renderiza o picker inline em vez de popover",
    },
    withoutAlpha: {
      control: { type: "boolean" },
      description: "Oculta o canal alpha e força cores opacas",
    },
    withEyeDropper: {
      control: { type: "boolean" },
      description: "Mostra o botão de conta-gotas (quando suportado)",
    },
    withFormatSelect: {
      control: { type: "boolean" },
      description: "Mostra o seletor de formato (hex, rgb, hsl)",
    },
    withInput: {
      control: { type: "boolean" },
      description: "Mostra o input de texto editável",
    },
    formats: {
      control: { type: "check" },
      options: ["hex", "rgb", "hsl"],
      description: "Formatos disponíveis no seletor",
    },
    defaultFormat: {
      control: { type: "select" },
      options: ["hex", "rgb", "hsl"],
      description: "Formato inicial",
    },
    label: {
      control: { type: "text" },
      description: "Rótulo do campo",
    },
    hint: {
      control: { type: "text" },
      description: "Texto de dica abaixo do campo",
    },
    error: {
      control: { type: "text" },
      description: "Mensagem de erro",
    },
    required: {
      control: { type: "boolean" },
      description: "Marca o campo como obrigatório",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita o picker",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    value: "#ff7b00",
    label: "Cor da marca",
  },
};

export const Inline: Story = {
  args: {
    value: "#2f92d0",
    inline: true,
    label: "Selecione uma cor",
  },
};

export const WithoutAlpha: Story = {
  args: {
    value: "#47d5a6",
    withoutAlpha: true,
    label: "Cor sólida",
  },
};

export const WithoutEyeDropper: Story = {
  args: {
    value: "#d94a4a",
    withEyeDropper: false,
    label: "Sem conta-gotas",
  },
};

export const HexOnly: Story = {
  args: {
    value: "#ff7b00",
    formats: ["hex"],
    label: "Apenas HEX",
  },
};

export const StartsWithRgb: Story = {
  args: {
    value: "rgba(47, 146, 208, 0.8)",
    defaultFormat: "rgb",
    label: "RGB inicial",
  },
};

export const WithHintAndError: Story = {
  args: {
    value: "#ff7b00",
    label: "Cor primária",
    hint: "Use uma cor com bom contraste para acessibilidade",
    error: "A cor selecionada tem contraste insuficiente",
  },
};

export const Required: Story = {
  args: {
    value: "#ff7b00",
    label: "Cor obrigatória",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    value: "#ff7b00",
    label: "Cor (desabilitada)",
    disabled: true,
  },
};

export const InlineWithoutToolbar: Story = {
  args: {
    value: "#ff7b00",
    inline: true,
    withInput: false,
    withFormatSelect: false,
    withEyeDropper: false,
    label: "Apenas seleção visual",
  },
};

const SwatchShowcase = () => (
  <div className={styles.swatchRow}>
    <ColorPickerSwatch color="#ff7b00" size="sm" />
    <ColorPickerSwatch color="#2f92d0" size="md" />
    <ColorPickerSwatch color="#47d5a6" size="lg" />
    <ColorPickerSwatch color="rgba(255, 123, 0, 0.5)" size="md" />
    <ColorPickerSwatch
      color="rgba(255, 123, 0, 0.5)"
      size="md"
      withAlphaPreview={false}
    />
  </div>
);

export const SwatchSizes: Story = {
  decorators: [() => <SwatchShowcase />],
  parameters: {
    docs: {
      description: {
        story:
          "O componente `ColorPickerSwatch` pode ser usado isoladamente para exibir cores em outras partes da UI.",
      },
    },
  },
};

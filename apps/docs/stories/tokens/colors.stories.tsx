import { Body, Title } from "@gaia-dev/ui";
import { Meta } from "@storybook/react";
import React from "react";

// Tipos das categorias de cores e suas variações
interface ColorCategory {
  title: string;
  colors: {
    cssVar: string;
  }[];
}

// Lista de categorias de cores do design system
const colorCategories: ColorCategory[] = [
  {
    title: "Primary",
    colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
      (weight) => ({
        cssVar: `--color-primary-${weight}`,
      }),
    ),
  },
  {
    title: "Accent",
    colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
      (weight) => ({
        cssVar: `--color-accent-${weight}`,
      }),
    ),
  },
  {
    title: "Background",
    colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
      (weight) => ({
        cssVar: `--color-background-${weight}`,
      }),
    ),
  },
  {
    title: "Text",
    colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
      (weight) => ({
        cssVar: `--color-text-${weight}`,
      }),
    ),
  },
  {
    title: "Fixed",
    colors: [
      { cssVar: "--color-fixed-white" },
      { cssVar: "--color-fixed-black" },
    ],
  },
  {
    title: "Alert Success",
    colors: [
      { cssVar: "--color-alert-success-50" },
      { cssVar: "--color-alert-success-500" },
      { cssVar: "--color-alert-success-950" },
    ],
  },
  {
    title: "Alert Warning",
    colors: [
      { cssVar: "--color-alert-warning-50" },
      { cssVar: "--color-alert-warning-500" },
      { cssVar: "--color-alert-warning-950" },
    ],
  },
  {
    title: "Alert Error",
    colors: [
      { cssVar: "--color-alert-error-50" },
      { cssVar: "--color-alert-error-500" },
      { cssVar: "--color-alert-error-950" },
    ],
  },
];

// Componente que exibe uma cor com seu nome e valor
const ColorBox = ({
  cssVar,
  className,
}: {
  cssVar: string;
  className: string;
}) => {
  const [hexValue, setHexValue] = React.useState("");

  React.useEffect(() => {
    // Apenas processar no cliente
    if (typeof window !== "undefined") {
      const computedValue = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim();
      setHexValue(computedValue);
    }
  }, [cssVar]);

  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        backgroundColor: `var(${cssVar})`,
        height: "58px",
      }}
    >
      <Body variant="small_body" style={{ color: "var(--color-text-50)" }}>
        {cssVar}
      </Body>
      <Body variant="small_body" style={{ color: "var(--color-text-50)" }}>
        {hexValue}
      </Body>
    </div>
  );
};

// Componente para exibir uma categoria de cores em ambos os temas
const ColorCategory = ({ category }: { category: ColorCategory }) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      <Title variant="title" style={{ marginBottom: "12px" }}>
        {category.title}
      </Title>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1px",
          border: "1px solid var(--color-text-200)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Cabeçalhos */}
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: "var(--color-background-100)",
          }}
        >
          <Body variant="body_bold">Tema Claro</Body>
        </div>
        <div
          className="dark"
          style={{
            padding: "12px 16px",
            backgroundColor: "var(--color-background-800)",
          }}
        >
          <Body variant="body_bold">Tema Escuro</Body>
        </div>

        {/* Cores */}
        {category.colors.map((color) => (
          <React.Fragment key={color.cssVar}>
            <ColorBox cssVar={color.cssVar} className="light" />
            <ColorBox cssVar={color.cssVar} className="dark" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Tokens/Cores",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Cores = () => {
  return (
    <div style={{ padding: "32px" }}>
      {colorCategories.map((category) => (
        <ColorCategory key={category.title} category={category} />
      ))}
    </div>
  );
};

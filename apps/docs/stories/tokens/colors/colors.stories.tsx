import { Meta } from "@storybook/react";
import React from "react";

type SemanticToken = { name: string; use: string };
type SemanticGroup = {
  title: string;
  description: string;
  tokens: SemanticToken[];
};
type Scale = { title: string; prefix: string; note?: string };

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// Tokens por papel: é com eles que os componentes e os apps devem trabalhar.
const semanticGroups: SemanticGroup[] = [
  {
    title: "Ação",
    description:
      "O laranja de ação. Sai da escala Primary (600 no claro, 400 no escuro) e passa no AA com texto branco.",
    tokens: [
      {
        name: "--color-primary-fill",
        use: "Botão principal, item ativo, foco, marcado e ligado",
      },
      { name: "--color-primary-fill-hover", use: "Hover do botão principal" },
      {
        name: "--color-on-primary",
        use: "Texto e ícones sobre o laranja de ação",
      },
    ],
  },
  {
    title: "Superfícies",
    description: "Camadas da interface, do fundo da página aos painéis.",
    tokens: [
      { name: "--color-surface-canvas", use: "Fundo da página" },
      {
        name: "--color-surface-raised",
        use: "Cards, popovers e botões outline",
      },
      { name: "--color-surface-muted", use: "Painéis, como a sidebar" },
    ],
  },
  {
    title: "Bordas",
    description: "Divisórias e o contorno dos campos.",
    tokens: [
      { name: "--color-border-subtle", use: "Divisórias, tabelas e cards" },
      { name: "--color-border-field", use: "Borda dos campos em repouso" },
      { name: "--color-border-field-hover", use: "Borda dos campos no hover" },
    ],
  },
  {
    title: "Controles",
    description: "Elementos neutros que o usuário aciona.",
    tokens: [
      {
        name: "--color-control",
        use: "Trilhos, botão secondary, badge default",
      },
      { name: "--color-control-hover", use: "Hover dos controles neutros" },
      {
        name: "--color-control-active",
        use: "Aba ativa do seletor segmentado",
      },
      { name: "--color-row-hover", use: "Hover da linha de tabela" },
    ],
  },
  {
    title: "Destrutivo",
    description: "Ações que apagam ou desfazem, no estilo suave.",
    tokens: [
      {
        name: "--color-danger-soft",
        use: "Fundo do botão e do badge destrutivos",
      },
      { name: "--color-danger-soft-hover", use: "Hover do botão destrutivo" },
      { name: "--color-danger-soft-text", use: "Texto destrutivo" },
      { name: "--color-danger-soft-border", use: "Borda destrutiva" },
    ],
  },
];

// Escalas de base: matéria-prima dos tokens acima.
const scales: Scale[] = [
  {
    title: "Primary",
    prefix: "--color-primary",
    note: "500 é a cor da marca; 600 é o laranja de ação.",
  },
  { title: "Accent", prefix: "--color-accent" },
  { title: "Background", prefix: "--color-background" },
  { title: "Text", prefix: "--color-text" },
];

const alerts = ["success", "warning", "error", "info"];

// ---------- utilidades ----------

const toHex = (rgb: string) => {
  const parts = rgb.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
  if (parts.length < 3) return "";
  return `#${parts
    .slice(0, 3)
    .map((v) => Math.round(v).toString(16).padStart(2, "0"))
    .join("")}`;
};

const isLight = (hex: string) => {
  if (!hex) return true;
  const [r, g, b] = [1, 3, 5].map(
    (i) => parseInt(hex.slice(i, i + 2), 16) / 255,
  );
  const lin = (c: number) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b) > 0.25;
};

/**
 * Hex da cor como ela aparece agora: segue o tema da barra (ou o painel, no
 * "Lado a lado"). Relê a cada render, depois que o tema novo foi aplicado.
 */
const useResolvedHex = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [hex, setHex] = React.useState("");

  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (ref.current) {
        setHex(toHex(getComputedStyle(ref.current).backgroundColor));
      }
    });
    return () => cancelAnimationFrame(id);
  });

  return { ref, hex };
};

const copy = (text: string) => {
  navigator.clipboard?.writeText(text).catch(() => {});
};

// ---------- estilos ----------

const s = {
  page: {
    // `width: 100%` porque, no "Lado a lado", a página fica numa coluna flex:
    // só com `margin: auto` ela tomaria a largura do conteúdo e vazaria.
    width: "100%",
    maxWidth: 1080,
    margin: "0 auto",
    padding: "40px 32px 64px",
    color: "var(--color-text-900)",
    fontFamily: "var(--font-body)",
  } as React.CSSProperties,
  h1: {
    fontFamily: "var(--font-heading)",
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: -0.6,
    margin: 0,
  } as React.CSSProperties,
  lead: {
    margin: "8px 0 0",
    fontSize: 15,
    lineHeight: 1.6,
    color: "var(--color-text-600)",
    maxWidth: 680,
  },
  h2: {
    fontFamily: "var(--font-heading)",
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: -0.3,
    margin: "48px 0 4px",
  } as React.CSSProperties,
  h3: {
    fontFamily: "var(--font-heading)",
    fontSize: 15,
    fontWeight: 600,
    margin: 0,
  } as React.CSSProperties,
  muted: {
    fontSize: 13,
    lineHeight: 1.5,
    color: "var(--color-text-600)",
    margin: "2px 0 0",
  },
  card: {
    border: "1px solid var(--color-border-subtle)",
    borderRadius: 12,
    background: "var(--color-surface-raised)",
    overflow: "hidden",
  } as React.CSSProperties,
  mono: { fontFamily: "var(--font-mono)", fontSize: 12 },
};

// ---------- peças ----------

const Swatch = ({ cssVar, size = 40 }: { cssVar: string; size?: number }) => {
  const { ref, hex } = useResolvedHex();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <div
        ref={ref}
        title={hex}
        style={{
          width: size,
          height: size,
          borderRadius: 10,
          background: `var(${cssVar})`,
          boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 0.08)",
        }}
      />
      <span style={{ ...s.mono, fontSize: 11, color: "var(--color-text-600)" }}>
        {hex}
      </span>
    </div>
  );
};

const SemanticRow = ({
  token,
  last,
}: {
  token: SemanticToken;
  last: boolean;
}) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "64px minmax(0, 1fr)",
        alignItems: "center",
        gap: 16,
        padding: "12px 20px",
        borderBottom: last ? "none" : "1px solid var(--color-border-subtle)",
      }}
    >
      <Swatch cssVar={token.name} />
      <div style={{ minWidth: 0 }}>
        <button
          type="button"
          onClick={() => {
            copy(`var(${token.name})`);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
          }}
          title="Copiar var()"
          style={{
            ...s.mono,
            padding: "2px 6px",
            margin: "0 0 4px -6px",
            border: "none",
            borderRadius: 4,
            background: "transparent",
            color: "var(--color-text-900)",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {copied ? "copiado ✓" : token.name}
        </button>
        <div style={{ fontSize: 13, color: "var(--color-text-600)" }}>
          {token.use}
        </div>
      </div>
    </div>
  );
};

const SemanticCard = ({ group }: { group: SemanticGroup }) => (
  <section style={s.card}>
    <header
      style={{
        padding: "16px 20px",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <h3 style={s.h3}>{group.title}</h3>
      <p style={s.muted}>{group.description}</p>
    </header>
    {group.tokens.map((token, i) => (
      <SemanticRow
        key={token.name}
        token={token}
        last={i === group.tokens.length - 1}
      />
    ))}
  </section>
);

/** Um degrau da escala: bloco colorido com o número e o hex. */
const ScaleTile = ({ cssVar, step }: { cssVar: string; step: number }) => {
  const { ref, hex } = useResolvedHex();
  const ink = isLight(hex) ? "#1a1a1a" : "#ffffff";
  // Em painel estreito (ex.: "Lado a lado") o hex não cabe; fica no tooltip.
  const [wide, setWide] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setWide(entry.contentRect.width >= 46),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={ref}
      title={`${cssVar} · ${hex}`}
      onClick={() => copy(`var(${cssVar})`)}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        height: 80,
        padding: "10px 8px 8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        whiteSpace: "nowrap",
        background: `var(${cssVar})`,
        color: ink,
        cursor: "copy",
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 600 }}>{step}</span>
      {wide && (
        <span style={{ ...s.mono, fontSize: 10, opacity: 0.85 }}>{hex}</span>
      )}
    </div>
  );
};

const ScaleStrip = ({ scale }: { scale: Scale }) => (
  <section style={{ marginTop: 24 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
      <h3 style={s.h3}>{scale.title}</h3>
      <span style={{ ...s.mono, color: "var(--color-text-500)" }}>
        {scale.prefix}-*
      </span>
    </div>
    {scale.note && <p style={s.muted}>{scale.note}</p>}
    <div
      style={{
        display: "flex",
        marginTop: 10,
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid var(--color-border-subtle)",
      }}
    >
      {STEPS.map((step) => (
        <ScaleTile key={step} cssVar={`${scale.prefix}-${step}`} step={step} />
      ))}
    </div>
  </section>
);

const AlertCard = ({ name }: { name: string }) => (
  <section style={{ ...s.card, padding: "14px 16px" }}>
    <h3 style={{ ...s.h3, fontSize: 14, textTransform: "capitalize" }}>
      {name}
    </h3>
    <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
      {[50, 500, 950].map((step) => (
        <div
          key={step}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Swatch cssVar={`--color-alert-${name}-${step}`} />
          <span style={{ fontSize: 11, color: "var(--color-text-500)" }}>
            {step}
          </span>
        </div>
      ))}
    </div>
  </section>
);

// ---------- página ----------

const meta: Meta = {
  title: "Tokens/Cores",
  parameters: {
    layout: "fullscreen",
    // Página de referência: sem painel de Controls/Actions.
    options: { showPanel: false },
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;

export const Cores = () => (
  <div style={s.page}>
    <h1 style={s.h1}>Cores</h1>
    <p style={s.lead}>
      Use os <strong>tokens por papel</strong> nos componentes e nos apps: eles
      já trazem o valor certo para cada tema. As <strong>escalas</strong> são a
      matéria-prima desses tokens. As cores seguem o tema escolhido na barra
      (use <strong>Lado a lado</strong> para comparar). Clique num nome ou num
      degrau para copiar o <code style={s.mono}>var()</code>.
    </p>

    <h2 style={s.h2}>Tokens por papel</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
        gap: 16,
        marginTop: 16,
      }}
    >
      {semanticGroups.map((group) => (
        <SemanticCard key={group.title} group={group} />
      ))}
    </div>

    <h2 style={s.h2}>Escalas</h2>
    <p style={s.muted}>
      Onze degraus por cor. No escuro a escala se inverte: o 50 é o mais escuro
      e o 950 o mais claro.
    </p>
    {scales.map((scale) => (
      <ScaleStrip key={scale.title} scale={scale} />
    ))}

    <h2 style={s.h2}>Alertas</h2>
    <p style={s.muted}>
      Fundo (50), cor (500) e contraste (950) de cada estado.
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
        gap: 16,
        marginTop: 16,
      }}
    >
      {alerts.map((name) => (
        <AlertCard key={name} name={name} />
      ))}
    </div>

    <h2 style={s.h2}>Fixas</h2>
    <p style={s.muted}>Não mudam com o tema.</p>
    <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
      <Swatch cssVar="--color-fixed-white" />
      <Swatch cssVar="--color-fixed-black" />
    </div>
  </div>
);

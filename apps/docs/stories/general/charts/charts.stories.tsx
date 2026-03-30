import type { ChartConfig } from "@gaia-dev/ui";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/general/Charts",
  component: ChartContainer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

// -- Bar Chart (Default) --

const barData = [
  { mes: "Jan", vendas: 186 },
  { mes: "Fev", vendas: 305 },
  { mes: "Mar", vendas: 237 },
  { mes: "Abr", vendas: 173 },
  { mes: "Mai", vendas: 209 },
  { mes: "Jun", vendas: 214 },
];

const barConfig: ChartConfig = {
  vendas: { label: "Vendas", color: "#2563eb" },
};

export const Default = () => (
  <ChartContainer config={barConfig}>
    <BarChart data={barData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="vendas" fill="var(--color-vendas)" radius={4} />
    </BarChart>
  </ChartContainer>
);

// -- Line Chart --

const lineData = [
  { mes: "Jan", visitantes: 420 },
  { mes: "Fev", visitantes: 380 },
  { mes: "Mar", visitantes: 510 },
  { mes: "Abr", visitantes: 470 },
  { mes: "Mai", visitantes: 590 },
  { mes: "Jun", visitantes: 620 },
];

const lineConfig: ChartConfig = {
  visitantes: { label: "Visitantes", color: "#16a34a" },
};

export const LineChartStory = () => (
  <ChartContainer config={lineConfig}>
    <LineChart data={lineData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
      <Line
        type="monotone"
        dataKey="visitantes"
        stroke="var(--color-visitantes)"
        strokeWidth={2}
        dot={{ fill: "var(--color-visitantes)" }}
      />
    </LineChart>
  </ChartContainer>
);

// -- Pie Chart --

const pieData = [
  { navegador: "chrome", usuarios: 275, fill: "var(--color-chrome)" },
  { navegador: "safari", usuarios: 200, fill: "var(--color-safari)" },
  { navegador: "firefox", usuarios: 187, fill: "var(--color-firefox)" },
  { navegador: "edge", usuarios: 173, fill: "var(--color-edge)" },
  { navegador: "outro", usuarios: 90, fill: "var(--color-outro)" },
];

const pieConfig: ChartConfig = {
  usuarios: { label: "Usuários" },
  chrome: { label: "Chrome", color: "#4285f4" },
  safari: { label: "Safari", color: "#34a853" },
  firefox: { label: "Firefox", color: "#ff6d01" },
  edge: { label: "Edge", color: "#0078d7" },
  outro: { label: "Outro", color: "#9aa0a6" },
};

export const PieChartStory = () => (
  <ChartContainer config={pieConfig}>
    <PieChart>
      <ChartTooltip
        content={<ChartTooltipContent nameKey="navegador" hideLabel />}
      />
      <Pie data={pieData} dataKey="usuarios" nameKey="navegador" />
    </PieChart>
  </ChartContainer>
);

// -- Area Chart --

const areaData = [
  { mes: "Jan", receita: 1200 },
  { mes: "Fev", receita: 1800 },
  { mes: "Mar", receita: 1400 },
  { mes: "Abr", receita: 2200 },
  { mes: "Mai", receita: 1900 },
  { mes: "Jun", receita: 2600 },
];

const areaConfig: ChartConfig = {
  receita: { label: "Receita", color: "#8b5cf6" },
};

export const AreaChartStory = () => (
  <ChartContainer config={areaConfig}>
    <AreaChart data={areaData}>
      <defs>
        <linearGradient id="fillReceita" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="5%"
            stopColor="var(--color-receita)"
            stopOpacity={0.8}
          />
          <stop
            offset="95%"
            stopColor="var(--color-receita)"
            stopOpacity={0.1}
          />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
      <Area
        type="monotone"
        dataKey="receita"
        stroke="var(--color-receita)"
        fill="url(#fillReceita)"
        strokeWidth={2}
      />
    </AreaChart>
  </ChartContainer>
);

// -- Multi Series --

const multiData = [
  { mes: "Jan", desktop: 186, mobile: 80 },
  { mes: "Fev", desktop: 305, mobile: 200 },
  { mes: "Mar", desktop: 237, mobile: 120 },
  { mes: "Abr", desktop: 173, mobile: 190 },
  { mes: "Mai", desktop: 209, mobile: 130 },
  { mes: "Jun", desktop: 214, mobile: 140 },
];

const multiConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#f97316" },
};

export const MultiSeries = () => (
  <ChartContainer config={multiConfig}>
    <BarChart data={multiData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
    </BarChart>
  </ChartContainer>
);

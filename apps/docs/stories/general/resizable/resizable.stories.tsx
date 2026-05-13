import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

const panelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  color: "var(--color-text-600)",
  fontSize: "0.875rem",
};

const groupStyle: React.CSSProperties = {
  border: "1px solid var(--color-background-300)",
  borderRadius: 8,
};

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/general/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Direção do layout dos painéis",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      style={{ ...groupStyle, height: 200 }}
    >
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Painel esquerdo</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Painel direito</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      style={{ ...groupStyle, height: 300 }}
    >
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Painel superior</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Painel inferior</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const WithHandleGrip: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      style={{ ...groupStyle, height: 200 }}
    >
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Painel esquerdo</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Painel direito</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      style={{ ...groupStyle, height: 200 }}
    >
      <ResizablePanel defaultSize={25}>
        <div style={panelStyle}>Lateral</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div style={panelStyle}>Principal</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div style={panelStyle}>Propriedades</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

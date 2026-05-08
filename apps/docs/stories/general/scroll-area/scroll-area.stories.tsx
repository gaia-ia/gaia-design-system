import { ScrollArea, ScrollBar } from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import * as React from "react";

import styles from "./styles.module.css";

const ThemePanel = ({
  theme,
  children,
}: {
  theme: "dark" | "light";
  children: React.ReactNode;
}) => <div className={styles[theme]}>{children}</div>;

const ScrollAreaDecorator = (Story: StoryFn) => (
  <div className={styles.wrapper}>
    <ThemePanel theme="dark">
      <Story />
    </ThemePanel>
    <ThemePanel theme="light">
      <Story />
    </ThemePanel>
  </div>
);

const TAGS = [
  "React",
  "TypeScript",
  "CSS Modules",
  "Design System",
  "Radix UI",
  "Storybook",
  "Figma",
  "Tailwind",
  "Accessibility",
  "Component Library",
  "Dark Mode",
  "Light Mode",
  "Monorepo",
  "Turbo",
  "Yarn Workspaces",
];

const ScrollAreaExample = ({
  height = 200,
  width = 220,
  orientation = "vertical",
}: {
  height?: number;
  width?: number;
  orientation?: "vertical" | "horizontal" | "both";
}) => {
  if (orientation === "horizontal") {
    return (
      <ScrollArea style={{ width, height: 60 }}>
        <div className={styles.horizontalContent}>
          {TAGS.map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }

  if (orientation === "both") {
    return (
      <ScrollArea style={{ width, height }}>
        <div className={styles.wideContent}>
          {TAGS.map((tag, i) => (
            <div key={tag} className={styles.listItem}>
              {i + 1}. {tag}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }

  return (
    <ScrollArea style={{ width, height }}>
      <div className={styles.verticalContent}>
        {TAGS.map((tag, i) => (
          <div key={tag} className={styles.listItem}>
            {i + 1}. {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

const meta: Meta<typeof ScrollAreaExample> = {
  title: "Components/general/ScrollArea",
  component: ScrollAreaExample,
  tags: ["autodocs"],
  decorators: [ScrollAreaDecorator],
  argTypes: {
    height: {
      control: { type: "number" },
      description: "Altura da área de rolagem em pixels",
    },
    width: {
      control: { type: "number" },
      description: "Largura da área de rolagem em pixels",
    },
    orientation: {
      options: ["vertical", "horizontal", "both"],
      control: { type: "select" },
      description: "Direção da barra de rolagem exibida",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollAreaExample>;

export const Default: Story = {
  args: {
    height: 200,
    width: 220,
    orientation: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    width: 280,
    orientation: "horizontal",
  },
};

export const Both: Story = {
  args: {
    height: 200,
    width: 280,
    orientation: "both",
  },
};

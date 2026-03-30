import { Button } from "@gaia-dev/ui";
import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import {
  Download,
  Edit,
  Heart,
  Mail,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles.module.css";

const iconMap: Record<string, React.ReactNode> = {
  none: null,
  Mail: <Mail size={16} />,
  Plus: <Plus size={16} />,
  Trash2: <Trash2 size={16} />,
  Heart: <Heart size={16} />,
  Star: <Star size={16} />,
  Search: <Search size={16} />,
  Settings: <Settings size={16} />,
  Download: <Download size={16} />,
  Upload: <Upload size={16} />,
  Edit: <Edit size={16} />,
};

const ButtonDecorator = (Story: StoryFn, context: StoryContext) => {
  const [isLoading, setIsLoading] = useState(false);
  const { icon, ...restArgs } = context.args;
  const selectedIcon = iconMap[icon as string] ?? null;

  const children = selectedIcon ?? restArgs.children;

  return (
    <div className={styles.wrapper}>
      <div className={styles.dark}>
        <Story
          args={{
            ...restArgs,
            children,
            loading: isLoading,
            onClick: () => setIsLoading(true),
          }}
        />
      </div>
      <div className={styles.light}>
        <Story
          args={{
            ...restArgs,
            children,
            loading: isLoading,
            onClick: () => setIsLoading(true),
          }}
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof Button> & { argTypes: Record<string, unknown> } = {
  title: "Components/buttons/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [ButtonDecorator],
  argTypes: {
    variant: {
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
      control: { type: "radio" },
      description: "Estilo visual do botão",
    },
    size: {
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      control: { type: "radio" },
      description: "Tamanho do botão",
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo do botão",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Renderiza o elemento filho como root usando Radix Slot",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita o botão",
    },
    icon: {
      options: Object.keys(iconMap),
      control: { type: "select" },
      description: "Ícone exibido ao lado do texto",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Link: Story = {
  args: {
    children: "Link button",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const ExtraSmall: Story = {
  args: {
    children: "Extra small",
    size: "xs",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail size={16} />
        Send email
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    children: <Plus size={16} />,
    size: "icon",
    "aria-label": "Add item",
  },
};

export const IconDestructive: Story = {
  args: {
    children: <Trash2 size={16} />,
    variant: "destructive",
    size: "icon",
    "aria-label": "Delete item",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const AsChildLink: Story = {
  args: {
    asChild: true,
    variant: "default",
    children: (
      <RouterLink to="https://google.com" target="_blank">
        Navigate to Google
      </RouterLink>
    ),
  },
};

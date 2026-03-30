import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@gaia-dev/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import styles from "./styles.module.css";

const avatarImages = {
  woman:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  man: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  person:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
};

const AvatarDecorator = (Story: StoryFn) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dark}>
        <Story />
      </div>
      <div className={styles.light}>
        <Story />
      </div>
    </div>
  );
};

const meta: Meta<typeof Avatar> & { argTypes: Record<string, unknown> } = {
  title: "Components/general/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [AvatarDecorator],
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "radio" },
      description: "Tamanho do avatar",
    },
    children: {
      control: false,
      description: "Conteúdo interno do avatar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "default",
    children: (
      <>
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <>
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: (
      <>
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </>
    ),
  },
};

export const Fallback: Story = {
  args: {
    size: "default",
    children: <AvatarFallback>ER</AvatarFallback>,
  },
};

export const BrokenImage: Story = {
  args: {
    size: "default",
    children: (
      <>
        <AvatarImage src="https://invalid-url/avatar.png" alt="Broken avatar" />
        <AvatarFallback>BR</AvatarFallback>
      </>
    ),
  },
};

export const WithBadge: Story = {
  render: (args) => (
    <div style={{ position: "relative", width: "fit-content" }}>
      <Avatar {...args}>
        <AvatarImage src={avatarImages.woman} alt="Emma Wilson" />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <AvatarBadge />
    </div>
  ),
  args: {
    size: "default",
  },
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};

export const GroupWithCount: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src={avatarImages.woman} alt="Olivia Rhye" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Noah Kim" />
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.person} alt="Sophia Lee" />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>

      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const SizesComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Avatar size="sm">
        <AvatarImage src={avatarImages.woman} alt="Small avatar" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>

      <Avatar size="default">
        <AvatarImage src={avatarImages.man} alt="Default avatar" />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>

      <Avatar size="lg">
        <AvatarImage src={avatarImages.person} alt="Large avatar" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

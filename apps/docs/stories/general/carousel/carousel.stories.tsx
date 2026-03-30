import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@gaia-dev/ui";
import type { Meta, StoryObj } from "@storybook/react";

import styles from "./styles.module.css";

const meta: Meta<typeof Carousel> = {
  title: "Components/general/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Direção de rolagem do carrossel",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <div className={styles.slide}>Slide {i + 1}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent height="200px">
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <div className={styles.slide}>Slide {i + 1}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Loop: Story = {
  args: {
    orientation: "horizontal",
    opts: { loop: true },
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <div className={styles.slide}>Slide {i + 1}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleSlidesPerView: Story = {
  args: {
    orientation: "horizontal",
    opts: { align: "start" },
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {Array.from({ length: 8 }, (_, i) => (
          <CarouselItem key={i} style={{ flexBasis: "33.333%" }}>
            <div className={styles.slide}>Slide {i + 1}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithoutNavigation: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent className={styles.carouselContent}>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <div className={styles.slide}>Slide {i + 1}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
};

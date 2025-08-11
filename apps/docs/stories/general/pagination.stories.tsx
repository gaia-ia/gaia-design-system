import { PaginationAll } from "@gaia-dev/ui/src/general/Pagination";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const PaginationExample = ({ totalPages = 20 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationAll
      page={currentPage}
      totalPages={totalPages}
      setPage={setCurrentPage}
    />
  );
};

const meta: Meta<typeof PaginationAll> = {
  title: "Components/general/Pagination",
  component: PaginationExample,
  tags: ["autodocs"],
  argTypes: {
    totalPages: {
      control: {
        type: "range",
        min: 1,
        max: 50,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationExample>;

export const Default: Story = {
  args: {
    totalPages: 20,
  },
};

import { Table, TableBody, TableCell, TableHead, TableRow } from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Components/general/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

export const Default = (args: Meta<typeof Table>) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Location</TableCell>
        </TableHead>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>30</TableCell>
        <TableCell>New York</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Doe</TableCell>
        <TableCell>25</TableCell>
        <TableCell>London</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

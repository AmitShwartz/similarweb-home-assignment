import { Th, Thead, Tr } from "@chakra-ui/react";
import { Column } from "../../types/table.types";

interface Props<T> {
  columns: Column<T>[];
}

const TableHeader = <T,>({ columns }: Props<T>) => {
  return !!columns?.length ? (
    <Thead>
      <Tr>
        {columns.map((column) => (
          <Th key={column.id} isNumeric={column.isNumeric}>
            {column.header}
          </Th>
        ))}
      </Tr>
    </Thead>
  ) : null;
};

export default TableHeader;

import { Tr } from "@chakra-ui/react";
import { Column } from "../../types/table.types";
import TableCell from "./TableCell";

interface Props<T> {
  rowIndex: number;
  rowData: T;
  columns: Column<T>[];
}

const TableRow = <T,>({ rowData, rowIndex, columns }: Props<T>) => {
  return (
    <Tr>
      {columns.map(({ id, Component, isNumeric }) => (
        <TableCell
          key={`row-${rowIndex}-cell-${id}`}
          value={rowData[id as keyof T] as string | number}
          Component={Component}
          isNumeric={isNumeric}
          rowData={rowData}
        />
      ))}
    </Tr>
  );
};

export default TableRow;

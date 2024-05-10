import { Tbody } from "@chakra-ui/react";
import { Column } from "../../types/table.types";
import TableRow from "./TableRow";

interface Props<T> {
  data: any[];
  columns: Column<T>[];
}

const TableBody = <T,>({ data, columns }: Props<T>) => {
  return (
    <Tbody>
      {data.map((row, index) => (
        <TableRow
          key={`row-${index}`}
          rowData={row}
          rowIndex={index}
          columns={columns}
        />
      ))}
    </Tbody>
  );
};

export default TableBody;

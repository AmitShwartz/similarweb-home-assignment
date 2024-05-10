import {
  Table as ChakraTable,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Column } from "../../types/table.types";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

interface Props<T> {
  caption?: string;
  data: T[];
  columns: Column<T>[];
}

const Table = <T,>({ caption, data, columns }: Props<T>) => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        {!!caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
        <TableFooter columns={columns} />
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;

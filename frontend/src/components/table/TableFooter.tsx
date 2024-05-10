import { Tfoot, Th, Tr } from "@chakra-ui/react";
import { Column } from "../../types/table.types";
import { useMemo } from "react";

interface Props<T> {
  columns: Column<T>[];
}

const TableFooter = <T,>({ columns }: Props<T>) => {
  const hasFooter = useMemo(
    () => columns.some((column) => !!column.footer),
    [columns]
  );

  return hasFooter ? (
    <Tfoot>
      <Tr>
        {columns.map((column) => (
          <Th key={column.id} isNumeric={column.isNumeric}>
            {column.footer}
          </Th>
        ))}
      </Tr>
    </Tfoot>
  ) : null;
};

export default TableFooter;

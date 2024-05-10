import { Td } from "@chakra-ui/react";
import React from "react";

interface Props<T> {
  Component?: React.FC<T>;
  value: string | number;
  isNumeric?: boolean;
  rowData: T;
}

const TableCell = <T,>({ Component, value, isNumeric, rowData }: Props<T>) => {
  return (
    <Td isNumeric={isNumeric}>{!!Component ? Component(rowData) : value}</Td>
  );
};

export default TableCell;

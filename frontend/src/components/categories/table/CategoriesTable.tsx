import { observer } from "mobx-react";
import useCategoriesTable from "../../../hooks/UI/categories/useCategoriesTable";
import { CategoryTableRow } from "../../../types/category.types";
import Table from "../../table/Table";
import { Heading } from "@chakra-ui/react";

const CategoriesTable = () => {
  const { data, columns } = useCategoriesTable();
  return (
    <>
      <Heading
        marginTop={10}
        marginBottom={"10px"}
        as="h2"
        size="lg"
        color={"gray.700"}
      >
        Categories Table
      </Heading>
      <Table<CategoryTableRow>
        columns={columns}
        data={data}
        caption="Categories Table"
      />
    </>
  );
};

export default observer(CategoriesTable);

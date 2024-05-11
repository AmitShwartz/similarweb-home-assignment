import { observer } from "mobx-react";
import useCategoriesTable from "../../../hooks/UI/categories/useCategoriesTable";
import { CategoryTableRow } from "../../../types/category.types";
import Table from "../../table/Table";

const CategoriesTable = () => {
  const { data, columns } = useCategoriesTable();
  return (
    <Table<CategoryTableRow>
      columns={columns}
      data={data}
      caption="Categories Table"
    />
  );
};

export default observer(CategoriesTable);

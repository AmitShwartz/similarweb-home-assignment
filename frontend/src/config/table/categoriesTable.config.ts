import ConversionCell from "../../components/categories/ConversionCell";
import RevenueCell from "../../components/categories/RevenueCell";
import { Category } from "../../types/category.types";
import { Column } from "../../types/table.types";

export const categoriesTableColumns: Column<Category>[] = [
  {
    id: "category_name",
    header: "Category Name",
    isNumeric: false,
  },
  {
    id: "date",
    header: "Date",
    isNumeric: false,
  },
  {
    id: "product_view",
    header: "Product View",
    isNumeric: true,
  },
  {
    id: "revenue",
    header: "Revenue",
    isNumeric: true,
    Component: RevenueCell,
  },
  {
    id: "units_sold",
    header: "Units Sold",
    isNumeric: true,
  },
  {
    id: "CVR",
    header: "CVR",
    isNumeric: true,
    Component: ConversionCell,
  },
];

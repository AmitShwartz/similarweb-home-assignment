import ConversionCell from "../../components/categories/table/ConversionCell";
import RevenueCell from "../../components/categories/table/RevenueCell";
import { CategoryTableRow } from "../../types/category.types";
import { Column } from "../../types/table.types";

export const categoriesTableColumns: Column<CategoryTableRow>[] = [
  {
    id: "categoryName",
    header: "Category Name",
    isNumeric: false,
  },
  {
    id: "date",
    header: "Date",
    isNumeric: false,
  },
  {
    id: "productView",
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
    id: "unitsSold",
    header: "Units Sold",
    isNumeric: true,
  },
  {
    id: "CVR",
    header: "CVR",
    isNumeric: true,
    Component: ({ unitsSold, productView }) =>
      ConversionCell({
        value: unitsSold,
        total: productView,
      }),
  },
  {
    id: "changeRate",
    header: "Change Rate",
    isNumeric: true,
    Component: ({ startDateUnitsSold, endDateUnitsSold }) =>
      ConversionCell({
        value: startDateUnitsSold,
        total: endDateUnitsSold,
      }),
  },
];

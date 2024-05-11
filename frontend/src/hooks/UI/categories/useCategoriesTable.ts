import { useMemo } from "react";
import { categoriesTableColumns } from "../../../config/table/categoriesTable.config";
import useCategoriesStore from "../../stores/useCategoriesStore";
import { CategoryTableRow } from "../../../types/category.types";

const useCategoriesTable = () => {
  const { categories } = useCategoriesStore();
  const data = useMemo<CategoryTableRow[]>(() => {
    const summedCategoriesArray = Object.values(categories).map((group) => {
      const totals = group.reduce(
        (acc, curr) => {
          return {
            ...acc,
            unitsSold: acc.unitsSold + curr.units_sold,
            revenue: acc.revenue + curr.revenue,
            productView: acc.productView + curr.product_view,
          };
        },
        { unitsSold: 0, revenue: 0, productView: 0 }
      );

      return {
        categoryName: group[0].category_name,
        startDateUnitsSold: group[0].units_sold,
        endDateUnitsSold: group[group.length - 1].units_sold,
        ...totals,
      };
    });

    return summedCategoriesArray;
  }, [categories]);

  return {
    data,
    columns: categoriesTableColumns,
  };
};

export default useCategoriesTable;

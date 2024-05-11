import { Dictionary } from "lodash";

export type Category = {
  category_name: string;
  date: string;
  product_view: number;
  revenue: number;
  units_sold: number;
};

export type CategoryTableRow = {
  categoryName: string;
  productView: number;
  revenue: number;
  unitsSold: number;
  startDateUnitsSold: number;
  endDateUnitsSold: number;
};

export enum CategoriesKeys {
  category_name = "category_name",
  date = "date",
  product_view = "product_view",
  revenue = "revenue",
  units_sold = "units_sold",
}

export enum CategorySeriesOptions {
  units_sold = "units_sold",
  revenue = "revenue",
  product_view = "product_view",
}

export type Categories = Dictionary<Category[]>;

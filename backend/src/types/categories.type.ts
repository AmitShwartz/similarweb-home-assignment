import { Dictionary } from "lodash";

export type Category = {
  id: number;
  category_name: string;
  date: string;
  product_view: number;
  revenue: number;
  units_sold: number;
};

export type Categories = Dictionary<Category[]>;

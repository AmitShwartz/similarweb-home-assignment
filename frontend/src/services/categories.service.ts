import { Dictionary } from "lodash";
import categoriesApi from "../api/categories/categories.api";
import ICategoriesApi, {
  FetchCategoriesParams,
} from "../api/categories/categories.api.interface";

import {
  Categories,
  Category,
  CategorySeriesOptions,
} from "../types/category.types";

class CategoriesService {
  private api: ICategoriesApi;
  constructor(api: ICategoriesApi) {
    this.api = api;
  }

  async fetchCategories(params: FetchCategoriesParams): Promise<Categories> {
    return (await this.api.fetchCategories(params)).data;
  }

  createGraphAggregation(data: Category[], view: CategorySeriesOptions) {
    const aggregated: { [key: string]: Dictionary<number> } = {};
    data.forEach((item) => {
      const date = item.date;
      if (!aggregated[date]) {
        aggregated[date] = { [view]: 0 };
      }
      aggregated[date][view] += item[view];
    });

    return Object.entries(aggregated).map(([date, values]) => ({
      name: date,
      y: values[view],
    }));
  }
}

const categoriesService = new CategoriesService(categoriesApi);

export default categoriesService;

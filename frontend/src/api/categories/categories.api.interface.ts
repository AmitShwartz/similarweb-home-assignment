import { AxiosResponse } from "axios";
import { Categories } from "../../types/category.types";

export type FetchCategoriesParams = {
  page: number;
  startDate: string;
  endDate: string;
};

interface ICategoriesApi {
  fetchCategories: (
    params: FetchCategoriesParams
  ) => Promise<AxiosResponse<Categories, any>>;
}

export default ICategoriesApi;

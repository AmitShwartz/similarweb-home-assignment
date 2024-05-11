import axiosInstance from "../axiosInstance";
import ICategoriesApi, {
  FetchCategoriesParams,
} from "./categories.api.interface";

export class CategoriesApi implements ICategoriesApi {
  fetchCategories(params: FetchCategoriesParams) {
    return axiosInstance.get("/categories", {
      params,
    });
  }
}

const categoriesApi = new CategoriesApi();

export default categoriesApi;

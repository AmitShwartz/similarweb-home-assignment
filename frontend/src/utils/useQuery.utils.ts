import { FetchCategoriesParams } from "../api/categories/categories.api.interface";

export const buildFetchCategoriesQueryKey = ({
  startDate,
  endDate,
  page,
}: Partial<FetchCategoriesParams>) => {
  return ["Categories", page, startDate, endDate];
};

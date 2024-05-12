import { FetchCategoriesParams } from "../api/categories/categories.api.interface";

export const buildFetchCategoriesQueryKey = ({
  startDate,
  endDate,
}: Partial<FetchCategoriesParams>) => {
  return ["Categories", startDate, endDate];
};

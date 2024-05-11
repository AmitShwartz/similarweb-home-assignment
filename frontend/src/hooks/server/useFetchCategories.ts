import { AxiosError } from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";
import categoriesService from "../../services/categories.service";
import { Categories } from "../../types/category.types";
import { buildFetchCategoriesQueryKey } from "../../utils/useQuery.utils";
import useOnServerError from "./useOnServerError";
import useCategoriesStore from "../stores/useCategoriesStore";

type FetchCategoriesHook = {
  startDate?: string;
  endDate?: string;
  page?: number;
};

const useFetchCategories = ({
  startDate,
  endDate,
  page,
}: FetchCategoriesHook) => {
  const { onError } = useOnServerError();
  const { setCategories: onSuccess } = useCategoriesStore();

  const queryKey = useMemo(
    () =>
      buildFetchCategoriesQueryKey({
        page,
        startDate,
        endDate,
      }),
    [page, startDate, endDate]
  );

  const { data, isLoading, error } = useQuery<Categories, AxiosError>({
    queryKey,
    queryFn: () => {
      if (!startDate || !endDate || !page) return {} as Categories;

      return categoriesService.fetchCategories({
        startDate,
        endDate,
        page,
      });
    },
    onError,
    onSuccess,
    keepPreviousData: true,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchCategories;

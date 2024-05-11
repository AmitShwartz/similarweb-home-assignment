import useFetchCategories from "../../server/useFetchCategories";
import useCategoriesStore from "../../stores/useCategoriesStore";

const useCategoriesPage = () => {
  const { startDate, endDate, page } = useCategoriesStore();
  useFetchCategories({ startDate, endDate, page });
};

export default useCategoriesPage;

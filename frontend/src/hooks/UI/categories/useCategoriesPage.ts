import useFetchCategories from "../../server/useFetchCategories";
import useCategoriesStore from "../../stores/useCategoriesStore";

const useCategoriesPage = () => {
  const { startDate, endDate } = useCategoriesStore();
  useFetchCategories({ startDate, endDate });
};

export default useCategoriesPage;

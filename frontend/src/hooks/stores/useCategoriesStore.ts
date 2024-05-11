import { useStore } from "../../stores/setupContext";

const useCategoriesStore = () => {
  const { categories } = useStore();
  return categories;
};

export default useCategoriesStore;

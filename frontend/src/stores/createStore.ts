import CategoriesStore from "./CategoriesStore";
import { RootStore } from "./RootStore";

export interface IStores {
  categories: CategoriesStore;
}

export const createStore = () => {
  return new RootStore({
    categories: new CategoriesStore(),
  });
};

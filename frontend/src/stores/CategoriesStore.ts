import { Dictionary } from "lodash";
import { action, computed, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { Categories } from "../types/category.types";
import StoreBase from "./StoreBase";

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const MAX_CATEGORIES_SELECTION = 2;

class CategoriesStore extends StoreBase {
  categories: Categories = {};
  selectedCategoriesGraphOptions: Dictionary<string> = {};
  startDate: string | undefined = undefined;
  endDate: string | undefined = undefined;

  constructor() {
    super();

    makeObservable(this, {
      categories: observable,
      selectedCategoriesGraphOptions: observable,
      startDate: observable,
      endDate: observable,

      setCategories: action,
      setSelectedCategoriesGraphOptions: action,
      setStartDate: action,
      setEndDate: action,

      isMaxGraphOptionsSelected: computed,
      categoriesNames: computed,
    });

    makePersistable(this, {
      name: "CategoriesStore",
      properties: [
        "categories",
        "selectedCategoriesGraphOptions",
        "startDate",
        "endDate",
      ],
      storage: {
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: (key) => localStorage.removeItem(key),
      },
      expireIn: DAY_IN_MS,
      removeOnExpiration: true,
      stringify: true,
      debugMode: true,
    });
  }

  setCategories = (categories: Categories) => {
    this.categories = categories;
  };

  setSelectedCategoriesGraphOptions = (options: Dictionary<string>) => {
    this.selectedCategoriesGraphOptions = options;
  };

  setStartDate = (date: string) => {
    this.startDate = date;
  };

  setEndDate = (date: string) => {
    this.endDate = date;
  };

  get isMaxGraphOptionsSelected() {
    return (
      Object.keys(this.selectedCategoriesGraphOptions).length ===
      MAX_CATEGORIES_SELECTION
    );
  }

  get categoriesNames() {
    return Object.keys(this.categories);
  }
}

export default CategoriesStore;

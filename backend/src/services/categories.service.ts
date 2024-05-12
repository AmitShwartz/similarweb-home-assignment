import { Op } from "sequelize";
import { Categories, Category } from "../types";
import db from "../utils/database";

type GetCategoriesParams = {
  startDate: string;
  endDate: string;
};

const getAllDatesBetween = (startDate: string, endDate: string) => {
  const [startYear, startMonth] = startDate.split("-").map(Number);
  const [endYear, endMonth] = endDate.split("-").map(Number);

  const dates = [];
  for (let year = startYear; year <= endYear; year++) {
    const start = year === startYear ? startMonth : 1;
    const end = year === endYear ? endMonth : 12;
    for (let month = start; month <= end; month++) {
      dates.push(`${year}-${month.toString().padStart(2, "0")}`);
    }
  }

  return dates;
};

const buildCategoriesQuery = ({ startDate, endDate }: GetCategoriesParams) => {
  const query: any = {};
  const datesRange = getAllDatesBetween(startDate, endDate);

  query.date = {
    [Op.in]: datesRange,
  };

  const options = {
    raw: true,
    order: [["date", "ASC"]],
  };

  return { where: query, ...options };
};

const getGroupedCategories = (categories: Category[]) => {
  const groupedCategories: Categories = {};
  categories.forEach((category) => {
    const categoryName = category.category_name;
    if (!groupedCategories[categoryName]) {
      groupedCategories[categoryName] = [];
    }
    groupedCategories[categoryName].push(category);
  });

  return groupedCategories;
};

class CategoryService {
  async getCategories(params: GetCategoriesParams): Promise<Categories> {
    const query = await buildCategoriesQuery(params);
    const categories: Category[] = await db.categories.findAll(query);

    return getGroupedCategories(categories);
  }
}

const categoriesService = new CategoryService();

export default categoriesService;

import { CATEGORIES_DATA } from "../config/db/categories_data";

const db = require("../models");

export const initDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.categories.bulkCreate(CATEGORIES_DATA);
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
};

export default db;

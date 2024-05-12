import { Request, Response } from "express";
import categoriesService from "../services/categories.service";
import { InternalServerError, handleZodError } from "../utils/ApiError";
import { asyncWrapper } from "../utils/asyncWrapper";
import { GetCategoriesBodySchema } from "../validators/categories.schema";

class CategoriesController {
  getCategories = asyncWrapper(async (req: Request, res: Response) => {
    try {
      // validate and parse query parameters
      const queryBody = GetCategoriesBodySchema.parse(req.query);

      const categories = await categoriesService.getCategories(queryBody);

      return res.status(200).json(categories);
    } catch (error) {
      handleZodError(error);
      throw new InternalServerError(error);
    }
  });
}

const categoriesController = new CategoriesController();

export default categoriesController;

import { Router } from "express";
import neighborhoodController from "../controllers/categories.ctrl";

const router = Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags:
 *       - Neighborhoods
 *     summary: Get categories
 *     description: Retrieve grouped categories based on search parameters
 *     parameters:
 *       - in: query
 *         name: startDate
 *         type: string
 *         schema:
 *           type: string
 *         description: Start date filter
 *         example: 2021-01
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *         description: End date filter
 *         example: 2022-01
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.get("/", neighborhoodController.getCategories);

export default router;

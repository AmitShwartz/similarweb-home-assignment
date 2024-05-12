import express from "express";
import categoriesRouter from "./categories.route";

const router = express.Router();

const allRoutes = [
  {
    path: "/categories",
    route: categoriesRouter,
  },
];
allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

import express from "express";
const Router = express.Router();
import categories from "./categories/categoriesRoutes.js";

Router.use("/categories", categories);

export default Router;

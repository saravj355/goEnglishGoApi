import express from "express";
import categoriesController from "../../../../controllers/categoriesController.js";
const Router = express.Router();

Router.get("/", (req, res) => categoriesController.getAllCategories(req, res));
Router.get("/:categoryId", (req, res) =>
	categoriesController.getCategoryById(req, res)
);
Router.post("/", (req, res) => categoriesController.createCategory(req, res));
Router.patch("/:categoryId", (req, res) =>
	categoriesController.updateCategoryById(req, res)
);
Router.delete("/:categoryId", (req, res) =>
	categoriesController.deleteCategoryById(req, res)
);

export default Router;

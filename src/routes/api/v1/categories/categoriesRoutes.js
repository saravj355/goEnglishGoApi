import express from "express";
import categoriesController from "../../../../controllers/categoriesController.js";
const Router = express.Router();

Router.get("/", categoriesController.getAllCategories(req, res));
Router.get("/:categoryId", categoriesController.getCategoryById(req, res));
Router.post("/", categoriesController.createCategory(req, res));
Router.patch("/:categoryId", categoriesController.updateCategoryById(req, res));
Router.delete(
	"/:categoryId",
	categoriesController.deleteCategoryById(req, res)
);

export default Router;

import { generateRandomNumber } from "../utils";
import categoriesService from "../services/categoriesService.js";

function getAllCategories(req, res) {
	try {
		const { offset = 0, limit = 10 } = req.query;

		const queryFilters = {
			offset,
			limit,
		};

		const foundCategories = categoriesService.getAllCategories(queryFilters);
		res.status(200).send(foundCategories);
	} catch (error) {
		console.log(`Error: getAllCategories Controller ${error}`);
		res.send(error);
	}
}

function getCategoryById(req, res) {
	const {
		params: { categoryId },
	} = req;

	const foundCategory = categoriesService.getCategoryById(categoryId);
	res.status(200).send(foundCategory);
}

function createCategory(req, res) {
	const { body } = req;

	const createdCategory = categoriesService.createCategory(body);
	res.status(200).send(createdCategory);
}

function updateCategoryById(req, res) {
	const {
		params: { categoryId },
		body,
	} = req;

	const updatedCategory = categoriesService.updateCategoryById(
		categoryId,
		body
	);
	res.status(200).send(updatedCategory);
}

function deleteCategoryById(req, res) {
	const {
		params: { categoryId },
	} = req;

	categoriesService.deleteCategoryById(categoryId);
	res.status(200).send("The category has been deleted successfully");
}

export default {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategoryById,
	deleteCategoryById,
};

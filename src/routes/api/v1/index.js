import express from "express";
const Router = express.Router();
import categories from "./categories/categoriesRoutes.js";

Router.get("/", (req, res) => {
	res.send("V1");
});

Router.use("/categories", categories);

export default Router;

import express from "express";
const Router = express.Router();
import apiV1 from "./api/v1/index.js";

Router.get("/", (req, res) => {
	res.send("API");
});
Router.use("/v1", apiV1);

export default Router;

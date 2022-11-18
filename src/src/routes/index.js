import express from "express";
const Router = express.Router();
import verbs from "./verbsRoutes.js";

Router.get("/", (req, res) => {
	res.send("Api");
});

Router.use("/verbs", verbs);

export default Router;

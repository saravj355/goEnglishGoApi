import express from "express";
const Router = express.Router();

Router.get("/", (req, res) => {
	res.send("Verbs Index");
});

Router.get("/:verbId", (req, res) => {
	res.send("Get Verb");
});

Router.post("/", (req, res) => {
	res.send("Create a verb");
});

Router.patch("/:verbId", (req, res) => {
	res.send("Update a verb");
});

Router.delete("/:verbId", (req, res) => {
	res.send("Delete a verb");
});

export default Router;

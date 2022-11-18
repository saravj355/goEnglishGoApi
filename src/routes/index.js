import express from "express";
const Router = express.Router();
import verbs from "./verbsRoutes.js";

Router.use("/verbs", verbs);

export default Router;

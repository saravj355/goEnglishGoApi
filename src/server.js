import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("INDEX");
});
app.use("/api", router);

const init = () => {
	app.listen(PORT, (req, res) => {
		console.log(`Listening on port ${PORT}`);
	});
};

init();

import express from "express";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import { error } from "./middlewares/index.js";
import library from "./routes/library.routes.js"

const app = express();
const base = "/api/v1/"

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(base + "app", library)

app.use(error);

export default app;
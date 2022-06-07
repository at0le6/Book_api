import express from "express";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import { error,idApp } from "./middlewares";
import library from "./routes/library.routes.js"

const app = express();
const base = "/api/v1"

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(`${base}/app/:app`,[idApp], library)

app.use(error);

export default app;
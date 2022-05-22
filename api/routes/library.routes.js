import { Router } from "express";
import * as library from "../controllers/book.controller.js"
import * as middleware from "../middlewares"
const router = Router()

router.route("/:app").get([middleware.idApp],library.getAll)

export default router
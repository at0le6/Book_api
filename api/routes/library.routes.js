import { Router } from "express";
import * as library from "../controllers/book.controller.js"
const router = Router()

router.route("/:app").get(library.getAll)

export default router
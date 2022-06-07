import { Router } from "express";
import * as library from "../controllers/library.controller.js"
import * as middleware from "../middlewares"
import upload from '../cloudinary.js'
const router = Router()

router.route("/").get(library.getAll).post(
[upload.single("image"),middleware.schemaValidator(middleware.schemas.createLibro,'body')]
,library.createLibro);

export default router
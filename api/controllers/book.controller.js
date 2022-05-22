import connection from "../databse.js"
import { asyncWrapper, createError } from "../middlewares"

export const getAll = asyncWrapper(async(req, res, next) => {
    const result = await connection("app").where("app_id", req.id)
    res.status(200).json(result)
})
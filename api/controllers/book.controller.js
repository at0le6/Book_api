import connection from "../databse.js"
import { asyncWrapper, createError } from "../middlewares"

export const getAll = asyncWrapper(async(req, res, next) => {
    const { app } = req.params
    const result = await connection("app").where("app_id", app)
    console.log(result)
    res.status(200).json(result)
})
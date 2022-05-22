import connection from "../../databse.js"
import {asyncWrapper} from '../index.js'
const appId =async (req, res, next) => {
    try {
        const {app} = req.params
        const id=Number(app)
        if(isNaN(id))
        {
            return res.status(403).send("Qpso master")
        }
        const {rows}=await connection.raw(`select app_exist(${id})`)
        const exist=rows[0].app_exist
        if(exist)
        {
            req.id=id
            return next();
        }
        return res.status(404).send("app Not found")
    } catch (error) {
        res.status(500).send(error)
    }
}
export default appId
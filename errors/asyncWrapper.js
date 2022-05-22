import colors from "colors";
const asyncWrapper = (fn) => {
    return async(req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(`${error}`.white.bgRed)
            next(error)
        }
    }
}
export default asyncWrapper
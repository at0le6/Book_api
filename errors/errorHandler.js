class customErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
    }
}
export const createCustomError = (message, statusCode) => new customErrorHandler(message, statusCode)

export const errorHandleMiddleware = (err, req, res, next) => {
    if (err instanceof customErrorHandler) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: "something went wrong please try again" })
}
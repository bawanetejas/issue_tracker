const AppError = require("../utils/AppError");

exports.validation = (schema, type = "body") => {
    return (req, res, next) => {
        const data = schema.safeParse(req[type]);
        if (!data.success) {
            console.error("error while parsing the req-->", data)
            throw new AppError(data.error["message"], 404)
        }
        next();
    }
}
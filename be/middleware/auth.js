const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");


exports.auth = async (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1] || req.cookies?.token

    if (!token) {
        throw new AppError("Opes session out", 401)
    }

    // verify token
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // take out payload
        req.user = payload;

        next();
    } catch (error) {
        throw new AppError("Invalide token", 401)
    }

}

exports.isAdmin = async (req, res, next) => {
    const role = req.user.role;
    if (!role === "Admin") {
        throw new AppError("This route is for admin", 401)
    }
    next();
}

exports.isTeamLead = async (req, res, next) => {
    const role = req.user.role;
    if (!role === "Lead") {
        throw new AppError("This route is for Lead", 401)
    }
    next();
}
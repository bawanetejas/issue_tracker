
const mongoose = require("mongoose")
const AppError = require("../utils/AppError")
const User = require("../models/User")

exports.getUser = async (id) => {
    if (!id) {
        throw new AppError("id is not found", 404)
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError("Not valid Id", 400)
    }

    const user = await User.findById(id)

    if (!user) {
        throw new AppError("User not exist", 404);
    }

    return user
}

exports.getUsers = async (role, page = 1) => {
    // lead/employee
    if (!role) {
        throw new AppError("Role is defined", 400);
    }

    const limit = 20;

    const users = await User.find({ role })
        .select("_id fullName")
        .skip((page - 1) * limit)
        .limit(20)
        .lean();

    return users;
}
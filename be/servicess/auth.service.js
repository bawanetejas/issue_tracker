const User = require("../models/User");
const AppError = require("../utils/AppError");
const bcrypt = require("bcrypt")


exports.signup = async (data) => {

    const { fullName, userName, email, password, role } = data;

    // check user exist
    const existingUser = await User.findOne({ email });
    console.log("user -->", data)
    if (existingUser) {
        throw new AppError("User with this email already exist", 409)
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    // create user
    const user = await User.create({
        fullName,
        userName,
        email,
        password: hashedPassword,
        role
    })


    return {
        success: true,
        message: "User created"
    }
}
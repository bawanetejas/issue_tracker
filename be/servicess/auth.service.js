const User = require("../models/User");
const AppError = require("../utils/AppError");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = async (data) => {

    const { fullName, userName, email, password, role } = data;

    // check user exist
    const existingUser = await User.exists({ email });
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

exports.login = async (data) => {
    const { email, password } = data;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        throw new AppError("User with this email not exist", 404)
    }

    const matchedPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchedPassword) {
        throw new AppError("Incorrect password", 401)
    }

    existingUser.password = null;
    const payload = {
        email: existingUser.email,
        id: existingUser._id,
        role: existingUser.role
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" })

    return {
        token,
        existingUser
    }
}
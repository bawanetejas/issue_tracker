const { asyncHandler } = require("../middleware/async-handler");
const { signup, login } = require("../servicess/auth.service");

exports.createUser = asyncHandler(async (req, res) => {
    const data = await signup(req.body);
    return res.status(200).json({
        data
    })
})

exports.loginUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const data = await login(req.body);

    return res.status(200).json({
        success: true,
        data: data
    })
})
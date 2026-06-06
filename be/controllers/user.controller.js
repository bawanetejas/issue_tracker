const { asyncHandler } = require("../middleware/async-handler");
const services = require("../servicess/user.service");


exports.getUser = asyncHandler(async (req, res) => {
    const result = await services.getUser(req.params);
    return res.status(200).json({
        success: true,
        message: "User fetched successfully",
        user: result
    })
})

exports.getUsers = asyncHandler(async (req, res) => {
    const result = await services.getUsers(req.data.role, req.query.page);

    return res.status(200).json({
        success: true,
        message: "User fetched successfully",
        users: result
    })
})
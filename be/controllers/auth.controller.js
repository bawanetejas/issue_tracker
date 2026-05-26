const { asyncHandler } = require("../middleware/async-handler");
const { signup } = require("../servicess/auth.service");

exports.createUser = asyncHandler(async (req, res) => {
    const data = await signup(req.body);
    return res.status(200).json({
        data
    })
})
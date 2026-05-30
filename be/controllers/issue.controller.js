const { asyncHandler } = require("../middleware/async-handler");
const servicess = require("../servicess/issue.service");

exports.createIssue = asyncHandler(async (req, res) => {
    const data = await servicess.createIssue(req.body)
    return res.status(201).json({
        success: true,
        data
    })
})
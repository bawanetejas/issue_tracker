const { asyncHandler } = require("../middleware/async-handler");
const servicess = require("../servicess/issue.service");

exports.createIssue = asyncHandler(async (req, res) => {
    const data = await servicess.createIssue(req.body)
    return res.status(201).json({
        success: true,
        data
    })
})

exports.deleteIssue = asyncHandler(async (req, res) => {
    const data = await servicess.deleteIssue(req.params)

    return res.status(200).json({
        data: data
    })
})
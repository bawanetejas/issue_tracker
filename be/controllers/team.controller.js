const { asyncHandler } = require("../middleware/async-handler");
const servicess = require("../servicess/team.service")

exports.createTeam = asyncHandler(async (req, res) => {
    const data = await servicess.createTeam(req.body);
    return res.status(201).json({
        success: true,
        data
    })
})


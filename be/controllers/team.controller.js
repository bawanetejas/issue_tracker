const { asyncHandler } = require("../middleware/async-handler");
const servicess = require("../servicess/team.service")

exports.createTeam = asyncHandler(async (req, res) => {
    const data = await servicess.createTeam(req.body);
    return res.status(201).json({
        success: true,
        data
    })
})


exports.addTeamMember = asyncHandler(async (req, res) => {
    const data = await servicess.addTeamMember(req.body);
    return res.status(200).json({
        data
    })
})

exports.deleteTeam = asyncHandler(async (req, res) => {
    const data = await servicess.deleteTeam(req.params.id)
    return res.status(200).json({
        data
    })
})

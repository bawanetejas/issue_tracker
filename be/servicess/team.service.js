const Team = require("../models/Team");
const User = require("../models/User");
const AppError = require("../utils/AppError");

exports.createTeam = async (data) => {

    const { name, description, teamLead } = data;

    const existingLead = await User.findById(teamLead);
    if (!existingLead) {
        throw new AppError("User with this id not exist", 404)
    }
    const teamData = await Team.create({
        name,
        description,
        teamLead
    })

    return teamData;

}



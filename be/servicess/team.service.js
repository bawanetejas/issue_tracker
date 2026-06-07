const Team = require("../models/Team");
const User = require("../models/User");
const AppError = require("../utils/AppError");
const mongoose = require("mongoose")

exports.createTeam = async (data) => {

    const { name, description, teamLead } = data;

    const teamNameExist = await Team.exists({ name: name });
    if (teamNameExist) {
        throw new AppError("Team with this name already exist", 409)
    }
    const existingLead = await User.exists({ _id: teamLead });
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


exports.addTeamMember = async (data) => {
    //data in array form
    const { members, teamId } = data;
    if (!members || !teamId) {
        throw new AppError("Data is missing", 404);
    }
    // check valid user
    // it cause members.length db call & trip
    const users = await Promise.all(members.map((id, key) => {
        return User.findById(id)
    }))


    const invalidUser = users.some((user) => !user)


    if (invalidUser) {
        throw new AppError("Invalid user", 400)
    }
    //add to the team
    const team = await Team.findById(teamId);
    if (!team) throw new AppError("Team not exist", 400)
    members.forEach(element => {
        if (!team.member.includes(element)) team.member.push(element)
    })
    await team.save();


    return {
        status: true,
        message: "member added success fully"
    }
}



exports.deleteTeam = async (id) => {

    if (!team) {
        throw new AppError("Team not exist", 404)
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid team id", 400)
    }

    const team = await Team.findByIdAndDelete(id);
    if (!team) {
        throw new AppError("Team with this id not exist", 404)
    }
    return team
}

exports.getAllTeam = async (page = 1) => {
    const limit = 20
    const result = await Team.find({})
        .select("name _id members")
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

    const teams = result?.map((team) => ({
        name: team.name,
        id: team._id,
        length: team?.members?.length || 0
    }))

    return teams;
}
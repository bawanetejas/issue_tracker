const Issue = require("../models/Issue")
const Team = require("../models/Team")
const User = require("../models/User")
const AppError = require("../utils/AppError")
const mongoose = require("mongoose")

exports.createIssue = async (data) => {

    // get data destructure it
    const userId = req.user.id
    const { title,
        description,
        assignedTo,
        status,
        priority,
        team,
        dueDate } = data

    if (!mongoose.Types.ObjectId.isValid(assignedTo)) {
        throw new AppError("Invalid User Id", 400)
    }

    if (!mongoose.Types.ObjectId.isValid(team)) {
        throw new AppError("Invalid Team Id", 400)
    }

    const [assignedTeam, assignedUser] = await Promise.all([
        Team.exists({ _id: team }),
        User.exists({ _id: assignedTo })
    ])
    // create issue
    if (!assignedTeam) {
        throw new AppError('Team with this id not exist', 404)
    }

    if (!assignedUser) {
        throw new AppError('User with this id not exist', 404)
    }
    const issueData = await Issue.create({
        title,
        description,
        assignedTo,
        createdBy: userId,
        status,
        priority,
        team,
        dueDate
    })
    return issueData;

}


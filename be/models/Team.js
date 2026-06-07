const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 200,
        required: true,
        unique: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    description: {
        type: String,
        trim: true,
        maxLength: 200,
    },
    teamLead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
    { timestamps: true }
)

module.exports = mongoose.model("Team", teamSchema)

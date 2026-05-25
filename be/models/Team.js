const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 200,
        required: true
    },
    member: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    description: {
        type: String,
        trim: true,
        maxLength: 200,
    },

},
    { timestamps: true }
)

module.exports = mongoose.model("Team", teamSchema)

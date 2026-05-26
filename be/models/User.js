const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true,
        maxLength: 100
    },
    userName: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }],
    role: {
        type: String,
        enum: ["Admin", "Lead", "Employee"],
        default: "Employee"
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("User", userSchema)
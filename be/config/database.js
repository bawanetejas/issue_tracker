const mongoose = require("mongoose");

exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connection successful")
    } catch (error) {
        console.error("error occure while db connection -->", error.message);
        process.exit(1)
    }
}
require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { dbConnect } = require("./config/database");
const { globalErrorHandler } = require("./middleware/global-error-handler");

const userRoute = require("./routes/user.routes")
const issueRoute = require("./routes/issue.routes")
const teamRoute = require("./routes/team.routes")

const app = express();

// security middleware
app.use(helmet());

// logger middleware
app.use(morgan("dev"))

// cors 
app.use(cors({
    origin: "*"
}))

// body parser
app.use(express.json())



const PORT = process.env.PORT || 4000;

app.get("/health", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is started and running"
    })
})

// routes
app.use("/api/auth", userRoute)
app.use("/api/v1", issueRoute)
app.use("/api/v1", teamRoute)

// gloable error handler
app.use(globalErrorHandler)

const startServer = async () => {
    try {
        await dbConnect();

        app.listen(PORT, () => {
            console.log(`server is started and running on port ${PORT}`)
        })

    } catch (error) {
        console.error("error while server start -->", error)
        process.exit(1)
    }
}

startServer();
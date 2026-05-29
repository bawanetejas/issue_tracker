const express = require("express");
const { createTeam, addTeamMember } = require("../controllers/team.controller");
const teamSchema = require("../validation/team.validation");
const { validation } = require("../middleware/request-validation");
const router = express.Router();


router.post("/team", validation(teamSchema, "body"), createTeam);

module.exports = router
const express = require("express");
const { createTeam, addTeamMember, deleteTeam } = require("../controllers/team.controller");
const teamSchema = require("../validation/team.validation");
const { validation } = require("../middleware/request-validation");
const { auth } = require("../middleware/auth");
const router = express.Router();


router.post("/team", validation(teamSchema, "body"), createTeam);
router.put("/team", addTeamMember)
router.delete("/team/:id", auth, deleteTeam)
module.exports = router
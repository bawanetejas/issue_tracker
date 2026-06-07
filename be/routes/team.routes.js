const express = require("express");
const { createTeam, addTeamMember, deleteTeam, getAllTeam } = require("../controllers/team.controller");
const teamSchema = require("../validation/team.validation");
const { validation } = require("../middleware/request-validation");
const { auth } = require("../middleware/auth");
const router = express.Router();


router.post("/teams", validation(teamSchema, "body"), createTeam);
router.put("/teams", addTeamMember)
// router.delete("/teams/:id", getTeam)
router.get("/teams", getAllTeam)
module.exports = router
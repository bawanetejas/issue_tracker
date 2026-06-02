const express = require("express");
const { createIssue, deleteIssue } = require("../controllers/issue.controller");
const { validation } = require("../middleware/request-validation");
const { issueSchema } = require("../validation/issue.validation");
const router = express.Router();


// rest api standard
router.post("/issues", validation(issueSchema, "body"), createIssue)
router.delete("/issue/:id", deleteIssue)
module.exports = router
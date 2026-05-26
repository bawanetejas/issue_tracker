const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/auth.controller");
const { validation } = require("../middleware/request-validation");
const { userSchema, loginSchema } = require("../validation/user.validation");

router.post("/signup", validation(userSchema, "body"), createUser);
router.post("/login", validation(loginSchema, "body"), loginUser);
// router.put("/edit-user", editUser);


module.exports = router
const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/auth.controller");
const { validation } = require("../middleware/request-validation");
const { userSchema, loginSchema } = require("../validation/user.validation");
const { getUser, getUsers } = require("../controllers/user.controller");

router.post("/signup", validation(userSchema, "body"), createUser);
router.post("/login", validation(loginSchema, "body"), loginUser);
// router.put("/edit-user", editUser);

// router.get("/users/:id", getUser);
router.get("/users", getUsers);

module.exports = router
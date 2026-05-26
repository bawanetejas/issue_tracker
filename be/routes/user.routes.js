const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/auth.controller");
const { validation } = require("../middleware/request-validation");
const { userSchema } = require("../validation/user.validation");

router.post("/signup", validation(userSchema, "body"), createUser);
// router.get("/login", loginUser);
// router.put("/edit-user", editUser);


module.exports = router
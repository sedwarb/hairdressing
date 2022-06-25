const { Router } = require("express");
const {createUser} = require("../controllers/user")
const router = Router();

// http://localhost:3001/user
router.post("/", createUser)

module.exports = router;
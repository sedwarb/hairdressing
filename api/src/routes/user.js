const { Router } = require("express");
const {createUser,getUsers} = require("../controllers/user")
const router = Router();

// http://localhost:3001/user
router.get("/", getUsers)
router.post("/", createUser)

module.exports = router;
const { Router } = require("express");
const {createUser,getUsers} = require("../controllers/user")
const router = Router();
var cors = require('cors')

// http://localhost:3001/user
router.get("/",cors(), getUsers)
router.post("/", createUser)

module.exports = router;
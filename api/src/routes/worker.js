const { Router } = require("express");
const {createWorker,getWorkers} = require("../controllers/worker")
const router = Router();
var cors = require('cors')

// http://localhost:3001/user
router.get("/",cors(), getWorkers)
router.post("/", createWorker)

module.exports = router;
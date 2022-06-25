const { Router } = require("express");
const {createWorker,getWorkers} = require("../controllers/worker")
const router = Router();

// http://localhost:3001/user
router.get("/", getWorkers)
router.post("/", createWorker)

module.exports = router;
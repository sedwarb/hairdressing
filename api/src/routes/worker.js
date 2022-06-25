const { Router } = require("express");
const {createWorker} = require("../controllers/worker")
const router = Router();

// http://localhost:3001/user
router.post("/", createWorker)

module.exports = router;
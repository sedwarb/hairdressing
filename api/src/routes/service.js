const { Router } = require("express");
const router = Router();
const {createService} = require("../controllers/service")

router.post("/", createService)

module.exports = router;
const { Router } = require("express");
const router = Router();
const {createService,getServices} = require("../controllers/service")


router.get("/", getServices)
router.post("/", createService)

module.exports = router;
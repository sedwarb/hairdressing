const { Router } = require("express");
const router = Router();
const {createService,getServices,updateServicePrice} = require("../controllers/service")


router.get("/", getServices)
router.post("/", createService)
router.put("/", updateServicePrice)

module.exports = router;
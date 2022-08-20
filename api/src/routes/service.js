const { Router } = require("express");
const router = Router();
var cors = require('cors')
const {createService,getServices,updateServicePrice} = require("../controllers/service")


router.get("/",cors(), getServices)
router.post("/", createService)
router.put("/", updateServicePrice)

module.exports = router;
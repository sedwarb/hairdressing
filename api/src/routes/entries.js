const { Router } = require("express");
const router = Router();
var cors = require('cors')
const {getEntriesByDate,createEntry,updateEntryType} = require("../controllers/entries")

router.get("/",cors(), getEntriesByDate)
router.post("/", createEntry)
router.put("/", updateEntryType)

module.exports = router;
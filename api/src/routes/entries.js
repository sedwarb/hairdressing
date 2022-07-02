const { Router } = require("express");
const router = Router();
const {getEntriesByDate,createEntry,updateEntryType} = require("../controllers/entries")

router.get("/", getEntriesByDate)
router.post("/", createEntry)
router.put("/", updateEntryType)

module.exports = router;
const { Router } = require("express");
const router = Router();
const {getEntriesByDate,createEntry} = require("../controllers/entries")

//getEntriesByDate:
// http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03
//createEntry:
// http://localhost:3001/entries
router.get("/", getEntriesByDate)
router.post("/", createEntry)

module.exports = router;
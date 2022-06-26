const { Router } = require("express");
const router = Router();
const {getEntriesByDate,createEntry} = require("../controllers/entries")

//getEntriesByDate:
// http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03
// http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03&&workerId=1143961948
// http://localhost:3001/entries?dateIni=2022-06-24&&dateEnd=2022-06-24&&phoneNumber=3206707858
//createEntry:
// http://localhost:3001/entries
router.get("/", getEntriesByDate)//this is with or without (worker/user)
router.post("/", createEntry)

module.exports = router;
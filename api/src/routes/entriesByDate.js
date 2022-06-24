const { Router } = require("express");
const router = Router();
const {entriesByDate} = require("../controllers/entriesByDate")
//const {loadAll}=require('../controllers/bulkLoad')
// http://localhost:3001/bulkLoad/all

router.get("/", entriesByDate)

module.exports = router;
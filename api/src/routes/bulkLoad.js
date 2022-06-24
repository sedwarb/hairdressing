const { Router } = require("express");
const router = Router();
const {loadAll}=require('../controllers/bulkLoad')
// http://localhost:3001/bulkLoad/all

router.get("/all", loadAll)

module.exports = router;
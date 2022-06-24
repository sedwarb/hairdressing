const { Router } = require('express');
const bulkLoad = require('./bulkLoad');
const entriesByDate = require('./entriesByDate')

const router = Router();

// http://localhost:3001/bulkLoad/all
// http://localhost:3001/entriesByDate?dateIni=2021-01-03&&dateEnd=2021-01-03
router.use('/bulkLoad', bulkLoad);
router.use('/entriesByDate', entriesByDate);

module.exports = router;

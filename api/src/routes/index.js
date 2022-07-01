const { Router } = require('express');
const bulkLoad = require('./bulkLoad');
const entries = require('./entries')
const user = require('./user')
const service = require('./service')
const worker = require('./worker')

const router = Router();

// http://localhost:3001/bulkLoad/all
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-06-02%2023:59:59.110%20-0500
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-06-02%2023:59:59.110%20-0500&&workerId=1143961948
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&phoneNumber=4007008060
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&entry=meeting
// http://localhost:3001/user
// http://localhost:3001/service
// http://localhost:3001/worker
router.use('/bulkLoad', bulkLoad);
router.use('/entries', entries);
router.use('/user', user);
router.use('/service', service);
router.use('/worker', worker);

module.exports = router;

const { Router } = require('express');
const bulkLoad = require('./bulkLoad');
const entries = require('./entries')
const user = require('./user')
const service = require('./service')
const worker = require('./worker')

const router = Router();

// http://localhost:3001/bulkLoad/all
// http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03
// http://localhost:3001/entries?dateIni=2021-01-03&&dateEnd=2021-01-03&&workerId=1143961948
// http://localhost:3001/entries?dateIni=2022-06-24&&dateEnd=2022-06-24&&phoneNumber=3206707858
// http://localhost:3001/user
// http://localhost:3001/service
// http://localhost:3001/worker
router.use('/bulkLoad', bulkLoad);
router.use('/entries', entries);
router.use('/user', user);
router.use('/service', service);
router.use('/worker', worker);

module.exports = router;

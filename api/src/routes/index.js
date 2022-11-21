const { Router } = require('express');
const bulkLoad = require('./bulkLoad');
const entries = require('./entries')
const user = require('./user')
const service = require('./service')
const worker = require('./worker')
const product = require("./product")

const router = Router();

// Cargar datos precargados
// http://localhost:3001/bulkLoad/all
// Entradas por rango de fecha (solo Entry)
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-06-02%2023:59:59.110%20-0500
// Entradas por rango de fecha y trabajador
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-06-02%2023:59:59.110%20-0500&&workerId=1143961948
// Entradas por rango de fecha y phoneNumber
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&phoneNumber=3006007050
// Entradas por rango de fecha y entry=meeting (citas)
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&entry=meeting
// Entradas por rango de fecha, workerId y entry=meeting (citas)
// http://localhost:3001/entries?dateIni=2022-06-02%2000:00:00.110%20-0500&&dateEnd=2022-07-01%2023:59:59.110%20-0500&&entry=meeting&&workerId=1143961948
// http://localhost:3001/user
// http://localhost:3001/service
// http://localhost:3001/worker
// Actualizar precio de servicio
// http://localhost:3001/service
router.use('/bulkLoad', bulkLoad);
router.use('/entries', entries);
router.use('/user', user);
router.use('/service', service);
router.use('/worker', worker);
router.use('/product', product);

module.exports = router;

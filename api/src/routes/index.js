const { Router } = require('express');
const requiere =[
    "bulkLoad",
    "entries",
    "user",
    "service",
    "worker",
    "product",
    "autenticar"
]
const router = Router();

for (let i = 0; i < requiere.length; i++) {
    router.use(`/${requiere[i]}`, require(`./${requiere[i]}`))
}

module.exports = router;

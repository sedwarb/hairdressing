const { Router } = require("express")
const router = Router()
const {getAutenticacion,createAutenticacion} = require('../controllers/autenticar')

router.get("/", getAutenticacion)
router.post("/", createAutenticacion)

module.exports = router;
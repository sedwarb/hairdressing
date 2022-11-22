const { Router } = require("express");
const router = Router();
const {createProduct,getProducts} = require("../controllers/product")

router.get("/", getProducts)
router.post("/", createProduct)

module.exports = router;
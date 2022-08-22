const express = require("express")
const { createStock, getAllStock } = require("../controller/stockController")

const router = express.Router()


router.route("/create").post(createStock)
router.route("/getall").get(getAllStock)


module.exports = router
const express = require("express");
const { createStock, getAllStock } = require("../controllers/stockController");


const router = express.Router();
router.route("/stock/new").post(createStock);
router.route("/stock/all").get(getAllStock);

module.exports = router;
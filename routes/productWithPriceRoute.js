const express = require("express");
const router = express.Router();

const {
    getProductWithPrice,
    createProductWithPrice,
    createProductsWithPricethreetable
} = require("../controllers/productWithPriceController");

router.route("/productwithprice/all").get(getProductWithPrice);
router.route("/productwithprice/new").post(createProductWithPrice);
router.route("/productwithprice/newproducts").post(createProductsWithPricethreetable);


module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getProductPrice,
  getProductPriceByZoneId,
  productWithPriceAll,
  getProductPriceByProductId,
  UpdateProductPrice,
} = require("../controllers/productpriceController");

router.route("/productprice/all").get(getProductPrice);
router.route("/productprice/zone/:zoneid").get(getProductPriceByZoneId);
router.route("/productprice/updateallproductprice").get(productWithPriceAll);
router
  .route("/productprice/byproductid/:productid")
  .get(getProductPriceByProductId);
router.route("/productprice/updateproductprice/:id").put(UpdateProductPrice);

module.exports = router;

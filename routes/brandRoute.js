const express = require("express");
const {
  createBrand,
  getAllBrand,
  UpdateBrand,
  deleteBrand,
  Updatethumbnail,
  Updateicon,
  getBrandbyname,
  Uploadicon,
  Uploadthumbnail,
  UpdateAllBrandswithSlugurl
} = require("../controllers/brandController");

const router = express.Router();
router.route("/brand/new").post(createBrand);
router.route("/brand/all").get(getAllBrand);
router.route("/brand/:id").put(UpdateBrand);
router.route("/brand/allwithslugurl").get(UpdateAllBrandswithSlugurl);
router.route("/brand/:id").delete(deleteBrand);
router.route("/brand/thumbnails/:id").put(Updatethumbnail);
router.route("/brand/icon/:id").put(Updateicon);
router.route("/brand/name/:name").put(getBrandbyname);

router.route("/brand/icon").post(Uploadicon);
router.route("/brand/thumbnail").post(Uploadthumbnail);

module.exports = router;

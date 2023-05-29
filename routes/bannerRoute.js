const express = require("express");
const { createBanner, UpdatewebsiteBanner, UpdatemobileBanner, Getbannerbyid } = require("../controllers/bannerController");

const router = express.Router();

router.route("/banner/new").post(createBanner);
router.route("/banner/one/:id").get(Getbannerbyid);
router.route("/banner/websitebanner/:id").put(UpdatewebsiteBanner);
router.route("/banner/mobilebanner/:id").put(UpdatemobileBanner);

module.exports = router;
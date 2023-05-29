const express = require("express");
const { createSlider, UpdatewebsiteSlider, UpdatemobileSlider, Getsliderbyid } = require("../controllers/sliderController");

const router = express.Router();

router.route("/slider/new").post(createSlider);
router.route("/slider/one/:id").get(Getsliderbyid);
router.route("/slider/websiteslider/:id").put(UpdatewebsiteSlider);
router.route("/slider/mobileslider/:id").put(UpdatemobileSlider);

module.exports = router;
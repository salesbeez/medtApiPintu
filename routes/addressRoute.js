const express = require("express");
const { createAddress, getAllAddresses, getAllAddressesByClient,addressDelete } = require("../controllers/addressController");
const router = express.Router();


router.route("/address/new").post(createAddress);
router.route("/address/all").get(getAllAddresses);
router.route("/address/client/:clientid").get(getAllAddressesByClient);
router.route("/address/:addressid").delete(addressDelete);

module.exports = router;
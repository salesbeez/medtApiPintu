const express = require("express");
const { createPinAmount, getAllPinAmount, UpdatePinAmount, deletePinAmount, Getzoneid, getAllPinAmountinone } = require("../controllers/pinAmountController");




const router = express.Router();

router.route("/pinamount/new").post(createPinAmount);
router.route("/pinamount/all").get(getAllPinAmount);
router.route("/pinamount/:pincode").get(Getzoneid);
router.route("/pinamount/:id").put(UpdatePinAmount);
router.route("/pinamount/:id").delete(deletePinAmount);
router.route("/pinamount/all/inone").get(getAllPinAmountinone);

module.exports = router;
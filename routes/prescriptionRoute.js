const express = require("express");
const {UploadImage } = require("../controllers/prescriptionController");


const router = express.Router();



router.route("/prescription/prescriptionimg").post(UploadImage);
// router.route("/prescription/:clientId").get(getPrescription);


 
module.exports = router;

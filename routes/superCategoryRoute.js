const express = require("express");
const { createsuperCategory, getAllsupercategory, UpdateSupercategory, deleteSupercategory, getSupercategorybyname, getsupercategorynames } = require("../controllers/superCategoryController");


const router = express.Router();

router.route("/superCategory/new").post(createsuperCategory);
router.route("/supercategory/all").get(getAllsupercategory);
router.route("/supercategory/one/:name").get(getSupercategorybyname);
router.route("/supercategory/:id").put(UpdateSupercategory);
router.route("/supercategory/:id").delete(deleteSupercategory);
router.route("/supercategory/name/:name").get(getsupercategorynames);

module.exports = router;
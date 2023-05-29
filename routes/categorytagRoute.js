const express = require("express");
const {
  createcategoryTag,
  getAllcategoryTag,
  UpdatecategoryTag,
  deletecategoryTag,
  getcategoryTagbycatId,
} = require("../controllers/categoryTagController");

const router = express.Router();

router.route("/categorytag/new").post(createcategoryTag);
router.route("/categorytag/all").get(getAllcategoryTag);
router.route("/categorytag/:id").put(UpdatecategoryTag);
router.route("/categorytag/:id").delete(deletecategoryTag);
router.route("/categorytag/:catid").get(getcategoryTagbycatId);

module.exports = router;

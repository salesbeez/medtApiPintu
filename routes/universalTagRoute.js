const express = require("express");
const { createuniversalTag, getAlluniversalTag, UpdateuniversalTag, deleteuniversalTag } = require("../controllers/universalTagController");


const router = express.Router();

router.route("/universaltag/new").post(createuniversalTag);
router.route("/universaltag/all").get(getAlluniversalTag);
router.route("/universaltag/:id").put(UpdateuniversalTag);
router.route("/universaltag/:id").delete(deleteuniversalTag);
module.exports = router;
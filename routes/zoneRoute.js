const express = require("express");
const { createZone, getAllzone, UpdateZone, deleteZone } = require("../controllers/zoneController");
const router = express.Router();

router.route("/zone/new").post(createZone);
router.route("/zone/all").get(getAllzone);
router.route("/zone/:id").put(UpdateZone);
router.route("/zone/:Zoneid").delete(deleteZone);
module.exports = router;
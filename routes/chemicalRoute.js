const express = require("express");
const { createchemical, getAllchemical, UpdateChemical, deleteChemical } = require("../controllers/chemicalController");



const router = express.Router();

router.route("/chemical/new").post(createchemical);
router.route("/chemical/all").get(getAllchemical);
router.route("/chemical/:id").put(UpdateChemical);
router.route("/chemical/:id").delete(deleteChemical)
module.exports = router;

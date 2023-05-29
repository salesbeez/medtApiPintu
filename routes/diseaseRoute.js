const express = require("express");
const { createDisease, getAllDisease, UpdateDisease, deleteDisease } = require("../controllers/diseaseController");


const router = express.Router();

router.route("/disease/new").post(createDisease);
router.route("/disease/all").get(getAllDisease);
router.route("/disease/:id").put(UpdateDisease);
router.route("/disease/:id").delete(deleteDisease);


module.exports = router;
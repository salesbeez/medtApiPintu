const express = require("express");


const {
    getAllcategory,
  } = require("../controllers/categoryNewController");

  const router = express.Router();

  router.route("/category/all").get(getAllcategory);

  module.exports = router;
const express = require("express");
const { createAdmin, loginAdmin } = require("../controllers/adminController");
const { isAuthenticatedAdmin, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/admin/new").post(createAdmin);
router.route("/admin/login").post(loginAdmin);

module.exports = router;
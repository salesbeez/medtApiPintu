const express = require("express");
const { createEmployee, getAllEmployee, UpdateEmployee, deleteEmployee, loginEmployee,UploadAvatar
      } = require("../controllers/employeeController");



const router = express.Router();

router.route("/employee/new").post(createEmployee);
router.route("/employee/all").get(getAllEmployee);
router.route("/employee/:id").put(UpdateEmployee);
router.route("/employee/delete/:id").delete(deleteEmployee);

router.route("/employee/login").post(loginEmployee);


router.route("/employee/avatar").post(UploadAvatar);
module.exports = router;

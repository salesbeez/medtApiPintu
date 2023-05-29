const express = require("express");
const { registerClient,loginmobileClient } = require("../controllers/clientController");


const router = express.Router();

router.route("/client/register").post(registerClient);
router.route("/client/mobile").post(loginmobileClient);

 
module.exports = router;

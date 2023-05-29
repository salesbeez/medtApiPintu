const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getOrderbyzoneid,
  getProductsbyorderid,
  getOrderebyClientid
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(newOrder);
router.route("/order/all").get(getAllOrder);

router.route("/order/:id").get(getSingleOrder);
router.route("/orders/client/:clientid").get(getOrderebyClientid);

router.route("/orders/me").get(myOrders);
router.route("/orders/:id/:orderStatus").get(getOrderbyzoneid);
router.route("/order/orderproduct/:id").get(getProductsbyorderid);
router.route("/order/all/admin").get(getAllOrders);
router.route("/admin/order/:id").put(updateOrder).delete(deleteOrder);

module.exports = router;

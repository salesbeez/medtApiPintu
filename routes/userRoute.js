const express = require("express");
const { registerUser,
     loginUser, 
     forgotPassword,
     resetPassword,
     logoutUser,
     getUserDetails,
     updatePassword,
     updateProfile,
     getAllUser,
     getSingleUser,
     updateUserRole,
     deleteUser,
     loginmobileUser
    } = require("../controllers/userController");

    const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/user/register").post(registerUser);

router.route("/user/login").post(loginUser);

router.route("/user/mobilelogin").post(loginmobileUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:userToken").put(resetPassword);

router.route("/logout").get( logoutUser);

router.route("/me").post(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
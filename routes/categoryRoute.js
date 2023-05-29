const express = require("express");
const {
  createCategory,
  getAllcategory,
  UpdateCategory,
  deleteCategory,
  Updatethumbnail,
  Updatedesktopicon,
  Updateicon,
  Updatebanners,
  UpdateSliderImage,
  getcategorybyslugurl,
  getAllcategorybySupercategy,
  Uploadthumbnail,
  Uploadicon,
  Uploadbanner,
  Uploaddesktopicon,
} = require("../controllers/categoryController");



const router = express.Router();

router.route("/category/new").post(createCategory);
router.route("/category/all").get(getAllcategory);
router.route("/category/all/:id").get(getAllcategorybySupercategy);
router.route("/category/slugurl/:slugurl").get(getcategorybyslugurl);
router.route("/category/:id").put(UpdateCategory);
router.route("/category/thumbnails/:id").put(Updatethumbnail);
router.route("/category/desktopicon/:id").put(Updatedesktopicon);
router.route("/category/icon/:id").put(Updateicon);
router.route("/category/banner/:id").put(Updatebanners);
// router.route("/category/banner/:id").put(UpdateSliderImage);
router.route("/category/:id").delete(deleteCategory);

router.route("/category/thumbnail").post(Uploadthumbnail);
router.route("/category/icon").post(Uploadicon);
router.route("/category/banner").post(Uploadbanner);
router.route("/category/desktopicon").post(Uploaddesktopicon);


  

module.exports = router;
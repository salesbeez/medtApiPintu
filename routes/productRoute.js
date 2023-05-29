const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProducts,
  Updateproduct,
  deleteProduct,
  getProductsbySuperCategoryname,
  Getproductbyid,
  GetproductbySlugUrl,
  Updatethumbnail,
  getProductsbyname,
  UpdateSliderImages,
  productwithprice,
  getProductpricebyzoneid,
  getAllproductbycategory,
  Updateicon,
  Updatedesktopicon,
  getAllproductbycategorySlugurl,
  Uploadthumbnail,
  Uploadicons,
  Uploadbanner,
  Uploaddesktop,
  getProductpricebyzone,
  productExistByName,
  productExistBySlugUrl,
  getAllDrugsBySuperCat,
  getAllDevicesBySuperCat,
  getAllProductsBySuperCat,
  UploadTogethere,
  SlugUrlExist
} = require("../controllers/products");

router.route("/product/all").get(getAllProducts);
router.route("/product/bycategory/:catId").get(getAllproductbycategory);
router.route("/product/bydrugssupercat/:drugssupercatid").get(getAllDrugsBySuperCat);
router.route("/product/bydevicessupercat/:devicesupercatid").get(getAllDevicesBySuperCat);
router.route("/product/byproductssupercat/:productssupercatid").get(getAllProductsBySuperCat);
router.route("/product/existbyname/:productname").get(productExistByName);
router.route("/product/existbyslugurl/:slugurl").get(productExistBySlugUrl);
router.route("/product/bycategory/:catslugurl").get(getAllproductbycategorySlugurl);
router.route("/product/new").post(createProducts);
router.route("/product/one/:id").get(Getproductbyid);
router.route("/product/thumbnails/:id").put(Updatethumbnail);
router.route("/product/newBanner/:id").put(UpdateSliderImages);
router.route("/product/icon/:id").put(Updateicon);
router.route("/product/desktopicon/:id").put(Updatedesktopicon);
router.route("/product/list/:supercatname/:name").get(getProductsbyname);
router.route("/product/all/:name").get(getProductsbySuperCategoryname);
router.route("/product/:supercatname/:slugurl").get(GetproductbySlugUrl);
router.route("/product/:id").put(Updateproduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/withprice").get(productwithprice);
router.route("/product/productprice/:zoneid/:productid").get(getProductpricebyzoneid);
router.route("/product/product/:zoneid").get(getProductpricebyzone);
router.route("/product/:slugurl").get(SlugUrlExist);

router.route("/product/thumbnail").post(Uploadthumbnail);
router.route("/product/icons").post(Uploadicons);
router.route("/product/banner").post(Uploadbanner);
router.route("/product/desktop").post(Uploaddesktop);
router.route("/product/together").post(UploadTogethere);

module.exports = router;

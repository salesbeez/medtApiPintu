const ProductPrice = require("../models/productPriceModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const Zone = require("../models/zoneModel");

// get productprice

exports.getProductPrice = catchAsyncErrors(async (req, res) => {
  try {
    const productprice = await ProductPrice.find();

    res.status(200).json({
      success: true,
      productprice,
    });
  } catch (error) {}
});

exports.getProductPriceByProductId = catchAsyncErrors(async (req, res) => {
  try {
    const productprices = await ProductPrice.find({
      productId: req.params.productid,
    });

    res.status(200).json({
      success: true,
      productprices,
    });
  } catch (error) {}
});

//update category

exports.UpdateProductPrice = catchAsyncErrors(async (req, res, next) => {
  try {
    let productprice = await ProductPrice.findById(req.params.id);
    if (!productprice) {
      return res.status(500).json({
        success: false,
        message: "productprice not found",
      });
    }
    productprice = await ProductPrice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      productprice,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});

exports.getProductPriceByZoneId = catchAsyncErrors(async (req, res) => {
  try {
    const productprice = await ProductPrice.find({
      zoneId: req.params.zoneid,
    }).populate("productId");

    res.status(200).json({
      success: true,
      productprice,
    });
  } catch (error) {}
});

exports.productWithPriceAll = catchAsyncErrors(async (req, res) => {
  try {
    const productprices = await ProductPrice.find();
    for (let index = 0; index < productprices.length; index++) {
      const productpriceid = productprices[index]._id;
      let productprice = await ProductPrice.findByIdAndUpdate(
        productpriceid,
        { cartquantity: 0 },
        {
          new: true,
          useFindAndModify: false,
          runValidators: true,
        }
      );
      console.log(productprice);
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error,
    });
    res.status(400).json({
      success: false,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

const Category = require("../models/categoryModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


//Get Category

exports.getAllcategory = catchAsyncErrors(async (req, res) => {
    const category = await Category.find();
  
    res.status(200).json({
      success: true,
      category,
    });
  });

  
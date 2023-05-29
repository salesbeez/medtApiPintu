const categoryTag = require("../models/categoryTagModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// create categoryTag
exports.createcategoryTag = catchAsyncErrors(async (req, res, next) => {
  try {  

    const categorytag = await categoryTag.create(req.body);
    res.status(201).json({
      success: true,
      categorytag,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(400).json({
      success: false,      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});

// GetAll categoryTag
exports.getAllcategoryTag = catchAsyncErrors(async (req, res) => {
  try {
    const categorytag = await categoryTag.find();
    if (!categorytag) {
      return res.status(500).json({
        success: false,
        message: "categorytag not found",
      });
    }
    res.status(200).json({
      success: true,
      categorytag,
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

exports.getcategoryTagbycatId = catchAsyncErrors(async (req, res) => {
  try {
    const categorytag = await categoryTag.find({
      categoryid: req.params.catid,
    });
    res.status(200).json({
      success: true,
      categorytag,
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

//update categoryTag

exports.UpdatecategoryTag = catchAsyncErrors(async (req, res, next) => {
  try {
    let categorytag = await categoryTag.findById(req.params.id);
    if (!categorytag) {
      return res.status(500).json({
        success: false,
        message: "categorytag not found",
      });
    }
    categorytag = await categoryTag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      categorytag,
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

//Delete categorytag

exports.deletecategoryTag = catchAsyncErrors(async (req, res, next) => {
  try {
    const categorytag = await categoryTag.findById(req.params.id);

    if (!categorytag) {
      return res.status(500).json({
        success: false,
        message: "categorytag not found",
      });
    }
  
    await categorytag.remove();
    res.status(200).json({
      success: true,
      message: "categorytag Delete Successfully",
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

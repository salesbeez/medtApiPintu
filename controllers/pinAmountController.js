const PinAmount = require("../models/pinAmountModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const { Console } = require("console");

// create pinamount
exports.createPinAmount = catchAsyncErrors(async (req, res, next) => {
  try {
    const pinamounts = await PinAmount.create(req.body);
     
    res.status(201).json({
      success: true,
      pinamounts,
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


//Get pinAmount

exports.getAllPinAmount = catchAsyncErrors(async (req, res) => {
  try {
    const pinamount = await PinAmount.find();
    res.status(200).json({
      success: true,
      pinamount,
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
exports.getAllPinAmountinone = catchAsyncErrors(async (req, res) => {
  try {
    const pinamount = await PinAmount.find();
    res.status(200).json({
      success: true,
      pinamount,
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

exports.Getzoneid = catchAsyncErrors(async (req, res, next) => {
  try {
    let pinamount = await PinAmount.findOne({ pincode: req.params.pincode });
    if (!pinamount) {
      return res.status(500).json({
        success: false,
        message: "pinamount not found",
      });
    }
    res.status(200).json({
      success: true,
      pinamount,
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

//update PinAmount

exports.UpdatePinAmount = catchAsyncErrors(async (req, res, next) => {
  try {
    let pinamount = await PinAmount.findById(req.params.id);
    if (!pinamount) {
      return res.status(500).json({
        success: false,
        message: "PinAmount not found",
      });
    }
    pinamount = await PinAmount.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      pinamount,
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

//Delete Tag

exports.deletePinAmount = catchAsyncErrors(async (req, res, next) => {
  try {
    const pinamount = await PinAmount.findById(req.params.id);

    if (!pinamount) {
      return res.status(500).json({
        success: false,
        message: "PinAmount not found",
      });
    }

    await pinamount.remove();
    res.status(200).json({
      success: true,
      message: "PinAmount Delete Successfully",
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

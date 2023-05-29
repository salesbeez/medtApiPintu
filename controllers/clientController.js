const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Client = require("../models/clientModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const { sendClientToken } = require("../utils/jwtToken");

//post
exports.registerClient = catchAsyncErrors(async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({
      success: true,
      client,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

// Create Mobile
exports.loginmobileClient = catchAsyncErrors(async (req, res, next) => {
  try {
    const client = await Client.findOne({ mobile: req.body.mobile }); //leftside comes from Client model
    if (!client) {
      return res.status(200).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      name: client.name,
      email: client.email,
      clientid: client._id,
      mobile: client.mobile,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
  
});

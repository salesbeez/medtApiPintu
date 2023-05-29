const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Prescription = require("../models/prescriptionModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const { sendClientToken } = require("../utils/jwtToken");

// post UploadImage

exports.UploadImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const mobileimage = await cloudinary.v2.uploader.upload(
      req.body.prescriptionImg,
      {
        folder: "Prescription/MobileImage",
        width: 200,
        height: 200,
        crop: "scale",
      }
    );
    req.body.prescriptionImage = mobileimage.secure_url
    const prescription = await Prescription.create(req.body);
    res.status(201).json({
        success: true,
        prescription,
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



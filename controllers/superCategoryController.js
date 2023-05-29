const Supercategory = require("../models/superCategoryModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// create superCategory

exports.createsuperCategory = async (req, res, next) => {
  try {
    const supercategory = await Supercategory.create(req.body);
    res.status(201).json({
      success: true,
      supercategory,
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
};

//Get  superCategory
exports.getAllsupercategory = async (req, res) => {
  try {
    const supercategory = await Supercategory.find();
    res.status(200).json({
      success: true,
      supercategory,
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
};

//update supercategory
exports.getSupercategorybyname = async (req, res, next) => {
  try {
    let supercategory = await Supercategory.findOne({ name: req.params.name });

    if (!supercategory) {
      return res.status(500).json({
        success: false,
        message: "Supercategory not found",
      });
    }
    return res.status(200).json({
      success: true,
      supercategory,
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
};

exports.getsupercategorynames = catchAsyncErrors(async (req, res) => {
  const supercategory = await supercategory.findOne({ name: req.params.name });

  res.status(200).json({
    success: true,
    supercategory,
  });
});

exports.UpdateSupercategory = async (req, res, next) => {
  try {
    let supercategory = await Supercategory.findById(req.params.id);
    if (!supercategory) {
      return res.status(500).json({
        success: false,
        message: "Supercategory not found",
      });
    }
    supercategory = await Supercategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      supercategory,
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
};

//Delete Supercategory

exports.deleteSupercategory = async (req, res, next) => {
  try {
    const supercategory = await Supercategory.findById(req.params.id);

    if (!supercategory) {
      return res.status(500).json({
        success: false,
        message: "Supercategory not found",
      });
    }

    await supercategory.remove();
    res.status(200).json({
      success: true,
      message: "Supercategory Delete Successfully",
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
};

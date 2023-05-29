const Category = require("../models/categoryModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
// create Category
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  try {

    const category = await Category.create(req.body);

    res.status(201).json({
      success: true,
      category,
      
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

exports.Uploadthumbnail = catchAsyncErrors(async (req, res, next) => {
  try {
    const thumbnail = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
      folder: "Category/Thumbnails",
      width: 200,
      crop: "scale",
    });

    const thumbnails = {
      public_id: thumbnail.url.slice(60, 71),
      url: thumbnail.secure_url,
    };

    res.status(200).json({
      success: true,
      thumbnails,
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

exports.Uploaddesktopicon = catchAsyncErrors(async (req, res, next) => {
  try {
    const desktopicon = await cloudinary.v2.uploader.upload(
      req.body.desktopicon,
      {
        folder: "Category/Desktop",
        width: 80,
        crop: "scale",
      }
    );

    const Desktop = {
      public_id: desktopicon.url.slice(60, 71),
      url: desktopicon.secure_url,
    };

    res.status(200).json({
      success: true,
      Desktop,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error.massage,
    });
  }
});

exports.Uploadicon = catchAsyncErrors(async (req, res, next) => {
  try {
    const icon = await cloudinary.v2.uploader.upload(
      req.body.icon,
      {
        folder: "Category/Icons",
        width: 45,
        crop: "scale",
      }
    );

    const icons = {
      public_id: icon.url.slice(60, 71),
      url: icon.secure_url,
    };
    
    res.status(200).json({
      success: true,
      icons,
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

exports.Uploadbanner = catchAsyncErrors(async (req, res, next) => {
  try {
    const banner = await cloudinary.v2.uploader.upload(req.body.banners, {
      folder: "Category/Banner",
      width: 1680,
      crop: "scale",
    });

    const banners = {
      public_id: banner.url.slice(60, 71),
      url: banner.secure_url,
    };

    res.status(200).json({
      success: true,
      banners,
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

exports.Updatedesktopicon = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(500).json({
        success: false,
        message: "Category  not found",
      });
    }
    const desktopicon = await cloudinary.v2.uploader.upload(
      req.body.desktopicon[0],
      {
        folder: "Category/Desktop",
        width: 80,
        crop: "scale",
      }
    );

    req.body.desktopicon = {
      public_id: desktopicon.url.slice(60, 71),
      url: desktopicon.secure_url,
    };
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      category,
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

exports.Updatethumbnail = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(500).json({
        success: false,
        message: "Category  not found",
      });
    }
    const thumbnail = await cloudinary.v2.uploader.upload(
      req.body.thumbnail[0],
      {
        folder: "Category/Thumbnails",
        width: 200,
        crop: "scale",
      }
    );

    req.body.thumbnail = {
      public_id: thumbnail.url.slice(60, 71),
      url: thumbnail.secure_url,
    };

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      category,
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

exports.Updateicon = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(500).json({
        success: false,
        message: "Category  not found",
      });
    }
    const icon = await cloudinary.v2.uploader.upload(req.body.icon[0], {
      folder: "Category/Icons",
      width: 45,
      crop: "scale",
    });

    req.body.icon = {
      public_id: icon.url.slice(60, 71),
      url: icon.secure_url,
    };

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      category,
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

exports.Updatebanners = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(500).json({
        success: false,
        message: "Category  not found",
      });
    }
    const banners = await cloudinary.v2.uploader.upload(req.body.banners[0], {
      folder: "Category/Banner",
      width: 1680,
      crop: "scale",
    });

    req.body.banners = {
      public_id: banners.url.slice(60, 71),
      url: banners.secure_url,
    };

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      category,
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

//create thumbnail

//Get Category

exports.getAllcategory = catchAsyncErrors(async (req, res) => {
  try {
    const category = await Category.find();

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {}
});

exports.getAllcategorybySupercategy = catchAsyncErrors(async (req, res) => {
  const category = await Category.find({ supercategoryid: req.params.id });

  res.status(200).json({
    success: true,
    category,
  });
});

exports.getcategorybyslugurl = catchAsyncErrors(async (req, res) => {
  const category = await Category.findOne({ slugUrl: req.params.slugurl });

  res.status(200).json({
    success: true,
    category,
  });
});

//update category

exports.UpdateCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(500).json({
        success: false,
        message: "category not found",
      });
    }
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      category,
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

//Delete category

exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(500).json({
        success: false,
        message: "Category not found",
      });
    }

    await category.remove();
    res.status(200).json({
      success: true,
      message: "Category Delete Successfully",
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

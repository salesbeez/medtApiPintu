const Brand = require("../models/brandModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// create Brand
exports.createBrand = async (req, res, next) => {
  try {
    const brands = await Brand.create(req.body);
    
    res.status(201).json({
      success: true,
      brands,
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

exports.getBrandbyname = catchAsyncErrors(async (req, res) => {
  const brand = await Brand.findOne({ name: req.params.name });

  res.status(200).json({
    success: true,
    brand,
  });
});

//Get  Brand
exports.getAllBrand = async (req, res) => {
  const brand = await Brand.find();

  res.status(200).json({
    success: true,
    brand,
  });
};

exports.Updatethumbnail = catchAsyncErrors(async (req, res, next) => {
  let brand = await Brand.findById(req.params.id);

  if (!brand) {
    return res.status(500).json({
      success: false,
      message: "Brand  not found",
    });
  }
  const thumbnail = await cloudinary.v2.uploader.upload(req.body.thumbnail[0], {
    folder: "Brand/Thumbnails",
    width: 150,
    crop: "scale",
  });

  req.body.thumbnail = {
    public_id: thumbnail.url.slice(60, 71),
    url: thumbnail.secure_url,
  };

  brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    brand,
  });
});

exports.Updateicon = catchAsyncErrors(async (req, res, next) => {
  let brand = await Brand.findById(req.params.id);

  if (!brand) {
    return res.status(500).json({
      success: false,
      message: "Brand  not found",
    });
  }
  const icon = await cloudinary.v2.uploader.upload(req.body.icon[0], {
    folder: "Brand/Icons",
    width: 150,
    crop: "scale",
  });

  req.body.icon = {
    public_id: icon.url.slice(60, 71),
    url: icon.secure_url,
  };

  brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    brand,
  });
});

//update Brand

exports.UpdateBrand = async (req, res, next) => {
  let brand = await Brand.findById(req.params.id);
  if (!brand) {
    return res.status(500).json({
      success: false,
      message: "Brand not found",
    });
  }
  brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    brand,
  });
};

exports.UpdateAllBrandswithSlugurl = async (req, res, next) => {

  let brands = await Brand.find();
   const updateBrands = await brands.map((brand) => {
    let brandid = brand._id;
    let brandname = brand.name;
    let slugUrl = brandname.trim().toLowerCase().replace(" ", "-")
    .replace(/[.*+&?^ $@#%^!{}()|[\]\\]/g, "-")
    .replace("---", "-")
    .replace("----", "-")
    .replace("--", "-");
    brand.slugUrl = slugUrl;


    
    let Mybrand = Brand.findByIdAndUpdate(brandid, brand, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    
  })
  res.status(200).json({
    success: true,
    brands,
  });
};




//Delete Brand

exports.deleteBrand = async (req, res, next) => {

  const brand = await Brand.findById(req.params.id);

  if (!brand) {
    return res.status(500).json({
      success: false,
      message: "Brand not found",
    });
  }

  await brand.remove();
  res.status(200).json({
    success: true,
    message: "Brand Delete Successfully",
  });
};

// upload
exports.Uploadicon = catchAsyncErrors(async (req, res, next) => {
  try {

    const icon = await cloudinary.v2.uploader.upload(
      req.body.icon,
      {
        folder: "Brand/Icons",
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

exports.Uploadthumbnail = catchAsyncErrors(async (req, res, next) => {
  try {

    const thumbnail = await cloudinary.v2.uploader.upload(
      req.body.thumbnail,
      {
        folder: "Brand/Thumbnails",
        width: 200,
        crop: "scale",
      }
    );

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


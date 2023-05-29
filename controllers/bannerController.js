const Banner = require("../models/bannerModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");



// create Banner
exports.createBanner =catchAsyncErrors( async (req, res, next)=>{
  try {
    const banner = await Banner.create(req.body);
    res.status(201).json({
      success:true, 
      banner
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

exports.Getbannerbyid = catchAsyncErrors(async (req, res, next) => {
  try {
    let banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(500).json({
        success: false,
        message: "Banner not found",
      });
    }
    res.status(200).json({
      success: true,
      banner,
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

//Update websiteBanner

exports.UpdatewebsiteBanner = catchAsyncErrors(async (req, res, next)=>{
  try {
    let banner = await Banner.findById(req.params.id);
    
      if(!banner)
      {
         return res.status(500).json({
              success:false,
              message: "Slider  not found"
          });
      }
      const websiteBanner = await cloudinary.v2.uploader.upload(req.body.websiteBanner[0], {
        folder: "Banner/banner",
        width: 150,
        crop: "scale",
      });
      req.body.websiteBanner = {
        public_id: websiteBanner.url.slice(60, 71 ),
        url: websiteBanner.secure_url,
      };
      banner = await  Banner.findByIdAndUpdate(req.params.id, req.body,
          { 
              new:true, 
              useFindAndModify:false, 
              runValidators:true
          });
          res.status(200).json({
            success:true, 
            banner
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

 //Update mobileBanner

exports.UpdatemobileBanner = catchAsyncErrors(async (req, res, next)=>{
  try {
    
    let banner = await Banner.findById(req.params.id);
    
      if(!banner)
      {
         return res.status(500).json({
              success:false,
              message: "Banner  not found"
          });
      }
      const mobileBanner = await cloudinary.v2.uploader.upload(req.body.mobileBanner[0], {
        folder: "Banner/mobilebanner",
        width: 150,
        crop: "scale",
      });
      req.body.mobileBanner = {
        public_id: mobileBanner.url.slice(60, 71 ),
        url: mobileBanner.secure_url,
      };
      banner = await  Banner.findByIdAndUpdate(req.params.id, req.body,
          { 
              new:true, 
              useFindAndModify:false, 
              runValidators:true
          });
          res.status(200).json({
            success:true, 
            banner
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

 
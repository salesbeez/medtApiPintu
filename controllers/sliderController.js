const Slider = require("../models/sliderModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");



// create Slider
exports.createSlider =catchAsyncErrors( async (req, res, next)=>{
  try {
    const slider = await Slider.create(req.body);
    res.status(201).json({
      success:true, 
      slider
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



exports.Getsliderbyid = catchAsyncErrors(async (req, res, next) => {
  try {
    let slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res.status(500).json({
        success: false,
        message: "Slider not found",
      });
    }
    res.status(200).json({
      success: true,
      slider,
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
//Update websiteSlider

exports.UpdatewebsiteSlider = catchAsyncErrors(async (req, res, next)=>{
  try {
    
    let slider = await Slider.findById(req.params.id);
    
      if(!slider)
      {
         return res.status(500).json({
              success:false,
              message: "Slider  not found"
          });
      }
      const websiteSlider = await cloudinary.v2.uploader.upload(req.body.websiteSlider[0], {
        folder: "Slider/slider",
        width: 150,
        crop: "scale",
      });
      
      req.body.websiteSlider = {
        public_id: websiteSlider.url.slice(60, 71 ),
        url: websiteSlider.secure_url,
      };
      slider = await  Slider.findByIdAndUpdate(req.params.id, req.body,
          { 
              new:true, 
              useFindAndModify:false, 
              runValidators:true
          });
          res.status(200).json({
            success:true, 
            slider
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

 //Update mobileSlider

exports.UpdatemobileSlider = catchAsyncErrors(async (req, res, next)=>{
try {
  let slider = await Slider.findById(req.params.id);
    
  if(!slider)
  {
     return res.status(500).json({
          success:false,
          message: "Slider  not found"
      });
  }
  const mobileSlider = await cloudinary.v2.uploader.upload(req.body.mobileSlider[0], {
    folder: "Slider/mobileslider",
    width: 150,
    crop: "scale",
  });
  
 
  req.body.mobileSlider = {
    public_id: mobileSlider.url.slice(60, 71 ),
    url: mobileSlider.secure_url,
  };
  slider = await  Slider.findByIdAndUpdate(req.params.id, req.body,
      { 
          new:true, 
          useFindAndModify:false, 
          runValidators:true
      });
      res.status(200).json({
        success:true, 
        slider
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

 
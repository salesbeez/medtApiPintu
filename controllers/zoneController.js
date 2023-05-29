const Zone = require("../models/zoneModel");
const Productprice = require("../models/productPriceModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


// create zone
exports.createZone = catchAsyncErrors(async (req, res, next)=>{
    try {

        const zone = await Zone.create(req.body);

        res.status(201).json({
        success:true, 
        zone
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


// Get Zone

exports.getAllzone = catchAsyncErrors(async(req, res)=>{
    try {
        const zone = await Zone.find(); 
        res.status(200).json({
            success:true, 
            zone
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

//update Zone

exports.UpdateZone = catchAsyncErrors(async (req, res,next)=>{
    try {
        let zone = await Zone.findById(req.params.id);
    if(!zone)
    {
       return res.status(500).json({
            success:false,
            message: "Zone not found"
        });
    }
    zone = await  Zone.findByIdAndUpdate(req.params.id, req.body,
    { 
        new:true, 
        useFindAndModify:false, 
        runValidators:true
    }); 
    res.status(200).json({
        success:true, 
        zone
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


//Delete Zone

exports.deleteZone =catchAsyncErrors(async(req,res,next)=>{
      try {
    //     const zone = await Zone.findById(req.params.Zoneid);

    // if(!zone){
    //     return res.status(500).json({
    //         success:false,
    //         message:"Zone not found"
    //     })
    // }
    await Productprice.deleteMany({zoneId : req.params.Zoneid})

    // await zone.remove();
    res.status(200).json({
        success:true,
        message:"Zone Delete Successfully"
    })
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

const universalTag = require("../models/universalTagModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// create universalTag
exports.createuniversalTag = catchAsyncErrors(async (req, res, next)=>{
    try {
        const universaltag = await universalTag.create(req.body); 
        res.status(201).json({
            success:true, 
            universaltag
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
})

// GetAll universalTag
exports.getAlluniversalTag = catchAsyncErrors(async(req, res)=>{
    try {
        const universaltag = await universalTag.find(); 
        res.status(200).json({
            success:true, 
            universaltag
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

//update universalTag

exports.UpdateuniversalTag = catchAsyncErrors(async (req, res,next)=>{
    try {
        let universaltag = await universalTag.findById(req.params.id);
        if(!universaltag)
        {
           return res.status(500).json({
                success:false,
                message: "universaltag not found"
            });
        }
        universaltag = await  universalTag.findByIdAndUpdate(req.params.id, req.body,
        { 
            new:true, 
            useFindAndModify:false, 
            runValidators:true
        });
        res.status(200).json({
            success:true, 
            universaltag
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


//Delete universaltag

exports.deleteuniversalTag = catchAsyncErrors(async(req,res,next)=>{
try {
    const universaltag = await universalTag.findById(req.params.id);
    
    if(!universaltag){
        return res.status(500).json({
            success:false,
            message:"universalTag not found"
        })
    }

    await universaltag.remove();
    res.status(200).json({
        success:true,
        message:"universalTag Delete Successfully"
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
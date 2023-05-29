const Disease = require("../models/diseaseModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// create Disease
exports.createDisease = async (req, res, next)=>{
    try {
        const disease = await Disease.create(req.body);
        res.status(201).json({
          success: true,
          disease,
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
}

//Get  Disease
exports.getAllDisease = async(req, res)=>{
    try {
        const disease = await Disease.find(); 
        res.status(200).json({
            success:true, 
            disease
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

//update Disease

exports.UpdateDisease = async (req, res,next)=>{
    try {
        let disease  = await Disease.findById(req.params.id);
        if(!disease)
        {
           return res.status(500).json({
                success:false,
                message: "Disease not found"
            });
        }
        disease = await  Disease.findByIdAndUpdate(req.params.id, req.body,
        { 
            new:true, 
            useFindAndModify:false, 
            runValidators:true
        });  
        res.status(200).json({
            success:true, 
            disease
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


//Delete Disease

exports.deleteDisease = async(req,res,next)=>{
    try {
        const disease = await Disease.findById(req.params.id);

        if(!disease){
            return res.status(500).json({
                success:false,
                message:"Disease not found"
            })
        }
    
        await disease.remove();
        res.status(200).json({
            success:true,
            message:"Disease Delete Successfully"
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
};
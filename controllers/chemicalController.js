const Chemical = require("../models/chemicalModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


// create chemical
exports.createchemical =catchAsyncErrors( async (req, res, next)=>{
    try {
        const chemical = await Chemical.create(req.body);
        res.status(201).json({
            success:true, 
            chemical
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

//Get chemical
exports.getAllchemical =catchAsyncErrors( async(req, res)=>{
    try {
        const chemical = await Chemical.find(); 
        res.status(200).json({
            success:true, 
            chemical
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

//update chemical

exports.UpdateChemical =catchAsyncErrors( async (req, res,next)=>{
    try {
        let chemical = await Chemical.findById(req.params.id);
        if(!chemical)
        {
           return res.status(500).json({
                success:false,
                message: "Chemical not found"
            });
        }
        chemical = await  Chemical.findByIdAndUpdate(req.params.id, req.body,
        { 
            new:true, 
            useFindAndModify:false, 
            runValidators:true
        });
        res.status(200).json({
            success:true, 
            chemical
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


//Delete Chemical

exports.deleteChemical =catchAsyncErrors( async(req,res,next)=>{
    try {
        const chemical = await Chemical.findById(req.params.id);
        if(!chemical){
            return res.status(500).json({
                success:false,
                message:"Chemical not found"
            })
        }
    
        await chemical.remove();
        res.status(200).json({
            success:true,
            message:"Chemical Delete Successfully"
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
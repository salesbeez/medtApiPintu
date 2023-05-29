const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Address = require("../models/addressModel");
const sendEmail = require("../utils/sendEmail");

const crypto = require("crypto");

// Create Address -- Admin
exports.createAddress = catchAsyncErrors(async (req, res, next) => {
 
try {
  const address = await Address.create(req.body);

  res.status(201).json({
    success: true,
    address,
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

  // exports.createAddress= async (req, res, next)=>{
  //   try {
  //     const address = await Address.create(req.body);
  //     res.status(201).json({
  //       success:true, 
  //       address
  //   });
  //   } catch (error) {
   
      
  //   }
  // }

  // Get All Addresses
exports.getAllAddresses = catchAsyncErrors(async (req, res, next) => {
 
    const addresses = await Address.find();
  
    res.status(200).json({
      success: true,
      addresses,
    });
  });
  
  // Get All Addresses By Client Id
  exports.getAllAddressesByClient = catchAsyncErrors(async (req, res, next) => {
    
    const addresses = await Address.find({ clientId: req.params.clientid });
  
    res.status(200).json({
      success: true,
      addresses,
      
    });
  });


  exports.addressDelete = catchAsyncErrors(async (req, res, next) => {

    try {
      let address = await Address.findById(req.params.addressid);

      if (!address) {
        return res.status(500).json({
          success: false,
          message: "Address not found",
        });
      }
      await address.remove()
        res.status(200).json({
        success: true,
        
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
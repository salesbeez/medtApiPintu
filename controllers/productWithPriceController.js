const Product = require("../models/productModel");
const Productprice = require("../models/productPriceModel");
const Productwithprice = require("../models/productWithPriceModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const Zone = require("../models/zoneModel");

const cloudinary = require("cloudinary");

exports.createProductWithPrice = catchAsyncErrors(async (req, res, next) => {
    try {
  
  
      const productwithprice = await Productwithprice.create(req.body);
  
      res.status(201).json({
        success: true,
        productwithprice,
        
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

exports.createProductsWithPricethreetable = catchAsyncErrors(async (req, res, next) => {

    try {
  
      const product = await Product.create(req.body);
      
      
   
      if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });}
        else
        {
          req.body.productId = product._id;
      
          let ZoneArray = await Zone.find();
          let ZoneId = ZoneArray[0]._id;
          req.body.zoneId = ZoneId;
          
          const productprice = await Productprice.create(req.body);
          //const productwithprice = await Productwithprice.create(req.body);
          req.body.status = false;
          req.body.hot = false;
          req.body.stocks = 0;
      
          for (let i = 1; i < ZoneArray.length; i++) {
            ZoneId = ZoneArray[i]._id;
            req.body.zoneId = ZoneId;
            const productprice = await Productprice.create(req.body);
          }
      }
      
      res.status(201).json({
        success: true,
        product,
        message: "Product created",
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        message: "Product not created abc",
        error:error,
        error:error._message,
        
      });
    }
  });

//get

exports.getProductWithPrice = catchAsyncErrors(async (req, res) => {
    try {
      
      const productwithprices = await Productwithprice.find();
  
      res.status(200).json({
        success: true,
        productwithprices,
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
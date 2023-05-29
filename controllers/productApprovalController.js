const ProductApproval = require("../models/productApprovalModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


// create ProductApproval
exports.createProductApproval =catchAsyncErrors( async (req, res, next)=>{
    try {
        const productapproval = await ProductApproval.create(req.body);
        res.status(201).json({
            success:true, 
            productapproval
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
//Get All ProductApproval
exports.getAllProductApproval = catchAsyncErrors(async(req, res)=>{
    try {
        const productapproval = await ProductApproval.find(); 
        res.status(200).json({
            success:true, 
            productapproval
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


//update ProductApproval

exports.UpdateProductApproval =catchAsyncErrors( async (req, res,next)=>{
    try {
        let productapproval = await ProductApproval.findById(req.params.id);
    if(!productapproval)
    {
       return res.status(500).json({
            success:false,
            message: "ProductApproval not found"
        });
    }
    productapproval = await  ProductApproval.findByIdAndUpdate(req.params.id, req.body,
    { 
        new:true, 
        useFindAndModify:false, 
        runValidators:true
    }); 
    res.status(200).json({
        success:true, 
        productapproval
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


//Delete ProductApproval

exports.deleteProductApproval =catchAsyncErrors( async(req,res,next)=>{
try {
    const productapproval = await ProductApproval.findById(req.params.id);

    if(!productapproval){
        return res.status(500).json({
            success:false,
            message:"ProductApproval not found"
        })
    }

    await productapproval.remove();
    res.status(200).json({
        success:true,
        message:"ProductApproval Delete Successfully"
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

//get by id 

exports.GetproductApprovalbyid = catchAsyncErrors(async (req, res,next)=>{
    try {
        let productapproval = await ProductApproval.findById(req.params.id);
    if(!productapproval)
    {
       return res.status(500).json({
            success:false,
            message: "ProductApproval not found"
        });
    } 
    res.status(200).json({
        success:true, 
        productapproval
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

exports.GetproductapprovalbyNull = catchAsyncErrors(async (req, res,next)=>{
    try {
        let productApproval = await ProductApproval.find({productid:{$exists:false}, "supercategory":req.params.name});
    if(!productApproval)
    {
       return res.status(500).json({
            success:false,
            message: "ProductApproval not found"
        });
    } 
    res.status(200).json({
        success:true, 
        productApproval
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


exports.GetproductapprovalbyNotNull = catchAsyncErrors(async (req, res,next)=>{
    try {
        let productApproval = await ProductApproval.find({productid:{$exists:true}, "supercategory":req.params.name});
        if(!productApproval)
        {
           return res.status(500).json({
                success:false,
                message: "ProductApproval not found"
            });
        } 
        res.status(200).json({
            success:true, 
            productApproval
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


exports.getProductsApprovalbySuperCategoryname = catchAsyncErrors(async (req, res,next)=>{
    try {
        let productApproval = await ProductApproval.find({"supercategory":req.params.name});
    
        if(!productApproval)
        {
           return res.status(500).json({
                success:false,
                message: "product not found"
            });
        } 
        return res.status(200).json({
            success:true,
            productApproval
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


exports.GetproductbySlugUrl = catchAsyncErrors(async (req, res,next)=>{
    try {
        let productApproval = await ProductApproval.findOne({"slugUrl":req.params.slugurl, "supercategory":req.params.supercatname });
        if(!productApproval)
        {
           return res.status(500).json({
                success:false,
                message: "Product not found"
            });
        } 
        res.status(200).json({
            success:true, 
            productApproval
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


//Update thumbnail

exports.Updatethumbnail = catchAsyncErrors(async (req, res, next)=>{
try {
    let productapproval = await ProductApproval.findById(req.params.id);
    
      if(!productapproval)
      {
         return res.status(500).json({
              success:false,
              message: "ProductApproval  not found"
          });
      }
      const thumbnail = await cloudinary.v2.uploader.upload(req.body.thumbnail[0], {
        folder: "Products/Thumbnails",
        width: 150,
        crop: "scale",
      });
      
      req.body.thumbnail = {
        public_id: thumbnail.url.slice(60, 71 ),
        url: thumbnail.secure_url,
      };
      productapproval = await  ProductApproval.findByIdAndUpdate(req.params.id, req.body,
          { 
              new:true, 
              useFindAndModify:false, 
              runValidators:true
          });
          res.status(200).json({
            success:true, 
            productapproval
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

  exports.UpdateSliderImages = catchAsyncErrors(async (req, res, next) => {
    try {
        let productapproval = await ProductApproval.findById(req.params.id);
    let sliderImages = [];
    sliderImages = productapproval.sliderImages;
    if (!productapproval) {
      return res.status(500).json({
        success: false,
        message: "ProductApproval  not found",
      });
    }
  
    const NewImage = await cloudinary.v2.uploader.upload(req.body.newimage, {
      folder: "Products/SliderImages",
    });
  
    const NewImagedata = {
      public_id: NewImage.url.slice(60, 71),
      url: NewImage.secure_url,
    };
  
    req.body.sliderImages = [...sliderImages, NewImagedata];
  
    productapproval = await ProductApproval.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
        success: true,
        productapproval,
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

  exports.UploadSlider = catchAsyncErrors(async (req, res, next) => {
    try {
  
      const sliderImage = await cloudinary.v2.uploader.upload(
        req.body.sliderImages,
        {
          folder: "ProductsApproval/SliderImage",
          width: 600,
          crop: "scale",
        }
      );
      const sliderImages = {
        public_id: sliderImage.url.slice(60, 71),
        url: sliderImage.secure_url,
      };
      
      res.status(200).json({
        success: true,
        sliderImages,
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
  exports.UploadThumbnail = catchAsyncErrors(async (req, res, next) => {
    try {
  
      const thumbnail = await cloudinary.v2.uploader.upload(
        req.body.thumbnail,
        {
          folder: "ProductsApproval/Thumbnail",
          width: 150,
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
  exports.UploadIcon = catchAsyncErrors(async (req, res, next) => {
    try {
  
      const icon = await cloudinary.v2.uploader.upload(
        req.body.icon,
        {
          folder: "ProductsApproval/Icon",
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

  exports.UploadDesktopIcon = catchAsyncErrors(async (req, res, next) => {
    try {
  
      const desktopIcon = await cloudinary.v2.uploader.upload(
        req.body.desktopIcon,
        {
          folder: "ProductsApproval/DesktopIcon",
          width: 75,
          crop: "scale",
        }
      );
      const desktopIcons = {
        public_id: desktopIcon.url.slice(60, 71),
        url: desktopIcon.secure_url,
      };
      
      res.status(200).json({
        success: true,
        desktopIcons,
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
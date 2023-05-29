const Product = require("../models/productModel");
const Productprice = require("../models/productPriceModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const Zone = require("../models/zoneModel");



const cloudinary = require("cloudinary");
// create product

exports.createProducts = catchAsyncErrors(async (req, res, next) => {

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

//get product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  try {
    
    const product = await Product.find();

    res.status(200).json({
      success: true,
      product,
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

//Get  Product with price
exports.productwithprice = catchAsyncErrors(async (req, res) => {
  try {
    const product = await Product.find();
    const productprice = await Productprice.find().populate("productId");
    res.status(200).json({
      success: true,
      productprice,
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

exports.getProductpricebyzone = catchAsyncErrors(async (req, res) => {
  try {
    const productprice = await Productprice.find({zoneId: req.params.zoneid});
    res.status(200).json({
      success: true,
      productprice,
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

exports.getProductpricebyzoneid = catchAsyncErrors(async (req, res) => {
  try {
    const product = await Product.find();

    const productprice = await Productprice.findOne({zoneId: req.params.zoneid, productId: req.params.productid});
    res.status(200).json({
      success: true,
      productprice,
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

exports.Getproductbyid = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      product,
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


exports.getAllproductbycategory = catchAsyncErrors(async (req, res) => {
  const product = await Product.find({ categoryid: req.params.catId });

  res.status(200).json({
    success: true,
    product,
  });
});
exports.getAllDrugsBySuperCat = catchAsyncErrors(async (req, res) => {
  const product = await Product.find({ supercategoryid: req.params.drugssupercatid });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getAllDevicesBySuperCat = catchAsyncErrors(async (req, res) => {
  const product = await Product.find({ supercategoryid: req.params.devicesupercatid });

  res.status(200).json({
    success: true,
    product,
  });
});
exports.getAllProductsBySuperCat = catchAsyncErrors(async (req, res) => {
  const product = await Product.find({ supercategoryid: req.params.productssupercatid });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.productExistByName = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let product = await Product.findOne({ name: req.params.productname,});

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "new product name ",
      });
    } 
    const name = product.name;

    return res.status(200).json({
      success: true,
      message: " product name already exist",
      name,
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


exports.productExistBySlugUrl = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let product = await Product.findOne({ slugUrl: req.params.slugurl,});

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "new product slugUrl ",
      });
    } 
    const name = product.slugUrl;

    return res.status(200).json({
      success: true,
      message: " product slugUrl already exist",
      name,
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



exports.getAllproductbycategorySlugurl = catchAsyncErrors(async (req, res) => {
  const product = await Product.find({ categoryid: req.params.slugurl });
  res.status(200).json({
    success: true,
    product,
  });
});

exports.GetproductbySlugUrl = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.findOne({
      slugUrl: req.params.slugurl,
      supercategory: req.params.supercatname,
    });
    const productprice = await Productprice.find().populate("productId");
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      product,
      productprice,
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

exports.getProductsbyname = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.find({
      name: { $regex: `/${req.params.name}/` },
    });
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "product not found",
      });
    }
    return res.status(200).json({
      success: true,
      product,
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


exports.getProductsbySuperCategoryname = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let product = await Product.find({ supercategory: req.params.name });

      if (!product) {
        return res.status(500).json({
          success: false,
          message: "product not found",
        });
      }
      return res.status(200).json({
        success: true,
        product,
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
);

exports.Updateicon = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product  not found",
      });
    }
    const icon = await cloudinary.v2.uploader.upload(req.body.icon[0], {
      folder: "Product/Icons",
      width: 45,
      crop: "scale",
    });

    req.body.icon = {
      public_id: icon.url.slice(60, 71),
      url: icon.secure_url,
    };

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      product,
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


exports.Updatedesktopicon = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product  not found",
      });
    }
    const desktopicon = await cloudinary.v2.uploader.upload(
      req.body.desktopicon[0],
      {
        folder: "Product/Desktop",
        width: 75,
        crop: "scale",
      }
    );

    req.body.desktopicon = {
      public_id: desktopicon.url.slice(60, 71),
      url: desktopicon.secure_url,
    };
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      product,
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

//update Product

exports.Updateproduct = catchAsyncErrors(async (req, res, next) => {
  try {

    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    let productPrice = Productprice.findOne({productId:req.params.id})
    

    res.status(200).json({
      success: true,
      product,
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

exports.Updatethumbnail = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product  not found",
      });
    }
    const thumbnail = await cloudinary.v2.uploader.upload(
      req.body.thumbnail[0],
      {
        folder: "Product/Thumbnails",
        width: 150,
        crop: "scale",
      }
    );

    req.body.thumbnail = {
      public_id: thumbnail.url.slice(60, 71),
      url: thumbnail.secure_url,
    };
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      product,
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
        folder: "Product/Thumbnails",
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

exports.Uploadicons = catchAsyncErrors(async (req, res, next) => {
  try {
    const icon = await cloudinary.v2.uploader.upload(
      req.body.icon,
      {
        folder: "Product/Icons",
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



exports.Uploaddesktop = catchAsyncErrors(async (req, res, next) => {
  try {
    
    const desktopicon = await cloudinary.v2.uploader.upload(
      req.body.desktopicon,
      {
        folder: "Product/Desktop",
        width: 75,
        crop: "scale",
      }
    );

    const desktopicons = {
      public_id: desktopicon.url.slice(60, 71),
      url: desktopicon.secure_url,
    };
    
    res.status(200).json({
      success: true,
      desktopicons,
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

exports.Uploadbanner = catchAsyncErrors(async (req, res, next) => {
  try {
   
    const sliderImages = await cloudinary.v2.uploader.upload(
      req.body.sliderImages,
      {
        folder: "Product/SliderImages",
        width: 600,
        crop: "scale",
      }
    );

    const sliderImage = {
      public_id: sliderImages.url.slice(60, 71),
      url: sliderImages.secure_url,
    };
    res.status(200).json({
      success: true,
      sliderImage,
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
    let product = await Product.findById(req.params.id);
    let sliderImages = [];
    sliderImages = product.sliderImages;
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product  not found",
      });
    }

    const NewImage = await cloudinary.v2.uploader.upload(req.body.newimage, {
      folder: "Product/SliderImages",
    });

    const NewImagedata = {
      public_id: NewImage.url.slice(60, 71),
      url: NewImage.secure_url,
    };

    req.body.sliderImages = [...sliderImages, NewImagedata];

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      product,
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

exports.UploadTogethere = catchAsyncErrors(async (req, res, next) => {
  try {

    const thumbnail = await cloudinary.v2.uploader.upload(
      req.body.thumbnail,
      {
        folder: "Product/Thumbnails",
        width: 150,
        crop: "scale",
      }
    );

    const thumbnails = {
      public_id: thumbnail.url.slice(60, 71),
      url: thumbnail.secure_url,
    };
    const desktopicon = await cloudinary.v2.uploader.upload(
      req.body.desktopicon,
      {
        folder: "Product/Desktop",
        width: 75,
        crop: "scale",
      }
    );

    const desktopicons = {
      public_id: desktopicon.url.slice(60, 71),
      url: desktopicon.secure_url,
    };

    const icon = await cloudinary.v2.uploader.upload(
      req.body.icon,
      {
        folder: "Product/Icons",
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
      thumbnails,
      desktopicons,
      icons
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

//Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }
    const productpricesdeleted = await Productprice.deleteMany({productId : req.params.id});

    await product.remove();
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
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


exports.SlugUrlExist = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let product = await Product.findOne({ slugUrl: req.params.slugurl,  });

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "new product SlugUrl",
      });
    } 

    return res.status(200).json({
      success: true,
      message: " product SlugUrl already exist",
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

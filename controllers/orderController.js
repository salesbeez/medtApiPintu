const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create new Order
// exports.newOrder = catchAsyncErrors(async (req, res, next) => {
//   try {
  
//     const order = await Order.create(req.body);
//     res.status(201).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Order Not create"
//     });
//   }
// });
exports.newOrder =catchAsyncErrors( async (req, res, next)=>{
  try {
      const order = await Order.create(req.body);
      res.status(201).json({
          success:true, 
          order
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

//Get All Order
exports.getAllOrder = catchAsyncErrors(async(req, res)=>{
  try {
    const order = await Order.find();
    res.status(200).json({
      success:true, 
      order
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

exports.getOrderbyzoneid = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let order = await Order.find({ zoneid: req.params.id, orderStatus:req.params.orderStatus });

    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order not found",
      });
    } 
    return res.status(200).json({
      success: true,
      order,
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

exports.getOrderByClientId = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let order = await Order.find({ clientid: req.params.clientid });

    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order not found",
      });
    } 
    return res.status(200).json({
      success: true,
      order,
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

exports.getProductsbyorderid = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let order = await Order.findOne({ _id: req.params.id });
      let products = order.orderproducts;

    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order not found",
      });
    } 
    return res.status(200).json({
      success: true,
      products,
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

exports.getOrderebyClientid = catchAsyncErrors(
  async (req, res, next) => {
    try {
      let order = await Order.findOne({ clientid: req.params.clientid });
      let products = order.orderproducts;

    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order not found",
      });
    } 
    return res.status(200).json({
      success: true,
      products,
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

// get Single Order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
  
    if (!order) {
      return next(new ErrorHander("Order not found with this Id", 404));
    }
    res.status(200).json({
      success: true,
      order,
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

// get logged in user  Orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json({
      success: true,
      orders,
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

// get all Orders -- Admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  try {
    const orders = await Order.find();

    let totalAmount = 0;
  
    orders.forEach((order) => {
      totalAmount += order.totalPrice;
    });
    res.status(200).json({
      success: true,
      totalAmount,
      orders,
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


//Get All Order
exports.getAllOrder = catchAsyncErrors(async(req, res)=>{
  try {
    const order = await Order.find();
    res.status(200).json({
      success:true, 
      order
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
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    let order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order not found",
      });
    }
    order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      order,
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

// update Order Status -- Admin
// exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
//   try {
//     const order = await Order.findById(req.params.id);


//     if (!order) {
//       return next(new ErrorHander("Order not found with this Id", 404));
//     }

//     order = await Order.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       useFindAndModify: false,
//       runValidators: true,
//     });
//     res.status(200).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
   
//   }
// });

// async function updateStock(id, quantity) {
//   const product = await Product.findById(id);

//   product.Stock -= quantity;

//   await product.save({ validateBeforeSave: false });
// }

// delete Order -- Admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return next(new ErrorHander("Order not found with this Id", 404));
    }
  
    await order.remove();
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

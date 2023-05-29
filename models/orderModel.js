const mongoose = require("mongoose");
const { stringify } = require("querystring");

const orderSchema = new mongoose.Schema(
  {
    zoneid: {
      type: mongoose.Schema.ObjectId,
      ref: "ZoneId",
      // required: true,
    },

    clientid: {
     
      type: mongoose.Schema.ObjectId,
      ref: "User",
      // required: true,
    },
    clientname: {
      type: String,
    },
    clientEmail:
    {
      type:String,
      // required: true,
    },

    clientphone:String,

    totalAmount: {
      type: Number,
      // required: true,
      default: 0,
    },
    netPayable: {
      type: Number,
      // required: true,
      default: 0,
    },

    prescriptionImage: [
      {
        type: String,
      },
    ],

    orderproducts:[
      {
        categoryid: {
          type: mongoose.Schema.ObjectId,
          ref: "categoryid",
          // required: true,
        },
        catName: {
          type: String,
          // required: true,
        },
        productid: {
          type: mongoose.Schema.ObjectId,
          ref: "ItemId",
        },
        productName: {
          type: String,
          //  required: true,
        },
        qty: {
          type: Number,
          // required: true,
          default:1,
        },
        mrp: {
          type: Number,
          // required: true,
          default: 0,
        },
        price: {
          type: Number,
          // required: true,
          default: 0,
        },
        totalMrp: {
          type: Number,
          // required: true,
          default: 0,
        },
        totalPrice: {
          type: Number,
          // required: true,
          default: 0,
        },
        discount:{
          type: Number,
          // required: true,
          default: 0,
        },
        totalAmount: {
          type: Number,
          // required: true,
          default: 0,
        },
      
        packSize: {
          type: String,
          // required: true,
          default: 0,
        },
      
        image: {
          type: String,
          // required: true,
          default: 0,
        },
      
        brand: {
          type: String,
          // required: true,
          default:"Medt"
        },
        totalcashback:
        {
          type: Number,
          // required: true,
          default: 0,
        },
        cashbackstatus:{
            type: Boolean,
            default:false
        }
        
      
      }
    ],

    deliverCharge: {
      type: Number,
      // // required: true,
      default: 0,
    },
    saving: {
      type: Number,
      // // required: true,
      default: 0,
    },
    cashback: {
      type: Number,
      
      default: 0,
    },

    itemCount: {
      type: Number,
      // required: true,
      default: 0,
    },
    packCount: {
      type: Number,
      // required: true,
      default: 0,
    },

    orderStatus: {
      type: Number,
      default: 1,
    },
    statusText: {
      type: String,
      default: "Order Recieved",
    },

    // Shipping Information
    shippingInfo: {
      address: {
        type: String,
        // required: true,
      },
      city: {
        type: String,
        // required: true,
      },
      state: {
        type: String,
        // required: true,
        default:"Jh"
      },
      country: {
        type: String,
        default:"India"
      },
      pinCode: {
        type: Number,
        // required: true,
      },
      phoneNo: {
        type: Number,
        // required: true,
      },
    },

    // Payment Information
    paymentInfo: {
      id: {
        type: String,
        
      },
      mode: {
        type: String,
        
        default:"COD"
      },
      status: {
        type: String,
        
      },
      paidAt: Date,
    },

    // Delivery Information
    deliveryInfo: {
      deliveryManId: {
        type:String,
        
      },
      deliveryManName: {
        type: String,
      },
      deliveryManPhone: {
        type: Number,
      },
    },

    // Coupon Information
    couponInfo: {
      couponId: {
        type: String,
        // type: mongoose.Schema.ObjectId,
        // ref: "Coupon",
       
      },
      couponCode: {
        type: String,
      },
      couponTitle: {
        type: String,
      },
      couponDescription: {
        type: String,
      },
    },
    couponDis: {
      type: Number,
      // // required: true,
      default: 0,
    },

    expectedDelDate: Date,
    deliveredAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

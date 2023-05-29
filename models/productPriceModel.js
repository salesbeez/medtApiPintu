const mongoose = require("mongoose");

const productPriceSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    name: {
      type: String,
    },
    zoneId: {
      type: mongoose.Schema.ObjectId,
      ref: "Zone",
    },
    price: {
      type: Number,
      required: [true, "Please enter selling price"],
    },
    mrp: {
      type: Number,
      required: [true, "Please enter product mrp"],
    },
    stocks: {
      type: Number,
      default: 0,
    },
    stockToDeliver: {
      type: Number,
      default: 0,
    },
    cartquantity: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: true,
    },
    hot: {
      type: Boolean,
      default: false,
    },
    trending: {
      type: Boolean,
      default: false,
    },
    offers: {
      type: Boolean,
      default: false,
    },
    discounts: {
      type: Number,
      default: 0,
    },
    cashbackstatus: {
      type: Boolean,
      default: false,
    },
    couponcode: [
      {
        type: String,
      },
    ],
    placement: String,
    productScannerCode: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductPrice", productPriceSchema);

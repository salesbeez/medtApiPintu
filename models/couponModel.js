const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
  CouponName: {
    type: String,
  },
  Value: {
    type: Number,
  },
  Type: {
    type: String,
  },
  Times: {
    type: Number,
  },
  FDate: String,

  TDate: String,

  MaxDisc: {
    type: Number,
  },
  MinAmount: {
    type: Number,
  },
  PaymentType: {
    type: String,
  },
  Title: {
    type: String,
  },
  Description: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);

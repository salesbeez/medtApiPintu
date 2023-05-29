const mongoose = require("mongoose");

const pinAmountSchema = new mongoose.Schema({
  zone: {
    type: String,
    ref: "Zone",
    required: [true, "Please select zone"],
  },

  zoneid: {
    type: mongoose.Schema.ObjectId,
    ref: "Zone",
    required: [true, "Please select zone"],
  },

  city: {
    type: String,
    required: [true, "Please select city"],
  },

  pincode: {
    type: String,
    unique: true,
    required: [true, "Please enter pincode"],
  },

  area: {
    type: String,
    required: [true, "Please enter area"],
  },

  deliveryCharge1: {
    type: Number,
    // required: [true, "Please enter delivery charge1"],
  },

  amountRange1: {
    type: Number,
    // required: [true, "Please enter amount range1"],
  },

  deliveryCharge2: {
    type: Number,
    //  required: [true, "Please enter delivery charge2"],
  },

  amountRange2: {
    type: Number,
    // required: [true, "Please enter amount range2"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PinAmount", pinAmountSchema);

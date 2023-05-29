const mongoose = require("mongoose");

const chemicalSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Chemical already exist"],
    required: [true, "Please Enter chemical Name"],
    trim: true,
  },

  categoryid: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Please select  category"],
  },
 category:{
     type: String,
     required: [true, "Please Enter category Name"],
 },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Chemical", chemicalSchema);

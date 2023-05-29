const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Brand already exist"],
    required: [true, "Please Enter Brand Name"],
    trim: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  hot: {
    type: Boolean,
    default: false,
  },
  thumbnail: {
    public_id: String,
    url: String,
  },
  icon: {
    public_id: String,
    url: String,
  },
  slugUrl:String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Brand", brandSchema);

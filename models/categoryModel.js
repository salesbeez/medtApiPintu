const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please enter Category name"],
    maxLenght: [100, "Product name can not exeed 100 charector"],
    trim: true,
  },
  supercategoryid: {
    type: mongoose.Schema.ObjectId,
    //  required: [true, "supercategoryid Require"],
    ref: "Supercategory",
  },
  supercategory: {
    name: String,
    // required: [true, "Please enter supercategory name"]
  },
  metaTitle: {
    type: String,
  },
  metaKeywords: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  slugUrl: {
    type: String,
  },
  hot: {
    type: Boolean,
    default: false,
  },
  thumbnail: {
    // public_id: String,
    url: String,
  },
  icon: {
    public_id: String,
    url: String,
  },
  desktopicon: {
    public_id: String,
    url: String,
  },

  banners: [
    {
      public_id: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);

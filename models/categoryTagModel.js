const mongoose = require("mongoose");

const categoryTagSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter categoryTag name"],
      trim:true
    },
    supercategoryid: {
      type: mongoose.Schema.ObjectId,
      //  required: [true, "supercategoryid Require"],
      ref: "Supercategory"
    },
    supercategory:
    {
      name: String,
      // required: [true, "Please enter supercategory name"]
    },
    categoryid: {
        type: mongoose.Schema.ObjectId,
        //  required: [true, "categoryid Require"],
        ref: "category"
      },
      category:
      {
        name: String,
        // required: [true, "Please enter category name"]
      },
    createdAt:{
        type: Date,
        default: Date.now,
      }
});
module.exports = mongoose.model("CategoryTag", categoryTagSchema);
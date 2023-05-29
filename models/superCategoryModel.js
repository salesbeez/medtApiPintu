const mongoose = require("mongoose");

const superCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter SuperCategoryName name"],
      trim:true
    },
    createdAt:{
        type: Date,
        default: Date.now,
      }
});


module.exports = mongoose.model("Supercategory", superCategorySchema);

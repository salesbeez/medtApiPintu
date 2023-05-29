const mongoose = require("mongoose");

const universalTagSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter universalTag name"],
      trim:true
    },
    createdAt:{
        type: Date,
        default: Date.now,
      }
});
module.exports = mongoose.model("UniversalTag", universalTagSchema);
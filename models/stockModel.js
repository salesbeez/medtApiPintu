const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
{
  zoneId: {
    type: mongoose.Schema.ObjectId,
    ref:"Zone"
  },
  
      productid: {
        type: mongoose.Schema.ObjectId,
        ref:"Product",
      
      },
      productname: {
        type: String,
        //  required: true,
      },
      // productpriceid:{
      //   type: mongoose.Schema.ObjectId,
      //   ref:"ProductPrice",
      // },
    
      stock:{
       type: Number,
       required: true,
      },
      expiryDate:String,
      batchNo:String,
      placement:String,
      

},
{ timestamps: true }
);
module.exports = mongoose.model("Stock", stockSchema);
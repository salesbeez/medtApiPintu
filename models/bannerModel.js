const mongoose = require("mongoose");


const bannerSchema = new mongoose.Schema(
 {
    name: {
        type: String,
        unique: [true, "name already exist"],
        // required: [true, "Please enter drugs name"],
      },
    subtitle: {
        type: String,
      },
      
    title: {
        type: String,
      },
           
    url: {
        type: String,
      },

    websiteBanner: {
        public_id: String,
        url: String,
      },

      mobileBanner: {
        public_id: String,
        url: String,
      },
      zoneid: {
        // type: mongoose.Schema.ObjectId,
        // ref: "Zone"
      },
      categoryid: {
        // type: mongoose.Schema.ObjectId,
        // ref: "Category"
      },
      user: {
        type: String,
        default:"",
        // required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
 });

module.exports = mongoose.model("Banner", bannerSchema);
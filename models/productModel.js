const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "name already exist"],
      required: [true, "Please enter drugs name"],
    },
    shortname: {
      type: String,
      required: [true, "Please enter drugs name"],
    },
    
    categoryid: {
      type: mongoose.Schema.ObjectId,
       required: [true, "categoryid Require"],
      ref: "category"
    },
    category:
    {
      type: String,
      required: [true, "Please enter category name"]
    },
    supercategoryid: {
      type: mongoose.Schema.ObjectId,
      required: [true, "supercategoryid Require"],
      ref: "Supercategory"
    },
    supercategory:
    {
      type: String,
       required: [true, "Please enter supercategory"]
    },
    keywords: String,
    description: String,

    brand: {
      type: String,
      required: [true, "Please enter brand"],
    },
    packSize:String,
    type: Number,
    specifications:String,
    composition:String,
    otherDetails:String,
    productInfo: String,
    options: Number,
    countryOfOrigin:
    {
      type:String,
      default: "India"
    },
    uses:String,
    usesDirections:String,
    commonSideEffects:String,
    seriousSideEffects:String,
    warningPrecautions:String,
    synopsis:String,

    metaTitle:String,
    metaKeywords:String,
    metaDescription:String,
    slugUrl: {
      type: String,
      unique: [true, "Url already exist"],
    },
    hot: {
      type: Boolean,
      default: false,
    },
    trending: {
      type: Boolean,
      default: false,
    },

    generic:Boolean,

    sliderImages: [
      {
        public_id: String,
        url: String,
      },
    ],
    thumbnail: {
      public_id: String,
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
    categoryTag: String,
    universalTag: String,


    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews:[{

      name:{
        type:String,
       
      },
      rating:{
        type:Number,
      
      },
      comment:{
        type:String,
       
      }

    }],
    user: {
      type: String,
      default:"admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

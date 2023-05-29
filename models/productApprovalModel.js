const mongoose = require("mongoose");

const productApprovalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please enter drugs name"],
    },
    productid: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
      },
    categoryid: {
      type: mongoose.Schema.ObjectId,
      //  required: [true, "categoryid Require"],
      ref: "category"
    },
    category:
    {
      type: String,
      // required: [true, "Please enter category name"]
    },
    supercategoryid: {
      type: mongoose.Schema.ObjectId,
      //  required: [true, "supercategoryid Require"],
      ref: "Supercategory"
    },
    supercategory:
    {
      type: String,
      // required: [true, "Please enter supercategory"]
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
    
    price: {
        type: Number,
        required: [true, "Please enter selling price"],
      },
      mrp: {
        type: Number,
        required: [true, "Please enter product mrp"],
      },
      
      status: {
        type: Boolean,
        default: true,
      },
      offers: {
        type: Boolean,
        default: false,
      },
      discounts: {
        type: Number,
        default: 0,
      },
   
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
        //required:true
      },
      rating:{
        type:Number,
       // require:true
      },
      comment:{
        type:String,
       // require:true
      }
      
    }],
    user: {
      type: String,
      required: true,
    },
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductApproval", productApprovalSchema);

const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// require("dotenv").config();

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your  name"],
    },

    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      // validate: [validator.isEmail, "Please Enter a valid Email"],
    },

    mobile: {
      type: Number,
      required: [true, "Please enter your mobile number"],
      minLength: [10, "Please Enter a valid Mobile Number"],
      unique: true,
    },

    password: {
      type: String,
      default: "123456",
     
    },
    avatar: {
      type: String,
      default: "https://res.cloudinary.com/dh1fsseho/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669977353/Avatar/avatar2_z6yynb.jpg",
    },

    role: {
      type: String,
      default: "client",
    },
    walletBalance: {
      type: Number,
      default: 0,
    },
    coins: {
      type: Number,
      default: 0,
    },
    cashBacks: {
      type: Number,
      default: 0,
    },
    referalCode: {
      type: String,
    },
    block:{
      type: Boolean,
      default:false
    },
    currentAddress: {
      type: String,
    },
   
    currentPin: {
      type: String,
    },

    

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

clientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// // JWT TOKEN
clientSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password

clientSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// // Generating Password Reset Token
clientSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

//   // Hashing and adding resetPasswordToken to clientSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("Client", clientSchema);

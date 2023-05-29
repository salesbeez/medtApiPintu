const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Employee = require("../models/employeeModel");
const Client = require("../models/clientModel");
const Admin = require("../models/adminModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // const { userToken } = req.cookies;
  const userToken = req.body.userToken;

  if (!userToken) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(userToken, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

exports.isAuthenticatedAdmin = catchAsyncErrors(async (req, res, next) => {
  // const { userToken } = req.cookies;
  const userToken = req.body.userToken;

  if (!userToken) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(userToken, process.env.JWT_SECRET);

  req.user = await Admin.findById(decodedData.id);

  next();
});

exports.isAuthenticatedEmployee = catchAsyncErrors(async (req, res, next) => {
  // const { employeeToken } = req.cookies;

  const employeeToken = req.body.employeeToken;

  if (!employeeToken) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(employeeToken, process.env.JWT_SECRET);

  req.employee = await Employee.findById(decodedData.id);

  next();
});

exports.isAuthenticatedClient = catchAsyncErrors(async (req, res, next) => {
  // const { employeeToken } = req.cookies;

  const clientToken = req.body.clientToken;

  if (!clientToken) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(clientToken, process.env.JWT_SECRET);
  req.client = await Client.findById(decodedData.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};

// const facebookProfiles = [];

// const profileLookup = (name, property) => {
//   for (var i = 0; i < facebookProfiles.length; i++) {
//     if (facebookProfiles[i].name === name) {
//     }
//   }
// };

// if (typeof localStorage === "undefined" || localStorage === null) {
// var LocalStorage = require("node-localstorage").LocalStorage;
// localStorage = new LocalStorage("./scratch");
// }
// Create Token and saving in cookie

exports.sendUserToken = (user, statusCode, res) => {
    const userToken = user.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("userToken", userToken, options).json({
      success: true,
      user,
      userToken,
    });
  };
  
  exports.sendEmployeeToken = (employee, statusCode, res) => {
    const employeeToken = employee.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("employeeToken", employeeToken, options).json({
      success: true,
      employee,
      employeeToken,
    });
  };
  
  exports.sendClientToken = (client, statusCode, res) => {
    const clientToken = client.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("clientToken", clientToken, options).json({
      success: true,
      isClient: true,
      client,
      clientToken,
    });
  };
  
  exports.sendClientOtpToken = (client, statusCode, res) => {
    const otpToken = client.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("otpToken", clientToken, options).json({
      success: true,
      isClient: true,
      otpToken,
    });
  };
  
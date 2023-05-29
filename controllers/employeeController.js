const Employee = require("../models/employeeModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const crypto = require("crypto");




// create Employee

exports.createEmployee =catchAsyncErrors(async (req, res, next)=>{
    try {
      const employee = await Employee.create(req.body);
      res.status(201).json({
        success:true, 
        employee
    });
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error:error
      });
    }
  });
  exports.UploadAvatar = catchAsyncErrors(async (req, res, next) => {
    try {
      
      const avatar = await cloudinary.v2.uploader.upload(
        req.body.avatar,
        {
          folder: "Employee/Avatar",
          width: 45,
          crop: "scale",
        }
      );
  
      const avatars = {
        public_id: avatar.url.slice(60, 71),
        url: avatar.secure_url,
      };
      
      res.status(200).json({
        success: true,
        avatars,
      });
    } catch (error) {
       res.status(501).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(400).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(500).json({
            success: false,
            massage: error._message,
            error:error
          });
    }
  });

//Get Employee

exports.getAllEmployee =catchAsyncErrors(async(req, res)=>{
    try {
        const employee = await Employee.find(); 
        res.status(200).json({
            success:true, 
            employee
        }); 
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error:error
      });
     
    }  
});


exports.loginEmployee = catchAsyncErrors(async (req, res, next) => {
    
    try {
        const { email, password, role } = req.body;
    if (!email || !password) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
    const employee = await Employee.findOne({ email }).select("+password");
    if (!employee) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  const name = employee.name;
    const isPasswordMatched = await employee.comparePassword(password);
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
    const Roles = employee.roles;
    
    if(!Roles[role])
    {
        return next(new ErrorHander("Not Valid Role", 401));
       
    }
    const zoneid = employee.zoneid;
    res.status(201).json({
        success:true,
        name: name,
        email: email,
        zoneid: zoneid  
      });
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error:error
      });
    } 
  });


//update Employee

exports.UpdateEmployee = catchAsyncErrors( async (req, res,next)=>{
    try {
        let employee = await Employee.findById(req.params.id);
        if(!employee)
        {
           return res.status(500).json({
                success:false,
                message: "Employee not found"
            });
        }
        employee = await  Employee.findByIdAndUpdate(req.params.id, req.body,
        { 
            new:true, 
            useFindAndModify:false, 
            runValidators:true
        }); 
        res.status(200).json({
            success:true, 
            employee
        });
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error:error
      });
    }
});


//Delete Employee

exports.deleteEmployee =catchAsyncErrors(async(req,res,next)=>{
    try {
        const employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(500).json({
            success:false,
            message:"Employee not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"Employee Delete Successfully"
    }) 
    await employee.remove(); 
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error:error
      });
    
    }
});
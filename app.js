const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const compression = require("compression");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const multiparty = require("multiparty");

// var session = require("express-session");

const errorMiddleware = require("./middleware/error");

// const PORT = process.env.PORT || 4000;

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
  // app.use(express.static("super-admin/build"));
  // const path = require("path");
  // app.get("*", (req, res) =>{
  //   res.sendFile(path.resolve(__dirname, 'super-admin', 'build', 'index.html'));
  // })
}



app.use(express.json());
app.use(cookieParser());
app.use(compression({
  level:9,
  threshold:100 * 10,
  filter:(req,res)=>{
    if(req.headers["x-no-compression"]){
      return false
    }
    return compression.filter(req,res)
  }
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// app.get("/",(req, res) =>{
//   res.json("server start")
// });
//  app.listen(PORT, () => {
//   console.log(`server is running at port no ${PORT}`);
//  })
const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// app.use(cors());
// app.use(
//   session({
//     secret: "keyboard cat",
//     // resave: false,
//     // saveUninitialized: true,
//     // cookie: { secure: true },
//   })
// );

//Rotes Imports

const stock = require("./routes/stockRoute");
app.use("/api/v1",stock);

const address = require("./routes/addressRoute");
app.use("/api/v1",address);

const zone = require("./routes/zoneRoute");
app.use("/api/v1",zone);

const superCategory = require("./routes/superCategoryRoute");
app.use("/api/v1", superCategory);

const Category = require('./routes/categoryRoute');
app.use("/api/v1", Category);

const CategoryNew = require('./routes/categoryRouteNew');
app.use("/api/v2", CategoryNew);

const chemical = require('./routes/chemicalRoute');
app.use("/api/v1", chemical);

const universaltag = require('./routes/universalTagRoute')
app.use("/api/v1", universaltag);

const categorytag = require('./routes/categorytagRoute')
app.use("/api/v1", categorytag);

const productprice = require('./routes/productpriceRoute')
app.use("/api/v1",productprice)

const pinamount = require('./routes/pinAmountRoute');
app.use("/api/v1", pinamount);

const employee = require('./routes/employeeRoute');
app.use("/api/v1", employee);

const product = require("./routes/productRoute")
app.use("/api/v1",product);

// const productNew = require("./routes/productRoute")
// app.use("/api/v2",productNew);

const admin = require('./routes/adminRoutes');
app.use("/api/v1", admin);


const user = require('./routes/userRoute');
app.use("/api/v1", user);


const order = require("./routes/orderRoute");
app.use("/api/v1", order)

const orderItem = require("./routes/orderItemRoute");
app.use("/api/v1", orderItem)


const brand = require("./routes/brandRoute");
app.use("/api/v1", brand)

const disease  = require("./routes/diseaseRoute")
app.use("/api/v1", disease)

const productapproval = require("./routes/productApprovalRoute");
app.use("/api/v1", productapproval)


const slider = require("./routes/sliderRoute");
app.use("/api/v1", slider);

const banner = require("./routes/bannerRoute");
app.use("/api/v1", banner);

const client = require("./routes/clientRoutes");
app.use("/api/v1", client);

const prescription = require("./routes/prescriptionRoute");
app.use("/api/v1", prescription);

app.use(errorMiddleware);

module.exports = app;

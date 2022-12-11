const express = require("express");
const dotEnv = require("dotenv");
// first of all req.body showed undefined. solve this problem we use body parser
// body parser mainly handle json data.
const bodyParser = require("body-parser");
// to secure or authinticate our website backend using cookie parser middleware to set token between cookeis.
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("server start..");
});

app.use(bodyParser());
app.use(cookieParser());

app.use("/rest-api", authRoutes);

// fonfigure
dotEnv.config({
  path: "backend/config/config.env",
});

// db connect
dbConnect();
// port
const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running port ${PORT}`);
  }
});

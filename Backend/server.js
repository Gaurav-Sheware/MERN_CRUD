const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./Models/userModel");
const userRouter = require("./Routes/userRoutes");
const cors = require("cors");

dotenv.config();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(userRouter);


// Connect to DB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(process.env.PORT || 8000, (error) => {
      if (error) {
        console.log(error);
      }
      console.log("Running Successfully at port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  }); 

  
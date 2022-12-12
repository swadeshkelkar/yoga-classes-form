const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const cors = require("cors");
const user = require("./route");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;


//Connect to mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(user);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

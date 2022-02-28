const express = require("express");
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

 mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

    console.log('Connected to MongoDB');
 }); 



app.listen("5000",() => {
  console.log("Server is running on port 5000");
} );
const express = require("express");
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');

dotenv.config();
app.use(express.json());

 mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

    console.log('Connected to MongoDB');
 }); 

 app.use("/api/auth", authRoute);
 app.use("/api/users", usersRoute);
  app.use("/api/posts", postRoute);



app.listen("5000",() => {
  console.log("Server is running on port 5000");
} );
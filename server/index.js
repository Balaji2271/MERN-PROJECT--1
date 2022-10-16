const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

app.use(express.json());


mongoose.connect(
    "mongodb+srv://Balaji:bala2271@cluster0.wltmm9c.mongodb.net/MERN?retryWrites=true&w=majority"
  );
  

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});



app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});



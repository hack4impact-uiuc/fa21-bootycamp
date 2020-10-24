const express = require("express");
const app = express();
const port = 5000;

//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://alicesf2:Q9p0y$*hN15I@cluster0.qojrt.mongodb.net/Data?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const User = require("./models/User.js");

app.get("/", async (req, res) => {
  const response = await User.find();
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

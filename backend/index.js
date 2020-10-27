const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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

// gets all objects in db
app.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// gets one object in db by _id
app.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.send(user);
});

// creates one new object in db
app.post("/", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});

// deletes one object in db by _id
app.delete("/", async (req, res) => {
  const { userId } = req.params;
  const deletedUser = await User.findByIdAndRemove(userId);
  res.send(deletedUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

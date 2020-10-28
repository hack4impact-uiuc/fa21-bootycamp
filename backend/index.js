const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://vasuchal:BlackPink76@cluster0.lhfz7.mongodb.net/vasuchal?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const Ride = require("./models/Rides.js")

app.get('/', async (req, res) => {
  Ride.create({ 
    name: "Vasu",
    rideName: "Twister",
    ticketPrice: 5.00,
    minHeight: 60,
    imageURL: "www.com",
    publishedAuthor: true 
  })
  const response = await Ride.find({});
  console.log(response);
  //return response;
  res.send(response);
})
app.post('/create', (req, res) => {
  console.log('you made it');
  console.log(req.body);
  res.status(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

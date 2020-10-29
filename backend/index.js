const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = 5000
const Pusheens = require("./models/Pusheens.js")

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://pusheen:catfe123@cluster0.cwegr.mongodb.net/cat?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;



//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//const Pusheens = require("./models/Pusheens.js");


app.use(cors())
app.use(bodyParser.json())


app.get('/', async (req, res) => {
  const response = await Pusheens.find({})

  res.send(response);
});

app.post('/create', (req, res) => {
  console.log('you made it!');
  console.log(req.body);
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


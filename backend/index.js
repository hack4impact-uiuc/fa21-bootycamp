const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const port = 5000

const data = [
  {
    "name": "Blue-Eyes White Dragon",
    "description": "Monster Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51W6duELHdL._AC_.jpg",
    "attribute": "Light",
    "level": 8,
    "type": "Dragon",
    "attack": "3000",
    "defense": "2500"
  },
  {
    "name": "Dark Magician",
    "description": "Monster Card",
    "url": "https://ygoprodeck.com/pics/46986414.jpg",
    "attribute": "Dark",
    "level": 7,
    "type": "Spellcaster",
    "attack": "2500",
    "defense": "2100"
  },
  {
    "name": "Exodia The Forbidden One",
    "description": "Monster Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51NOHHd6PDL._AC_.jpg",
    "attribute": "Dark",
    "level": 3,
    "type": "Spellcaster/Effect",
    "attack": "1000",
    "defense": "1000"
  },
  {
    "name": "The Winged Dragon of Ra",
    "description": "Monster Card",
    "url": "https://ygoprodeck.com/pics/10000010.jpg",
    "attribute": "Divine",
    "level": 10,
    "type": "Divine-Beast/Effect",
    "attack": "?",
    "defense": "?"
  },
  {
    "name": "Mirror Force",
    "description": "Trap Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/71%2BhOOt1p7L._AC_SY606_.jpg",
    "attribute": "Dark"
  },
  {
    "name": "Negate Attack",
    "description": "Trap Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/712igZbr5tL._AC_SL1001_.jpg",
    "attribute": "Dark"
  },
  {
    "name": "Reverse Trap",
    "description": "Trap Card",
    "url": "https://ygoprodeck.com/pics/77622396.jpg",
    "attribute": "Dark"
  },
  {
    "name": "Trap Hole",
    "description": "Trap Card",
    "url": "https://ygoprodeck.com/pics/4206964.jpg",
    "attribute": "Dark"
  },
  {
    "name": "Card Trader",
    "description": "Spell Card",
    "url": "https://vignette.wikia.nocookie.net/yugioh/images/2/23/CardTrader-YS18-EN-C-1E.png/revision/latest/scale-to-width-down/340?cb=20180712163555",
    "attribute": "Spell"
  },
  {
    "name": "Dark Hole",
    "description": "Spell Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51hXWCAxVJL._AC_.jpg",
    "attribute": "Spell"
  },
  {
    "name": "Storm",
    "description": "Spell Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/71DM4dPI2FL._AC_SL1003_.jpg",
    "attribute": "Spell"
  },
  {
    "name": "Swords of Revealing Light",
    "description": "Spell Card",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51ACDziPNLL._AC_.jpg",
    "attribute": "Spell"
  }


];

app.use(cors())
app.use(bodyParser.json())

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://jaina321:12341234@cluster0.dxsvy.mongodb.net/Yu-Gi-Oh?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Card = require("./models/Card.js")

app.get ('/gallery', async (req, res) => {
  const response = await Card.find();
  res.send(response);
})

/*app.get('/gallery', (req, res) => {
  res.send(data)
})*/

app.post('/create', (req,res) =>
{
  console.log('you made it!');
  console.log(req.body.message);
  res.status(200);
})

app.post("/", async (req,res) =>
{
  const newCard = new Card(req.body);
  await newCard.save();
  res.send(newCard);
});

app.delete("/:cardId", async (req,res) =>
{
  const { cardId } = req.params;
  await Card.findByIdAndRemove(cardId);
  res.send({
    code: 200
  })

});

app.get("/:cardId", async (req,res) =>
{
  const { cardId } = req.params;
  const card = await Card.findById(cardId);
  res.send(card);

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

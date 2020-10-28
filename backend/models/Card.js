var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CardSchema = new Schema(
  {
    name: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    attribute: {type: String, required: true},
    level: {type: Number, required: false},
    type: {type: String, required: false},
    attack: {type: String, required: false},
    defense: {type: String, required: false}
  }
);


//Export model
module.exports = mongoose.model('Card', CardSchema);
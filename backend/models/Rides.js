var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RideSchema = new Schema(
  {
    name: {type: String, required: true},
    rideName: {type: String, required: true},
    ticketPrice: {type: Number, required: true},
    minHeight: {type: Number, required: true},
    imageURL: {type: String, required: true},
    publishedAuthor: {type: Boolean, required: true}
  }
);

//Export model
module.exports = mongoose.model('Ride', RideSchema);
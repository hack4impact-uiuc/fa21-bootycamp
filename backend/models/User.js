var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String },
  birthday: { type: String },
  hobbies: { type: [String] },
});

module.exports = mongoose.model("User", UserSchema);

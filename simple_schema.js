const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SimpleSchema = new Schema({
  word: { type: String, required: true },
});

module.exports = mongoose.model("Simple", SimpleSchema);
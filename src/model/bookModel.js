const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  summary: String,
  author: String,
  publishingHouse: String,
  publicationYear: Number,
});

module.exports = mongoose.model("Book", bookSchema);

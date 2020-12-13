const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  email: String,
  nick: String,
  text: String,
  score: Number,
  bookId: mongoose.ObjectId,
});

module.exports = mongoose.model("Comment", commentSchema);

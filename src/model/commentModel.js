const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  nick: String,
  text: String,
  score: Number,
  bookId: mongoose.ObjectId,
});

module.exports = mongoose.model("Comment", commentSchema);

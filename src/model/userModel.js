const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nick: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);

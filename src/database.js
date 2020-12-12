const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/booksDB";

const dbConnect = async () => {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
};

module.exports = dbConnect;

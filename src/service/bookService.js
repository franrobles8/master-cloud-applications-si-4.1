const Book = require("../model/bookModel");
const Comment = require("../model/commentModel");
const User = require("../model/userModel");

const getBooks = async () => {
  return await Book.find({}).select("id title").exec();
};

const getBook = async (id) => {
  const book = await Book.findById(id);

  if (!book) {
    throw {
      status: 404,
      message: "Book not found",
    };
  }

  const comments = await Comment.find({ bookId: book.id })
    .select("-_id -score -bookId -__v")
    .exec();

  return {
    ...book._doc,
    comments,
  };
};

const postBook = async (payload) => {
  const { title, summary, author, publishingHouse, publicationYear } = payload;

  const book = new Book({
    title,
    summary,
    author,
    publishingHouse,
    publicationYear,
  });

  return await book.save();
};

const postComment = async (id, payload) => {
  const { nick, text, score } = payload;

  const book = await Book.findById(id);

  if (!book) {
    throw {
      status: 404,
      message: "Book not found",
    };
  }

  const user = await User.findOne({ nick });

  if (!user) {
    throw {
      status: 404,
      message: "The nick does not belong to any user",
    };
  }

  const comment = new Comment({
    email: user.email,
    nick: nick.toLowerCase(),
    text,
    score,
    bookId: id,
  });

  return await comment.save();
};

const deleteComment = async (id, commentId) => {
  const book = await Book.findById(id);

  if (!book) {
    throw {
      status: 404,
      message: "Book not found",
    };
  }

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw {
      status: 404,
      message: "Comment not found",
    };
  }

  await comment.delete();

  return commentId;
};

module.exports = {
  getBooks,
  getBook,
  postBook,
  postComment,
  deleteComment
};

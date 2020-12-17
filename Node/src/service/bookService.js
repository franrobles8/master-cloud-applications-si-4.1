const Book = require("../model/bookModel");
const Comment = require("../model/commentModel");
const User = require("../model/userModel");
const {
  BookNotFoundError,
  UserNotFoundError,
  CommentNotFoundError
} = require("../error");

const getBooks = async () => {
  return await Book.find({}).select("id title").exec();
};

const getBook = async (id) => {
  const book = await Book.findById(id);

  if (!book) throw new BookNotFoundError();

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
  const { nickname, text, score } = payload;

  const book = await Book.findById(id);

  if (!book) throw new BookNotFoundError();

  const user = await User.findOne({ nickname });

  if (!user) throw new UserNotFoundError();

  const comment = new Comment({
    email: user.email,
    nickname: nickname.toLowerCase(),
    text,
    score,
    bookId: id,
  });

  return await comment.save();
};

const deleteComment = async (commentId) => {
  const comment = await Comment.findById(commentId);

  if (!comment) throw new CommentNotFoundError();

  await comment.delete();

  return commentId;
};

module.exports = {
  getBooks,
  getBook,
  postBook,
  postComment,
  deleteComment,
};

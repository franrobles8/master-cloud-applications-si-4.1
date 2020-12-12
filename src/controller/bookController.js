const uuid = require("uuid");
const { fullUrl } = require("../utils/urlUtils");
const { validateSchema } = require("../utils/validationUtils");
const {
  postBookSchema,
  postCommentSchema,
} = require("../validators/bookValidator");
const { validateObjectId } = require("../utils/validationUtils");
const Book = require("../model/bookModel");
const Comment = require("../model/commentModel");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).exec();
    res.json({ books });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't get the books`;
    res.status(status).json({ message });
  }
};

const getBook = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const book = await Book.findById(req.params.id);

    if (!book) {
      throw {
        status: 404,
        message: "Book not found",
      };
    }
    res.json(book);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't get the book`;
    res.status(status).json({ message });
  }
};

const postBook = async (req, res) => {
  try {
    validateSchema(postBookSchema, req.body);

    const {
      title,
      summary,
      author,
      publishingHouse,
      publicationYear,
    } = req.body;

    const book = new Book({
      title,
      summary,
      author,
      publishingHouse,
      publicationYear,
    });

    await book.save();

    res.location(fullUrl(req) + book.id);
    res.status(201).json({ id: book.id });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't add the book`;
    res.status(status).json({ message });
  }
};

const postComment = async (req, res) => {
  try {
    validateObjectId(req.params.id);
    validateSchema(postCommentSchema, req.body);

    const { nick, text, score } = req.body;

    const book = await Book.findById(req.params.id);

    if (!book) {
      throw {
        status: 404,
        message: "Book not found",
      };
    }

    const comment = new Comment({
      nick,
      text,
      score,
      bookId: req.params.id,
    });

    await comment.save();

    res.location(fullUrl(req) + comment.id);
    res.status(201).json({ id: comment.id });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't add the comment`;
    res.status(status).json({ message });
  }
};

const deleteComment = async (req, res) => {
  try {
    validateObjectId(req.params.id);
    validateObjectId(req.params.commentId);

    const book = await Book.findById(req.params.id);

    if (!book) {
      throw {
        status: 404,
        message: "Book not found",
      };
    }

    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {
      throw {
        status: 404,
        message: "Comment not found",
      };
    }

    const id = comment.id;

    comment.delete();

    res.status(200).json({ id });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't delete the comment`;
    res.status(status).json({ message });
  }
};

module.exports = {
  getBooks,
  getBook,
  postBook,
  postComment,
  deleteComment,
};

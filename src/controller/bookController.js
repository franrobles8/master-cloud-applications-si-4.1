const { fullUrl } = require("../utils/urlUtils");
const { validateSchema } = require("../utils/validationUtils");
const {
  postBookSchema,
  postCommentSchema,
} = require("../validators/bookValidator");
const { validateObjectId } = require("../utils/validationUtils");
const BookService = require("../service/bookService");

const getBooks = async (_, res) => {
  try {
    const books = await BookService.getBooks();
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

    const book = await BookService.getBook(req.params.id);

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

    const book = await BookService.postBook(req.body);

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

    const comment = await BookService.postComment(req.params.id, req.body);

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

    const id = await BookService.deleteComment(
      req.params.id,
      req.params.commentId
    );

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

const url = require("url");
const uuid = require("uuid");
const { fullUrl } = require("../utils/urlUtils");
const { validateSchema } = require('../utils/validationUtils');
const { postBookSchema, postCommentSchema } = require("../validators/bookValidator");
const Joi = require("joi");

const getBooks = (req, res) => {
  try {
    const books = [
      {
        id: 1,
        title: "Test title",
        summary: "Summary example",
        author: "The author",
        publishingHouse: "The publishing house",
        publicationYear: 2000,
      },
      {
        id: 2,
        title: "Test title",
        summary: "Summary example",
        author: "The author",
        publishingHouse: "The publishing house",
        publicationYear: 2000,
      },
    ];
    res.json({ books });
  } catch (error) {
    res.sendStatus(500);
  }
};

const getBook = (req, res) => {
  try {
    const book = {
      id: req.params.id,
      title: "Test title",
      summary: "Summary example",
      author: "The author",
      publishingHouse: "The publishing house",
      publicationYear: 2000,
      comments: [
        {
          nick: "Nick 1",
          email: "email1@gmail.com",
          text: "Text 1",
        },
        {
          nick: "Nick 2",
          email: "email2@gmail.com",
          text: "Text 2",
        },
      ],
    };
    res.json(book);
  } catch (error) {
    res.status(error.status).json(error);
  }
};

const postBook = (req, res) => {
  try {
    validateSchema(postBookSchema, req.body);
    const {
      title,
      summary,
      author,
      publishingHouse,
      publicationYear,
    } = req.body;

    const book = {
      id: uuid.v4(),
      title,
      summary,
      author,
      publishingHouse,
      publicationYear,
    };

    res.location(fullUrl(req) + book.id);
    res.status(201).json({ id: book.id });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const postComment = (req, res) => {
  try {
    validateSchema(postCommentSchema, req.body);
    const { nick, text, score } = req.body;

    const comment = {
      id: uuid.v4(),
      nick,
      text,
      score,
    };

    res.location(fullUrl(req) + comment.id);
    res.status(201).json({ id: comment.id });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const deleteComment = (req, res) => {
  try {
    // Search book
    // Search Comment and save commentId
    const id = req.params.commentId;

    res.status(200).json({ id });
  } catch (error) {
    res.status(error.status).json(error);
  }
};

module.exports = {
  getBooks,
  getBook,
  postBook,
  postComment,
  deleteComment,
};

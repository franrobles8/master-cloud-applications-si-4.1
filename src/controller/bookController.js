const url = require("url");
const uuid = require("uuid");

const fullUrl = (req) => {
  const fullUrlStr = url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: req.originalUrl,
  });

  return fullUrlStr + (fullUrlStr.endsWith("/") ? "" : "/");
};

const getBooks = (req, res) => {
  try {
    const books = [
      {
        title: "Test title",
      },
      {
        title: "Test title2",
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
    };
    res.json(book);
  } catch (error) {
    res.status(error.status).json(error);
  }
};

const postBook = (req, res) => {
  try {
    // TO-DO: validate body
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
    res.status(error.status).json(error);
  }
};

const postComment = (req, res) => {
  try {
    // TO-DO: validate body
    const { user, text, score } = req.body;

    const comment = {
      id: uuid.v4(),
      user,
      text,
      score,
    };

    res.location(fullUrl(req) + comment.id);
    res.status(201).json({ id: comment.id });
  } catch (error) {
    res.status(error.status).json(error);
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
  deleteComment
};

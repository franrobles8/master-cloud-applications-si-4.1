const { fullUrl } = require("../utils/urlUtils");
const uuid = require("uuid");
const { validateSchema } = require("../utils/validationUtils");
const {
  postUserSchema,
  updateEmailSchema,
} = require("../validators/userValidator");

const getUser = (req, res) => {
  try {
    const user = {
      id: req.params.id,
      nick: "Example name",
      email: "fran@gmail.com",
    };
    res.json(user);
  } catch (error) {
    res.status(error.status).send();
  }
};

const createUser = (req, res) => {
  try {
    validateSchema(postUserSchema, req.body);
    const { nick, email } = req.body;

    const user = {
      id: uuid.v4(),
      nick,
      email,
    };
    res.location(fullUrl(req) + user.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const updateEmail = (req, res) => {
  try {
    validateSchema(updateEmailSchema, req.body);
    const { email } = req.body;
    const { id } = req.params;

    // Update email
    res.location(fullUrl(req));
    res.status(200).json({ email });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const getComments = (req, res) => {
  try {
    const { id } = req.params;
    const comments = [
      {
        bookId: 12,
        id: 123,
        text: "Text example",
        score: 4.5,
      },
      {
        bookId: 12,
        id: 124,
        text: "Text example 2",
        score: 3.0,
      },
      {
        bookId: 14,
        id: 125,
        text: "Text example 3",
        score: 5.0,
      },
    ];

    res.status(200).json({ comments });
  } catch (error) {
    console.log(error);
    res.status(error.status).send();
  }
};

module.exports = {
  getUser,
  updateEmail,
  createUser,
  getComments,
};

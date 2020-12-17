const { fullUrl } = require("../utils/urlUtils");
const { validateSchema } = require("../utils/validationUtils");
const { formatError } = require("../utils/errorUtils");
const {
  postUserSchema,
  updateEmailSchema,
} = require("../validators/userValidator");
const { validateObjectId } = require("../utils/validationUtils");
const UserService = require("../service/userService");
const { serializeError } = require("serialize-error");

const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();

    res.json(users);
  } catch (error) {
    const { status, message } = formatError(error);
    res.status(status).json({ message });
  }
};

const getUser = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const user = await UserService.getUser(req.params.id);

    res.json(user);
  } catch (error) {
    const { status, message } = formatError(error);
    res.status(status).json({ message });
  }
};

const createUser = async (req, res) => {
  try {
    validateSchema(postUserSchema, req.body);

    const user = await UserService.createUser(req.body);

    res.location(fullUrl(req) + user.id);
    res.status(201).json(user);
  } catch (error) {
    const { status, message } = formatError(error);
    res.status(status).json({ message });
  }
};

const updateEmail = async (req, res) => {
  try {
    validateObjectId(req.params.id);
    validateSchema(updateEmailSchema, req.body);

    const user = await UserService.updateEmail(req.params.id, req.body);

    res.location(fullUrl(req) + user.id);
    res.status(200).json({ email: user.email });
  } catch (error) {
    const { status, message } = formatError(error);
    res.status(status).json({ message });
  }
};

const getComments = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const comments = await UserService.getComments(req.params.id);

    res.status(200).json({ comments });
  } catch (error) {
    const { status, message } = formatError(error);
    res.status(status).json({ message });
  }
};

const deleteUser = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const id = await UserService.deleteUser(req.params.id);

    res.status(200).json({ id });
  } catch (error) {
    const { status, message } = formatError(error);
    res.status(status).json({ message });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateEmail,
  createUser,
  getComments,
  deleteUser,
};

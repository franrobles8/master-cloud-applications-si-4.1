const { fullUrl } = require("../utils/urlUtils");
const { validateSchema } = require("../utils/validationUtils");
const {
  postUserSchema,
  updateEmailSchema,
} = require("../validators/userValidator");
const { validateObjectId } = require("../utils/validationUtils");
const UserService = require("../service/userService");

const getUser = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const user = await UserService.getUser(req.params.id);

    res.json(user);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't get the user`;
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
    const status = error.status || 500;
    const message = error.message || `Couldn't add the user`;
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
    const status = error.status || 500;
    const message = error.message || `Couldn't update the email`;
    res.status(status).json({ message });
  }
};

const getComments = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const comments = await UserService.getComments(req.params.id);

    res.status(200).json({ comments });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't get the comments`;
    res.status(status).json({ message });
  }
};

const deleteUser = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const id = await UserService.deleteUser(req.params.id);

    res.status(200).json({ id });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't delete the user`;
    res.status(status).json({ message });
  }
};

module.exports = {
  getUser,
  updateEmail,
  createUser,
  getComments,
  deleteUser,
};

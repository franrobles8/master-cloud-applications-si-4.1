const { fullUrl } = require("../utils/urlUtils");
const uuid = require("uuid");
const { validateSchema } = require("../utils/validationUtils");
const {
  postUserSchema,
  updateEmailSchema,
} = require("../validators/userValidator");
const validateObjectId = require("../utils/validationUtils");
const User = require("../model/userModel");
const Comment = require("../model/commentModel");

const getUser = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const user = await User.findById(req.params.id);

    if (!user) {
      throw {
        status: 404,
        message: "User does not exist",
      };
    }

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

    const { nick, email } = req.body;

    const user = await User.findOne({ nick });

    if (user) {
      throw {
        status: 403,
        message: "The nick is already in use",
      };
    }

    const newUser = new User({
      nick,
      email,
    });

    await newUser.save();

    res.location(fullUrl(req) + newUser.id);
    res.status(201).json(newUser);
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

    const { email } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      throw {
        status: 404,
        message: "User does not exist",
      };
    }

    user.email = email;
    user.save();

    res.location(fullUrl(req) + user.id);
    res.status(200).json({ email });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || `Couldn't update the email`;
    res.status(status).json({ message });
  }
};

const getComments = async (req, res) => {
  try {
    validateObjectId(req.params.id);

    const user = await User.findById(req.params.id);

    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    const comments = await Comment.find({ nick: user.nick }).exec();

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

    const user = await User.findById(req.params.id);

    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    const comments = await Comment.find({ nick: user.nick }).exec();

    if (comments.length > 0) {
      throw {
        status: 403,
        message: "Cannot delete user because it has comments",
      };
    }

    const id = user.id;
    await user.delete();

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

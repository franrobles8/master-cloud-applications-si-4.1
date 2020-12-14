const User = require("../model/userModel");
const Comment = require("../model/commentModel");

const getUser = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw {
      status: 404,
      message: "User does not exist",
    };
  }
  return user;
};

const createUser = async (payload) => {
  const { nickname, email } = payload;

  const user = await User.findOne({ nickname: nickname.toLowerCase() });

  if (user) {
    throw {
      status: 403,
      message: "The nickname is already in use",
    };
  }

  const newUser = new User({
    nickname,
    email,
  });

  return await newUser.save();
};

const updateEmail = async (id, payload) => {
  const { email } = payload;

  const user = await User.findById(id);

  if (!user) {
    throw {
      status: 404,
      message: "User does not exist",
    };
  }

  user.email = email;
  

  return await user.save();
};

const getComments = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw {
      status: 404,
      message: "User not found",
    };
  }

  return await Comment.find({ nickname: user.nickname }).exec();
};

const deleteUser = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw {
      status: 404,
      message: "User not found",
    };
  }

  const comments = await Comment.find({ nickname: user.nickname }).exec();

  if (comments.length > 0) {
    throw {
      status: 403,
      message: "Cannot delete user because it has comments",
    };
  }

  await user.delete();
  return id;
};

module.exports = {
  getUser,
  createUser,
  updateEmail,
  getComments,
  deleteUser
};

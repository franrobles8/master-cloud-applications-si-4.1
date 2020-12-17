const User = require("../model/userModel");
const Comment = require("../model/commentModel");

const {
  UserExistsError,
  UserNotFoundError,
  UserWithCommentsError
} = require("../error");

const getUsers = async () => {
  return await User.find({});
};

const getUser = async (id) => {
  const user = await User.findById(id);

  if (!user) throw new UserNotFoundError();

  return user;
};

const createUser = async (payload) => {
  const { nickname, email } = payload;

  const user = await User.findOne({ nickname: nickname.toLowerCase() });

  if (user) throw new UserExistsError();

  const newUser = new User({
    nickname,
    email,
  });

  return await newUser.save();
};

const updateEmail = async (id, payload) => {
  const { email } = payload;

  const user = await User.findById(id);

  if (!user) throw new UserNotFoundError();

  user.email = email;
  

  return await user.save();
};

const getComments = async (id) => {
  const user = await User.findById(id);

  if (!user) throw new UserNotFoundError();

  return await Comment.find({ nickname: user.nickname }).exec();
};

const deleteUser = async (id) => {
  const user = await User.findById(id);

  if (!user) throw new UserNotFoundError();

  const comments = await Comment.find({ nickname: user.nickname }).exec();

  if (comments.length > 0) {
    throw new UserWithCommentsError();
  }

  await user.delete();
  return id;
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateEmail,
  getComments,
  deleteUser
};

const BookNotFoundError = require("./BookNotFoundError");
const UserNotFoundError = require("./UserNotFoundError");
const CommentNotFoundError = require("./CommentNotFoundError");
const UserExistsError = require('./UserExistsError');
const UserWithCommentsError = require('./UserWithCommentsError');

module.exports = {
    BookNotFoundError,
    UserNotFoundError,
    CommentNotFoundError,
    UserExistsError,
    UserWithCommentsError
};
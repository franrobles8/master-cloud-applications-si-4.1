const Joi = require("joi");

const postBookSchema = Joi.object({
  title: Joi.string(),
  summary: Joi.string(),
  author: Joi.string(),
  publishingHouse: Joi.string(),
  publicationYear: Joi.number(),
}).options({ presence: "required", allowUnknown: true });

const postCommentSchema = Joi.object({
  nickname: Joi.string(),
  text: Joi.string(),
  score: Joi.number().min(0).max(5),
}).options({ presence: "required" });

module.exports = {
  postBookSchema,
  postCommentSchema
};

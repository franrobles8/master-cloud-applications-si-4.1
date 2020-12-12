const Joi = require("joi");

const postUserSchema = Joi.object({
  nick: Joi.string(),
  email: Joi.string(),
}).options({ presence: "required" });

const updateEmailSchema = Joi.object({
  email: Joi.string(),
}).options({ presence: "required" });

module.exports = {
  postUserSchema,
  updateEmailSchema
};

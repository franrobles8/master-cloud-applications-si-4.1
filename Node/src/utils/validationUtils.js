const ObjectId = require("mongoose").Types.ObjectId;

const validateSchema = (schema, payload) => {
  const { error } = schema.validate(payload);

  if (error) {
    throw {
      status: 400,
      message: error.details.map((err) => err.message).join(","),
    };
  }
};

const validateObjectId = (id) => {
  if (!ObjectId.isValid(id)) {
    throw {
      status: 400,
      message: "Invalid id. It must match /^[0-9a-fA-F]{24}$/",
    };
  }
};

module.exports = {
  validateSchema,
  validateObjectId,
};

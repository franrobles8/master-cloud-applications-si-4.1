const { serializeError } = require("serialize-error");

const formatError = (error) => {
    const serializedError = serializeError(error);
    return {
        status: serializedError.status || 500,
        message: serializedError.message || "Internal server error"
    };
};

module.exports = {
    formatError
};
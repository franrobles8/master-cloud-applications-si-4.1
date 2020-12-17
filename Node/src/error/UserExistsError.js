class UserExistsError extends Error {
    constructor() {
        super('The nickname is already in use');
        this.status = 403;
    }
}

module.exports = UserExistsError;
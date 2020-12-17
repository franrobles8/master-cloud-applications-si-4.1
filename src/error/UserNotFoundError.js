class UserNotFoundError extends Error {
    constructor() {
        super('User not found');
        this.status = 404;
    }
}

module.exports = UserNotFoundError;
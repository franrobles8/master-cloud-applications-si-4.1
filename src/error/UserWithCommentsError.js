class UserWithCommentsError extends Error {
    constructor() {
        super('Cannot delete user because it has comments');
        this.status = 403;
    }
}

module.exports = UserWithCommentsError;
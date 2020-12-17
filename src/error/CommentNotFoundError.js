class CommentNotFoundError extends Error {
    constructor() {
        super('Comment not found');
        this.status = 404;
    }
}

module.exports = CommentNotFoundError;
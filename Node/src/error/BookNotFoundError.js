
class BookNotFoundError extends Error {
    constructor() {
        super('Book not found');
        this.status = 404;
    }
}

module.exports = BookNotFoundError;
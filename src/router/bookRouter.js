const express = require('express');
const { getBooks, getBook, postBook, postComment, deleteComment } = require('../controller/bookController');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', postBook);
router.post('/:id/comments', postComment);
router.delete('/:id/comments/:commentId', deleteComment);

module.exports = router;
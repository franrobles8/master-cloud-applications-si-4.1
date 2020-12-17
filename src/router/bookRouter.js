const express = require('express');
const { getBooks, getBook, postBook, postComment, deleteComment } = require('../controller/bookController');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', postBook);

module.exports = router;